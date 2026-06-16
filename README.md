# Vishwas Sharma — Premium Portfolio

A luxury, executive-level personal brand website for **Vishwas Sharma**, IIT-JEE Mathematics Faculty & Academic Leader. Built with **React + Vite + Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy

Drag the `dist/` folder onto **Netlify Drop**, or connect the repo to **Vercel** — both deploy a Vite app with zero config.

## Structure

```
public/
  vishwas.png              # hero / about photo
  Vishwas-Sharma-CV.pdf    # downloadable resume
src/
  App.jsx                  # section composition
  index.css                # full premium design system
  components/
    Navbar, Hero, About, Timeline, Expertise,
    Achievements, Philosophy, Testimonials, Contact, Footer
    Counter.jsx            # scroll-triggered count-up
    motion.js              # shared Framer Motion variants
```

## Customise

- **Replace the photo:** swap `public/vishwas.png` (keep the name, or update references in `Hero.jsx` / `About.jsx`).
- **Testimonials:** edit the `REVIEWS` array in `src/components/Testimonials.jsx` with real student reviews.
- **Colours / fonts:** all design tokens live at the top of `src/index.css` (`:root`).
- **Contact form:** uses a `mailto:` handoff (no backend). To collect submissions, plug in Formspree/Getform in `Contact.jsx`.
