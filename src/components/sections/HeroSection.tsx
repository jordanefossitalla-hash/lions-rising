import { ChevronDown, Trophy, Users, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo-bmas.png';

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: '70+', label: t('stats.players') },
    { icon: Trophy, number: '8', label: t('stats.coaches') },
    { icon: Calendar, number: '4', label: t('stats.categories') },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-energy/20 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/3 right-10 w-48 h-48 border border-energy/20 rounded-full animate-pulse opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Badge */}
          <div className="inline-block mb-8 animate-fade-up">
            <img
              src={logo}
              alt="BM Academy Sport Yaoundé"
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary mb-4 animate-fade-up-delay-1">
            {t('hero.title')}
            <span className="block text-energy mt-2 text-gradient-energy">
              {t('hero.lions')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up-delay-3">
            <a href="#contact" className="btn-hero-primary w-full sm:w-auto animate-pulse-glow">
              {t('hero.cta.trials')}
            </a>
            <a href="#programs" className="btn-hero-secondary w-full sm:w-auto">
              {t('hero.cta.discover')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-glass text-center py-4 md:py-6"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-energy mx-auto mb-2" />
                <div className="text-2xl md:text-4xl font-black text-secondary">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-secondary/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-secondary/50 hover:text-energy transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
