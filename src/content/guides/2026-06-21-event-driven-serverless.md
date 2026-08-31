---
title: Event-driven serverless platform
date: 2026-06-21
type: walkthrough
category: serverless
tags: [eventbridge, lambda, sqs, amplify, terraform, gnss]
summary: Deploy an AWS event-driven platform for GNSS RINEX ingest, TEC calibration, and visualization.
walkthrough_url: https://aws-event-driven-serverless-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-event-driven-serverless-walkthrough
draft: false
---

Scheduled GeoNet RINEX sync into a private S3 data lake via EventBridge Scheduler, then processing through SQS and Lambda with a REST API and Amplify portal.

The walkthrough covers staged Terraform apply, end-to-end CLI verification, and querying calibrated TEC data through the API and portal.
