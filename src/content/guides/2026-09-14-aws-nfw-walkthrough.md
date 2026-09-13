---
title: AWS NFW Walkthrough
date: 2026-09-14
type: walkthrough
category: networking
tags: [network-firewall, transit-gateway, multi-account, cross-region, inspection]
summary: Dual-hub Transit Gateway and Network Firewall across Sydney and Auckland — build the mesh first, then attach NFW so cross-Region traffic is double-inspected on both hubs.
walkthrough_url: https://aws-nfw-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-nfw-lab
draft: false
---

Walkthrough for the disposable dual-hub AWS Network Firewall lab. Sydney and Auckland hubs (TGW + Network Firewall), RAM-shared spokes, hub-to-hub peering, then deny → allow with flow-log proof of double vs single inspection.
