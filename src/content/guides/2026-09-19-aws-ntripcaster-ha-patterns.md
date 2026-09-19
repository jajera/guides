---
title: NTRIP caster HA patterns
date: 2026-09-19
type: walkthrough
category: networking
tags: [ntrip, nlb, route53, high-availability, gnss, dual-az]
summary: BKG’s caster fans GNSS streams but won’t fail over. Prove a normal relay-IPort first, then bolt on dual-AZ L4 and multi-region DNS — one stack at a time.
walkthrough_url: https://aws-ntripcaster-ha-patterns.johna.kiwi/
demo_url: https://github.com/jajera/aws-ntripcaster-ha-patterns
draft: false
---

The binary never grew a cluster mode — only the recovery plane changes. Work baseline → dual-AZ (~20–40s gap) → multi-region DNS (minute-scale), and tear each stack down before the next.
