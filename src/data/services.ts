export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  iconName: 'flash' | 'building' | 'code';
  badgeColor: string;
}

export const services: ServiceItem[] = [
  {
    id: 'landing-page',
    title: 'High-Converting Landing Page',
    subtitle: 'Fokus Konversi & Kampanye Cepat',
    description:
      'Satu halaman persuasif yang dirancang khusus untuk kampanye iklan, launching produk, atau penawaran jasa. Struktur copy teruji memicu aksi klik dan chat.',
    features: [
      'Storytelling & Penataan CTA Maksimal',
      'Integrasi Langsung WhatsApp & Pixel Meta',
      'Estimasi Rilis Kilat: 3 – 5 Hari Kerja',
    ],
    ctaText: 'Lihat Paket Landing Page',
    ctaHref: '#harga',
    iconName: 'flash',
    badgeColor: 'blue',
  },
  {
    id: 'company-profile',
    title: 'Corporate & Company Profile',
    subtitle: 'Kredibilitas & Multi-Halaman Bisnis',
    description:
      'Bangun reputasi terpercaya bagi brand Anda di hadapan mitra bisnis, investor, dan pelanggan dengan navigasi multi-halaman yang elegan dan rapi.',
    features: [
      'Struktur Halaman Lengkap (Tentang, Layanan, Tim)',
      'SEO Architecture & Indexing Google',
      'CMS Ready (Mudah update artikel & portofolio)',
    ],
    ctaText: 'Lihat Paket Company Profile',
    ctaHref: '#harga',
    iconName: 'building',
    badgeColor: 'indigo',
  },
  {
    id: 'custom-web-app',
    title: 'Custom Web Application',
    subtitle: 'Workflow Otomatis, Dashboard & Fitur Khusus',
    description:
      'Sistem web yang dirancang khusus untuk operasional internal, platform SaaS, e-commerce custom, atau otomatisasi proses bisnis yang unik.',
    features: [
      'Arsitektur Fullstack (Auth, Database, API)',
      'Dashboard Admin & Role Access Control',
      'Integrasi Payment Gateway & Third-party API',
    ],
    ctaText: 'Lihat Paket Web App',
    ctaHref: '#harga',
    iconName: 'code',
    badgeColor: 'cyan',
  },
];
