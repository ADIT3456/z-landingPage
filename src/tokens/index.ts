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
    },
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
    },
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
  },
} as const;

export type DesignTokens = typeof tokens;
