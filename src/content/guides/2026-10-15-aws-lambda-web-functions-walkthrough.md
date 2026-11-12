---
title: Lambda Web Functions
date: 2026-10-15
type: walkthrough
category: serverless
tags: [lambda, web-functions, express, console, curl]
summary: Run the same Node.js HTTP server on Lambda — console create, curl prove, logs, optional Express, and teardown.
walkthrough_url: https://aws-lambda-web-functions-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-lambda-web-functions-walkthrough
recognition:
  label: Builders Spotlight
  url: https://builder.aws.com/content/3LKXjlQx65W73jBgrgNhr7R7Kpm/aws-community-builders-spotlight-october-19th-edition
draft: false
---

Same Node.js HTTP server you already write — on Lambda, without rewriting it as an event handler. Built-in HTTPS, multi-concurrency, scale to zero, and pay for active CPU rather than idle wait.

Create Web Function `wf-hello` and endpoint `dev` in the console, wait for Active, prove with `curl -i`, peek CloudWatch Logs, optionally redeploy the Express demo, then tear everything down.
