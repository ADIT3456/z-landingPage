import type { Config } from 'tailwindcss';
import { tokens } from './src/tokens';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: tokens.colors.brand,
        neutral: tokens.colors.neutral,
        accent: tokens.colors.accent,
      },
      fontFamily: {
        sans: tokens.typography.fontFamily.sans,
        mono: tokens.typography.fontFamily.mono,
      },
      fontSize: {
        'display-hero': tokens.typography.fontSize['display-hero'],
        'heading-section': tokens.typography.fontSize['heading-section'],
        'heading-card': tokens.typography.fontSize['heading-card'],
        'body-large': tokens.typography.fontSize['body-large'],
        'body-base': tokens.typography.fontSize['body-base'],
        caption: tokens.typography.fontSize.caption,
        pill: tokens.typography.fontSize.pill,
      },
      borderRadius: {
        pill: tokens.radii.pill,
        card: tokens.radii.card,
        button: tokens.radii.button,
        badge: tokens.radii.badge,
      },
      boxShadow: {
        soft: tokens.shadows.soft,
        card: tokens.shadows.card,
        cardHover: tokens.shadows.cardHover,
        floating: tokens.shadows.floating,
      },
    },
  },
  plugins: [],
} satisfies Config;
