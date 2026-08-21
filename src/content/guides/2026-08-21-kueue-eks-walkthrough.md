---
title: Kueue on EKS
date: 2026-08-21
type: walkthrough
category: containers
tags: [eks, kueue, batch, argo-cd, auto-mode, gitops]
summary: Deploy Kueue on Amazon EKS Auto Mode with eksctl and GitOps — cap concurrent batch jobs and share quota across projects.
walkthrough_url: https://jajera.github.io/kueue-eks-walkthrough/
draft: false
---

Deploy Kueue on Amazon EKS Auto Mode with eksctl and GitOps. Cap concurrent batch jobs, share quota across projects, and keep web apps outside the queue.

Cluster layout covers Auto Mode node pools, an optional managed Argo CD capability, Kueue controllers, and Spot flavors for batch. Compare KEDA vs Kueue, then verify admission (Queued vs Pending) and tear down.
