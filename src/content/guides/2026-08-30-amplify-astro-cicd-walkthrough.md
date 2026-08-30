---
title: Amplify Astro CI/CD
date: 2026-08-30
type: walkthrough
category: tooling
tags: [amplify, astro, github-actions, cicd, hosting, previews]
summary: Ship a static Astro site to Amplify Hosting with staging, PR previews, GitHub CI gates, and teardown.
walkthrough_url: https://amplify-astro-cicd-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/amplify-astro-cicd
draft: false
---

Connect a minimal Astro sample to Amplify Hosting with GitHub: long-lived `staging` and `main`, PR previews on staging only, Actions as the merge gate, and ruleset delete protection so auto-delete head branches cannot remove `staging` on promote.

Covers creating the repo and app in the Console, `amplify.yml`, hygiene workflows, prove-the-flow (feature → staging → main), and tearing down the Amplify app when the lab is done.
