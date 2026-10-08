import React from 'react';
import { Container } from '../layout/Container';
import { PillBadge } from '../ui/PillBadge';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { pricingTiers } from '../../data/pricing';
import { Check, Star, Clock } from 'iconoir-react';

export const PricingSection: React.FC = () => {
  return (
    <section
      id="harga"
      className="py-20 md:py-32 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="mb-4">
            <PillBadge
              dot={false}
              icon={
                <Icon size="xs" aria-hidden="true">
                  <Star />
                </Icon>
              }
            >
              Investasi Transparan
            </PillBadge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight mb-5">
            Pilihan Paket Sesuai Kebutuhan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Tanpa biaya tersembunyi. Setiap paket sudah mencakup pengerjaan bersih, optimalisasi mobile
            &amp; SEO, dan penyerahan penuh source code milik Anda.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {pricingTiers.map((tier) => {
            const isHighlight = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-500/15 -translate-y-2 lg:-translate-y-4'
                    : 'bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Popular Pill Badge */}
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Icon size="xs" aria-hidden="true" className="text-amber-300">
                      <Star />
                    </Icon>
                    <span>Paling Populer &amp; Diminati</span>
                  </div>
                )}

                <div>
                  <div className={`mb-6 ${isHighlight ? 'mt-2' : ''}`}>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isHighlight
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {tier.badgeCategory}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div
                    className={`mb-6 pb-6 border-b ${
                      isHighlight
                        ? 'border-slate-200/80 dark:border-slate-800'
                        : 'border-slate-200/80 dark:border-slate-700/80'
                    }`}
                  >
                    <span className="text-xs text-slate-500">Mulai dari</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span
                        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                          isHighlight
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-xs text-slate-500">{tier.period}</span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 mt-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isHighlight
                          ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/50 dark:border-emerald-800/50'
                          : 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200/50 dark:border-blue-800/50'
                      }`}
                    >
                      <Icon
                        size="xs"
                        aria-hidden="true"
                        className={isHighlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}
                      >
                        <Clock />
                      </Icon>
                      <span>{tier.deliveryTime}</span>
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul
                    className={`space-y-3.5 mb-8 text-sm ${
                      isHighlight
                        ? 'text-slate-700 dark:text-slate-200 font-medium'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon
                          size="sm"
                          aria-hidden="true"
                          className={`mt-0.5 shrink-0 ${
                            isHighlight
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-emerald-500'
                          }`}
                        >
                          <Check />
                        </Icon>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={isHighlight ? 'primary' : 'secondary'}
                  size="md"
                  href={tier.ctaHref}
                  className={`w-full text-center ${
                    isHighlight ? 'shadow-lg shadow-blue-500/30' : ''
                  }`}
                >
                  {tier.ctaText}
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
