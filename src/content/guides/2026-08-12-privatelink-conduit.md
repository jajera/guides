---
title: PrivateLink path between producer and consumer VPCs
date: 2026-08-12
type: walkthrough
category: networking
tags: [privatelink, vpc, nlb, cross-region, terraform, multi-account]
summary: Cross-account PrivateLink into a private 3-tier API — same-Region Sydney, cross-Region Melbourne, and why New Zealand cannot join the cross-Region path today.
walkthrough_url: https://privatelink-conduit.johna.kiwi/
demo_url: https://github.com/jajera/privatelink-conduit
draft: false
---

A sandbox consumer reaches a private config API in a shared-services account over PrivateLink — no peering, Transit Gateway, IGW, or NAT. One TCP port on one consumer ENI. Sydney (`ap-southeast-2`) serves both an in-Region consumer (`config.conduit.internal`) and a Melbourne (`ap-southeast-4`) consumer (`config-xr.conduit.internal`) on the same endpoint service.

The lab proves success (`"source": "rds"`) and isolation (direct app and RDS IPs time out). Same-Region PrivateLink works in `ap-southeast-6`; cross-Region does not in either direction. Destroy consumers before the provider.
