---
title: Central Route 53 outbound DNS
date: 2026-09-26
type: walkthrough
category: dns
tags: [route53, resolver, outbound, ram, multi-account, terraform, cost]
summary: When several VPCs need the same corporate zone, decide between per-account outbound endpoints and one hub shared with RAM — and when a local escape hatch is worth the extra ENIs.
walkthrough_url: https://aws-route53-central-outbound.johna.kiwi/
demo_url: https://github.com/jajera/aws-route53-central-outbound
draft: false
---

One VPC looking up `corp.demo.internal` is a standalone outbound story. The second VPC that needs the same zone is where central starts to pay for itself: two hub ENIs instead of four, rules shared with AWS RAM, spokes with no path to the DNS IP for resolution.

The site walks that cost curve, the blast radius of a shared hub, and a small escape hatch (local outbound + a more-specific rule) for names you refuse to share fate with everyone else. The demo is three accounts in `ap-southeast-2` — BIND in network, dig A and PTR from all three, then tear down.
