---
title: S3 Vectors RAG workload
date: 2026-06-24
type: walkthrough
category: storage
tags: [s3-vectors, bedrock, rag, lambda, amplify, terraform]
summary: Vector search without a vector database — Amazon S3 Vectors, Bedrock embeddings, and a serverless RAG app.
walkthrough_url: https://jajera.github.io/s3-vectors-rag-workload/
demo_url: https://github.com/jajera/s3-vectors-rag-workload
draft: false
---

Create vector buckets and indexes with Terraform, then run RSS ingest, Bedrock embeddings, similarity search, reranking, and LLM answers in one application.

Includes production patterns for least-privilege IAM, JWT auth, CORS, throttling, and scheduled automation.
