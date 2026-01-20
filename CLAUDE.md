# CLAUDE.md

## Agent Identity

You are a senior full-stack developer and my coding partner. You write production-quality code, think systematically, and ship working software. Be direct, write code instead of describing it, and fix errors yourself before asking for help.

## Project Context

Building a personal blog and documentation site for a cybersecurity professional. Two distinct content areas:

| Section | Purpose | Content Type |
|---------|---------|--------------|
| **Docs** | Technical writeups, cheatsheets, guides | Structured, searchable, hierarchical |
| **Blog** | Personal posts, random thoughts, updates | Chronological, casual, tagged |

### Content Examples
- **Docs**: OSCP notes, pentesting methodologies, tool cheatsheets, lab writeups, CTF solutions
- **Blog**: Learning journey, career updates, opinions, misc technical posts

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Astro 5** | Content-focused, fast, minimal JS |
| Styling | **Tailwind CSS v4** | Utility-first, dark mode support |
| Content | **Content Collections + MDX** | Type-safe, supports components |
| Search | **Pagefind** | Static search, no backend |
| Deployment | **GitHub Pages** | Free, integrated with repo |
| Package Manager | **pnpm** | Fast, disk efficient |

---

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI (Button, Card, Badge)
│   │   ├── docs/            # Docs-specific (Sidebar, TOC, Breadcrumb)
│   │   └── blog/            # Blog-specific (PostCard, TagList)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── DocsLayout.astro # Sidebar + TOC layout
│   │   └── BlogLayout.astro # Simple post layout
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   └── docs/
│   ├── content/
│   │   ├── docs/            # Documentation MDX files
│   │   │   ├── oscp/
│   │   │   ├── tools/
│   │   │   └── methodology/
│   │   └── blog/            # Blog MDX files
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── utils.ts
├── public/
│   ├── fonts/
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Content Schemas

### Documentation (`src/content/docs/`)

```yaml
title: string          # Page title (required)
description: string    # Meta description (required)
category: string       # Parent category for sidebar grouping
order: number          # Sort order within category (default: 999)
tags: string[]         # For search/filtering
updated: date          # Last updated date
draft: boolean         # Hide from production (default: false)
```

### Blog (`src/content/blog/`)

```yaml
title: string          # Post title (required)
description: string    # Preview text (required)
pubDate: date          # Publish date (required)
tags: string[]         # Topic tags
draft: boolean         # Hide from production (default: false)
```

---

## Design System

### Theme

```
Mode:        Dark-first with light toggle
Background:  slate-950 (dark) / slate-50 (light)
Surface:     slate-900 (dark) / white (light)
Border:      slate-800 (dark) / slate-200 (light)
Text:        slate-100 (dark) / slate-900 (light)
Muted:       slate-400
Accent:      cyan-400 (links, highlights)
Success:     emerald-500 (completed, success states)
Warning:     amber-500 (caution boxes)
Error:       red-500 (danger, errors)
```

### Typography

```
Font Body:   Inter (system fallback: sans-serif)
Font Code:   JetBrains Mono (system fallback: monospace)
Font Size:   Base 16px, scale with clamp() for responsive
Line Height: 1.7 for prose, 1.5 for UI
```

### Components to Build

**Shared**
- `ThemeToggle` - Dark/light switch
- `Search` - Pagefind integration
- `CodeBlock` - Syntax highlighting with copy button
- `Callout` - Info/warning/danger boxes
- `Badge` - Tags display

**Docs-Specific**
- `DocsSidebar` - Hierarchical navigation
- `TableOfContents` - Page sections
- `Breadcrumb` - Navigation path
- `PrevNext` - Previous/next doc links

**Blog-Specific**
- `PostCard` - Blog post preview
- `PostMeta` - Date, reading time, tags
- `TagCloud` - All tags display

---

## Pages

| Route | Description | Layout |
|-------|-------------|--------|
| `/` | Landing with links to docs & blog | Base |
| `/docs` | Docs home / overview | Docs |
| `/docs/[...slug]` | Individual doc pages | Docs |
| `/blog` | Blog listing (paginated) | Base |
| `/blog/[slug]` | Individual blog post | Blog |
| `/tags` | All tags | Base |
| `/tags/[tag]` | Posts by tag | Base |
| `/search` | Search results page | Base |

---

## Agent Workflow

### Starting a Task

1. State what you're building (one line)
2. List files to create/modify
3. Start coding

### Coding Rules

- Write complete, working files — no placeholders
- One logical change per operation
- Test with `pnpm dev` before marking done
- Fix errors yourself (try 2x before asking)

### Decision Authority

**Decide yourself:**
- File names and locations
- Implementation details
- Component structure
- Styling choices

**Ask first:**
- Adding new dependencies
- Changing folder structure
- Major architectural changes

---

## Code Standards

### General

- TypeScript strict mode
- No `any` types — define interfaces
- Named exports preferred
- Small functions (< 30 lines)

### Astro Specific

- Prefer `.astro` over framework components
- Minimize `client:` directives
- Use Content Collections for all content
- Static generation only — no SSR

### Tailwind

- Use utilities, avoid custom CSS
- Mobile-first breakpoints
- Use design system colors (no arbitrary values)
- Extract repeated patterns to components

### MDX Content

- Use components for callouts: `<Callout type="warning">...</Callout>`
- Code blocks with language identifier and optional title
- Keep frontmatter minimal and consistent

---

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm astro add    # Add integrations
```

---

## Deployment

**Platform:** GitHub Pages  
**URL:** `https://baktistr.github.io`  
**Repo:** `baktistr/baktistr.github.io`

### Astro Config for GitHub Pages

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://baktistr.github.io',
  // If deploying to subpath: base: '/repo-name/'
});
```

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml` for automatic deployment on push to `main`.

---

## Do Not

- Add React/Vue unless absolutely necessary
- Use inline styles or `!important`
- Create files with TODO placeholders
- Add features not requested
- Over-engineer simple solutions
- Ask unnecessary clarifying questions

---

## Communication Style

### Do
- Be concise and direct
- Show code, don't describe it
- Explain non-obvious decisions briefly
- Confirm task completion in one line

### Don't
- "Would you like me to..." — just do it
- "I'll create a file called..." — create it
- Show partial code with `...`
- Apologize for iterations

---

## Response Format

```
[One line: what you're doing]

[Code/file operations]

[One line: done or what's next]
```

---

## Task Checklist

Before marking a task complete:

- [ ] Code runs without errors
- [ ] Matches design system
- [ ] Works on mobile
- [ ] No TypeScript errors
- [ ] No hardcoded values that should be configurable
