import { GraduationCap, Dumbbell, Brain, Star } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: GraduationCap,
      titleKey: 'programs.u10.title',
      descKey: 'programs.u10.desc',
      age: '10-12 ans',
      color: 'accent',
      features: ['Technique de base', 'Coordination', 'Plaisir du jeu'],
    },
    {
      icon: Dumbbell,
      titleKey: 'programs.u14.title',
      descKey: 'programs.u14.desc',
      age: '13-14 ans',
      color: 'energy',
      features: ['Technique avancée', 'Tactique', 'Physique adapté'],
    },
    {
      icon: Brain,
      titleKey: 'programs.u16.title',
      descKey: 'programs.u16.desc',
      age: '15-16 ans',
      color: 'primary',
      features: ['Spécialisation', 'Compétitions', 'Mental'],
    },
    {
      icon: Star,
      titleKey: 'programs.u18.title',
      descKey: 'programs.u18.desc',
      age: '17-18 ans',
      color: 'destructive',
      features: ['Haut niveau', 'Professionnalisation', 'Clubs partenaires'],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent':
        return 'bg-accent text-accent-foreground';
      case 'energy':
        return 'bg-energy text-energy-foreground';
      case 'primary':
        return 'bg-primary text-primary-foreground';
      case 'destructive':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-28 bg-primary relative overflow-hidden" aria-labelledby="programs-title">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 border border-secondary rounded-full" />
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 border border-secondary rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header + Illustration */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="text-center lg:text-left flex-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-energy/20 text-energy font-semibold rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
              Formation
            </span>
            <h2 id="programs-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-3 sm:mb-4">
              {t('programs.title')}
            </h2>
            <p className="text-base sm:text-lg text-secondary/70 px-2 lg:px-0">
              {t('programs.subtitle')}
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="flex flex-1 justify-center lg:justify-end mt-6 lg:mt-0">
            <Player
              autoplay
              loop
              src="https://lottie.host/e4bd0110-3f70-4d5c-849c-3a4d6324ada3/nhgpVKDfLu.json"
              className="w-52 sm:w-64 md:w-72 lg:w-80 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Programs Grid - Improved responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {programs.map((program, index) => (
            <div
              key={program.titleKey}
              className="group bg-secondary/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-secondary/10 hover:border-energy/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 sm:w-14 h-12 sm:h-14 ${getColorClasses(program.color)} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>

              {/* Age Badge */}
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-secondary/10 text-secondary text-[10px] sm:text-xs font-bold rounded-full mb-2 sm:mb-3">
                {program.age}
              </span>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-secondary mb-2 sm:mb-3">
                {t(program.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-secondary/60 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {t(program.descKey)}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-secondary/70 text-xs sm:text-sm">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-energy rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="#contact"
            className="btn-hero-primary inline-flex items-center gap-2 text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8"
          >
            {t('hero.cta.trials')}
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
