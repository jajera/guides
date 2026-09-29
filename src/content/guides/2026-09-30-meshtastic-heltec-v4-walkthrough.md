---
title: Heltec V4 Meshtastic first setup
date: 2026-09-30
type: walkthrough
category: iot
tags: [meshtastic, heltec, lora, esp32s3, flasher, ble]
summary: Flash a Heltec WiFi LoRa 32 V4 with Meshtastic from a clean desk — bootloader, web flasher, region, then prove the node is alive.
walkthrough_url: https://meshtastic-heltec-v4-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/meshtastic-heltec-v4-walkthrough
draft: false
---

Brand-new Heltec WiFi LoRa 32 V4 on the desk, data USB-C, and Chromium. Confirm the board, enter bootloader, flash official Meshtastic firmware, set the LoRa region, then check OLED, serial, and a phone Primaries send.

Desk evidence used plain V4 (`heltec-v4`). Pick the matching flasher target — the wrong R8 build leaves the OLED black.
