# Todd Marketing Website (Vite + React)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Route architecture

Implemented with a lightweight browser-history router in `src/lib/router.jsx` and `src/App.jsx`:

- `/`
- `/ecosystem`
- `/services`
- `/services/websites-funnels`
- `/services/advertising`
- `/services/crm-automation`
- `/process`
- `/results`
- `/about`
- `/contact`
- `*` (not found)

Shared layout and route scroll reset are in `src/components/Layout.jsx` and `src/components/ScrollToTop.jsx`.

## Central CTA/contact configuration

All primary and secondary CTAs route through `CONTACT_PATH` in:

- `src/config/site.js`

Update that constant if the destination changes.

## Founder and proof-safe publishing policy

This site intentionally avoids fabricated founder identity details, client names, logos, testimonials, certifications, awards, metrics, and outcomes.

- Founder assets are published only with explicit approval.
- Case studies are published only when data and attribution context are approved.
- Results content should follow the methodology documented on `/results`.

## Contact form staging behavior and future integration

`/contact` currently provides client-side validation and a staging/demo confirmation state for UX review.

- The submission state is intentionally local and does not deliver live leads.
- Future production wiring can connect this intake payload to GoHighLevel and/or n8n once credentials, routing rules, and consent requirements are approved.

## SPA fallback configuration

This is a multi-page-feel SPA with client-side routing, so direct deep links must rewrite to `index.html`.

### Cloudflare Pages

Create `public/_redirects` or project-level `_redirects` with:

```txt
/* /index.html 200
```

Alternative (`_routes.json`) may be used if your deployment standard prefers it.

### Netlify

Add `public/_redirects` (or root `_redirects`) with:

```txt
/* /index.html 200
```

### Vercel

Add `vercel.json` rewrites:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Continuous integration

GitHub Actions CI runs on pull requests and pushes to `main`:

- `npm ci`
- `npm run build`

Workflow file: `.github/workflows/ci.yml`
