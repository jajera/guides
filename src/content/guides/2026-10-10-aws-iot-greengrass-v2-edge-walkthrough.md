---
title: Greengrass V2 edge greenhouse
date: 2026-10-10
type: walkthrough
category: iot
tags: [greengrass, iot-core, esp32, nuc, mqtt, sagemaker, onnx]
summary: Greengrass V2 on a NUC core with ESP32-S3 zones — LAN closed loop first, then AWS CLI wiring for archive, alarms, cloud commands, and on-device ONNX.
walkthrough_url: https://aws-iot-greengrass-v2-edge-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-iot-greengrass-v2-edge-walkthrough
draft: false
---

One NUC runs Nucleus; up to three ESP32-S3 boards are greenhouse zones. Press BOOT and that zone’s RGB goes green. Chip temperature ticks every ten seconds. Nothing fancy — a real sense→actuate loop on the LAN before the cloud gets involved.

Act 2 keeps the same topics and walks them into AWS with plain CLI and JSON under `artifacts/`: cloud deploy from S3, IoT rules into an S3 lake / DynamoDB zone state / CloudWatch, alarm → SNS → Lambda → edge command (RGB blue), then a small SageMaker-trained ONNX model the core runs locally (RGB red). No Terraform, no provision wrappers. Teardown is the last page.
