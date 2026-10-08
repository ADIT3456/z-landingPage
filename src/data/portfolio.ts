export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  typeBadge: string;
  statusBadge: string;
  gradient: string;
  liveUrl?: string;
  version?: string;
  metrics?: { label: string; value: string }[];
  highlightSnippet?: {
    title: string;
    description: string;
  };
}

/**
 * Konten portofolio dikosongkan sementara sesuai arahan.
 * Struktur data model dipertahankan agar dapat diisi dokumentasi portofolio asli nanti.
 */
export const featuredProject: PortfolioProject | null = null;
export const portfolioProjects: PortfolioProject[] = [];
