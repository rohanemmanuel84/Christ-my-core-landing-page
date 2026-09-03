# ChristMyCore — Landing Page

> *"Know what you believe. Live like you mean it."*

Landing page for [christmycore.com](https://www.christmycore.com) — the world's first scenario-based Christian discipleship app.

---

## Project Structure

```
christmycore/
│
├── index.html              ← Main landing page (dark theme)
├── index-light.html        ← Light theme version
│
├── css/
│   └── main.css            ← All styles (brand palette + layout)
│
├── js/
│   └── main.js             ← Scroll reveal, calendar, lead forms
│
├── sections/               ← Each page section as standalone HTML
│   ├── nav.html
│   ├── hero.html
│   ├── stats.html
│   ├── scripture-1.html
│   ├── marquee.html
│   ├── features.html
│   ├── journey.html
│   ├── pillars.html
│   ├── testimonials.html
│   ├── cta.html
│   └── footer.html
│
└── assets/
    └── images/
        └── logo.png        ← ChristMyCore logo (PNG, transparent)
```

---

## Brand Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | `#5B5CE2` | Buttons, accents, links |
| Primary Deep | `#4748BB` | Button hover states |
| Gold | `#C2933B` | Achievement badges, highlights |
| Dark | `#17213F` | Background, dark text |
| Muted | `#5C6478` | Body text, labels |
| Surface | `#FFFFFF` | Cards, light backgrounds |
| Background | `#F6F6FB` | Light theme page bg |

---

## Fonts

- **Fraunces** — Headings and display text (optical-size serif)
- **Work Sans** — Body, UI, buttons
- **IBM Plex Mono** — Labels, tags, mono data

Loaded via Google Fonts CDN in `<head>`.

---

## Background Images

All background images are real photography sourced from [Pixabay](https://pixabay.com) under the free Pixabay Content Licence (commercial use, no attribution required). They load from the Pixabay CDN.

| Section | Image | Pixabay ID |
|---|---|---|
| Hero | Ocean + Milky Way | 3605547 |
| Scripture | Yakushima cedar grove starry sky | 8041247 |
| Journey | Person with flashlight under Milky Way | 2549128 |
| Pillars | Lone tree under starry sky | 1866602 |
| Testimonials | Dark constellation astrophotography | 1867616 |
| CTA | Milky Way reflected in sea | 3821536 |

To host images locally (recommended for production):
1. Download each image from Pixabay
2. Save to `assets/images/`
3. Update the `background:url(...)` references in `css/main.css`

---

## Deployment

### GitHub Pages
1. Push this folder to your GitHub repo
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Connect Custom Domain (christmycore.com)
1. In GitHub Pages settings, add custom domain: `www.christmycore.com`
2. GitHub will create a `CNAME` file automatically
3. In GoDaddy DNS, your records should point to GitHub's IPs:
   - `A @ → 185.199.108.153`
   - `A @ → 185.199.109.153`
   - `A @ → 185.199.110.153`
   - `A @ → 185.199.111.153`
   - `CNAME www → yourusername.github.io`

---

## Editing Guide

| Want to change | Edit this file |
|---|---|
| Colours, fonts, spacing | `css/main.css` |
| Hero text and CTA copy | `sections/hero.html` |
| Features copy | `sections/features.html` |
| Testimonials | `sections/testimonials.html` |
| Navigation links | `sections/nav.html` |
| Footer links | `sections/footer.html` |
| Form behaviour | `js/main.js` |
| Page `<title>` and meta | `index.html` |

---

## Next Steps

- [ ] Replace placeholder testimonials with real user quotes
- [ ] Connect contact form to Netlify Forms or Formspree
- [ ] Add Google Analytics tracking ID
- [ ] Download and host background images locally
- [ ] Build the app assessment page (`/assessment`)
- [ ] Add App Store / Google Play links when live

---

*Built with care for the Kingdom. — ChristMyCore © 2026*
