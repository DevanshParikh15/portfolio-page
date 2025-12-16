# PortfolioPage

This repository contains a Vite + React + TypeScript personal portfolio. The client is located in the `client/` folder. The default build command (`npm run build`) will produce a static site in `dist/public` and also bundle the server to `dist/index.cjs`.

How to build locally:

```bash
npm ci
npm run build
# serve dist/public with any static server
```

Netlify build settings:
- Build command: `npm run build`
- Publish directory: `dist/public`
