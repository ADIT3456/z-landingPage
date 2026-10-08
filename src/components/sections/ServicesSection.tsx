import React from 'react';
import { Container } from '../layout/Container';
import { PillBadge } from '../ui/PillBadge';
import { Icon } from '../ui/Icon';
import { services } from '../../data/services';
import { Flash, Building, Code, Check, ArrowRight, Spark } from 'iconoir-react';

const iconMap = {
  flash: Flash,
  building: Building,
  code: Code,
};

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="layanan"
      className="py-20 md:py-32 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <Container>
        {/* Section Header (ChronoTask Pattern) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="mb-4">
            <PillBadge
              dot={false}
              icon={
                <Icon size="xs" aria-hidden="true">
                  <Spark />
                </Icon>
              }
            >
              Layanan Z Developer
            </PillBadge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight mb-5">
            Solusi Website Tepat Guna Sesuai Skala Bisnis Anda
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Bukan template generik pasaran. Kami membangun website dari nol dengan clean code, desain
            eksklusif, serta performa kilat yang siap menghasilkan leads dan transaksi.
          </p>
        </div>

        {/* 3-Column Service Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((item) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl p-8 bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400/80 dark:hover:border-blue-500/60 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
              >
                {/* Service Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size="lg" aria-hidden="true">
                    <IconComponent />
                  </Icon>
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4 block">
                  {item.subtitle}
                </span>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-auto">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Icon size="sm" aria-hidden="true" className="text-emerald-500 shrink-0">
                        <Check />
                      </Icon>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={item.ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>{item.ctaText}</span>
                  <Icon
                    size="sm"
                    aria-hidden="true"
                    className="transform group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight />
                  </Icon>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
