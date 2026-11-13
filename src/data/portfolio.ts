export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  typeBadge: string;
  liveUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'kybook',
    title: 'Kybook',
    category: 'Aplikasi Dokumen',
    description: 'Buat laporan praktikum, CV, dan surat lamaran dalam format DOCX.',
    typeBadge: 'Web Application',
    liveUrl: 'https://kybook.my.id/',
  },
  {
    id: 'flashcard-hika',
    title: 'flashcard-hika',
    category: 'Aplikasi Belajar',
    description: 'Website aplikasi belajar bahasa Jepang dengan latihan kana, kosakata, dan JLPT.',
    typeBadge: 'Website Aplikasi',
    liveUrl: 'https://flashcardhika.my.id/',
  },
  {
    id: 'haircut-sprint',
    title: 'Haircut Sprint Bandung',
    category: 'Layanan Pangkas Rambut',
    description: 'Website layanan pangkas rambut panggilan di Bandung.',
    typeBadge: 'Website Layanan',
    liveUrl: 'https://aditriyawan.my.id/',
  },
  {
    id: 'smk-harapan-pangauban',
    title: 'SMK Harapan Pangauban',
    category: 'Pendidikan',
    description: 'Website sekolah SMK Harapan Pangauban.',
    typeBadge: 'Website Sekolah',
    liveUrl: 'https://smk-harapanpangauban.vercel.app/',
  },
];

export const featuredProject: PortfolioProject | null = null;
