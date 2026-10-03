import { ArrowRight, Calendar, Users, Award, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t, language } = useLanguage();

  const features = [
    { icon: Calendar, text: language === 'fr' ? 'Sessions d\'évaluation régulières' : 'Regular evaluation sessions' },
    { icon: Users, text: language === 'fr' ? 'Encadrement diplômé FECAFOOT' : 'FECAFOOT certified coaching' },
    { icon: Award, text: language === 'fr' ? 'Parcours vers le haut niveau' : 'Pathway to high performance' },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary text-secondary relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background subtle pitch mesh */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-energy/20 border border-energy/30 text-energy text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-energy animate-ping" />
            <span>{language === 'fr' ? 'Saison 2025-2026 • Inscriptions & Essais' : 'Season 2025-2026 • Trials & Registration'}</span>
          </div>

          {/* Title */}
          <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 leading-tight tracking-tight">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-secondary/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-secondary/5 border border-secondary/10">
                <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-energy flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm text-secondary">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-energy hover:bg-energy/90 text-primary font-bold text-base rounded-xl shadow-lg shadow-energy/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{t('hero.cta.trials')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/237693752118?text=Bonjour%2C%20je%20souhaite%20des%20informations%20pour%20inscrire%20un%20joueur%20%C3%A0%20BM%20Academy%20Sport."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/25 font-semibold text-base rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span>{language === 'fr' ? 'WhatsApp Direct' : 'Direct WhatsApp'}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
