---
title: "Automated Vulnerability Scanner"
description: "A Python-based vulnerability scanner that automates reconnaissance and identifies common security misconfigurations in web applications."
github: "https://github.com/baktistr/vuln-scanner"
tags: ["python", "security", "automation", "web-security", "reconnaissance"]
featured: true
status: "active"
---

# Automated Vulnerability Scanner

A comprehensive Python-based tool designed to streamline the reconnaissance phase of penetration testing engagements.

## Features

- **Subdomain Enumeration**: Discovers subdomains using multiple sources (Certificate Transparency, DNS brute-forcing, web archives)
- **Port Scanning**: Integrates with Nmap for service detection and version fingerprinting
- **Web Technology Detection**: Identifies frameworks, CMS platforms, and server technologies
- **Vulnerability Checks**: Tests for common misconfigurations (CORS, security headers, directory traversal)
- **Report Generation**: Outputs findings in multiple formats (JSON, HTML, Markdown)

## Technology Stack

- Python 3.10+
- asyncio for concurrent scanning
- Rich for terminal UI
- Jinja2 for report templates

## Usage

```bash
# Basic scan
python scanner.py -t example.com

# Full scan with all modules
python scanner.py -t example.com --full --output report.html

# Specific modules only
python scanner.py -t example.com --modules subdomains,ports
```

## Roadmap

- [ ] API integration for VirusTotal and Shodan
- [ ] Docker containerization
- [ ] Web dashboard for results visualization
- [ ] CI/CD integration for automated security testing

## Disclaimer

This tool is intended for authorized security testing only. Always obtain proper authorization before scanning any systems.
