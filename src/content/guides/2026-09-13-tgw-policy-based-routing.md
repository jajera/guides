---
title: TGW Policy-Based Routing
date: 2026-09-13
type: walkthrough
category: networking
tags: [transit-gateway, policy-based-routing, multi-account, inspection, networking]
summary: Same private IP, two paths — prove Transit Gateway Policy-Based Routing sends HTTPS via the hub while HTTP goes direct.
walkthrough_url: https://tgw-policy-based-routing-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/tgw-policy-based-routing
draft: false
---

Three-account hub-and-spoke lab for destination-only TGW routing versus a policy table. Rule 100 steers TCP/443 via the Hub VPC; rule 200 leaves TCP/80 direct — destination IP alone cannot explain the split.
