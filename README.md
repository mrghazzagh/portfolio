# John Ghazzagh — Portfolio Website

A modern, responsive personal portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no bloat — just clean, fast, and interactive.

## Features

- Smooth scroll single-page layout
- Scroll-triggered reveal animations
- Animated skill bars
- Portfolio filter by category
- Responsive mobile navigation with hamburger menu
- Contact form with validation
- Fully responsive down to mobile
- Respects `prefers-reduced-motion` for accessibility

## Pages / Sections

| Section | Description |
|---|---|
| Hero | Name, title, CTA |
| About | Bio, stats |
| Resume | Timeline, skill bars, education |
| Portfolio | Filterable project cards |
| Mission | Philosophy and values |
| Contact | Working contact form |

## File Structure

```
/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Deployment

This site works as a static site. You can host it on:

- **GitHub Pages** — push to `main`, enable Pages in repo settings, point to root
- **Netlify** — drag and drop the folder or connect your repo
- **Vercel** — connect the repo, deploy with zero config

## Customization

### Colors
Edit the CSS custom properties in `styles.css` under `:root`:

```css
--color-accent:  #6c63ff;  /* Purple — change to your brand color */
--color-bg:      #0a0a0f;  /* Near-black background */
```

### Content
All content lives in `index.html`. Search for section comments like `<!-- ABOUT -->`, `<!-- RESUME -->`, etc. to find what you need to update.

### Contact Form
The form currently simulates a submission. To make it functional, either:
1. Point it to a [Formspree](https://formspree.io) endpoint
2. Replace the `setTimeout` in `script.js` with a real `fetch()` call to your backend

---

Built with intention. &copy; 2025 John Ghazzagh.
