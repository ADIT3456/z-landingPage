import React from 'react';
import { Container } from '../layout/Container';
import { PillBadge } from '../ui/PillBadge';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { portfolioProjects } from '../../data/portfolio';
import {
  ViewColumns2,
  ArrowRight,
  ArrowUpRight,
  Whatsapp,
  Check,
  Spark,
  Code,
  Globe,
} from 'iconoir-react';

export const PortfolioSection: React.FC = () => {
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
                Portofolio
              </PillBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight mb-4">
              Contoh Website dan Aplikasi
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Lihat website dan aplikasi yang telah dibuat.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Portofolio:
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs">
              {hasProjects ? `${portfolioProjects.filter((project) => project.liveUrl).length} Proyek` : 'Tahap Kurasi'}
            </span>
          </div>
        </div>

        {/* Empty State Fallback */}
        {!hasProjects ? (
          <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 lg:p-14 text-center shadow-xl shadow-blue-500/5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-sm">
              <Icon size="lg" aria-hidden="true">
                <Code />
              </Icon>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 mb-3">
              <Icon size="xs" aria-hidden="true" className="text-blue-600 dark:text-blue-400">
                <Spark />
              </Icon>
              <span>Dokumentasi Dalam Persiapan</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-3">
              Portfolio Sedang Disiapkan
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Kami sedang mengkurasi dokumentasi studi kasus dan showcase live project terbaik untuk
              ditampilkan. Butuh referensi hasil kerja nyata atau ingin mendiskusikan web app yang
              sesuai dengan kebutuhan bisnis Anda?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="md"
                href="https://wa.me/6281234567890?text=Halo%20Z%20Developer,%20saya%20ingin%20konsultasi%20dan%20melihat%20sampel%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shadow-lg shadow-blue-500/25"
                leftIcon={
                  <Icon size="sm" aria-hidden="true">
                    <Whatsapp />
                  </Icon>
                }
              >
                Minta Sampel via WhatsApp
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
                Konsultasi Kebutuhan
              </Button>
            </div>

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
                <span>Live Demo Khusus saat Diskusi</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon size="sm" aria-hidden="true" className="text-emerald-500">
                  <Check />
                </Icon>
                <span>Privasi &amp; NDA Terjaga</span>
              </div>
            </div>
          </div>
        ) : (
          /* Portfolio Grid */
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400/80 dark:hover:border-blue-500/60 transition-all duration-300 flex flex-col"
                >
                  {/* Faux Browser Window Header */}
                  <div className="px-3.5 py-2.5 bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs select-none">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-center gap-1.5 max-w-[160px] shadow-2xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title={`Buka ${project.title}`}
                      >
                        <Icon size="xs" aria-hidden="true" className="text-slate-400 shrink-0">
                          <Globe />
                        </Icon>
                        <span className="truncate">{new URL(project.liveUrl).hostname}</span>
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Belum tersedia</span>
                    )}

                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {project.liveUrl ? 'Website' : 'Segera hadir'}
                    </span>
                  </div>

                  <div className="relative h-48 overflow-hidden border-b border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
                    {project.liveUrl ? (
                      <iframe
                        src={project.liveUrl}
                        title={`Pratinjau ${project.title}`}
                        loading="lazy"
                        tabIndex={-1}
                        sandbox="allow-scripts allow-same-origin"
                        className="pointer-events-none absolute left-0 top-0 h-[768px] w-[400%] origin-top-left scale-[0.25] border-0 bg-white"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                        Pratinjau belum tersedia
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 whitespace-nowrap">
                        {project.typeBadge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {project.liveUrl && (
                      <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-transparent transition-all duration-200 group/btn"
                        >
                          <span>Buka Website</span>
                          <Icon size="xs" aria-hidden="true" className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                            <ArrowUpRight />
                          </Icon>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Project Request Prompt */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Butuh Website untuk Bisnis Anda?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Ceritakan kebutuhan Anda untuk membahas fitur dan perkiraan biaya.
                </p>
              </div>
              <Button
                variant="primary"
                size="md"
                href="https://wa.me/6281234567890?text=Halo%20Z%20Developer,%20saya%20ingin%20konsultasi%20dan%20request%20sampel%20website%20kustom"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap w-full sm:w-auto shadow-md shadow-blue-500/20"
                leftIcon={
                  <Icon size="sm" aria-hidden="true">
                    <Whatsapp />
                  </Icon>
                }
              >
                Diskusikan Kebutuhan
              </Button>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
