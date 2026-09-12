---
title: TGW Policy-Based Routing
date: 2026-09-13
type: walkthrough
category: networking
tags: [transit-gateway, policy-based-routing, multi-account, inspection, networking]
summary: Same Spoke B IP, two paths — PBR steers TCP/443 via the hub and leaves TCP/80 direct. Run the three-account lab and prove destination-only versus policy-based routing.
walkthrough_url: https://tgw-policy-based-routing-walkthrough.johna.kiwi/
demo_url: https://github.com/jajera/tgw-policy-based-routing
draft: false
---

Walkthrough for Transit Gateway Policy-Based Routing on a three-account hub-and-spoke. Rule 100 steers destination TCP/443 via the Hub VPC while rule 200 (catch-all) sends TCP/80 and other traffic Direct — same Spoke B IP, different paths. Destination-based routing still runs inside the route table PBR selects.
