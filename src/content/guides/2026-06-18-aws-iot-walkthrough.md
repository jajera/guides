---
title: AWS IoT Walkthrough
date: 2026-06-18
type: walkthrough
category: iot
tags: [iot-core, esp32, mqtt, terraform, amplify, lambda]
summary: Connect ESP32-S3 to AWS IoT Core — pretest flash and serial, then Terraform for rules, Lambda, DynamoDB, API, and Amplify dashboard.
walkthrough_url: https://aws-iot-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-iot-walkthrough
draft: false
---

Device-to-cloud telemetry from an Espressif ESP32-S3 to AWS IoT Core over MQTT, verified in CloudWatch before the full stack rolls out.

The walkthrough covers pretest through provisioning, then Terraform for IoT rules fan-out, Lambda, DynamoDB, API Gateway, and Amplify hosting — with copy-paste commands and fixes when USB, upload, or cloud checks fail.
