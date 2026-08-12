const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 4000;

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use((_req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  });
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "";

app.get("/api/contact", (req, res) => {
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER))
    return res.status(503).send("WhatsApp contact is not configured yet. Add a valid WHATSAPP_NUMBER to server/.env.");
  const text = encodeURIComponent(req.query.text || "Hi");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  return res.redirect(url);
});

// Serve client build in production if present
const clientBuildPath = path.join(__dirname, "..", "client", "dist");
if (require("fs").existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath, {
    maxAge: "7d",
    etag: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith("index.html")) res.setHeader("Cache-Control", "no-cache");
    },
  }));
  app.get("*", (req, res) =>
    res.sendFile(path.join(clientBuildPath, "index.html")),
  );
}

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
