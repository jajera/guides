---
title: Kinesis S3 delivery
date: 2026-09-05
type: walkthrough
category: storage
tags: [kinesis, s3, data-streams, delivery, cloudwatch]
summary: Deliver Kinesis Data Streams records straight to a general purpose S3 bucket — no Firehose or Lambda consumer.
walkthrough_url: https://kinesis-s3-delivery-walkthrough.johna.kiwi/
draft: false
---

Stand up a Kinesis Data Streams delivery channel to S3, feed it with a cheap scheduled producer (optional NYC taxi replay burst), watch objects land, check CloudWatch `DeliveryToS3.*` metrics, then tear it all down.
