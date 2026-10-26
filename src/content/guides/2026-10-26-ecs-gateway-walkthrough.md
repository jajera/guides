---
title: ECS Gateway self-serve ingress
date: 2026-10-26
type: walkthrough
category: containers
tags: [ecs, gateway, alb, fargate, ec2, awsvpc]
summary: Platform owns the gateway once; app teams opt in with a connector and get an HTTPS hostname on a shared ALB — Fargate or EC2, same VPC pattern.
walkthrough_url: https://ecs-gateway-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/ecs-gateway-walkthrough
draft: false
---

Platform teams define ingress once. Application teams attach a gateway connector and get a managed `*.ecs.<region>.on.aws` URL — no per-service ALB, ACM, or security-group choreography.

You build a two-AZ VPC (public ALB and NAT, private tasks), create the shared IAM roles, then pick Fargate or EC2. Each path gets its own cluster and gateway. Two demo services — Orders and Catalog — land on the same ALB with distinct hostnames. Teardown is the last page on each path.
