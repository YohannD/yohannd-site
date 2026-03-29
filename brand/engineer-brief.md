# Engineer Design Brief — Yohann Doillon Personal Website

**For:** Engineer (YDB-6)
**From:** Creative Director (YDB-9)
**Date:** 2026-03-29

This brief gives you everything you need to implement the visual system. All color tokens are already committed to `src/app/globals.css`. This document covers intent, hierarchy, and component-level guidance.

---

## The Feel

The visual equivalent of a well-structured Notion doc. Clean, dense with signal, no noise.

Think: a Bloomberg terminal designed by someone who reads Butterick's Practical Typography. Dark. Technical. Authoritative — but readable, not aggressive.

**Not:** dark mode for its own sake. Not hacker aesthetic. Not startup neon.

---

## Color Application

Colors are defined in `src/app/globals.css` as CSS custom properties (`--color-brand-*` and `--color-neutral-*`).

| Element | Token | Hex |
|---------|-------|-----|
| Page background | `neutral-950` | `#0A1220` |
| Dark card / surface | `neutral-900` | `#121B28` |
| Elevated surface | `neutral-800` | `#1F2533` |
| Border / divider | `neutral-700` | `#363330` |
| Primary heading | `neutral-50` | `#F4F1EC` |
| Body text | `neutral-100` | `#E8E2DA` |
| Secondary text | `neutral-200` | `#D0C9BE` |
| Muted / caption | `neutral-400` | `#8D8476` |
| Links / CTAs | `brand-400` | `#0DD4C2` |
| Link hover | `brand-300` | `#3DE5D5` |
| Accent border | `brand-600` | `#009486` |
| Button (primary) | `brand-500` | `#00B8A6` |

**Rules:**
- Teal is the accent — use it for interactive elements and 1-2 focal points per page, not decoration
- No gradients. No box shadows with color. Flat.
- The grid/card pattern in the profile banner (2×2 squares) can be used as a subtle watermark motif on hero sections

---

## Typography

Fonts are set via `--font-sans` (Inter) and `--font-mono` (JetBrains Mono) in `globals.css`.

```css
/* Already configured — reference only */
--font-sans: "Inter", system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

Load Inter from Google Fonts or self-host. Weights needed: 400, 600.

**Type scale (implement as utility classes or Tailwind config):**

| Class / Level | Size | Weight | Line Height |
|---------------|------|--------|-------------|
| Display / hero | 3rem | 600 | 1.15 |
| H1 | 2rem | 600 | 1.2 |
| H2 | 1.5rem | 600 | 1.3 |
| H3 | 1.25rem | 600 | 1.35 |
| Body | 1rem | 400 | 1.75 |
| Small | 0.875rem | 400 | 1.6 |
| Caption / label | 0.75rem | 400 | 1.5 |
| Code | 0.875rem (JetBrains Mono) | 400 | 1.6 |

**Heading tracking:** `-0.01em` to `-0.02em` — tighter than browser default.
**All-caps labels:** use `letter-spacing: 0.08em` for small caps/labels.

---

## Layout

- Max content width: `1200px`, centered
- Reading column (blog/prose): `65ch` max
- Horizontal padding (mobile): `1.5rem`
- Horizontal padding (desktop): `2rem`–`3rem`

**Spacing scale (4px base):**
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`

---

## Navigation

- Sticky, minimal
- Background: `neutral-950` with 1px bottom border in `neutral-700`
- Logo: "Yohann Doillon" wordmark (Inter 600, `neutral-50`)
- Nav links: `neutral-400`, hover `neutral-100`
- Active link: `brand-400`
- No hamburger animation overkill — simple slide or fade

---

## Page-Level Guidance

### Homepage / Hero
- Full-width, dark navy background
- Name large (Display size), title below in `neutral-400`
- 1–2 sentence positioning statement in body size
- Single CTA button (primary style: `brand-500` bg, `neutral-950` text)
- Optional: subtle 2×2 grid mark (from `brand/profile-banner.svg`) as a right-side decorative element — low opacity, `neutral-800` stroke

### Blog / Writing
- Card grid: `neutral-900` bg, `neutral-700` border, 12px radius
- Post titles: `neutral-50`, hover `brand-400`
- Metadata (date, reading time): `neutral-400`, monospace font
- On hover: border shifts to `brand-600`

### About Page
- Pull the 150-word bio from the brand brief
- Could include a profile photo on the right (see photography direction in `brand/visual-identity.md`)
- Thought leadership pillars as a clean list (not cards — a numbered list with `brand-400` numbers)

### Contact
- Keep it minimal. Email link in teal. No form unless necessary.

---

## Component Patterns

### Accent Bar (use for section headers and pull quotes)
```
3px wide × variable height rectangle in brand-400
Positioned to the left of key content blocks
```

### Code Callout
```
Background: neutral-800
Border-left: 3px brand-600
Font: JetBrains Mono
Text: neutral-200
```

### Tag / Label Chip
```
Background: neutral-800
Border: neutral-700 (1px)
Text: neutral-300, 12px, letter-spacing 0.05em
Hover: border neutral-500
```

### Blockquote
```
Border-left: 3px brand-600
Padding-left: 1.25rem
Text: neutral-400, italic
```

---

## Profile Banner

The LinkedIn banner SVG is at `brand/profile-banner.svg` (1584×396). You can export it to PNG for use on LinkedIn. The geometric motif (2×2 grid of rounded squares, top-left cell filled in teal) can be reused as a subtle element on the website.

---

## What to Avoid

- No gradients on anything
- No colored box shadows
- No rounded corners above 12px on cards; 8px on buttons
- No full-width colored background sections (use dark navy variants instead)
- No animation for its own sake — transitions only if they aid comprehension
- No typefaces other than Inter and JetBrains Mono
- No stock imagery

---

## Reference Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | All color tokens + typography base |
| `brand/visual-identity.md` | Full design system documentation |
| `brand/linkedin-templates.md` | Content templates (voice reference) |
| `brand/profile-banner.svg` | LinkedIn banner (1584×396) |
| `brand/engineer-brief.md` | This file |
