---
title: Home Assistant OS on Proxmox walkthrough
date: 2026-11-08
type: walkthrough
category: general
tags: [home-assistant, proxmox, virtualization, qcow2, homelab]
summary: Run Home Assistant OS as a VM on Proxmox VE — download the official qcow2, create a UEFI guest, import the disk, then prove the onboarding UI on port 8123.
walkthrough_url: https://home-assistant-os-proxmox-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/home-assistant-os-proxmox-walkthrough
draft: false
---

Install **Home Assistant OS** as a Proxmox VM from the official KVM/Proxmox qcow2 through the onboarding welcome screen. Host prep lives in the [Proxmox VE walkthrough](https://proxmox-ve-walkthrough.johna.kiwi/) — this guide starts from a web-UI-ready node, creates an empty UEFI guest, imports the disk, and proves `http://homeassistant.local:8123`.

No Supervised or Container path here — official HAOS as a VM only.
