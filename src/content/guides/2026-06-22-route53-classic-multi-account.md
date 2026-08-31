---
title: Classic Route 53 multi-account DNS
date: 2026-06-22
type: walkthrough
category: dns
tags: [route53, multi-account, private-dns, terraform]
summary: Share one private hosted zone across three accounts and two regions — classic VPC association authorization, no Profiles or RAM.
walkthrough_url: https://route53-classic-multi-account-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/route53-classic-multi-account-walkthrough
draft: false
---

One network-owned private hosted zone (`platform.demo.local`) associated with owner, cross-account, and cross-region VPCs after CreateVPCAssociationAuthorization and AssociateVPCWithHostedZone.

Covers four association scenarios and when classic PHZ sharing fits versus Route 53 Profiles or RAM.
