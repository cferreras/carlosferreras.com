---
title: 'My Development Setup in 2026'
description: 'The setup I use in 2026 to work without friction: hardware, software, services, and AI.'
pubDate: 2026-02-16
lang: en
author: 'Carlos Ferreras'
tags: ['productivity', 'setup', 'development', 'tools']
translationKey: 'dev-setup-2026'
---

# My Development Setup in 2026

There is no perfect setup. There is only a setup that lets you work without fighting your environment.

After years of trying tools, this is the setup I am comfortable with in 2026: fast, simple, and practical.

## Hardware

### Desktop

I work on a desktop built with a balance between performance and budget:

- **CPU**: AMD Ryzen 5
- **RAM**: 16GB DDR4
- **GPU**: Intel Arc with 12GB VRAM

Yes, 16GB of RAM is still enough for the kind of development I do.

### Monitors

I use **3+ monitors**. It may sound excessive, but in my case it improves focus a lot.

Typical layout:
- **Center**: code/editor
- **Left**: documentation and references
- **Right**: terminal, chat, and music

The key is not having more screens, but giving each one a clear purpose.

## Software

### Operating System: Windows 11

After trying Linux, I stayed on Windows. The development ecosystem is now mature enough to work comfortably.

I do not use WSL. I work natively with PowerShell.

### Editor: Zed

Probably the most controversial choice in my setup.

Zed is fast, stable, and stays out of my way. Why Zed instead of VS Code?

- Opens in under a second
- Zero lag while typing
- Integrated AI without being intrusive
- No plugin bloat slowing everything down

VS Code is still excellent, but Zed's responsiveness is hard to leave.

### Terminal: Windows Terminal + PowerShell

My base setup is Windows Terminal + PowerShell:

- **Theme**: dark minimal
- **Subtle transparency**: keeps visual context
- **Polished profile**: useful aliases and a clean environment

PowerShell is not bash, but with the right aliases and profile it feels natural.

### Browsers: Zen and Helium

I use both browsers depending on the task.

- **Zen**: separated sessions and more focused navigation
- **Helium**: lightweight support for specific tasks

Browser DevTools keep my development workflow consistent.

## Services

### Git Hosting

I use both, with a simple split:

- **GitHub** for public repos
- **GitLab** for private repos

This gives me visibility in public and privacy in private at no extra cost.

### Deploy

My current rule:

- **Vercel** for small projects or projects without a custom domain
- **Oracle Cloud VPS (free tier)** for more serious projects or projects needing more control

On the VPS I use **Docker + Dokploy** to deploy and manage services.

Vercel gives me speed to launch. The VPS gives me full flexibility when I need it.

### Domains

I register domains with **Cloudflare Registrar**.

Main reason: cost-price domains, no markup.

### Email and network

For email, I use **ProtonMail**.

For network and privacy, I use **AdGuard DNS** and **AdGuard VPN**.

## CLI Tools

### Git

The basics that cannot be missing. My config:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

Simple aliases that save seconds every day.

### AI CLIs

I use **Codex** and other AI CLIs as support, not autopilot.

For me, their value is:

- Boilerplate generation
- Explaining cryptic errors
- Function documentation
- Smarter rubber-duck debugging

AI suggests; you decide.

## AI

### Favorite models

These are the models I use the most right now:

- **gpt-codex-5.3**: my favorite for coding
- **Sonnet 4.6**: my preferred model for design, though it is expensive
- **glm-5**: a lower-cost alternative when I do not need the best model

Models change very fast, so by the time you read this post I am probably already using different ones.

## Productivity

### 1Password

It is still my central tool for personal and work security:

- Credentials for all services
- API keys and tokens
- Secure notes
- Important documents

With browser and CLI integration, I almost never think about passwords.

## Philosophy

### Dark minimal theme

Everything follows the same aesthetic:

- Dark background, but not pure black (#0a0a0a)
- Enough contrast without eye fatigue
- No visual distractions
- Consistency across applications

Minimalism is not having less for trend reasons. It is keeping only what adds value.

### Less is more

My setup evolves by removing, not adding:

- If I do not use a plugin for two weeks, I remove it
- If an app does not provide daily value, I remove it
- If a tool distracts me more than it helps, it goes

## What I do not use

For context, things I tried and dropped:

- **Obsidian/Notion**: 1Password covers my notes
- **Tiling window managers**: Windows 11 snap is enough
- **Multiple editors**: Zed for everything, no exceptions

## Conclusion

A setup is not a list of tools. It is a way of working.

Mine is based on four ideas:

1. **Speed**: every millisecond counts
2. **Simplicity**: fewer tools, fewer problems
3. **Consistency**: same experience across apps
4. **Focus**: remove distractions, do not add them

If your setup is different, perfect. What matters is that it helps you produce better, not that it looks good in a screenshot.
