#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const args = parseArgs(process.argv.slice(2));
const command = args._[0];

if (!command || !["create", "fetch"].includes(command)) {
  usage();
  process.exit(1);
}

const repo = args.repo || process.env.GITHUB_REPOSITORY || inferRepoFromGit();
const token = process.env.GITHUB_TOKEN;

if (!token) {
  fail("Missing GITHUB_TOKEN. Create a GitHub token with Issues read/write access and set it in the environment.");
}

if (!repo || !repo.includes("/")) {
  fail("Cannot determine GitHub repository. Set GITHUB_REPOSITORY=owner/repo or pass --repo owner/repo.");
}

if (command === "create") {
  await createIssue(repo, token, args);
} else if (command === "fetch") {
  await fetchIssue(repo, token, args);
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

async function createIssue(repo, token, options) {
  const promptPath = options.prompt || "Bridge/to_chatgpt/current_prompt.md";
  const title = options.title || "Author Review";
  const labels = splitCsv(options.labels || "author-review,needs-chatgpt");
  const body = readFileSync(resolve(promptPath), "utf8");
  const usableLabels = await ensureLabels(repo, token, labels);

  const issue = await github(token, "POST", `/repos/${repo}/issues`, {
    title,
    body: addIssueFooter(body),
    labels: usableLabels,
  });

  writeState({
    last_issue_number: issue.number,
    last_issue_url: issue.html_url,
    updated_at: new Date().toISOString(),
  });

  console.log(`Created issue #${issue.number}: ${issue.html_url}`);
}

async function ensureLabels(repo, token, labels) {
  const usable = [];
  for (const label of labels) {
    const exists = await githubMaybe(token, "GET", `/repos/${repo}/labels/${encodeURIComponent(label)}`);
    if (exists.ok) {
      usable.push(label);
      continue;
    }

    const created = await githubMaybe(token, "POST", `/repos/${repo}/labels`, {
      name: label,
      color: colorForLabel(label),
    });

    if (created.ok) {
      usable.push(label);
    } else {
      console.warn(`Warning: label "${label}" is unavailable and could not be created. Continuing without it.`);
    }
  }
  return usable;
}

async function fetchIssue(repo, token, options) {
  const issueNumber = options.issue || readState()?.last_issue_number;
  if (!issueNumber) {
    fail("Missing issue number. Pass --issue 12 or create an issue first.");
  }

  const issue = await github(token, "GET", `/repos/${repo}/issues/${issueNumber}`);
  const comments = await github(token, "GET", `/repos/${repo}/issues/${issueNumber}/comments?per_page=100`);
  const latestComment = comments.at(-1);
  const outputPath = options.output || `Bridge/from_chatgpt/issue-${issueNumber}-latest.md`;

  const content = [
    `# GitHub Issue #${issueNumber}: ${issue.title}`,
    "",
    `Issue URL: ${issue.html_url}`,
    "",
    "## Issue Body",
    "",
    issue.body || "",
    "",
    "## Latest Comment",
    "",
    latestComment
      ? `Author: ${latestComment.user?.login || "unknown"}\n\n${latestComment.body || ""}`
      : "No comments found.",
    "",
  ].join("\n");

  writeFileEnsured(outputPath, content);
  writeState({
    last_issue_number: Number(issueNumber),
    last_issue_url: issue.html_url,
    last_fetch_output: outputPath,
    last_comment_id: latestComment?.id || null,
    updated_at: new Date().toISOString(),
  });

  console.log(`Fetched issue #${issueNumber} to ${outputPath}`);
}

async function github(token, method, path, body) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "mental-models-agent-bridge",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    fail(`GitHub API ${method} ${path} failed: ${response.status} ${response.statusText}\n${text}`);
  }

  return response.json();
}

async function githubMaybe(token, method, path, body) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "mental-models-agent-bridge",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    return { ok: false, status: response.status, text: await response.text() };
  }

  return { ok: true, data: await response.json() };
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

function splitCsv(value) {
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function colorForLabel(label) {
  const colors = {
    "author-review": "6f42c1",
    "needs-chatgpt": "fbca04",
    "needs-codex": "0e8a16",
    "draft-gate": "1d76db",
    "chapter-01": "bfdadc",
    decision: "d93f0b",
  };
  return colors[label] || "ededed";
}

function addIssueFooter(body) {
  return `${body.trim()}

---

Created by Codex through the GitHub Issue Bridge.

ChatGPT should reply in this issue using the requested output format.`;
}

function writeFileEnsured(path, content) {
  const absolute = resolve(path);
  mkdirSync(dirname(absolute), { recursive: true });
  writeFileSync(absolute, content, "utf8");
}

function writeState(state) {
  writeFileEnsured("Bridge/state/github_issue_bridge_state.json", `${JSON.stringify(state, null, 2)}\n`);
}

function readState() {
  try {
    return JSON.parse(readFileSync("Bridge/state/github_issue_bridge_state.json", "utf8"));
  } catch {
    return null;
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function usage() {
  console.log(`Usage:
  node Scripts/github_issue_bridge.mjs create --prompt Bridge/to_chatgpt/current_prompt.md --title "Author Review: Chapter 01 Draft Gate" --labels author-review,needs-chatgpt,chapter-01
  node Scripts/github_issue_bridge.mjs fetch --issue 12

Environment:
  GITHUB_TOKEN       GitHub token with Issues read/write access
  GITHUB_REPOSITORY  Optional owner/repo override`);
}
