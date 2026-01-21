---
title: "OverTheWire: Bandit Level 6-10 (Bahasa Indonesia)"
description: "Writeup untuk OverTheWire Bandit wargame level 6-10, melanjutkan pembelajaran command line Linux"
pubDate: 2021-05-22
tags: ["ctf", "overthewire", "writeup", "security"]
---

Tutorial ini melanjutkan pembahasan CTF challenges dari OverTheWire Bandit series level 6-10.

## Level 6 → 7

**Goal:** Temukan file dengan properti spesifik: owned by user bandit7, group bandit6, dan berukuran 33 bytes.

```bash
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

## Level 7 → 8

**Goal:** Temukan password yang tersimpan di data.txt di sebelah kata "millionth".

```bash
cat data.txt | grep millionth
```

## Level 8 → 9

**Goal:** Identifikasi satu-satunya baris yang muncul sekali di data.txt.

```bash
cat data.txt | sort | uniq -c | grep -w 1
```

## Level 9 → 10

**Goal:** Temukan password di human-readable strings yang didahului oleh karakter '='.

```bash
strings data.txt | grep ===
```

## Level 10 → 11

**Goal:** Decode data yang ter-encode base64 di data.txt.

```bash
cat data.txt | base64 -d
```

## Commands yang Dipelajari

- `find` dengan multiple filters (user, group, size)
- `grep` untuk pencarian teks
- `sort` dan `uniq` untuk menemukan unique lines
- `strings` untuk extract readable text dari binary
- `base64` untuk encoding/decoding
