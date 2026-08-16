---
title: SeisComP ECS lab
date: 2026-08-16
type: walkthrough
category: containers
tags: [seiscomp, ecs, fargate, rds, efs, seismology, gsm]
summary: Unofficial SeisComP lab on ECS Fargate with RDS EFS and EC2 GUI.
walkthrough_url: https://jajera.github.io/seiscomp-ecs-lab/
demo_url: https://github.com/jajera/seiscomp-ecs-lab
draft: false
---

LEARN SeisComP as one Fargate task per process. Catalog on RDS, SDS on EFS, GUI on EC2. Images from public gsm on GHCR. Unofficial. Not gempa-supported.

A private VPC in `ap-southeast-2` runs scmaster, seedlink, slarchive, the processors, and fdsnws on Fargate. A public Ubuntu EC2 hosts XFCE + xrdp; reach it with Windows Remote Desktop to an Elastic IP. The Compose-on-one-EC2 lab is seiscomp-containers-lab. NAT Gateway, RDS, EFS, Fargate, the GUI instance, and VPC endpoints all bill while they exist — destroy when you are done.
