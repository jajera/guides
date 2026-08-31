---
title: SeisComP lab
date: 2026-08-15
type: walkthrough
category: general
tags: [seiscomp, seismology, ec2, ubuntu, gsm, geofon]
summary: Single host SeisComP learning lab on AWS Ubuntu.
walkthrough_url: https://seiscomp-lab.johna.kiwi/
demo_url: https://github.com/jajera/seiscomp-lab
draft: false
---

A single-host SeisComP learning lab on Ubuntu 24.04 in AWS: public gsm packages, local MariaDB, GEOFON SeedLink, and an XFCE desktop. No containers, no commercial gempa modules.

One EC2 in a public subnet pulls BH streams from GEOFON, runs automatic picking and location, stores a catalog in MariaDB, and serves FDSNWS on localhost. Reach the box with SSM. Optional RDP opens XFCE for `scconfig`, `scrttv`, `scolv`, and the other public GUIs. Stop the `t3.xlarge` when you are not using the desktop.
