---
title: SeisComP containers lab
date: 2026-08-15
type: walkthrough
category: containers
tags: [seiscomp, docker, compose, seismology, ec2, gsm]
summary: Unofficial LEARN SeisComP lab as one Docker Compose service per process using gsm.
walkthrough_url: https://jajera.github.io/seiscomp-containers-lab/
demo_url: https://github.com/jajera/seiscomp-containers-lab
draft: false
---

LEARN SeisComP as one Docker Compose service per process. Images are built with public gsm, not a source compile. Unofficial. Not gempa-supported.

One EC2 in a public subnet runs MariaDB, scmaster, seedlink, slarchive, the processors, fdsnws, and an XFCE + xrdp sidecar. Reach the box with SSM. RDP opens the `gui` container for `scrttv` and the other public GUIs. `t3.xlarge` is for the desktop sidecar — stop or destroy it when you are not using RDP.
