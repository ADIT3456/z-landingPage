import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { DotBackground } from '../ui/DotBackground';
import { Icon } from '../ui/Icon';
import { Whatsapp, Mail, Send, Check } from 'iconoir-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageType: 'Paket 2 — Company Profile (Rekomendasi)',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();

    if (!cleanName) {
      setError('Nama lengkap / perusahaan wajib diisi.');
      return;
    }
    if (cleanName.length > 100) {
      setError('Nama terlalu panjang (maksimal 100 karakter).');
      return;
    }

    // Nomor telepon hanya boleh digit, spasi, dash, dan diawali optional + (8-20 karakter)
    const phoneRegex = /^\+?[0-9\s-]{8,20}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      setError('Nomor WhatsApp tidak valid (masukkan 8-20 digit angka, contoh: 08123456789 atau +6281234567890).');
      return;
    }

    setError(null);

    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    if (submitter instanceof HTMLButtonElement && submitter.value === 'email') {
      const subject = encodeURIComponent('Konsultasi Website');
      const body = encodeURIComponent(
        `Halo Z Developer, saya ingin konsultasi website.\n\nNama: ${cleanName}\nWhatsApp: ${cleanPhone}\nPaket: ${formData.packageType}`
      );
      window.location.href = `mailto:contact@zdev.id?subject=${subject}&body=${body}`;
      return;
    }

    // Build WhatsApp message
    const message = `Halo Z Developer, saya ingin konsultasi website.%0A%0A*Nama*: ${encodeURIComponent(
      cleanName
    )}%0A*WhatsApp*: ${encodeURIComponent(cleanPhone)}%0A*Paket*: ${encodeURIComponent(
      formData.packageType
    )}`;
    const url = `https://wa.me/6281234567890?text=${message}`;

    const whatsappWindow = window.open(url, '_blank');
    if (!whatsappWindow) {
      window.location.href = url;
      return;
    }
    whatsappWindow.opener = null;
    setSubmitted(true);
  };

  return (
    <section
      id="kontak"
      className="py-20 md:py-32 bg-slate-50/70 dark:bg-slate-950/70 relative overflow-hidden transition-colors"
    >
      <DotBackground />

      <Container>
        {/* Big Conversion Banner (ChronoTask Pattern) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div
            className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Pitch & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ceritakan Rencana Website Anda <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Mari Diskusikan.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Ceritakan website yang Anda butuhkan. Kami akan membantu membahas fitur,
                pilihan paket, dan perkiraan biaya.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Direct WhatsApp CTA */}
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Z%20Developer,%20saya%20tertarik%20konsultasi%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon size="base" aria-hidden="true" className="text-white">
                    <Whatsapp />
                  </Icon>
                  <span>Konsultasi Gratis via WhatsApp</span>
                </a>

                {/* Secondary Email CTA */}
                <a
                  href="mailto:contact@zdev.id"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <Icon size="base" aria-hidden="true" className="text-slate-400">
                    <Mail />
                  </Icon>
                  <span>Kirim Brief via Email</span>
                </a>
              </div>
            </div>

            {/* Right: Quick Request Form */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-2">Mulai Konsultasi</h3>
                <p className="text-xs text-slate-300 mb-5">
                  Isi formulir untuk menyiapkan pesan konsultasi melalui WhatsApp atau email.
                </p>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-sm space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-emerald-800/80 flex items-center justify-center text-white">
                      <Icon size="base" aria-hidden="true">
                        <Check />
                      </Icon>
                    </div>
                    <p className="font-bold text-white">Pesan Siap Dikirim</p>
                    <p className="text-xs text-emerald-300">
                      Lanjutkan ke WhatsApp dan kirim pesan untuk memulai percakapan.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div
                        role="alert"
                        className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs"
                      >
                        {error}
                      </div>
                    )}

                    <div>
                      <label htmlFor="client-name" className="block text-xs font-medium text-slate-300 mb-1">
                        Nama Lengkap / Perusahaan
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (error) setError(null);
                        }}
                        placeholder="Contoh: Budi (PT Maju Jaya)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-phone" className="block text-xs font-medium text-slate-300 mb-1">
                        Nomor WhatsApp Aktif
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        maxLength={20}
                        pattern="^\+?[0-9\s-]{8,20}$"
                        title="Nomor telepon aktif, 8-20 karakter angka, contoh: 08123456789 atau +6281234567890"
                        value={formData.phone}
                        onChange={(e) => {
                          const sanitized = e.target.value.replace(/[^0-9+\s-]/g, '').slice(0, 20);
                          setFormData({ ...formData, phone: sanitized });
                          if (error) setError(null);
                        }}
                        placeholder="Contoh: 08123456789"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-package" className="block text-xs font-medium text-slate-300 mb-1">
                        Rencana Paket / Jenis Website
                      </label>
                      <select
                        id="client-package"
                        value={formData.packageType}
                        onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option>Paket 2 — Company Profile (Rekomendasi)</option>
                        <option>Paket 1 — High Converting Landing Page</option>
                        <option>Paket 3 — Custom Web Application</option>
                        <option>Kustom / Tanya Dulu</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <span>Lanjutkan ke WhatsApp</span>
                      <Icon size="xs" aria-hidden="true">
                        <Send />
                      </Icon>
                    </button>
                    <button
                      type="submit"
                      value="email"
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <span>Lanjutkan ke Email</span>
                      <Icon size="xs" aria-hidden="true">
                        <Mail />
                      </Icon>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
