import React from 'react';
import { Whatsapp } from 'iconoir-react';
import { Icon } from './Icon';
import { useLanguage } from '../../context/LanguageContext';

export interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '6285187228960',
  defaultMessage,
  className = '',
}) => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage ?? t('Halo Z Developer, saya tertarik konsultasi pembuatan website.', 'Hello Z Developer, I am interested in a website consultation.'))}`;

  return (
    <aside
      aria-label={t('Dukungan pelanggan', 'Customer support')}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 ${className}`.trim()}
    >

      {/* Floating Action Button (>= 48px touch target) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('Hubungi kami via WhatsApp Z Developer', 'Contact Z Developer via WhatsApp')}
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center min-w-[48px] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        {/* Ambient Pulse Ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />

        {/* Iconoir WhatsApp Icon */}
        <Icon size="lg" aria-hidden="true" className="relative z-10 text-white">
          <Whatsapp />
        </Icon>
      </a>
    </aside>
  );
};
