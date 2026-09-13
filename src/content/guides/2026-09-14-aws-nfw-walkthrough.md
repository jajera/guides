---
title: AWS NFW Walkthrough
date: 2026-09-14
type: walkthrough
category: networking
tags: [network-firewall, transit-gateway, multi-account, cross-region, inspection]
summary: Stand up disposable TGW hubs in Sydney and Auckland, then prove Network Firewall really double-inspects cross-Region traffic.
walkthrough_url: https://aws-nfw-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-nfw-lab
draft: false
---

Build the mesh first (hubs, RAM-shared spokes, peering), prove connectivity, then attach Network Firewall deny → allow. Flow logs show same-Region traffic hit once and cross-Region traffic hit both hubs.
