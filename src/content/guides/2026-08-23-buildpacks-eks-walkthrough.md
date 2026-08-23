---
title: Buildpacks on EKS
date: 2026-08-23
type: walkthrough
category: containers
tags: [eks, buildpacks, kpack, ecr, argo-cd, codecommit, gitops]
summary: Prove buildpacks on EKS — platform-owned image builds, app teams push code only.
walkthrough_url: https://jajera.github.io/buildpacks-eks-walkthrough/
draft: false
---

Prove Cloud Native Buildpacks on EKS: platform-owned image builds so app teams push code only — no Dockerfile in the app repo.

Push Go source to CodeCommit, kpack builds with Paketo builders, image lands in ECR, managed Argo CD deploys Pulse. Covers buildpacks fundamentals, the pipeline map, step-by-step lab deploy and teardown, IRSA, and common failure signatures.
