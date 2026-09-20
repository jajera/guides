---
title: VPC IPAM multi-account
date: 2026-06-19
type: walkthrough
category: networking
tags: [ipam, ram, multi-account, terraform, vpc]
summary: Org-wide VPC IPAM across four accounts and two regions — delegated admin, RAM pool sharing, and pool-backed workload VPCs.
walkthrough_url: https://amazon-vpc-ipam-multi-account-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/amazon-vpc-ipam-multi-account-walkthrough
recognition:
  label: Builders Spotlight
  url: https://builder.aws.com/content/3GpAhzTpiGPNPe3s7Az6U6k4uB7/aws-community-builders-spotlight-july-13th-edition
draft: false
---

Delegate IPAM admin to a network account, build a three-level pool hierarchy, and RAM-share leaf pools to workload accounts so VPCs allocate CIDRs from shared pools.

The walkthrough covers the manual stack contract for pool IDs, formal allocations in Planning, and how Monitoring resource discovery differs from pool Allocations.
