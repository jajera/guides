---
title: Kiro on WSL with AWS SSO
date: 2026-06-30
type: walkthrough
category: tooling
tags: [kiro, wsl2, docker, aws-sso, windows, mcp]
summary: Take a Windows laptop from BIOS virtualization through WSL2, Docker Desktop, and Kiro IDE, then land GitHub SSH and IAM Identity Center so you can work in Ubuntu with AWS SSO and MCP ready.
walkthrough_url: https://kiro-wsl-aws-setup-guide.johna.kiwi/
demo_url: https://github.com/jajera/kiro-wsl-aws-setup-guide
recognition:
  label: Builders Spotlight
  url: https://builder.aws.com/content/3FiioHzgyQzy38zQSR9ftczfm6x/aws-community-builders-spotlight-rewind-edition
draft: false
---

Most of the pain is the glue between Windows and Linux. This guide walks the full path: enable virtualization, install WSL2 and Ubuntu, wire Docker Desktop into the distro, install Kiro and connect it to WSL, then set up Git identity, GitHub SSH, and AWS CLI with IAM Identity Center — including workspace steering, MCP servers, and a final checklist.
