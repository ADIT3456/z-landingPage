import { useLanguage } from '../../context/LanguageContext';
import React from 'react';
import { Container } from '../layout/Container';
import { PillBadge } from '../ui/PillBadge';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { featuredProject, portfolioProjects } from '../../data/portfolio';
import { ViewColumns2, ArrowRight, Whatsapp, Check, Spark, Code } from 'iconoir-react';

export const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const hasProjects = portfolioProjects.length > 0;

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-slate-50/70 dark:bg-slate-950/60 transition-colors"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-4">
              <PillBadge
                dot={false}
                icon={
                  <Icon size="xs" aria-hidden="true">
                    <ViewColumns2 />
                  </Icon>
                }
              >
                {t("Portofolio Karya Nyata", "Our Portfolio")}
              </PillBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight mb-4">
              {t("Bukti Kerja, Bukan Sekadar Janji", "Work That Speaks for Itself")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {t("Koleksi website dan web app yang kami bangun dengan standar clean code, kecepatan optimal,\ndan user experience modern.", "A collection of websites and web apps built with clean code, optimal speed, and a modern user experience.")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t("Status Kurasi:", "Curation status:")}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs">
              {hasProjects ? `${portfolioProjects.length}+ ${t('Proyek', 'Projects')}` : t('Tahap Kurasi', 'Being Curated')}
            </span>
          </div>
        </div>

        {/* Empty State: Tampil jika data portofolio dikosongkan sementara */}
        {!hasProjects ? (
          <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 lg:p-14 text-center shadow-xl shadow-blue-500/5">
            {/* Iconoir Icon Container */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-sm">
              <Icon size="lg" aria-hidden="true">
                <Code />
              </Icon>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 mb-3">
              <Icon size="xs" aria-hidden="true" className="text-blue-600 dark:text-blue-400">
                <Spark />
              </Icon>
              <span>{t("Dokumentasi Dalam Persiapan", "Documentation in Progress")}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-3">
              {t("Portfolio Sedang Disiapkan", "Portfolio Coming Soon")}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              {t("Kami sedang mengkurasi dokumentasi studi kasus dan showcase live project terbaik untuk\nditampilkan. Butuh referensi hasil kerja nyata atau ingin mendiskusikan web app yang\nsesuai dengan kebutuhan bisnis Anda?", "We are preparing case studies and live project showcases. Would you like examples of our work or to discuss a web app for your business?")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="md"
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(t('Halo Z Developer, saya ingin konsultasi dan melihat sampel website', 'Hello Z Developer, I would like a consultation and to see website samples'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shadow-lg shadow-blue-500/25"
                leftIcon={
                  <Icon size="sm" aria-hidden="true">
                    <Whatsapp />
                  </Icon>
                }
              >
                {t("Minta Sampel via WhatsApp", "Request Samples via WhatsApp")}
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#kontak"
                className="w-full sm:w-auto"
                rightIcon={
                  <Icon size="sm" aria-hidden="true">
                    <ArrowRight />
                  </Icon>
                }
              >
                {t("Konsultasi Kebutuhan", "Discuss Your Needs")}
              </Button>
            </div>

            {/* Trust Indicators (Iconoir Check Only, No Emojis) */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Icon size="sm" aria-hidden="true" className="text-emerald-500">
                  <Check />
                </Icon>
                <span>Clean Architecture 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon size="sm" aria-hidden="true" className="text-emerald-500">
                  <Check />
                </Icon>
                <span>{t("Live Demo Khusus saat Diskusi", "Live Demo During Consultation")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon size="sm" aria-hidden="true" className="text-emerald-500">
                  <Check />
                </Icon>
                <span>{t("Privasi & NDA Terjaga", "Privacy & NDA Protected")}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Struktur Grid & Card Tetap Ada di Kode untuk Memuat Data Asli Nanti */
          <>
            {featuredProject && (
              <div className="mb-14">
                <div className="relative p-1.5 sm:p-2.5 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-2xl shadow-blue-500/20">
                  <div className="rounded-[22px] bg-white dark:bg-slate-900 overflow-hidden p-6 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      <div className="lg:col-span-5 space-y-6">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 flex items-center gap-1.5">
                            <Icon size="xs" aria-hidden="true" className="text-blue-600">
                              <Spark />
                            </Icon>
                            <span>{t("Featured Highlight", "Featured Highlight")}</span>
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2">
                            {featuredProject.title}
                          </h3>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                            {featuredProject.category}
                          </p>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            {featuredProject.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {featuredProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400/80 dark:hover:border-blue-500/60 transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between overflow-hidden`}
                  >
                    <div className="flex justify-between items-center z-10">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
                        {project.category}
                      </span>
                      <span className="text-xs font-bold text-white">
                        {project.statusBadge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-500 dark:text-slate-400">
                        {project.tags.join(' · ')}
                      </span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {project.typeBadge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
