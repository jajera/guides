---
title: Private S3 package repo
date: 2026-09-04
type: walkthrough
category: storage
tags: [s3, rpm, deb, vpc-endpoints, multi-region, ecr]
summary: Private multi-region RPM and deb repos on S3 via regional gateway VPC endpoints.
walkthrough_url: https://private-s3-pkg-repo.johna.kiwi/
draft: false
---

Publish packages in Sydney, replicate under `repos/` to Auckland, and install via `dnf` / `apt` from dual-OS probes behind regional gateway VPC endpoints. A separate public UI bucket shows a read-only catalog (not Pulp).
