---
title: "Threat Intelligence Assistant"
description: "RAG-powered threat analysis dashboard that combines a 3-stage LLM pipeline with CVE lookup, MITRE ATT&CK mapping, and static file analysis (YARA). Built as the final project for CMU 17-630 — Prompt Engineering."
url: "https://huggingface.co/spaces/baktistr/TI_Assistant"
github: "https://github.com/baktistr/TI_Assistant"
tags: ["prompt-engineering", "rag", "llm", "threat-intelligence", "mitre-attack", "cve", "yara", "cmu", "17-630"]
featured: true
status: "completed"
---

# Threat Intelligence Assistant

A retrieval-augmented threat analysis assistant that takes a piece of evidence — a CVE reference, an ATT&CK query, or a suspicious file — and returns a grounded analyst-style report. Built as the final project for **CMU 17-630 — Prompt Engineering**.

The project's central question is a prompt engineering one: *how much of a security analyst's workflow can be reliably handled by a structured LLM pipeline, and where do retrieval and tool use stop helping?*

## Pipeline

A deliberate 3-stage prompt decomposition instead of a single "do everything" prompt:

1. **Task Routing** — classify the user's input and pick the right tools / knowledge sources.
2. **Evidence Analysis** — retrieve relevant context (CVEs, ATT&CK techniques, file signals) and reason over it.
3. **Report Generation** — produce a consistent, analyst-format output grounded in the retrieved evidence.

Splitting the work into stages makes each prompt testable in isolation and keeps the final report anchored to real evidence rather than LLM free-association.

## Four Operating Modes (Ablation)

To separate *what the prompt is doing* from *what retrieval and tools are doing*, the assistant ships four modes used as ablations in the evaluation:

| Mode | Retrieval | Tools | Purpose |
|------|-----------|-------|---------|
| `full` | yes | yes | Production pipeline |
| `rag` | yes | no | Isolates the contribution of retrieval |
| `no_tools` | no | no | Prompt-only baseline |
| `raw` | no | no (minimal prompt) | Lower-bound reference |

Running the same queries through all four modes makes it explicit which gains come from prompt structure vs. retrieval vs. tool use.

## Knowledge & Tools

- **CVE knowledge base** — 205 CVEs from the NVD 2021 feed, indexed for semantic search.
- **MITRE ATT&CK knowledge base** — 691 techniques, queryable by ID, name, or free text.
- **Static file analysis** — YARA rule matching, printable-string extraction, and entropy analysis for suspicious binaries.

Retrieval uses `sentence-transformers` embeddings stored in ChromaDB; the LLM calls go to OpenAI's `gpt-4o-mini`.

## Evaluation

An evaluation suite runs **5 test cases × 4 modes** and scores each output on **4 dimensions** — so the prompt engineering decisions are backed by measurements rather than vibes. Results make the ablation effects visible: retrieval dominates for factual grounding, and the 3-stage decomposition dominates for report consistency.

## Stack

| Component | Choice |
|-----------|--------|
| LLM | OpenAI `gpt-4o-mini` |
| Retrieval | ChromaDB + `sentence-transformers` |
| File analysis | YARA, entropy, string extraction |
| UI | Streamlit |
| Deployment | Hugging Face Spaces |

## Links

- **Live demo**: <https://huggingface.co/spaces/baktistr/TI_Assistant>
- **Source**: <https://github.com/baktistr/TI_Assistant>
- **Course**: CMU 17-630 — Prompt Engineering
