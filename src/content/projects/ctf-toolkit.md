---
title: "CTF Toolkit"
description: "Collection of scripts and tools developed for Capture The Flag competitions, including crypto solvers, forensics helpers, and pwn templates."
github: "https://github.com/baktistr/ctf-toolkit"
tags: ["ctf", "python", "cryptography", "forensics", "pwn"]
featured: true
status: "completed"
---

# CTF Toolkit

A curated collection of scripts, templates, and utilities developed over years of participating in Capture The Flag competitions.

## Categories

### Cryptography

- **Classic Ciphers**: Caesar, Vigenere, substitution cipher solvers
- **RSA Tools**: Common RSA attack implementations (Wiener, Hastad, Franklin-Reiter)
- **Hash Crackers**: Rainbow table generators and hash identification

### Forensics

- **File Carvers**: Extract embedded files from various formats
- **Memory Analysis**: Volatility plugin helpers and automation scripts
- **Steganography**: LSB extraction, image analysis tools

### Pwn

- **Pwntools Templates**: Ready-to-use exploit templates for common vulnerability types
- **ROP Chain Builders**: Automated ROP gadget chain generation
- **Shellcode Collection**: Platform-specific shellcode snippets

### Web

- **SQL Injection**: Automated SQLi detection and exploitation
- **XSS Payloads**: Curated list of XSS payloads for different contexts
- **SSRF Helpers**: Internal network enumeration tools

## Installation

```bash
git clone https://github.com/baktistr/ctf-toolkit.git
cd ctf-toolkit
pip install -r requirements.txt
```

## Notable Achievements

This toolkit has been used to solve challenges in:
- HackTheBox seasonal CTFs
- PicoCTF competitions
- Various local and regional CTF events

## Contributing

Feel free to submit pull requests with new tools or improvements to existing scripts.
