# Storage Unleashed Website 🌐

Modern, high-conversion landing page for **StorageUnleashed.com** — the 100% free, private visual disk space analyzer crafted specifically for macOS.

---

## 🖥️ Desktop Software Repository

The core desktop application (Electron + React 19 + TypeScript) is open source and hosted at:
👉 **[https://github.com/rajnishcoder/StorageUnleash](https://github.com/rajnishcoder/StorageUnleash)**

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static production assets will be output to the `dist/` directory.

---

## 🛠 Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Icons**: Lucide React
- **Styling**: Vanilla CSS Design System with CSS variables and Glassmorphism

---

## 🚢 One-Click Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to Cloudflare Pages
Point your Cloudflare Pages project to this repository with build command `npm run build` and output directory `dist`.
