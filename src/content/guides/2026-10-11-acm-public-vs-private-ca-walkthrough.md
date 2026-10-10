---
title: ACM public vs Private CA for intranet TLS
date: 2026-10-11
type: walkthrough
category: networking
tags: [acm, private-ca, tls, alb, ssm, terraform]
summary: Side-by-side ACM public HTTPS on an internet ALB and AWS Private CA on an internal ALB, with Linux trust installed via S3 and SSM.
walkthrough_url: https://acm-public-vs-private-ca-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/acm-public-vs-private-ca-walkthrough
draft: false
---

Two TLS paths in one lab. The public path puts an ACM public certificate on an internet-facing ALB for `demo.johna.kiwi` — browsers trust it without extra work. The private path issues from AWS Private CA onto an internal ALB (default `alb_acm`) for `app.internal.johna.kiwi`, then publishes the CA PEM to S3 so SSM State Manager can install trust on tagged Linux clients.

An optional `nginx_export` mode puts the leaf on the instance instead. Staged Terraform (`01`–`04`) with prove scripts after each apply; destroy promptly so Private CA does not keep billing.
