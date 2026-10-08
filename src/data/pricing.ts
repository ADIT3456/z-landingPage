export interface PricingTier {
  id: string;
  badgeCategory: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  deliveryTime: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    badgeCategory: 'Paket 1 · Pemula',
    name: 'Landing Page',
    subtitle: 'Cocok untuk promosi produk/jasa 1 halaman, peluncuran campaign iklan, & leads.',
    price: 'Rp 1,5 Jt',
    period: '/ project',
    deliveryTime: 'Estimasi 3 – 5 Hari Kerja',
    ctaText: 'Pilih Landing Page',
    ctaHref: '#kontak',
    features: [
      '1 Halaman Panjang (Hero, Fitur, Testimoni, CTA)',
      'Desain Mobile First 100% Responsif',
      'Tombol WhatsApp Direct & Meta Pixel Ready',
      '2x Putaran Revisi Minor Gratis',
      'Penyerahan Source Code Penuh (Git repo)',
    ],
  },
  {
    id: 'business',
    badgeCategory: 'Paket 2 · Bisnis',
    name: 'Company Profile',
    subtitle: 'Profil bisnis multi-halaman untuk memperkuat reputasi, showcase layanan, & SEO Google.',
    price: 'Rp 3,5 Jt',
    period: '/ project',
    deliveryTime: 'Estimasi 7 – 14 Hari Kerja',
    isPopular: true,
    ctaText: 'Pilih Company Profile (Rekomendasi)',
    ctaHref: '#kontak',
    features: [
      'Hingga 5 – 7 Halaman Struktur Lengkap',
      'PageSpeed Score 90+ (Ultracepat & Ringan)',
      'CMS Ready (Update portofolio & blog mandiri)',
      'Optimasi SEO On-Page & Integrasi Google Search Console',
      'Garansi 30 Hari Maintenance & Bug-Free',
    ],
  },
  {
    id: 'custom-app',
    badgeCategory: 'Paket 3 · Enterprise',
    name: 'Web App Custom',
    subtitle: 'Sistem/aplikasi web dengan fitur khusus, arsitektur database, role auth, & dashboard.',
    price: 'Rp 7,5 Jt',
    period: '/ project',
    deliveryTime: 'Estimasi 14 – 30 Hari Kerja',
    ctaText: 'Konsultasi Custom Web App',
    ctaHref: '#kontak',
    features: [
      'Arsitektur Fullstack Scalable (React/Next + Backend)',
      'Autentikasi Multi-User & Hak Akses Role',
      'Integrasi Payment Gateway / External API',
      'Dokumentasi Arsitektur & Handover Kode Penuh',
      'Garansi 60 Hari & Priority SLA Technical Support',
    ],
  },
];
