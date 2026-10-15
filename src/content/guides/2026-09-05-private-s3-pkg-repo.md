---
title: Private S3 package repo
date: 2026-09-05
type: walkthrough
category: storage
tags: [s3, rpm, deb, vpc-endpoints, multi-region]
summary: Host private RPM and deb repositories on S3 and install from them through regional VPC gateway endpoints.
walkthrough_url: https://private-s3-pkg-repo.johna.kiwi/
recognition:
  label: Builders Spotlight
  url: https://builder.aws.com/content/3KblvKHxxly0pMeoyBc7TG8VHVm/aws-community-builders-spotlight-september-28th-edition
draft: false
---

Publish packages in Sydney, replicate them to Auckland, install with dnf and apt from test hosts behind gateway endpoints, and use a separate public page to browse the catalog (read-only, not a full Pulp server).
