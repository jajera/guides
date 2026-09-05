---
title: Private S3 artifact store
date: 2026-09-04
type: walkthrough
category: storage
tags: [s3, vpc-endpoints, multi-account, replication]
summary: Keep S3 objects private and reachable only through regional VPC gateway endpoints, with copy from Sydney to Auckland.
walkthrough_url: https://private-s3-artifact-store.johna.kiwi/
draft: false
---

Publish objects in Sydney, replicate them to Auckland, let allowlisted accounts read through VPC endpoints, confirm access from both regions, then remove the stack.
