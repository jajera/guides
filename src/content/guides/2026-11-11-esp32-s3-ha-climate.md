---
title: ESP32-S3 Home Assistant climate node
date: 2026-11-11
type: walkthrough
category: iot
tags: [esp32s3, sht40, st7789, esphome, home-assistant, zensical]
summary: Build an ESP32-S3 climate sensor with SHT40 and ST7789, onboard via SoftAP QR, and adopt it in Home Assistant with ESPHome.
walkthrough_url: https://esp32-s3-ha-climate.johna.kiwi/
demo_url: https://github.com/jajera/esp32-s3-ha-climate
draft: false
---

An ESP32-S3 N16R8, SHT40, and 240×240 ST7789 become a small climate node that onboards like a store-bought device: scan the SoftAP QR on the TFT, join Wi‑Fi from your phone, and Home Assistant finds it over the ESPHome API. Settings survive reboots; hold **BOOT** for five seconds to factory-reset prefs only.

The tutorial walks the firmware YAML, builds the ESPHome image on Ubuntu 24.04, wires I2C and SPI on a breadboard, flashes over COM USB-UART, then covers Display switch, readings, and reset checks in Home Assistant.
