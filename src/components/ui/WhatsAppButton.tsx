import React from 'react';
import { Whatsapp } from 'iconoir-react';
import { Icon } from './Icon';

export interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '6281234567890',
  defaultMessage = 'Halo Z Developer, saya tertarik konsultasi pembuatan website.',
  className = '',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Customer Support Floating Action Button"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 ${className}`.trim()}
    >

      {/* Floating Action Button (>= 48px touch target) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami via WhatsApp Z Developer"
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
