---
title: Understanding GitHub Actions working directory
date: 2025-01-07
type: article
category: tooling
tags: [github-actions, cicd, automation, paths]
summary: Where GitHub Actions stores files during a run — default workspace, working-directory scopes, action paths, and path-related environment variables.
article_url: https://dev.to/jajera/understanding-github-actions-working-directory-550o
draft: false
---

GitHub Actions workflows are easier to debug when you know where the runner puts repository files, downloaded actions, and temp/cache directories.

This article covers default paths, setting `working-directory` at workflow/job/step level, useful env vars like `GITHUB_WORKSPACE` and `RUNNER_TEMP`, and practical tips for portable workflows.
