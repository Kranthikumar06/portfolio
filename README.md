# Portfolio — Scan

React + Vite. Dark, computer-vision-detection themed (bounding boxes, confidence
scores, lime/magenta accents). Every bit of content in this build is a placeholder —
edit `src/App.jsx` to make it yours.

## Edit your content

Everything you need to change lives at the **top of `src/App.jsx`**, clearly separated
from the layout code:

- `PROFILE` — your name, role, headline, one-line summary
- `SOCIAL` — email, GitHub, LinkedIn, resume link
- `ABOUT` — bio paragraph + three stat callouts
- `PROJECTS` — array of project objects (file name, description, score badge, repo/demo links)
- `SKILLS` — array of skill chips

Nothing below the `Layout` comment needs to change unless you want to restructure
sections.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (free)

**Vercel**: push to a GitHub repo → vercel.com → New Project → import repo →
framework preset Vite → Deploy.

**Netlify**: push to GitHub → netlify.com → Add new site → Import from Git →
build command `npm run build`, publish directory `dist`.
