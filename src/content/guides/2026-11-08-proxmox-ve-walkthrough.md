---
title: Proxmox VE walkthrough
date: 2026-11-08
type: walkthrough
category: general
tags: [proxmox, virtualization, zfs, iso, bare-metal, homelab]
summary: Install Proxmox VE on spare x86_64 hardware — verify the ISO, write a USB stick, run the graphical installer with a ZFS mirror or single-disk ext4 layout, upgrade the host, then prove the web UI on port 8006.
walkthrough_url: https://proxmox-ve-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/proxmox-ve-walkthrough
draft: false
---

Bring up a **Proxmox VE** hypervisor from the official ISO through to a browser login on the LAN. You download and checksum the installer, flash USB, choose a two-disk ZFS mirror or one-disk ext4 layout, set a static management address, switch apt to the no-subscription repos when you are not paying for enterprise, upgrade, and open `https://<ip>:8006`.

Other labs can link here for host prep, then add their own guests and storage. No clustering, Ceph, or Home Assistant steps in this guide — just a web-UI-ready node.
