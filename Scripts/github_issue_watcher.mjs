#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const args = parseArgs(process.argv.slice(2));
const command = args._[0];

if (!command || !["once", "watch"].includes(command)) {
  usage();
  process.exit(1);
}

const repo = args.repo || process.env.GITHUB_REPOSITORY || inferRepoFromGit();
const token = process.env.GITHUB_TOKEN;
const intervalSeconds = Number(args.interval || 60);
const label = args.label || "needs-codex";
const statePath = args.state || "Bridge/state/github_issue_watcher_state.json";

if (!token) {
  fail("Missing GITHUB_TOKEN. Create a GitHub token with Issues read/write access and set it in the environment.");
}

if (!repo || !repo.includes("/")) {
  fail("Cannot determine GitHub repository. Set GITHUB_REPOSITORY=owner/repo or pass --repo owner/repo.");
}

if (command === "once") {
  await runOnce();
} else {
  console.log(`Watching ${repo} for issues labeled "${label}" every ${intervalSeconds}s.`);
  while (true) {
    await runOnce();
    await sleep(intervalSeconds * 1000);
  }
}

async function runOnce() {
  const state = readJson(statePath) || { processed_comments: {} };
  const issues = await github(
    token,
    "GET",
    `/repos/${repo}/issues?state=open&labels=${encodeURIComponent(label)}&per_page=20`
  );

  if (!issues.length) {
    console.log(`No open issues labeled "${label}".`);
    return;
  }

  let advanced = false;

  for (const issue of issues) {
    if (issue.pull_request) {
      continue;
    }

    const comments = await github(token, "GET", `/repos/${repo}/issues/${issue.number}/comments?per_page=100`);
    const candidate = latestHumanComment(comments);

    if (!candidate) {
      console.log(`#${issue.number}: no comments yet.`);
      continue;
    }

    const previousId = state.processed_comments[String(issue.number)];
    if (previousId === candidate.id) {
      console.log(`#${issue.number}: latest comment already processed (${candidate.id}).`);
      continue;
    }

    const reviewPath = `Bridge/from_chatgpt/issue-${issue.number}-latest.md`;
    const nextPromptPath = "Bridge/from_chatgpt/codex-next-prompt.md";
    const reviewContent = renderReview(issue, candidate);
    const nextPrompt = renderCodexPrompt(issue, reviewPath);

    writeFileEnsured(reviewPath, reviewContent);
    writeFileEnsured(nextPromptPath, nextPrompt);

    state.processed_comments[String(issue.number)] = candidate.id;
    state.last_issue_number = issue.number;
    state.last_issue_url = issue.html_url;
    state.last_comment_id = candidate.id;
    state.last_review_path = reviewPath;
    state.last_next_prompt_path = nextPromptPath;
    state.updated_at = new Date().toISOString();
    writeJson(statePath, state);

    await transitionLabels(issue.number);

    console.log(`#${issue.number}: new reply captured.`);
    console.log(`Review: ${reviewPath}`);
    console.log(`Next prompt: ${nextPromptPath}`);
    advanced = true;
  }

  if (!advanced) {
    console.log("No new replies to process.");
  }
}

function latestHumanComment(comments) {
  return comments
    .filter((comment) => {
      const login = comment.user?.login || "";
      return !login.endsWith("[bot]");
    })
    .at(-1);
}

async function transitionLabels(issueNumber) {
  await githubMaybe(token, "DELETE", `/repos/${repo}/issues/${issueNumber}/labels/needs-codex`);
  await githubMaybe(token, "POST", `/repos/${repo}/issues/${issueNumber}/labels`, {
    labels: ["codex-processing"],
  });
}

function renderReview(issue, comment) {
  return [
    `# GitHub Issue #${issue.number}: ${issue.title}`,
    "",
    `Issue URL: ${issue.html_url}`,
    `Comment ID: ${comment.id}`,
    `Comment Author: ${comment.user?.login || "unknown"}`,
    `Comment URL: ${comment.html_url}`,
    "",
    "## Issue Body",
    "",
    issue.body || "",
    "",
    "## Latest ChatGPT Reply",
    "",
    comment.body || "",
    "",
  ].join("\n");
}

function renderCodexPrompt(issue, reviewPath) {
  return [
    "你是 Codex，本仓库的 Project Maintainer。",
    "",
    "请读取并消化以下 GitHub Issue 作者评审回复：",
    "",
    `- ${reviewPath}`,
    "",
    "执行规则：",
    "",
    "1. 先阅读 `PROJECT_CHARTER.md`、`AGENT_COMMUNICATION.md`、`CODEX_TASKS.md` 和相关章节文件。",
    "2. 不要把 Issue 评论全文直接复制进正文。",
    "3. 将讨论结论沉淀到 `WEB_CHAT_BRIEF.md`。",
    "4. 将长期决策沉淀到 `DECISIONS.md`。",
    "5. 将可执行任务沉淀到 `CODEX_TASKS.md`。",
    "6. 如果评审涉及 Chapter 01，请优先更新 `Chapter01_TEACHING_DESIGN.md`、`Chapter01_SPEC.md`、`STATUS.md` 和 `CODEX_REPORT.md`。",
    "7. 如果 Draft Gate 未明确 Ready，不要创建正式正文。",
    "8. 完成后运行检查、提交并推送。",
    "",
    `来源 Issue: #${issue.number} ${issue.html_url}`,
    "",
  ].join("\n");
}

function parseArgs(argv) {
  const parsed = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith("--")) {
      parsed._.push(item);
      continue;
    }
    const key = item.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      i += 1;
    }
  }
  return parsed;
}

async function github(token, method, path, body) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: githubHeaders(token),
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    fail(`GitHub API ${method} ${path} failed: ${response.status} ${response.statusText}\n${text}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function githubMaybe(token, method, path, body) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: githubHeaders(token),
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    return { ok: false, status: response.status, text: await response.text() };
  }

  return { ok: true };
}

function githubHeaders(token) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "mental-models-agent-watcher",
  };
}

function inferRepoFromGit() {
  try {
    const remote = execFileSync("git", ["config", "--get", "remote.origin.url"], {
      encoding: "utf8",
    }).trim();
    const httpsMatch = remote.match(/github\.com[:/](.+\/.+?)(?:\.git)?$/);
    return httpsMatch?.[1] || "";
  } catch {
    return "";
  }
}

function writeFileEnsured(path, content) {
  const absolute = resolve(path);
  mkdirSync(dirname(absolute), { recursive: true });
  writeFileSync(absolute, content, "utf8");
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function writeJson(path, value) {
  writeFileEnsured(path, `${JSON.stringify(value, null, 2)}\n`);
}

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function usage() {
  console.log(`Usage:
  node Scripts/github_issue_watcher.mjs once --label needs-codex
  node Scripts/github_issue_watcher.mjs watch --label needs-codex --interval 60

What it does:
  - Finds open GitHub issues labeled needs-codex.
  - Detects the latest unprocessed human comment.
  - Saves the reply to Bridge/from_chatgpt/issue-<number>-latest.md.
  - Writes Bridge/from_chatgpt/codex-next-prompt.md for the next Codex step.
  - Changes labels from needs-codex to codex-processing when possible.

Environment:
  GITHUB_TOKEN       GitHub token with Issues read/write access
  GITHUB_REPOSITORY  Optional owner/repo override`);
}

