import React from 'react';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';
import { Icon } from '../ui/Icon';
import { ArrowRight, Check, ViewColumns2 } from 'iconoir-react';
import { HeroCenterpiece } from '../ui/HeroCenterpiece';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center bg-black text-white pt-4 pb-12 sm:pb-16 select-none">
      {/* Ambient Deep Space Subtle Glow Accents */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* 1. 3D Wireframe & Revolving Text Rings Centerpiece (Three.js) */}
          <HeroCenterpiece className="mb-4 sm:mb-6" />

          {/* 2. 2-Line Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] mb-4">
            <span className="block text-white">
              Website Cepat, Rapi &amp; Siap Pakai
            </span>
            <span className="block text-slate-400 font-semibold text-lg sm:text-2xl md:text-3xl mt-1.5 sm:mt-2">
              tanpa ribet, tanpa drama revisi berlarut.
            </span>
          </h1>

          {/* 3. Supportive Subheadline */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 font-normal leading-relaxed mb-8">
            Z Developer merancang dan membangun landing page berkonversi tinggi, company profile
            profesional, hingga web app custom dengan arsitektur modern, performa responsif, dan kode
            bersih.
          </p>

          {/* 4. CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8 sm:mb-10">
            <Button
              variant="primary"
              size="lg"
              href="#kontak"
              className="w-full sm:w-auto shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transform hover:-translate-y-0.5"
              rightIcon={
                <Icon size="base" aria-hidden="true">
                  <ArrowRight />
                </Icon>
              }
            >
              Konsultasi Gratis
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#portfolio"
              className="w-full sm:w-auto transform hover:-translate-y-0.5"
              leftIcon={
                <Icon size="base" aria-hidden="true" className="text-slate-600 dark:text-slate-400">
                  <ViewColumns2 />
                </Icon>
              }
            >
              Lihat Portfolio
            </Button>
          </div>

          {/* 5. Trust Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <Icon size="sm" aria-hidden="true" className="text-blue-400">
                <Check />
              </Icon>
              <span>Garansi Pengerjaan Tepat Waktu</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon size="sm" aria-hidden="true" className="text-blue-400">
                <Check />
              </Icon>
              <span>Mobile &amp; SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon size="sm" aria-hidden="true" className="text-blue-400">
                <Check />
              </Icon>
              <span>Source Code Milik Anda 100%</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
