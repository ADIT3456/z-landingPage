import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, Xmark, ArrowRight } from 'iconoir-react';
import { Container } from '../layout/Container';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Harga', href: '#harga' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-950/95 dark:backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand - Teks Z Developer Saja */}
          <a
            href="#"
            className="flex items-center group select-none py-1"
            aria-label="Z Developer Beranda"
          >
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Z<span className="text-blue-600 dark:text-blue-500">Developer</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area: Theme Toggle & CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button di Pojok Navbar */}
            <ThemeToggle />

            {/* Desktop CTA Button */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="md"
                href="#kontak"
                className="shadow-lg shadow-blue-500/25"
                rightIcon={
                  <Icon size="sm" aria-hidden="true">
                    <ArrowRight />
                  </Icon>
                }
              >
                Konsultasi Gratis
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Tutup navigasi mobile' : 'Buka navigasi mobile'}
              aria-expanded={mobileMenuOpen}
            >
              <Icon size="lg" aria-hidden="true">
                {mobileMenuOpen ? <Xmark /> : <Menu />}
              </Icon>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <Button
                variant="primary"
                size="md"
                href="#kontak"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                rightIcon={
                  <Icon size="sm" aria-hidden="true">
                    <ArrowRight />
                  </Icon>
                }
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
