---
layout: post
title: 如何打开 mac 真机模拟器
description: 通过命令行，打开模拟器。
keywords: mac
tags: [mac]
category: mac
---

## 基本命令

```bash
open -a Simulator
```

## 查看设备列表

```bash
xcrun simctl list
```

```bash
== Devices ==
-- iOS 13.3 --
    iPhone 8 (39107F8D-D1C8-42B8-B55E-F5D2D9135FC6) (Shutdown)
    iPhone 8 Plus (0ABD9057-B1F0-436F-A1AF-8E1ADE813DBE) (Shutdown)
    iPhone 11 (90C868EA-4581-4FA7-9176-FB74ADAABB9B) (Shutdown)
    iPhone 11 Pro (B6297F4C-0586-48CB-A8FF-9723D0582078) (Shutdown)
    iPhone 11 Pro Max (911A9A0C-11DF-4222-A0CE-116358F7966C) (Booted)
    iPad Pro (9.7-inch) (9B850B43-EC06-477B-929E-B625FC9C215B) (Shutdown)
    iPad (7th generation) (B270CCD5-31A9-486E-8C21-4FD3231F81A1) (Shutdown)
    iPad Pro (11-inch) (1C62CDF6-1C9F-4BF5-8233-39717B9CA39C) (Shutdown)
    iPad Pro (12.9-inch) (3rd generation) (A2BCBB62-0FD2-4048-92E5-58772801805B) (Shutdown)
    iPad Air (3rd generation) (9AD02838-ADB7-4520-8B59-79BFF63B3F46) (Shutdown)
-- tvOS 13.3 --
    Apple TV (8007992E-DB9C-4C47-8BF5-8C99FB25D908) (Shutdown)
    Apple TV 4K (CAD4AC75-A321-42E7-BC16-D2F96C4EAF86) (Shutdown)
    Apple TV 4K (at 1080p) (FF3D68D6-A3BD-4C37-B602-F11B8A7C1447) (Shutdown)
-- watchOS 6.1 --
    Apple Watch Series 4 - 40mm (EC91BFF3-AACF-4B5F-A109-2238FD79FC64) (Shutdown)
    Apple Watch Series 4 - 44mm (22AB6573-34D9-4721-BBB2-6A1C16A72216) (Shutdown)
    Apple Watch Series 5 - 40mm (940BBF85-CDF7-436D-B901-9B66D22390A3) (Shutdown)
    Apple Watch Series 5 - 44mm (9D61BD62-714C-4C30-B49A-F65170D816E6) (Shutdown)
== Device Pairs ==
A317B7AA-33BC-48D7-9F7A-5393EAABC126 (active, disconnected)
    Watch: Apple Watch Series 5 - 40mm (940BBF85-CDF7-436D-B901-9B66D22390A3) (Shutdown)
    Phone: iPhone 11 Pro (B6297F4C-0586-48CB-A8FF-9723D0582078) (Shutdown)
DAF5EE6E-92F6-409E-B56C-9C5B709445D7 (active, disconnected)
    Watch: Apple Watch Series 5 - 44mm (9D61BD62-714C-4C30-B49A-F65170D816E6) (Shutdown)
    Phone: iPhone 11 Pro Max (911A9A0C-11DF-4222-A0CE-116358F7966C) (Booted)
```

## 打开指定设备

```bash
open -a "Simulator.app" --args -CurrentDeviceUDID "39107F8D-D1C8-42B8-B55E-F5D2D9135FC6"
```
