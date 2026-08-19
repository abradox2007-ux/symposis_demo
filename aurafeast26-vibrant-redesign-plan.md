# AuraFeast'26 — Vibrant Redesign Plan

**Subject:** AuraFeast'26, PSVPEC's inter-college symposium site. Current design is a restrained editorial look (paper/ink/signal-blue, Archivo Expanded + Inter). This plan keeps the existing content, structure and dark-mode system intact, and layers in a colorful, high-energy visual identity that still meets AA contrast and respects reduced motion.

**Signature idea:** a *poster-misregistration* effect on the H1 — two offset colour layers (magenta + cyan) drift gently behind the ink headline, like a screen-printed festival poster that's slightly out of register. It's the one bold move; everything else (nav, cards, forms) stays disciplined so the signature reads clearly instead of competing with a dozen effects.

---

## 1. Typography

Three pairings, ranked by recommendation. All are Google Fonts (free, variable where noted).

### Option A — Recommended: Bricolage Grotesque + Plus Jakarta Sans + Space Mono
| Role | Font | Weight | Usage |
|---|---|---|---|
| Display (H1–H3, brand wordmark) | **Bricolage Grotesque** (variable) | 700–800 | Headlines, section titles, nav brand. Its slightly warped grotesque forms feel handmade/poster-like without losing legibility — good match for a "feast" theme that's still a tech event. |
| Body | **Plus Jakarta Sans** | 400–600 | Paragraphs, nav links, form labels, buttons. Clean and neutral so the display face keeps the personality. |
| Mono / data | **Space Mono** | 400, 700 | Eyebrows, meta-panel labels, countdown, event codes. Its retro-typewriter feel doubles as the "ticket stub" texture. |

### Option B — Clash Display + Satoshi + JetBrains Mono
| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | Clash Display | 600–700 | Headlines only — geometric, confident, reads more "tech conference" than "festival." |
| Body | Satoshi | 400–500 | Body copy, cards. |
| Mono | JetBrains Mono | 400–500 | Labels, code-like tags (keeps continuity with the current IBM Plex Mono). |

### Option C — Unbounded + Manrope + IBM Plex Mono (closest to current system)
| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | Unbounded | 600–800 | Very bold, blocky display for hero only — highest visual impact, use sparingly (one or two words per view). |
| Body | Manrope | 400–600 | Everything else. |
| Mono | IBM Plex Mono *(already loaded)* | 400–500 | No change needed — zero-cost swap since it's already in the site. |

**Usage rules (apply to whichever pairing is chosen):**
- Display face: H1/H2 only, plus the nav wordmark and card titles ≥ 18px. Never body text.
- Body face: paragraphs, nav links, buttons, form inputs, 14–17px.
- Mono face: eyebrows/kickers, meta-panel labels, countdown digits, event IDs — always uppercase + letter-spacing 0.04–0.06em.
- Cap the display face at 2 weights in production (e.g. 700 heading / 800 hero) to keep the font payload small.

### Font loading strategy
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```
- `&display=swap` is mandatory — it shows the fallback system font immediately (FOUT) instead of invisible text (FOIT), so the hero headline is readable within milliseconds even on slow connections.
- Only load the weights actually used (listed above) — every extra weight is a separate file download.
- Add a system-font fallback stack matching the metrics roughly: `font-family: 'Bricolage Grotesque', 'Arial Narrow', system-ui, sans-serif;` — reduces the layout shift (CLS) when the webfont swaps in.
- Because the two org logos and the hero headline are the largest LCP candidates, `preconnect` both Google Fonts origins in `<head>` before any other third-party script (the current site already does this correctly — keep it).
- Drop `Rubik Bubbles` (currently loaded but rarely distinctive at scale) unless it's used for one specific playful accent word — a whole extra font family for occasional use isn't worth the request.

---

## 2. Colour & theming

Palette described as 6 named hex values, verified against WCAG 2.1 contrast math (not eyeballed):

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#FBF7FF` | `#0B0714` | Background |
| `--ink` | `#17121F` | `#F3EEFF` | Primary text — 17.4:1 / 17.5:1 (AAA) |
| `--primary` | `#7C3AED` | `#A78BFA` | Electric violet — CTAs, links, focus ring — 5.4:1 / 7.3:1 (AA/AAA) |
| `--secondary` | `#B3106A` | `#FF6FB0` | Poster magenta — headings accents, tags — 6.2:1 / 7.7:1 (AA/AAA) |
| `--accent` | `#C6FF00` | `#D4FF3D` | Electric lime — chips, eyebrow pills, button shadow (decorative, paired with `--ink` text: 15.5:1) |
| `--cyan` | `#006E7A` | `#4DE6F2` | Teal cyan — secondary links, info tags — 5.7:1 / high (AA/AAA) |

Two extra **decorative-only** brights (`--secondary-br: #FF2E88`, `--cyan-br: #00E5FF`) are used solely for the poster-offset headline layers and gradient rings — never for text that needs to be read, so they're exempt from the AA requirement.

All ratios above were computed programmatically against the actual paper/dark backgrounds — every text-bearing colour clears **AA (4.5:1)** at minimum, most clear **AAA (7:1)**.

**High-contrast fallback:** honour `prefers-contrast: more` by widening the palette to pure black/white and removing the decorative poster-offset layers (see Section 5 code).

---

## 3. Layout & logo treatment

**Logo sizing**
- Nav logo: `clamp(36px, 3vw + 20px, 48px)` — scales fluidly between mobile and desktop instead of the current fixed `height:38px`.
- Org-strip badges (footer + about + hero): `clamp(56px, 5vw, 76px)`, up from the current fixed size — "expand main logos" means giving them room to grow on larger viewports, not just enlarging the fixed pixel value.
- Wrap every logo in a fixed-aspect badge container (`border-radius:20px`, 1px border, soft shadow) so photographic/JPEG logo files (the current `.jpeg` assets) sit on a clean card rather than showing white/off-white JPEG background seams against the new colourful page background. This is the single highest-leverage fix for "use logos more fluidly" given the current assets aren't transparent PNGs.
- If possible, request transparent-background PNG/SVG versions of `psvpec_logo` and `prince_logo_shield` — flag this as a Phase 1 asset dependency, since a JPEG logo on a vibrant background will always show a visible rectangle.

**Motion rules for logos**
- Idle: gentle float, `translateY(±6px) rotate(∓2deg)` over 5s, staggered per badge (`animation-delay: -2.5s` on the second) so they don't move in lockstep.
- Hover: pause the float, scale to 1.05, translateY(-4px), 0.25s ease — signals interactivity without a jarring jump.
- Nav brand badge: static conic-gradient ring border (no spin) — reserve rotation for the two decorative background layers only, so nothing in the primary nav is in constant motion (accessibility + it's the thing people fixate on while reading nav links).

**Responsive type & spacing**
- Fluid type scale via `clamp()` for every display size — hero H1 `clamp(46px, 8vw, 96px)`, section H2 `clamp(28px, 4vw, 44px)`, eyebrow `12.5px` fixed (mono, doesn't need to scale).
- Section vertical rhythm: `clamp(56px, 8vw, 108px)` top padding on hero, `clamp(64px, 6vw, 96px)` on standard sections — replace fixed pixel padding so spacing compresses gracefully on small screens instead of overflowing.
- Meta-panel rows switch from plain `<div class="row">` lines to colour-blocked rows (alternating tint background) — turns a dense data list into scannable chips without adding new content.

---

## 4. Animation motifs (5)

| # | Motif | Where | Duration / easing | Reduced-motion behaviour |
|---|---|---|---|---|
| 1 | **Poster drift** — signature offset headline layers | Hero H1 | 7s `ease-in-out` infinite, looping translate | Freeze on first frame (no motion), offset stays static |
| 2 | **Badge float** | Org/partner logos | 5s `ease-in-out` infinite, staggered -2.5s | Freeze at rest position |
| 3 | **Underline sweep** | Nav link hover/focus | 0.28s `cubic-bezier(.22,1,.36,1)` | Instant show/hide, no sweep |
| 4 | **Button press** — shadow-offset "sticker" button | Primary CTA hover/active | 0.18s `cubic-bezier(.34,1.56,.64,1)` hover, 0.1s active | Colour/shadow change only, no translate |
| 5 | **Panel entrance** — meta-panel fade/rise on load | Hero meta panel, cards on scroll | 0.6s `cubic-bezier(.22,1,.36,1)`, one-shot | Appears instantly, no fade/translate |

All five are wrapped by a single global rule so no per-component reduced-motion overrides are needed:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
    scroll-behavior: auto !important;
  }
}
```
This mirrors what's already in the current `index.html` (line ~100) — keep it as-is; it already covers every motif above without extra code.

**Usability notes**
- Nothing loops faster than 5s, and nothing large moves more than ~8px — avoids vestibular triggers while staying visible.
- No motion is required to understand or operate any control (float/drift are purely decorative; all state changes — menu open, theme switch, form focus — also have a non-animated visual cue: colour/border change, not just movement).
- Animations pause on `:hover` where they'd otherwise fight with a user's fine motor control (badges).

---

## 5. Design tokens (drop-in CSS)

```css
:root{
  --paper:#FBF7FF; --ink:#17121F;
  --primary:#7C3AED; --primary-dk:#5B21B6;
  --secondary:#B3106A; --secondary-br:#FF2E88;
  --accent:#C6FF00;
  --cyan:#006E7A; --cyan-br:#00E5FF;
  --graphite:#4A4358; --line:#E4DBF5;
  --card-bg:rgba(255,255,255,.85); --shadow:rgba(124,58,237,.18);

  --font-display:'Bricolage Grotesque', system-ui, sans-serif;
  --font-body:'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono:'Space Mono', monospace;

  --radius-sm:10px; --radius-md:18px; --radius-lg:28px;
  --shadow-sm:0 12px 24px -14px var(--shadow);
  --shadow-lg:0 20px 40px -20px var(--shadow);
}

[data-theme="dark"]{
  --paper:#0B0714; --ink:#F3EEFF;
  --primary:#A78BFA; --primary-dk:#C4B5FD;
  --secondary:#FF6FB0; --secondary-br:#FF2E88;
  --accent:#D4FF3D;
  --cyan:#4DE6F2; --cyan-br:#00E5FF;
  --graphite:#B7ADD1; --line:#251C3D;
  --card-bg:rgba(24,16,40,.75); --shadow:rgba(167,139,250,.25);
}

@media (prefers-contrast: more){
  :root{ --ink:#000; --paper:#fff; --primary:#4B0FA8; --line:#000; }
  [data-theme="dark"]{ --ink:#fff; --paper:#000; --primary:#C4B5FD; --line:#fff; }
  .h1-stack .layer{ display:none; } /* drop decorative offset layers */
}
```

**Tailwind equivalent** (`tailwind.config.js` extension), if the project ever moves off hand-rolled CSS:
```js
theme: {
  extend: {
    colors: {
      paper: 'var(--paper)', ink: 'var(--ink)',
      primary: { DEFAULT:'var(--primary)', dark:'var(--primary-dk)' },
      secondary: { DEFAULT:'var(--secondary)', bright:'var(--secondary-br)' },
      accent: 'var(--accent)',
      cyan: { DEFAULT:'var(--cyan)', bright:'var(--cyan-br)' },
    },
    fontFamily: {
      display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    },
    borderRadius: { sm:'10px', md:'18px', lg:'28px' },
  }
}
```

The full component-level CSS (nav, hero, meta-panel, org badges, buttons) matching the mockup is in `aurafeast26-design-tokens.css`, ready to paste under the existing `:root` block in `index.html`.

---

## 6. Accessibility & performance notes

- **Contrast:** every text colour combination above is AA or better (computed, see Section 2). The two "bright" decorative colours are never used for text.
- **Focus states:** every interactive element gets a visible 3px `--primary` outline with 3px offset — doesn't rely on colour alone, works in both themes.
- **Reduced motion:** single global media query (already present in the current file) covers all 5 motifs — no additional per-component work needed.
- **High contrast mode:** `prefers-contrast: more` fallback strips decorative layers and pushes to near-pure black/white + a single accessible violet.
- **Logo alt text:** keep descriptive `alt` text on real `<img>` logos (already correct in current markup — `alt="PSVPEC Logo"` etc.); decorative placeholder badges in the mockup are `aria-hidden="true"` since the real images will carry the semantic meaning.
- **Font payload:** 3 families × ~2 weights each ≈ comparable to the current 4-family, 7-weight load — this redesign is not heavier than what's shipping today, and dropping Rubik Bubbles further reduces it.
- **CLS:** `font-display: swap` + a fallback stack sized close to the display face keeps layout shift low; reserve explicit `width`/`height` on the (currently unsized) logo `<img>` tags — that's a bigger CLS risk than the fonts.
- **Animation cost:** all motifs use `transform`/`opacity` only (compositor-friendly, no layout thrashing) — verified in the mockup CSS.

---

## 7. Phased approach

**Phase 1 — Visual refresh plan with mockups** *(this deliverable)*
- Palette, typography, motion system defined and contrast-checked.
- Interactive HTML mockup (`aurafeast26-vibrant-mockup.html`) demonstrating nav + hero + logo cluster with live theme toggle.
- Decision needed from you: confirm Option A/B/C font pairing, and whether transparent-background logo assets can be sourced (flagged in Section 3).

**Phase 2 — Component-level design tokens and starter CSS**
- Drop `aurafeast26-design-tokens.css` under the existing `:root`/`[data-theme="dark"]` blocks in `index.html`.
- Re-skin remaining components not covered by the mockup: event cards, register form, footer, mobile nav drawer — reusing the same token names so no new colours are introduced ad hoc.
- Swap font stack in the `<link>` tag and update `--font-display`/`--font-body`/`--font-mono`.

**Phase 3 — Optional motion/branding enhancements and QA**
- Scroll-triggered entrance animation for section headers (reuse the existing `reveal` class + IntersectionObserver already in the current file — just restyle, don't rebuild).
- Cross-browser check (Safari's `backdrop-filter` and `color-mix()` support — both used in the mockup; add fallback solid backgrounds for older browsers).
- Full contrast audit with a tool (e.g. axe DevTools) on the final rendered pages, not just the token table.
- Test with `prefers-reduced-motion` and `prefers-contrast` OS settings toggled on, and with a screen reader on the nav/theme-switch/logo alt text.

---

## Deliverables in this package
1. `aurafeast26-vibrant-redesign-plan.md` — this document.
2. `aurafeast26-vibrant-mockup.html` — live, interactive visual mockup (open in a browser; the theme toggle in the nav switches light/dark tokens).
3. `aurafeast26-design-tokens.css` — copy-paste-ready tokens + component CSS matching the mockup.
