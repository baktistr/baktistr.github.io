---
title: "Homomorphic Encryption for Fraud Detection"
description: "Privacy-preserving credit card fraud detection that runs ML inference directly on encrypted transaction data using TenSEAL (CKKS). Benchmarks 8 ML models under homomorphic encryption to quantify the accuracy/latency tradeoff."
url: "https://huggingface.co/spaces/baktistr/he-fraud-frontend"
tags: ["privacy", "homomorphic-encryption", "tenseal", "ckks", "fraud-detection", "ppml", "cmu", "17-735"]
featured: true
status: "completed"
---

# Homomorphic Encryption for Fraud Detection

A privacy-preserving fraud detection system that lets a server score credit-card transactions **without ever seeing the plaintext data**. Built as the final project for **CMU 17-735 — Engineering Privacy in Software**.

The client encrypts each transaction using the CKKS homomorphic encryption scheme, the server performs ML inference entirely on ciphertexts, and only the client — who holds the secret key — can decrypt the resulting fraud score.

## Why This Matters

Financial transactions are some of the most sensitive data a user generates. Traditional fraud detection pipelines force users to trust the provider with raw transaction features (amount, merchant category, spending patterns, timing). Homomorphic encryption removes that trust assumption: the server can compute the exact same fraud score on encrypted data that it would on plaintext, without ever learning the underlying values.

This project explores whether that privacy guarantee is *practical* for a latency-sensitive, high-volume use case like real-time transaction scoring.

## Architecture

Two separately deployed Hugging Face Spaces:

- **Frontend (client)**: [baktistr/he-fraud-frontend](https://huggingface.co/spaces/baktistr/he-fraud-frontend) — generates the CKKS key pair, encrypts transaction features locally, sends the ciphertext to the backend, and decrypts the returned score.
- **Backend (server)**: [baktistr/he-fraud-backend](https://huggingface.co/spaces/baktistr/he-fraud-backend) — receives ciphertexts plus the public evaluation context, runs the selected model's forward pass under HE, and returns an encrypted prediction.

The backend never has access to the secret key and cannot decrypt anything it receives or returns.

## Stack

| Component | Choice |
|-----------|--------|
| HE library | [TenSEAL](https://github.com/OpenMined/TenSEAL) (Python bindings for Microsoft SEAL) |
| Scheme | CKKS — approximate arithmetic on real numbers, required for ML on floats |
| Dataset | Kaggle credit card fraud detection (anonymized PCA features + transaction amount) |
| ML frameworks | scikit-learn, PyTorch |
| Deployment | Hugging Face Spaces (Gradio UI + FastAPI server) |

## Models Evaluated

Eight ML models were benchmarked end-to-end under homomorphic encryption to map the tradeoff surface between model expressiveness, plaintext accuracy, HE-friendliness, and encrypted inference latency:

1. **Logistic Regression** — the HE baseline: a single dot product plus a polynomial-approximated sigmoid.
2. **Linear SVM** — same HE complexity as LR, different decision boundary.
3. **Multinomial Naive Bayes** — linear in log-space, easy to evaluate homomorphically.
4. **Decision Tree** — approximated via a depth-bounded polynomial so every branch can be evaluated obliviously.
5. **Random Forest** — ensemble of HE decision trees; higher accuracy but linearly higher ciphertext multiplications.
6. **Gradient Boosting** — sequentially composed trees; accuracy gain comes at the cost of multiplicative depth.
7. **Shallow MLP** — one hidden layer with a square activation (an HE-friendly stand-in for ReLU).
8. **1D CNN** — convolutions over the transaction feature vector, evaluated as encrypted matrix multiplications.

Key finding: **linear models give up almost nothing** when moved under CKKS — they achieve near-plaintext F1 at single-digit millisecond encrypted inference latency. Tree-based and deeper neural models remain feasible, but each added multiplicative depth forces larger encryption parameters, which inflates both ciphertext size and latency.

## What the Project Demonstrates

- **End-to-end PPML in a browser-accessible demo** — anyone can open the frontend Space, encrypt a synthetic transaction, and watch the server return a fraud score without ever decrypting the input.
- **Concrete HE engineering tradeoffs** — polynomial approximation of non-linear activations, the multiplicative-depth budget of CKKS, and how those drive model selection.
- **A realistic threat model** — honest-but-curious server, trusted client device; the secret key never leaves the frontend.

## Links

- **Live demo (frontend)**: <https://huggingface.co/spaces/baktistr/he-fraud-frontend>
- **Backend service**: <https://huggingface.co/spaces/baktistr/he-fraud-backend>
- **Course**: CMU 17-735 — Engineering Privacy in Software
