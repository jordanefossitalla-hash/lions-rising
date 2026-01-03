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
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy/20 text-energy font-semibold rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-energy rounded-full animate-pulse" />
            Inscriptions ouvertes 2025
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary mb-6">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary/70 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-secondary/80">
                <feature.icon className="w-5 h-5 text-energy" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-hero-primary w-full sm:w-auto flex items-center justify-center gap-2 text-lg animate-pulse-glow"
            >
              {t('hero.cta.trials')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="btn-hero-secondary w-full sm:w-auto text-lg"
            >
              {t('hero.cta.partner')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
