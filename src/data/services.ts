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

export const englishServices: ServiceItem[] = [
  { ...services[0], subtitle: 'Conversion-Focused & Fast Campaigns', description: 'A persuasive page designed for ad campaigns, product launches, or service offers. Proven copy encourages clicks and conversations.', features: ['Storytelling & Optimized CTA Placement', 'Direct WhatsApp & Meta Pixel Integration', 'Estimated Delivery: 3–5 Working Days'], ctaText: 'View Landing Page Package' },
  { ...services[1], subtitle: 'Credibility & Multi-Page Business Websites', description: 'Build a trusted reputation with business partners, investors, and customers through elegant, well-organized multi-page navigation.', features: ['Complete Page Structure (About, Services, Team)', 'SEO Architecture & Google Indexing', 'CMS Ready (Easy article & portfolio updates)'], ctaText: 'View Company Profile Package' },
  { ...services[2], subtitle: 'Automated Workflows, Dashboards & Custom Features', description: 'A web system tailored to internal operations, SaaS platforms, custom e-commerce, or unique business process automation.', features: ['Full-Stack Architecture (Auth, Database, API)', 'Admin Dashboard & Role-Based Access', 'Payment Gateway & Third-Party API Integration'], ctaText: 'View Web App Package' },
];
