import { Trophy, Users, Calendar, Flame, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo-bmas.png';

export function HeroSection() {
  const { t, language } = useLanguage();

  const stats = [
    { icon: Users, number: '70+', label: t('stats.players') },
    { icon: Trophy, number: '8', label: t('stats.coaches') },
    { icon: Calendar, number: '7', label: language === 'fr' ? 'Catégories (U5 à U18)' : 'Categories (U5 to U18)' },
    { icon: Flame, number: '10 000 F', label: language === 'fr' ? 'Frais de Test / Essai' : 'Trial / Testing Fee' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16"
      aria-label="Section principale"
    >
      {/* Background Image with optimized cinematic overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Équipe BM Academy Sport en entraînement"
      />
      
      {/* Deep Athletic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/95 backdrop-blur-[2px]" />
      
      {/* Subtle pitch line accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Elite Academy Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 sm:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-energy animate-ping" />
            <span>Yaoundé • Nouvelle Route Bastos (Hôpital Bethesda)</span>
          </div>

          {/* Official Crest */}
          <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="BM Academy Sport Yaoundé"
              className="h-24 sm:h-28 md:h-36 lg:h-44 w-auto mx-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
              loading="eager"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight mb-4 leading-tight">
            {t('hero.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy via-amber-300 to-energy block sm:inline mt-1 sm:mt-0 drop-shadow">
              {t('hero.lions')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-secondary/85 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-energy hover:bg-energy/90 text-primary font-bold text-base py-3.5 px-8 rounded-xl shadow-lg shadow-energy/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{t('hero.cta.trials')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#programs" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 font-semibold text-base py-3.5 px-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t('hero.cta.discover')}
            </a>
          </div>

          {/* KPI Stats Grid */}
          <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={stat.label}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                delay={index * 150}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
