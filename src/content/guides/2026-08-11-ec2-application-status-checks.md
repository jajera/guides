---
title: Amazon EC2 application status checks
date: 2026-08-11
type: walkthrough
category: general
tags: [ec2, autoscaling, monitoring, health-checks]
summary: Amazon EC2 application status checks walkthrough for in network HTTP probes and optional Auto Scaling replacement.
walkthrough_url: https://ec2-application-status-checks-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/ec2-application-status-checks-walkthrough
draft: false
---

Amazon EC2 application status checks (10 August 2026) send HTTP or HTTPS from a managed ENI in your VPC every 60 seconds. Protocol is HTTP/HTTPS only; port is any 1–65535 (`8080`, `8081`, `8443` — not only 80/443). The check works without an ALB. With an ALB, probe the instance listener, not the load balancer. Auto Scaling replaces instances whose overall application status is impaired — no extra group health-check type.

Create the check with aggregation excluded, associate by tag or `aws:autoscaling:groupName`, verify reason codes, then include. Billing is $0.01/hour per managed ENI per AZ plus CloudWatch. Keep ALB health checks for traffic steering.
