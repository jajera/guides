---
title: Private S3 artifact store
date: 2026-09-03
type: walkthrough
category: storage
tags: [s3, vpc-endpoints, multi-account, replication]
summary: Keep S3 objects private behind regional gateway endpoints, publish in Sydney, and replicate to Auckland.
walkthrough_url: https://private-s3-artifact-store.johna.kiwi/
draft: false
---

CLI lab for a private multi-account S3 artifact store over VPC endpoints: publish in Sydney, replicate to Auckland, allowlist consumers, prove reads from both regions, then tear down.
