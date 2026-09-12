---
title: PrivateLink vs inspected TGW
date: 2026-09-12
type: walkthrough
category: networking
tags: [privatelink, transit-gateway, network-firewall, multi-account, latency, cost]
summary: Same live stream across accounts — PrivateLink one way, Transit Gateway through your inspection hub the other. Stand it up, measure both, keep the path that fits.
walkthrough_url: https://pl-vs-inspected-tgw.johna.kiwi/
demo_url: https://github.com/jajera/pl-vs-inspected-tgw
draft: false
---

Compare cross-account PrivateLink and inspected Transit Gateway for the same Wikimedia SSE stream. The shared hub (TGW, inspection VPC, Network Firewall) is a prerequisite; this lab adds a thin harness — relay, NLB/endpoint service, subscriber — then measures latency and cost so you can keep the path that fits.
