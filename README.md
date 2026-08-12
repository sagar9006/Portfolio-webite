# Sagar Kumar Soni — Portfolio

A responsive React portfolio for Sagar Kumar Soni, based on the public details in his [LinkedIn profile](https://www.linkedin.com/in/sagar-soni-056826293/). The frontend uses Vite, React, and Framer Motion; an Express server provides an optional private WhatsApp redirect and serves the production build.

## Run locally

```bash
npm run install:all
npm run dev
```

Open `http://localhost:5173`. The API runs on `http://localhost:4000`.

## Production

```bash
npm run build
npm start
```

Open `http://localhost:4000`.

## Optional WhatsApp contact

Create `server/.env` with an E.164 number (without the `+`):

```env
WHATSAPP_NUMBER=919876543210
```

The public portfolio links directly to WhatsApp using the contact number displayed on the site. The server redirect remains available for deployments that prefer to keep a number out of the frontend bundle.
