import React from 'react';
import { Container } from '../layout/Container';
import { WireframeLogo } from '../ui/WireframeLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-100 dark:border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <WireframeLogo size="sm" showText={false} />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Z<span className="text-blue-600 dark:text-blue-400">Developer</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Jasa pembuatan landing page, company profile, dan aplikasi web untuk bisnis Anda.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Berdasarkan di Indonesia · Melayani Klien Seluruh Dunia</span>
            </div>
          </div>

          {/* Col 2: Layanan Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Layanan
            </h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Custom Web App
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Optimasi PageSpeed
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portofolio Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Portofolio
            </h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Overview Portofolio
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Request Sampel &amp; Demo
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Studi Kasus Layanan
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Paket Solusi Bisnis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Info */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Kontak
            </h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#kontak" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Konsultasi WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contact@zdev.id" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  contact@zdev.id
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500">Senin - Sabtu: 09:00 - 18:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Z Developer. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Syarat &amp; Ketentuan
            </a>
            <a href="#harga" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Garansi Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
