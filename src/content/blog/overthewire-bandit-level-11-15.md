---
title: "OverTheWire: Bandit Level 11-15 (Bahasa Indonesia)"
description: "Writeup untuk OverTheWire Bandit wargame level 11-15, termasuk ROT13, compression, dan SSH keys"
pubDate: 2021-05-27
tags: ["ctf", "overthewire", "writeup", "security"]
---

Writeup ini membahas solusi untuk OverTheWire Bandit challenges level 11-15.

## Level 11 → 12

**Challenge:** Decrypt teks yang dirotasi 13 posisi (ROT13).

```bash
tr [:alpha:] N-ZA-Mn-za-m < data.txt
```

## Level 12 → 13

**Challenge:** Decompress file hexdump yang ter-compress berulang kali.

**Proses:**
1. Buat temp directory:
```bash
mkdir /tmp/baktistr
```

2. Convert hexdump ke binary:
```bash
xxd -r data.txt > data.bin
```

3. Identifikasi tipe compression menggunakan command `file`

4. Decompress secara iteratif (gzip, bzip2, tar formats)

## Level 13 → 14

**Challenge:** Akses level berikutnya menggunakan private SSH key.

```bash
ssh bandit14@localhost -i sshkey.private
```

## Level 14 → 15

**Challenge:** Submit password ke port 30000 via netcat.

```bash
nc localhost 30000 < /etc/bandit_pass/bandit14
```

## Level 15 → 16

**Challenge:** Submit password ke port 30001 menggunakan SSL encryption.

```bash
ncat --ssl -v localhost 30001
```

## Commands yang Dipelajari

- `tr` untuk character translation (ROT13)
- `xxd` untuk hexdump conversion
- `gzip`, `bzip2`, `tar` untuk decompression
- SSH dengan private key authentication
- `nc` (netcat) untuk network communication
- `ncat` dengan SSL untuk encrypted connections
