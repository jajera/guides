---
title: Enhanced EventBridge custom event bus
date: 2026-09-26
type: walkthrough
category: serverless
tags: [eventbridge, eventsv2, ram, multi-account, cli, fifo, subscriber]
summary: One enhanced bus shared with RAM, a FIFO Subscriber that owns its filter, and ordered health alerts in another account — without bus-to-bus hops.
walkthrough_url: https://aws-eventbridge-enhanced-bus.johna.kiwi/
demo_url: https://github.com/jajera/aws-eventbridge-enhanced-bus
draft: false
---

A classic custom bus in every account works until the next team needs the same stream. Then you stitch hops, stack charges, and bolt on a FIFO queue whenever order matters.

The enhanced bus flips that: lab owns one `event-busv2`, shares it with AWS RAM, and each consumer attaches a Subscriber. This lab proves the share, a DATA filter on `source=iot.lab`, FIFO delivery keyed by `EventGroupId`, and a short OPEN → CLEAR path into DynamoDB. Feed is an existing IoT talk stack via `eb-bridge` — the feature under test is the bus, not the devices.

AWS CLI only (`eventsv2`, ≥ 2.37.3), region `ap-southeast-2`, then tear down.
