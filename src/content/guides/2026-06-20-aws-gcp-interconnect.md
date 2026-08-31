---
title: AWS–GCP Interconnect
date: 2026-06-20
type: walkthrough
category: networking
tags: [interconnect, gcp, hybrid, terraform, private-connectivity]
summary: Private connectivity between AWS and GCP — no VPN, no colocation, no public internet.
walkthrough_url: https://aws-gcp-interconnect-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/aws-gcp-interconnect-walkthrough
draft: false
---

EC2 in AWS and GCE in GCP talking over a managed interconnect on a fully private path.

Terraform provisions network and compute foundations; the interconnect link itself is created through console and gcloud where provider support is still pending. Includes per-step cost notes and teardown guidance.
