# design.md — Aryan Shaw Portfolio
> Complete design system. Every decision documented. Build from this.

---

## 1. Design Philosophy

This portfolio is built on one core principle borrowed from Zara: **restraint is the flex**. No gradients, no accent colors, no decorative elements. The design earns its personality through typography, white space, texture, and contrast — not decoration.

Three words to test every decision against: **Clean. Editorial. Intentional.**

---

## 2. Color Palette

### Core Colors

| Token | Hex | Usage |
|---|---|---|
| `--black` | `#0d0d0d` | Left panel background, dark sections (Sketches, Contact) |
| `--card-bg` | `#181818` | ID card background |
| `--dark-border` | `#2e2e2e` | Borders on dark surfaces |
| `--dark-surface` | `#1a1a1a` | Elevated surfaces on dark bg |
| `--off-white` | `#f7f6f3` | Right panel background, main site background ✓ recommended |
| `--white` | `#ffffff` | Section backgrounds (Work, Now cells) |
| `--cream` | `#faf8f2` | Alternative — slightly warmer, avoid if unsure |
| `--light-border` | `#e8e7e3` | Dividers, card borders on light surfaces |
| `--light-border-2` | `#e0ddd8` | Softer borders, chip outlines |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#111111` | Headlines, nav brand, buttons on light bg |
| `--text-secondary` | `#555555` | Subheadings, secondary info |
| `--text-muted` | `#888888` | Body copy, descriptions |
| `--text-faint` | `#aaaaaa` | Placeholder text, metadata |
| `--text-ghost` | `#cccccc` | Muted hints, scroll cues, timestamps |
| `--text-on-dark` | `#ffffff` | Primary text on dark panels |
| `--text-on-dark-muted` | `rgba(255,255,255,0.4)` | Secondary text on dark panels |
| `--text-on-dark-ghost` | `rgba(255,255,255,0.2)` | Eyebrow labels on dark panels |

### Accent

| Token | Hex | Usage |
|---|---|---|
| `--accent-purple` | `#8b5cf6` | ID card name underline only — nowhere else |
| `--accent-purple-muted` | `#9b8cff` | Hover states if needed — use sparingly |
| `--accent-green` | `#22c55e` | Music player waveform bars only |

> **Rule:** Zero accent colors in the main layout. Purple appears on the ID card name only. Green appears on the music waveform only. Everything else is black, white, and gray.

### Dark Panel Texture Colors

```css
/* Diagonal line pattern — applied to all dark sections */
background: repeating-linear-gradient(
  -55deg,
  transparent,
  transparent 28px,
  rgba(255, 255, 255, 0.018) 28px,
  rgba(255, 255, 255, 0.018) 29px
);

/* Light ray — left panel, sketches section */
background: linear-gradient(
  to bottom,
  transparent 0%,
  rgba(255, 255, 255, 0.16) 35%,
  rgba(255, 255, 255, 0.07) 65%,
  transparent 100%
);
/* width: 2px, rotated -22deg, animated with opacity pulse */
```

---

## 3. Typography

### Font Families

```css
/* Import in index.html or _document.tsx */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap');

--font-serif:  'Playfair Display', Georgia, serif;
--font-sans:   'Inter', -apple-system, 'Helvetica Neue', sans-serif;
--font-mono:   'JetBrains Mono', 'Fira Code', monospace;
```

### Font Roles

| Font | Role | Why |
|---|---|---|
| Playfair Display | Hero titles, section titles, project names, card role | Editorial weight. The italic style creates tension — "engineer &" in italic vs upright. |
| Inter | Body copy, bio text, descriptions, nav labels | Clean workhorse. Readable at small sizes. |
| JetBrains Mono | Eyebrows, chips, nav links, CTAs, metadata, tags | Subtle nod to dev identity. Uppercase + tracked = polished. |

### Type Scale

#### Desktop

| Element | Font | Size | Weight | Color | Letter Spacing | Other |
|---|---|---|---|---|---|---|
| Hero title (H1) | Playfair Display | 38–48px | 400 | `#111` | -1.5px | Mix upright + italic lines |
| Section title (H2) | Playfair Display | 32–34px | 400 | `#111` | -1px | Italic on emphasis word |
| Project title | Playfair Display | 18–26px | 400 | `#111` | -0.5px | |
| Card role | Playfair Display | 13–15px | 400 | `#fff` | 0 | On dark card |
| Body / bio | Inter | 12–13px | 400 | `#666`–`#777` | 0 | Line height 1.9 |
| Nav links | JetBrains Mono | 9–10px | 400 | `#bbb` | 1px | Uppercase |
| Eyebrow labels | JetBrains Mono | 7.5–9px | 400 | `#bbb` | 2px | Uppercase, with short line before |
| CTA buttons | JetBrains Mono | 8.5–9px | 400 | `#fff` / `#111` | 1.5px | Uppercase |
| Chip / tag labels | JetBrains Mono | 7–8px | 400 | `#aaa`–`#999` | 1px | Uppercase |
| Section number | JetBrains Mono | 7–9px | 400 | `#ccc` | 1px | e.g. "01 / 04" |
| Sketch caption | JetBrains Mono | 6.5–8px | 400 | `rgba(255,255,255,0.7)` | 1px | Uppercase, on hover overlay |
| Footer / metadata | JetBrains Mono | 7–8px | 400 | `#ccc` | 1px | |

#### Mobile (scale down proportionally)

| Element | Size |
|---|---|
| Hero title | 26–30px |
| Section title | 18–22px |
| Body copy | 10–11px |
| Nav brand | 9px |
| All mono labels | -1px from desktop |

### Typography Rules

1. **Never use font-weight 700 on Playfair Display in the main layout** — reserve bold for decorative large numerals only (project numbers, section numerals)
2. **Always mix upright + italic in the hero headline** — one line italic creates editorial tension
3. **JetBrains Mono should always be uppercase when used for UI labels** — lowercase mono looks like code, not design
4. **Line height for body copy is always 1.8–1.9** — tighter feels cramped, looser feels unfinished
5. **Letter spacing on mono labels: 1.5–2px** — mono is already tight; tracking opens it up

---

## 4. Layout — The Split

### Desktop: Sticky Left / Scrollable Right

```
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   LEFT PANEL        │   RIGHT PANEL       │
│   position: sticky  │   overflow-y: auto  │
│   width: 50vw       │   width: 50vw       │
│   height: 100vh     │   height: 100vh     │
│   bg: #0d0d0d       │   bg: #f7f6f3       │
│                     │                     │
│   [ID Card]         │   [Nav]             │
│   [Music Player]    │   [Hero text]       │
│                     │   [CTAs]            │
│   [Section context] │   [Scroll cue]      │
│   [Scroll progress] │                     │
└─────────────────────┴─────────────────────┘
```

### The Divider Rule
**No divider between panels.** The hard edge where `#0d0d0d` meets `#f7f6f3` is the design statement. No border, no gradient fade, no gap. The color contrast does the work. Adding a line signals lack of confidence in the split.

### Left Panel Rules
- Always `background: #0d0d0d`
- Always has the diagonal line texture overlay
- Always has at least one light ray element
- Content centered horizontally and vertically
- ID card + music player are the only elements — no text, no nav
- A `2px` purple progress bar on the far left edge tracks scroll position
- A section context pill at the bottom updates as user scrolls (Hero / Work / About / etc.)

### Right Panel Rules
- Always `background: #f7f6f3` (off-white, not pure white)
- Padding: `44–48px` on all sides
- Nav sits at the very top, sticky within the right panel
- Hero content centered vertically in remaining space
- Chips + scroll cue pinned to bottom

### Section Layout (below the fold, full-width)

After the hero split, sections stack full-width. Alternating dark/light rhythm:

```
Hero        → dark left + light right (split)
Work        → light (#f7f6f3)
Sketches    → dark (#0d0d0d) — with texture
Cinema      → light (#f7f6f3)
Now         → white (#ffffff)
Contact     → dark (#0d0d0d) — with texture
```

Section padding: `80px 64px` on desktop, `36px 24px` on mobile.

---

## 5. Components

### ID Card

```
- Width: 176–188px (desktop), 90px landscape (mobile)
- Background: #181818
- Border: 0.5px solid #2e2e2e
- Border radius: 10–12px
- Photo area: height ~130px, background #1c1c1c
- Body padding: 12–14px
- Role: Playfair Display, 13–15px, #fff
- Name: JetBrains Mono, 9px, #8b5cf6, underlined ← only purple in UI
- Tags: JetBrains Mono, 7px, #444, uppercase
- Hover: rotate(2deg) scale(1.04), transition 350ms ease
- Lanyard: 2px wide, repeating-linear-gradient purple/white stripe
```

### Music Player (Glassmorphism Pill)

```
- Always on dark background — glassmorphism only works on dark
- Background: rgba(255,255,255,0.07)
- Backdrop filter: blur(16–20px)
- Border: 0.5px solid rgba(255,255,255,0.10)
- Border radius: 14–20px
- Waveform bars: #22c55e, animated scaleY
- On light background (nav pill variant): background rgba(0,0,0,0.06), border rgba(0,0,0,0.06)
```

### Buttons

```css
/* Primary */
background: #111111;
color: #f7f6f3;
border: none;
padding: 10–11px 20–22px;
border-radius: 2px;                 /* intentionally minimal — not rounded */
font-family: JetBrains Mono;
font-size: 8.5–9px;
letter-spacing: 1.5px;
text-transform: uppercase;

/* Ghost */
background: transparent;
color: #111111;
border: 0.5px solid #cccccc;
/* same sizing as primary */

/* Hover states */
Primary hover: background #333333
Ghost hover: border-color #888888
Transition: 200ms
```

### Chips / Tags

```css
font-family: JetBrains Mono;
font-size: 7.5–8px;
letter-spacing: 1px;
text-transform: uppercase;
color: #999999;
padding: 4px 8–9px;
border: 0.5px solid #e0ddd8;
border-radius: 2px;
background: transparent or #f0f0ec;
```

### Section Eyebrow Label

```css
/* always appears above section titles */
font-family: JetBrains Mono;
font-size: 8–9px;
letter-spacing: 2–2.5px;
text-transform: uppercase;
color: #bbbbbb;                     /* #bbb on light, rgba(255,255,255,0.25) on dark */
margin-bottom: 10–14px;

/* with leading line */
display: flex;
align-items: center;
gap: 8px;
::before { content: ''; width: 16–20px; height: 1px; background: #d0cec9; }
```

### Project Cards

```
Featured project:
- Full-width or 2-column split layout
- Dark image panel left, info right (mirrors hero split language)
- Image panel: same dark texture as left hero panel
- Info panel: background #ffffff, padding 32–40px

Small project grid:
- 2 or 3 column grid
- Border: 0.5px solid #e0ddd8
- Border radius: 4px
- Background: #ffffff
- Hover: background #f7f6f3
- Arrow indicator (↗) fades to #111 on hover
```

### Now Grid

```
3×2 grid (desktop) / 2×3 grid (mobile)
Gap: 1px — the 1px gap on #e8e7e3 background creates the grid lines
Border radius: 6px on wrapper, overflow hidden
Cell backgrounds alternate: #ffffff / #f7f6f3 / #0d0d0d
Dark cells always have noise texture overlay
```

---

## 6. Motion & Animation

### Entrance Animations (Hero)

```css
/* Staggered headline — each line staggers 80ms */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

Nav:          fadeIn 600ms, delay 100ms
Eyebrow:      fadeUp 600ms ease, delay 300ms
H1 line 1:    fadeUp 700ms cubic-bezier(0.16,1,0.3,1), delay 400ms
H1 line 2:    same, delay 480ms
H1 line 3:    same, delay 560ms
Bio:          fadeUp 600ms ease, delay 700ms
CTAs:         fadeUp 600ms ease, delay 820ms
Footer row:   fadeIn 600ms ease, delay 1000ms
ID Card:      translateY(40px) rotate(-3deg) → 0, 900ms cubic-bezier(0.16,1,0.3,1), delay 200ms
```

### Scroll Parallax

```js
// Left card — drifts slowly down as page scrolls
cardRig.style.transform = `translateY(${scrollY * 0.15}px)`;

// Right text — barely floats up, opposing the card
rightContent.style.transform = `translateY(${scrollY * -0.08}px)`;
```

### Scroll-In (Sections below fold)

```js
// Intersection Observer on each section
threshold: 0.15
animation: translateY(32px) → 0, opacity 0 → 1, 600ms ease-out
```

### Hover States

```css
ID Card:        rotate(2deg) scale(1.04), 350ms ease
Project cards:  border-color 200ms, background 200ms
Nav links:      color 200ms
Film posters:   overlay opacity 300ms
Sketch items:   overlay opacity 300ms
```

### Music Waveform

```css
@keyframes wave {
  0%, 100% { transform: scaleY(0.35); }
  50%       { transform: scaleY(1); }
}
/* Each bar gets a different animation-delay (0 to 0.2s) and base height */
```

### Light Ray Pulse

```css
@keyframes rayPulse {
  0%, 100% { opacity: 0.07; }
  50%       { opacity: 0.14; }
}
/* duration: 4–5s, ease-in-out, infinite */
```

---

## 7. Mobile Layout

### Breakpoint

```css
@media (max-width: 768px) { /* switch to mobile layout */ }
```

### Key Changes

| Desktop | Mobile |
|---|---|
| Sticky left panel | Dark banner at top of page (scrolls away) |
| Portrait ID card | Landscape ID card (photo left, info right, 90×62px) |
| Music player below card | Compact pill in the dark banner |
| Right side scrolls | Whole page scrolls |
| Nav in right panel | Sticky top nav bar |
| No bottom navigation | Bottom tab bar (5 items) |

### Mobile Dark Banner

```
Height: 90–110px max
Contains: horizontal ID card + music pill + tag chips
Background: #0d0d0d with noise texture + light ray
Does NOT sticky — scrolls away naturally
```

### Bottom Tab Bar

```css
position: sticky;
bottom: 0;
background: rgba(247,246,243,0.95);
backdrop-filter: blur(16px);
border-top: 0.5px solid #e8e7e3;
padding: 10px 0 16px;

/* 5 tabs: Home · Work · Sketches · Cinema · Now */
/* Active indicator: dot (Home) or line (others) in #111 */
/* Inactive: #cccccc */
```

---

## 8. Sketch Section

```
Background: #0d0d0d (dark — same as hero left panel)
Texture: diagonal lines + light ray (continuity with hero)
Grid: CSS columns: 4 on desktop, 2 on mobile
Column gap: 10px
Images: raw scans, B&W, no filters applied
Overlay on hover: background rgba(0,0,0,0.7), caption in JetBrains Mono
Caption format: "MEDIUM · TYPE" e.g. "FIGURE STUDY · CHARCOAL"
```

---

## 9. Cinema Section

```
Background: #f7f6f3 (light)
Top grid: asymmetric — featured film 2fr, others 1fr each
All-time: 5 films, film poster dark gradient placeholders → swap with TMDB API
Recently watched: 5–6 column row of smaller posters
Poster gradient style: dark gradient unique per film (no two same hue)
Hover: gradient overlay reveals title + director + year
Footer: "X films logged this year · Letterboxd profile ↗"
Data source: Letterboxd RSS feed (auto-updates)
```

---

## 10. Now Section

```
Background: #ffffff
Grid: 3 columns × 2 rows (desktop), 2×3 (mobile)
Grid lines: 1px gap on #e8e7e3 background (not actual borders)
Border radius: 6px on wrapper

Cells:
  Building    → #f7f6f3
  Listening   → #0d0d0d (dark, with music waveform)
  Watching    → #ffffff
  Reading     → #ffffff
  Sketching   → #f7f6f3
  Location    → #0d0d0d (dark)

Update frequency: manually, every few weeks
Show "Last updated · [Month Year]" at bottom right
```

---

## 11. Contact Section

```
Background: #0d0d0d (dark — closes the page on same note it opened)
Texture: diagonal lines + light ray
Links as rows: Name (JetBrains Mono, uppercase) + value (muted) + ↗
Border: 0.5px solid rgba(255,255,255,0.08)
Hover: border-color rgba(255,255,255,0.25)

Include:
  Email
  GitHub
  LinkedIn
  Letterboxd     ← personality differentiator, include this

Footer line: "Aryan Shaw · 2026 · Built with intention."
```

---

## 12. Do / Don't

### Do
- Use white space aggressively — padding should feel generous
- Mix Playfair upright and italic within a single headline
- Let the black/off-white contrast do the structural work
- Keep all UI labels in uppercase JetBrains Mono
- Use 0.5px borders everywhere — 1px feels heavy
- Keep border-radius minimal: 2px on buttons/chips, 4–6px on cards, 10–12px on the ID card

### Don't
- Add accent colors anywhere outside the ID card name and music waveform
- Use pure `#ffffff` as the main background — use `#f7f6f3`
- Add a divider line between the left and right panels
- Use border-radius > 12px anywhere (except music pill: 14–20px)
- Add a skills list section — projects show your stack better
- Add a CV / timeline section
- Use font-weight 500 or 700 on body copy
- Add hover effects that involve movement > 4px translate or scale > 1.05
- Spread the noise texture to the light/white sections

---

## 13. Quick Reference Card

```
COLORS
  Dark bg:        #0d0d0d
  Light bg:       #f7f6f3
  White surface:  #ffffff
  Primary text:   #111111
  Body text:      #666666 / #777777
  Muted text:     #aaaaaa / #bbbbbb
  Border light:   #e8e7e3 / #e0ddd8
  Border dark:    #2e2e2e
  Accent purple:  #8b5cf6  ← ID card name only
  Accent green:   #22c55e  ← music waveform only

FONTS
  Headlines:  Playfair Display, 400, italic mix
  Body:       Inter, 400
  Labels/UI:  JetBrains Mono, 400, UPPERCASE

SPACING
  Section padding desktop: 80px 64px
  Section padding mobile:  36px 24px
  Right panel padding:     44–48px
  Grid gap (now cells):    1px
  Component gap:           6–10px

BORDERS
  Weight: always 0.5px
  Radius: 2px buttons, 4px cards, 10–12px ID card, 14–20px music pill

MOTION
  Entrance stagger: 80ms between headline lines
  Scroll parallax: card 0.15×, text -0.08×
  Hover transition: 200–350ms ease
  Waveform: 0.8–1.3s ease-in-out infinite
```