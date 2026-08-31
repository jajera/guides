---
title: Amazon EKS control plane parameters
date: 2026-08-19
type: walkthrough
category: containers
tags: [eks, kubernetes, scheduler, hpa, kube-apiserver]
summary: Amazon EKS control plane configuration parameters walkthrough.
walkthrough_url: https://eks-control-plane-config.johna.kiwi/
draft: false
---

Amazon EKS (12 August 2026) lets you set four kube-apiserver, kube-scheduler, and kube-controller-manager fields through the EKS API. Existing clusters keep their previous behaviour until you call `UpdateClusterConfig`.

Scoring (`LeastAllocated` or `MostAllocated`), HPA sync period (Provisioned only), event TTL, and NodePort range. Kubernetes 1.31 or later. Changes apply with a rolling control plane update and affect only new binds and new events — not running pods, and not whether nodes exist.
