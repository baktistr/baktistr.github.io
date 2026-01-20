# Cybersecurity Blog & Documentation

Personal blog and technical documentation for cybersecurity writeups, guides, and notes.

**Live:** https://baktistr.github.io

---

## Tech Stack

| Component | Tool |
|-----------|------|
| Framework | Astro 5 |
| Styling | Tailwind CSS v4 |
| Content | MDX + Content Collections |
| Search | Pagefind |
| Deployment | GitHub Pages |
| Package Manager | pnpm |

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server (localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Base components (Button, Card, Badge)
│   ├── docs/         # Docs-specific (Sidebar, TOC, Breadcrumb)
│   └── blog/         # Blog-specific (PostCard, TagList)
├── layouts/          # Page layouts
├── pages/            # Routes
├── content/          # MDX content
│   ├── docs/         # Technical docs, guides, cheatsheets
│   └── blog/         # Blog posts
├── styles/           # Global styles
└── lib/              # Utilities
```

---

## Content

### Documentation
- OSCP notes and methodologies
- Pentesting tools cheatsheets
- Lab writeups and CTF solutions
- Technical guides

### Blog
- Learning journey updates
- Career thoughts
- Random technical posts

---

## Deployment

Push to `main` branch triggers GitHub Actions workflow that builds and deploys to GitHub Pages.

```
.github/workflows/deploy.yml
```