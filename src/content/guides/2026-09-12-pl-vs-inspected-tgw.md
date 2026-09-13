---
title: PrivateLink vs inspected TGW
date: 2026-09-12
type: walkthrough
category: networking
tags: [privatelink, transit-gateway, network-firewall, multi-account, latency, cost]
summary: One live stream, two paths — clock PrivateLink against a TGW inspection hairpin, then keep the path that wins on latency and cost.
walkthrough_url: https://pl-vs-inspected-tgw.johna.kiwi/
demo_url: https://github.com/jajera/pl-vs-inspected-tgw
draft: false
---

Reuse your shared inspection hub, add a thin harness (relay, NLB/endpoint service, subscriber), and measure the same Wikimedia SSE stream over PrivateLink versus Transit Gateway through Network Firewall.
