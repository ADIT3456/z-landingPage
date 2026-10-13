export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  typeBadge: string;
  statusBadge: string;
  gradient: string;
  image?: string;
  liveUrl?: string;
  version?: string;
  metrics?: { label: string; value: string }[];
  highlightSnippet?: {
    title: string;
    description: string;
  };
}

export const featuredProject: PortfolioProject | null = null;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'portfolio-aditriyawan',
    title: 'Website Haircut',
    category: 'Booking System',
    description: 'Pemesanan lebih mudah dikelola, pelanggan bisa reservasi jadwal potong rambut langsung dari website.',
    tags: ['React', 'Tailwind CSS'],
    typeBadge: 'Live Project',
    statusBadge: 'Live',
    gradient: 'from-blue-600 to-indigo-600',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Faditriyawan.my.id?w=800',
    liveUrl: 'https://aditriyawan.my.id',
  },
];