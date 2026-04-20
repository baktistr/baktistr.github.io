---
title: "picoCTF Redesign — Cybersecurity Learning Platform"
description: "A usability-driven redesign of picoCTF, built through iterative user research, heuristic evaluation, and formal usability testing as the final project for CMU 17-734 — Usable Security & Privacy."
url: "https://cybersecurity-learning-platform.vercel.app/"
tags: ["usability", "ux", "hci", "usable-security", "picoctf", "cybersecurity-education", "cmu", "17-734"]
featured: true
status: "completed"
---

# picoCTF Redesign — Cybersecurity Learning Platform

A usability-focused redesign of [picoCTF](https://picoctf.org/), reimagining the learner experience with the goal of making cybersecurity education more approachable for newcomers while preserving the depth that existing users rely on. Built as the final project for **CMU 17-734 — Usable Security & Privacy**.

The project treats picoCTF as a usability problem first and a security-education problem second: if learners can't find, start, or make progress on a challenge, the quality of the challenge itself doesn't matter.

## Why Redesign picoCTF?

picoCTF is one of the most widely used entry points to practical cybersecurity education, but the existing interface carries a lot of implicit assumptions about its users — familiarity with CTF conventions, comfort with terminal-style interactions, and tolerance for sparse navigation. Those assumptions work for returning competitors and classroom cohorts, but they raise the floor for self-directed beginners who might otherwise make it through the first few challenges.

The redesign goal was to **lower that floor without lowering the ceiling**: keep the challenges, categories, and core workflow intact while rebuilding the surfaces learners actually touch.

## Design Process

Following the usable-security methodology emphasized in 17-734:

1. **Heuristic evaluation** of the current picoCTF site against Nielsen's usability heuristics, surfacing issues like unclear entry points, inconsistent status feedback, and low discoverability of learning pathways.
2. **User interviews** with representative learners to understand where the current flow breaks down in practice.
3. **Task analysis** — mapping the critical user journeys (register → browse → start a challenge → submit flag → track progress) to identify where users got stuck.
4. **Prototype and iterate** — building redesigned screens, then validating each iteration against the same task scenarios.
5. **Usability testing** — observing real users completing the core tasks on the redesign and measuring where the friction moved.

## Redesign Focus Areas

- **Onboarding and first-challenge path** — shortening the distance between signup and "I just solved something".
- **Challenge discovery** — clearer categorization, difficulty indicators, and suggested learning paths.
- **Progress visibility** — surfacing what the user has learned, not just what they've scored.
- **Information architecture** — consistent navigation and labeling across pages, reducing cognitive load.

## Stack

Built as a static web prototype deployed on Vercel for usability testing.

## Links

- **Live prototype**: <https://cybersecurity-learning-platform.vercel.app/>
- **Course**: CMU 17-734 — Usable Security & Privacy
- **Original platform**: <https://picoctf.org/>
