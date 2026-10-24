---
title: ESP32 GNSS field node
date: 2026-10-25
type: walkthrough
category: iot
tags: [esp32, atgm336h, st7789, nmea, gnss, platformio, zensical]
summary: Wire a classic ESP32, ATGM336H, and 240×240 ST7789 on Ubuntu, then flash phase folders until an outdoor 3D fix paints green on the TFT.
walkthrough_url: https://esp32-gnss-field.johna.kiwi/
demo_url: https://github.com/jajera/esp32-gnss-field
draft: false
---

Another parts pile — CH340 DevKit, a cheap ATGM336H, square ST7789 — aimed at a **portable field node**, not a survey rover. Antenna to the sky, NMEA on UART, fix quality and lat/lon on the glass.

Same rhythm as the desk seismo lab: clean Ubuntu, erase, hello, power TFT then GNSS, raw NMEA, parse, colour fill, then the field UI. Each phase freezes a `firmware/<nn>-…/` folder so you can replay; SoftAP, SD, PPS, and NTRIP wait for later folders.

Consumer GNSS without corrections is metre-class at best. Take it outside, wait for green **FIX 3D**, enjoy the readout — don’t stake a boundary with it.
