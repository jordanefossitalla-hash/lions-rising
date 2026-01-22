import { ChevronDown, Trophy, Users, Calendar } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo-bmas.png';
import footballAnimation from '@/assets/lottie/football.json';

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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* Background Image with better loading */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Équipe BM Academy Sport en entraînement"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 border border-energy/20 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/3 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 border border-energy/20 rounded-full animate-pulse opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-16 sm:w-24 h-16 sm:h-24 border border-secondary/10 rounded-full animate-pulse opacity-10 hidden md:block" />
      
      {/* Lottie Animation - Football */}
      <div className="absolute bottom-20 right-4 sm:right-10 lg:right-20 hidden md:block opacity-80">
        <Player
          autoplay
          loop
          src={footballAnimation}
          className="w-32 lg:w-48 h-32 lg:h-48"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Badge */}
          <div className="inline-block mb-6 sm:mb-8 animate-fade-up">
            <img
              src={logo}
              alt="BM Academy Sport Yaoundé"
              className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>

          {/* Title - Responsive typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-secondary mb-3 sm:mb-4 animate-fade-up-delay-1 leading-tight">
            {t('hero.title')}
            <span className="block text-energy mt-1 sm:mt-2 text-gradient-energy text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {t('hero.lions')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-up-delay-2 px-2">
            {t('hero.subtitle')}
          </p>

          {/* CTAs - Better mobile layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-up-delay-3 px-4 sm:px-0">
            <a 
              href="https://wa.me/237621721892?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20aux%20essais%20de%20BM%20Academy%20Sport."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary w-full sm:w-auto animate-pulse-glow text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8"
            >
              {t('hero.cta.trials')}
            </a>
            <a 
              href="#programs" 
              className="btn-hero-secondary w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8"
            >
              {t('hero.cta.discover')}
            </a>
          </div>

          {/* Stats - Improved responsive grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-glass text-center py-3 sm:py-4 md:py-6 px-2 sm:px-4 transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-energy mx-auto mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-secondary">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-secondary/60 mt-0.5 sm:mt-1 line-clamp-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="text-secondary/50 hover:text-energy transition-colors block p-2"
            aria-label="Défiler vers la section suivante"
          >
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
