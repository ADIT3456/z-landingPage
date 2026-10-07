# Spesifikasi Design System & Finalisasi PRD — Website "Z Developer"

**Lead**: ADIT-FRONTEND (Design Systems Lead)  
**Target Stack**: Vite + React + TypeScript + Tailwind CSS  
**Design Reference**: ChronoTask (Outcrowd) & Kffein wireframe logo  

---

## 1. Review Feedback Terstruktur (PRD Awal)

### Feedback 1: Kontras Warna & Aksesibilitas Teks
- **[Masalah]**: Penggunaan teks baris ke-2 abu-abu muda (*light gray*) pada background putih/terang berisiko tidak memenuhi standar kontras WCAG 2.1 AA (minimal 4.5:1 untuk normal text, 3:1 untuk large text).
- **[Kenapa penting]**: Calon klien dengan kondisi layar redup, di bawah sinar matahari, atau gangguan penglihatan akan sulit membaca value proposition utama.
- **[Saran perbaikan]**: Gunakan Slate-500 (`#64748b`) untuk body text sekunder, dan Slate-400 (`#94a3b8`) hanya untuk display heading ukuran besar (>36px) di mana rasio kontras 3:1 tetap tercapai secara legal.

### Feedback 2: Komponen Logo 3D Wireframe Berputar
- **[Masalah]**: Objek 3D berputar terus-menerus bisa membebani main thread/GPU jika menggunakan WebGL library berat (seperti Three.js bundle >500KB) hanya untuk logo kecil di navbar. Selain itu, animasi kontinu berisiko memicu vestibular disorder bagi sebagian user.
- **[Kenapa penting]**: Performa initial load harus kilat (<1.5s LCP) karena ini adalah showcase penyedia jasa web, dan kita harus menghormati aksesibilitas.
- **[Saran perbaikan]**: Implementasikan menggunakan lightweight SVG wireframe dengan CSS 3D transform (`preserve-3d`) atau Canvas 2D murni tanpa dependensi eksternal. Wajib sertakan media query `@media (prefers-reduced-motion: reduce)` yang menghentikan rotasi otomatis jika user mengaktifkan reduced motion di sistem operasi.

### Feedback 3: Kartu Melayang di Hero (Mobile vs Desktop)
- **[Masalah]**: Kartu miring/melayang (*floating cards*) yang overlap dengan headline di desktop akan menutupi teks atau keluar viewport jika dipaksakan di layar mobile (<768px).
- **[Kenapa penting]**: Menghindari Cumulative Layout Shift (CLS) dan tumpang tindih visual yang merusak keterbacaan di perangkat mobile.
- **[Saran perbaikan]**: Terapkan pola responsive: di mobile (<768px), floating cards diletakkan di bawah CTA hero dalam bentuk horizontal scroll/pill list. Di desktop (≥1024px), gunakan absolute positioning dengan transform rotasi halus (`-6deg`, `+8deg`) yang tidak menghalangi headline.

### Feedback 4: Floating Action Button WhatsApp
- **[Masalah]**: FAB WhatsApp di pojok kanan bawah sering bertabrakan dengan CTA footer atau tombol navigasi lainnya.
- **[Kenapa penting]**: Aksesibilitas navigasi sentuh (touch target) mobile minimal 48x48px tanpa menutupi tombol formulir/aksi penting lainnya.
- **[Saran perbaikan]**: Berikan safe area padding (`bottom: 24px; right: 24px`), z-index terdefinisi token (`z-50`), serta aria-label yang jelas (`aria-label="Hubungi kami via WhatsApp"`).

---

## 2. Resolusi & Finalisasi Poin [ASUMSI]

### A. Hero Section Copywriting
* **Headline Baris 1 (Bold)**: `Website Cepat, Rapi & Siap Pakai`
* **Headline Baris 2 (Muted / Slate-400)**: `tanpa ribet, tanpa drama revisi berlarut.`
* **Subheadline**: `Z Developer merancang dan membangun landing page berkonversi tinggi, company profile profesional, hingga web app custom dengan arsitektur modern dan performa tinggi.`
* **Primary CTA**: `Konsultasi Gratis` *(Direct link WhatsApp dengan pesan template)*
* **Secondary CTA**: `Eksplor Portfolio` *(Smooth scroll anchor ke `#portfolio`)*

### B. Isi Kartu Melayang (Hero Section)
1. **Kartu 1 (Kiri)**: `Haircut Sprint` — *Barbershop Booking App* (`Next.js · Tailwind`, `🟢 99.8% Uptime`)
2. **Kartu 2 (Kanan Atas)**: `Document Generator` — *Automated PDF & Workflow* (`React · TypeScript`, `⚡ Fast Processing`)
3. **Kartu 3 (Kanan Bawah)**: `Love Puzzle` — *Gamified Interactive Web* (`Interactive UI`, `🎨 Custom UX`)

### C. Kurasi Portfolio Section
* **Hero Highlight Project (Featured Card - Large Frame Gradient)**:
  * **Project**: `Document Generator & Workflow Engine`
  * **Deskripsi**: Sistem otomasi dokumen berbasis web untuk efisiensi operasional tim, dilengkapi live preview dan export instan.
  * **Kategori**: `Web Application Custom`
  * **Tags**: `React`, `TypeScript`, `Tailwind CSS`, `Automation`
* **Grid Card Portofolio (5 Project Lain)**:
  1. `Haircut Sprint` — Web reservasi & manajemen jadwal barbershop (Landing Page + Booking Flow)
  2. `Love Puzzle` — Web interaktif berbasis gamifikasi & micro-interaction
  3. `flashcard-hika` — Aplikasi web pembelajaran repetisi berjarak (Spaced Repetition Tool)
  4. `Manage Your` — Sistem task management & dashboard operasional internal
  5. `PRD Generator BYOK` — Tool produktivitas AI berbasis Bring-Your-Own-Key untuk tim produk

### D. Paket & Harga (3-Tier Pricing Table)

| Spesifikasi | Paket 1: Starter Landing | Paket 2: Business Profile *(Rekomendasi)* | Paket 3: Custom Web App |
|---|---|---|---|
| **Target Klien** | Validasi produk, campaign iklan, UKM & portofolio pribadi | Bisnis bertumbuh, institusi, agensi, & brand terpercaya | Startup, platform SaaS, sistem operasional internal |
| **Status Badge** | - | `⭐ Paling Populer` | `🚀 Solusi Skalabel` |
| **Estimasi Pengerjaan** | 3 – 5 Hari Kerja | 7 – 14 Hari Kerja | 14 – 30 Hari Kerja |
| **Cakupan Fitur** | • 1 Halaman konversi terarah<br>• Mobile-first & ultra responsive<br>• Integrasi Form & WhatsApp CTA<br>• On-page SEO & OpenGraph<br>• Setup domain & deployment hosting | • Hingga 5 Halaman custom<br>• CMS / Blog terintegrasi<br>• Interactive micro-animation<br>• Kecepatan PageSpeed 90+ Score<br>• Google Analytics & Search Console<br>• Garansi maintenance 30 hari | • Fullstack custom architecture<br>• Database, Auth & Role Permission<br>• Integrasi API pihak ketiga / Payment<br>• Dashboard admin & analytics<br>• E2E Testing & automated CI/CD<br>• Garansi maintenance 60 hari |

---

## 3. Design Tokens (Pusat Kendali UI)

```typescript
// src/tokens/index.ts

export const tokens = {
  colors: {
    brand: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      500: '#3b82f6',
      600: '#2563eb', // Akses Utama (ChronoTask Vibrant Blue)
      700: '#1d4ed8',
      900: '#1e3a8a',
    },
    neutral: {
      canvas: '#ffffff',
      subtle: '#f8fafc',
      surface: '#ffffff',
      border: '#e2e8f0',
      textPrimary: '#0f172a',
      textSecondary: '#64748b',
      textMuted: '#94a3b8',
    },
    accent: {
      whatsapp: '#25D366',
      whatsappHover: '#20ba59',
    }
  },
  typography: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    fontSize: {
      'display-hero': ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      'heading-section': ['clamp(2rem, 4vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      'heading-card': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      'body-large': ['1.125rem', { lineHeight: '1.6' }],
      'body-base': ['1rem', { lineHeight: '1.6' }],
      'caption': ['0.875rem', { lineHeight: '1.5' }],
      'pill': ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em' }],
    }
  },
  radii: {
    pill: '9999px',
    card: '1.25rem',      // 20px
    button: '0.875rem',   // 14px
    badge: '0.5rem',      // 8px
  },
  shadows: {
    soft: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
    card: '0 12px 32px -4px rgba(15, 23, 42, 0.06)',
    cardHover: '0 20px 40px -8px rgba(37, 99, 235, 0.12)',
    floating: '0 24px 48px -12px rgba(15, 23, 42, 0.12)',
  }
} as const;
```

---

## 4. Arsitektur Komponen Frontend

```
src/
├── components/
│   ├── ui/                        # [ATOMS & MOLECULES]
│   │   ├── Button.tsx
│   │   ├── PillBadge.tsx
│   │   ├── Card.tsx
│   │   ├── WireframeLogo.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── Icon.tsx               # Iconoir wrapper / standard props
│   │   └── DotBackground.tsx
│   ├── sections/                  # [ORGANISMS]
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── layout/
│       ├── Container.tsx
│       └── RootLayout.tsx
├── data/
│   ├── services.ts
│   ├── portfolio.ts
│   └── pricing.ts
├── tokens/
│   └── index.ts
└── styles/
    └── index.css
```

---

## 5. Sistem Ikonografi — Iconoir (`iconoir-react`)

Sesuai arahan, seluruh ikonografi di website Z Developer wajib menggunakan **Iconoir** (https://iconoir.com / package: `iconoir-react`).

### A. Alasan Pemilihan & Nilai Desain
- **Karakter Visual Konsisten**: Grid 24x24 px dengan stroke 1.5px bawaan sangat selaras dengan gaya modern, clean, dan presisi tinggi dari ChronoTask (Outcrowd).
- **1300+ Ikon Terpadu**: Meliputi navigasi, tech stack, aksi bisnis, hingga brand icon yang dibutuhkan (termasuk WhatsApp, panah, checkmark, eksternal link, dll.).
- **Performa & Bundle Size**: Full tree-shakeable via `iconoir-react`. Hanya icon yang di-import yang akan masuk bundle produksi.
- **Standar Ekosistem**: Open source, zero dependency runtime, support SVG props standar React.

### B. Konvensi Token Ukuran Ikon
| Token Ukuran | Dimensi (px / rem) | Contoh Penggunaan |
|---|---|---|
| `icon-xs` | 14px / 0.875rem | Inline chip label, status badge kecil |
| `icon-sm` | 16px / 1rem | PillBadge, inline link teks, tooltip |
| `icon-base` | 20px / 1.25rem | Button icon, form inputs, list checkmark |
| `icon-lg` | 24px / 1.5rem | Navigation items, mobile menu toggle, FAB |
| `icon-xl` | 32px / 2rem | Service / feature highlight card headers |

### C. Panduan Penggunaan & Aksesibilitas
1. **Warna Default**: Selalu gunakan `currentColor` agar icon secara otomatis mewarisi warna teks/elemen induknya dan responsif terhadap status hover/active.
2. **Stroke Width**: Pertahankan `strokeWidth={1.5}` untuk konsistensi garis di seluruh tampilan.
3. **Aksesibilitas (a11y)**:
   - **Ikon Dekoratif**: Wajib menyertakan `aria-hidden="true"` ketika sudah ada teks pendamping (e.g. `<Button><Send aria-hidden="true" /> Kirim</Button>`).
   - **Ikon Tombol Mandiri (Icon-only Button)**: Wajib menyediakan `aria-label` yang jelas pada elemen interaktif induknya (e.g. `<button aria-label="Buka navigasi mobile"><Menu aria-hidden="true" /></button>`).
4. **Komponen Pembungkus (`Icon.tsx`)**: Disediakan atom helper untuk memastikan keseragaman ukuran token Tailwind dan atribut a11y.

