import { ArrowRight, Calendar, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  const features = [
    { icon: Calendar, text: 'Essais gratuits' },
    { icon: Users, text: 'Encadrement pro' },
    { icon: Award, text: 'Suivi personnalisé' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-hero relative overflow-hidden" aria-labelledby="cta-title">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-energy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-energy/20 text-energy font-semibold rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-energy rounded-full animate-pulse" />
            Inscriptions ouvertes 2025
          </span>

          {/* Title */}
          <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-secondary mb-4 sm:mb-6 leading-tight">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-secondary/70 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            {t('cta.subtitle')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-1.5 sm:gap-2 text-secondary/80">
                <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-energy" />
                <span className="font-medium text-xs sm:text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/237621721892?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20aux%20essais%20de%20BM%20Academy%20Sport."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg animate-pulse-glow py-3 sm:py-4 px-6 sm:px-8"
            >
              {t('hero.cta.trials')}
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a
              href="https://wa.me/237621721892?text=Bonjour%2C%20je%20souhaite%20devenir%20partenaire%20de%20BM%20Academy%20Sport."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary w-full sm:w-auto text-sm sm:text-base md:text-lg py-3 sm:py-4 px-6 sm:px-8"
            >
              {t('hero.cta.partner')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
