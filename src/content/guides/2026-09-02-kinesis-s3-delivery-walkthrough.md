---
title: Kinesis S3 delivery
date: 2026-09-02
type: walkthrough
category: storage
tags: [kinesis, s3, data-streams, delivery, cloudwatch]
summary: Send Kinesis Data Streams records straight to S3 without Firehose or a Lambda consumer.
walkthrough_url: https://kinesis-s3-delivery-walkthrough.johna.kiwi/
draft: false
---

Create a Kinesis stream and an S3 delivery channel, run a small scheduled producer (optional taxi-trip replay), check that objects and CloudWatch delivery metrics look right, then tear the lab down.
