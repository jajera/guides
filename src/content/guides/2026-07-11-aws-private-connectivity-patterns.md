---
title: AWS private connectivity patterns
date: 2026-07-11
type: walkthrough
category: networking
tags: [privatelink, vpc-lattice, peering, transit-gateway, cloud-wan, multi-account]
summary: Deploy and compare five private cross-account patterns — VPC Peering, PrivateLink, VPC Lattice, Transit Gateway, and Cloud WAN.
walkthrough_url: https://aws-private-connectivity-patterns-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-private-connectivity-patterns-walkthrough
draft: false
---

Side-by-side guidance for five independent private connectivity patterns across a shared-services hub and a consumer spoke — OSI layer, CIDR overlap, cost drivers, and when to choose each.

Deploy one pattern at a time (shared-services then consumer), verify with curl via Session Manager, then tear down before the next. Cloud WAN covers multi-region segments and why RAM sharing of the global core network uses `us-east-1`.
