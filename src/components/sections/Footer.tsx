import { useLanguage } from '../../context/LanguageContext';
import React from 'react';
import { Container } from '../layout/Container';
import { WireframeLogo } from '../ui/WireframeLogo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
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
              <span>{t("Berdasarkan di Indonesia \u00b7 Melayani Klien Seluruh Dunia", "Based in Indonesia \u00b7 Serving Clients Worldwide")}</span>
            </div>
          </div>

          {/* Col 2: Layanan Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t('Layanan', 'Services')}
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
                  {t("Optimasi PageSpeed", "PageSpeed Optimization")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portofolio Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t('Portofolio', 'Portfolio')}
            </h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t("Overview Portofolio", "Portfolio Overview")}
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t("Request Sampel & Demo", "Request Samples & Demo")}
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t("Studi Kasus Layanan", "Service Case Studies")}
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t("Paket Solusi Bisnis", "Business Solution Packages")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Info */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t('Kontak', 'Contact')}
            </h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#kontak" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t("Konsultasi WhatsApp", "WhatsApp Consultation")}
                </a>
              </li>
              <li>
                <a href="mailto:contact@zdev.id" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  contact@zdev.id
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500">{t("Senin - Sabtu: 09:00 - 18:00 WIB", "Monday - Saturday: 09:00 - 18:00 WIB")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>{t("\u00a9 2026 Z Developer. Seluruh Hak Cipta Dilindungi.", "\u00a9 2026 Z Developer. All Rights Reserved.")}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t("Kebijakan Privasi", "Privacy Policy")}
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t("Syarat & Ketentuan", "Terms & Conditions")}
            </a>
            <a href="#harga" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t("Garansi Service", "Service Guarantee")}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
