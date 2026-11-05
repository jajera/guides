---
title: ESP32-S3 desk climate station
date: 2026-11-06
type: walkthrough
category: iot
tags: [esp32s3, sht40, bmp390, st7789, microsd, platformio, zensical]
summary: Wire an ESP32-S3, SHT40, BMP390, ST7789, and microSD on Ubuntu, then flash phase folders until live climate views and CSV logging run on the desk.
walkthrough_url: https://esp32-s3-weatherstation.johna.kiwi/
demo_url: https://github.com/jajera/esp32-s3-weatherstation
draft: false
---

Parts pile on the breadboard — an ESP32-S3 N16R8, SHT40 + BMP390, a 2.0″ ST7789, and a 6-pin microSD reader — turned into a **local** desk climate station. No cloud, no fleet: COM UART, I2C, SPI, then Now / Session / System views, status LEDs, and CSV on the card.

Start from a clean Ubuntu box (PlatformIO is not magic), erase the chip, prove hello serial, power TFT then sensors, scan I2C, stream climate, fill the screen, land the live UI, append `/climate.csv`, and finish with a tact that cycles three TFT views. Each step freezes a `firmware/<nn>-…/` folder so you can replay the path; later extras get new folders, not rewrites.
