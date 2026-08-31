---
title: BIND to Route 53 mirror
date: 2026-07-15
type: walkthrough
category: dns
tags: [bind, route53, hybrid-dns, lambda, axfr, vpn, terraform]
summary: Keep on-prem BIND authoritative and mirror zones into Route 53 so cloud workloads resolve the same private DNS names.
walkthrough_url: https://bind-to-route53-mirror-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/bind-to-route53-mirror-demo
draft: false
---

Legacy BIND stays on-prem as the source of truth for `corp.internal`. A scheduled Lambda AXFRs from BIND across Site-to-Site VPN, diffs against a Route 53 private hosted zone, and applies ChangeResourceRecordSets so workloads resolve via AmazonProvidedDNS — no direct BIND queries from the cloud VPC.

The walkthrough covers lab topology, BIND edits, sync verification with dig, and teardown. The demo repo has Terraform stacks and the Python sync pipeline.
