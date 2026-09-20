---
title: S3 Express hot lookup
date: 2026-09-20
type: walkthrough
category: storage
tags: [s3, s3-express, directory-bucket, latency, ec2, ecr]
summary: Put hot keys in an Express directory bucket next to compute, bake them off against Standard in the same AZ, and read the live ratio on a small harness dash.
walkthrough_url: https://s3-express-hot-lookup-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/s3-express-hot-lookup-walkthrough
draft: false
---

Express keeps the hot set in one AZ on purpose. This lab stands up a dedicated VPC, seeds identical keys into Express and Standard, runs continuous GETs from an m7g.large in that AZ, then tears the stack down — image pipeline included when you are finished.
