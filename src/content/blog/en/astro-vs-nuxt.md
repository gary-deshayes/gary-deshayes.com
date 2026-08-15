---
title: "Astro vs Nuxt: how I pick my framework"
description: "Static blog or interactive SaaS? The framework choice changes everything. Here's my simple decision grid between Astro and Nuxt."
pubDate: 2026-08-01
lang: en
tags: ["Astro", "Nuxt", "Vue", "architecture"]
---

People often ask why I use both Astro and Nuxt. The answer is simple: **they are not the same tools.**

## Astro: when content is king

Astro is perfect for anything content-driven:

- Blogs and static sites (near-perfect Lighthouse scores by default)
- Zero client-side JavaScript unless you ask for it
- Content Collections to manage hundreds of Markdown articles
- Free, fast deployment on GitHub Pages

My network of SEO blogs runs entirely on Astro. Every article is a Markdown file, builds are instant, and uptime costs nothing.

## Nuxt: when you need interactivity

Nuxt shines as soon as there's application logic:

- Shared state, hybrid SSR/SSG, API routes
- Full Vue ecosystem (components, stores, mature i18n)
- Ideal for SaaS with auth, dashboards, complex forms

Verdiplan, my gardening SaaS, runs on Nuxt 3: user accounts, databases, protected routing — all native.

## My decision grid

| Criterion | Astro | Nuxt |
|---|---|---|
| Editorial content | ✅ Excellent | ⚠️ Possible |
| Interactive app | ❌ Hacky | ✅ Native |
| Performance by default | ✅ 100/100 | ⚠️ Depends |
| Learning curve | Gentle | Steep |
| Static deployment | ✅ Trivial | ⚠️ Adapter needed |

**In short:** content → Astro. Application → Nuxt. And when a project mixes both (a SaaS with a blog), I ship the blog on Astro and link them — each tool does what it does best.
