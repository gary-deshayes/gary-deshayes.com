---
title: "Shipping a solo SaaS: 5 lessons from my first product"
description: "Verdiplan is my first solo SaaS. Here's what I learned about scope, data persistence, SEO and shipping speed."
pubDate: 2026-08-10
lang: en
tags: ["SaaS", "Nuxt", "Laravel", "lessons"]
---

Shipping a SaaS alone is a marathon of decisions. These are the 5 lessons Verdiplan, my first product, taught me.

## 1. Cut the scope. Really.

My first spec was 4 pages long. By launch, I had cut 60% of the planned features. Result: a solid product, shipped in 3 weeks instead of 3 months. **Features you cut before launch are features you'll never have to support.**

## 2. Decide data persistence early

For an MVP, an ephemeral database is fine during development. But the day your first users show up, persistence becomes critical. I migrated to Turso with migrations running at server boot — simple, and it works the same in prod and locally.

## 3. SEO starts on day one

A SaaS is also a public website. I set up the content structure (landing, blog, product pages) before even finishing the app. **Organic traffic takes months to arrive: the earlier you publish, the earlier you harvest.**

## 4. Automate everything repetitive

Deployment, migrations, uptime checks, blog posts: anything done twice should be done by machines. A well-tuned CI/CD pipeline gives you hours back every week.

## 5. Ship fast, iterate with data

One real user is worth more than ten features imagined in a vacuum. I launched with the bare minimum, then let data (and user requests) drive the next priorities.

---

Shipping your own SaaS? My advice: pick a launch date 30 days out, cut the scope, and ship it. You'll learn the rest along the way.
