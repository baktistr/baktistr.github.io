---
title: "Markdown Style Preview"
description: "A visual checklist of Markdown elements in the current blog theme"
pubDate: 2026-09-21
category: Demo
tags: ["markdown", "style-preview", "demo"]
draft: true
---

This draft is a visual test page, not a finished article. Compare it in dark and light mode, on desktop and mobile, to decide which styles need work. The page title above is the article's level-one heading.

## Headings and paragraphs

This is a normal paragraph. It includes a little more text so you can judge line length, line height, and spacing. A good reading experience should still feel comfortable when a paragraph wraps across several lines on a narrow screen.

This is a second paragraph, separated by a blank line. The gap between paragraphs is part of the current design.

### Level-three heading

This heading appears in the table of contents, alongside level-two headings.

#### Level-four heading

Level-four headings currently rely mostly on browser defaults, so this is a useful comparison point.

##### Level-five heading

Smaller headings can reveal whether the visual hierarchy is clear enough.

###### Level-six heading

This is the smallest Markdown heading.

## Inline text

Plain text, **bold text**, *italic text*, ***bold italic text***, and ~~strikethrough text~~ can all appear in one sentence. Here is some `inline code`, an [internal link](/blog/), an [external link](https://www.astro.build/), and a [link to a heading](#tables).

Escaped punctuation stays literal: \*not italic\* and \_not underlined\_. A manual line break follows this sentence.\
The next line begins without starting a new paragraph.

## Lists

### Unordered and nested

- First bullet
- Second bullet with **emphasis** and `code`
  - Nested bullet
  - Another nested bullet with a [link](/about/)
- Third bullet

### Ordered

1. First step
2. Second step
   1. Nested numbered step
   2. Another nested step
3. Third step

### Task list

- [x] Completed item
- [ ] Incomplete item
- [ ] A longer item that may wrap onto a second line on a phone

## Quotes and separators

> A short blockquote should stand apart from the surrounding paragraphs.

> A longer quotation can span multiple lines. It gives you a way to compare the left border, italic text, color, and spacing.
>
> A second paragraph inside the same quotation shows how nested spacing behaves.

> Outer quote
>
> > Nested quote

### GitHub-style alerts (not enabled yet)

These markers currently appear as text inside ordinary blockquotes. This makes it easy to compare the current rendering before adding a callout extension.

> [!NOTE]
> A standard GitHub note.

> [!NOTE] Custom title
> This exact syntax is not currently recognized as a styled alert.

> [!WARNING]
> A standard GitHub warning.

> [!SUCCESS] Title
> A custom success alert with a title.

> [!DANGER]
> A custom danger alert.

> [!INFO]
> A custom info alert.

The line below is a horizontal rule:

---

And this paragraph follows the rule.

## Code blocks

This JavaScript example tests syntax highlighting and the light/dark code themes:

~~~javascript
const posts = ["travel", "security", "books"];

for (const [index, post] of posts.entries()) {
  console.log(`${index + 1}. ${post}`);
}
~~~

A shell example shows another language, while the long line tests horizontal scrolling:

~~~bash
pnpm build
printf 'A deliberately long line for checking horizontal scrolling in code blocks: 0123456789 0123456789 0123456789 0123456789 0123456789\n'
~~~

An unlabelled fence shows plain text without language highlighting:

~~~
Plain text
  Indented line
No syntax highlighting expected
~~~

## Tables

| Element | Left aligned | Centered | Right aligned |
| :--- | :--- | :---: | ---: |
| Text | ordinary cell | **bold** | 42 |
| Code | `inline` | [link](/about/) | 3.14 |
| Longer content | A sentence that makes this table wider on small screens | *italic* | 1,024 |

The current blog layout wraps wide tables so they can scroll horizontally on small screens.

## Images and captions

The image below uses an existing local site asset inside a semantic HTML figure. The caption has its own styling, separate from normal paragraphs:

<figure>
  <img src="/logo_blog.png" alt="The site's square blog logo" width="410" height="410" loading="lazy" decoding="async" />
  <figcaption>This smaller caption is muted and set off with a left border. Compare it with the normal paragraph above.</figcaption>
</figure>

## Math

Inline math should sit within a sentence, such as $E = mc^2$ or $a^2 + b^2 = c^2$.

Display math should have its own block:

$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}
$$

## Footnote

This sentence includes a footnote reference.[^preview-note]

[^preview-note]: This is a sample footnote. Check the reference link, return link, and spacing at the bottom of the article.

## Raw HTML elements

These are HTML rather than standard Markdown. They expose any browser-default styling that the theme does not currently customize: <mark>highlighted text</mark>, <kbd>Ctrl</kbd> + <kbd>K</kbd>, H<sub>2</sub>O, and x<sup>2</sup>.

<details>
  <summary>Expandable details</summary>
  <p>This content appears when the disclosure is opened.</p>
</details>

## Final spacing check

This last section helps show the space before the tag footer. If something looks inconsistent, this page can serve as a reference while adjusting the site's typography rules.
