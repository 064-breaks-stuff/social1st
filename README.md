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

## Placeholder assets and proof content

Replace placeholders before launch:

- Founder image/content placeholders on Home/About pages
- Case study placeholders on `/results`
- Contact form integration note on `/contact`

Recommended future source of truth:

- Founder-approved identity assets
- Verified client-approved case studies and metrics
- Final GoHighLevel/n8n intake integration details
