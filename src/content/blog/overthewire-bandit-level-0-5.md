---
title: "OverTheWire: Bandit Level 0-5 (Bahasa Indonesia)"
description: "Writeup untuk OverTheWire Bandit wargame level 0-5, belajar dasar-dasar command line Linux"
pubDate: 2021-05-14
tags: ["ctf", "overthewire", "writeup", "security"]
---

Panduan ini membahas cara menyelesaikan lima level pertama dari OverTheWire Bandit wargame, sebuah challenge cybersecurity yang ramah untuk pemula dan fokus pada skill command-line Linux.

## Level 0 → 1

Akses server bandit via SSH dan ambil password dari file `readme` menggunakan command dasar `cat` dan `ls`.

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
cat readme
```

## Level 1 → 2

Baca file yang bernama `-` dengan menggunakan prefix path `./` untuk membedakannya dari standard input redirection.

```bash
cat ./-
```

## Level 2 → 3

Baca file yang mengandung spasi dengan meng-escape setiap karakter spasi menggunakan backslash atau menggunakan quotes.

```bash
cat "spaces in this filename"
```

## Level 3 → 4

Temukan hidden files menggunakan `ls -la` untuk menampilkan file yang diawali dengan dot (`.hidden`).

```bash
ls -la
cat .hidden
```

## Level 4 → 5

Identifikasi file yang human-readable di antara file binary menggunakan command `file` untuk mengecek tipe file.

```bash
file ./*
cat ./-file07
```

## Level 5 → 6

Cari file spesifik berdasarkan ukuran menggunakan `find -size 1033c` untuk filter berdasarkan byte count yang tepat.

```bash
find . -size 1033c
```

## Core Commands yang Dipelajari

- SSH connection pada non-standard ports
- File listing dengan long format (`ls -la`)
- File content reading (`cat`)
- File type identification (`file *`)
- Advanced searching dengan size filters (`find`)

Setiap level mengajarkan teknik Linux esensial untuk manipulasi file dan eksplorasi sistem.
