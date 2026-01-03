import { GraduationCap, Dumbbell, Brain, Star } from 'lucide-react';
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
    <section id="programs" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-secondary rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-secondary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-energy/20 text-energy font-semibold rounded-full text-sm mb-4">
            Formation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-secondary/70">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.titleKey}
              className="group bg-secondary/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 hover:border-energy/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${getColorClasses(program.color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-7 h-7" />
              </div>

              {/* Age Badge */}
              <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3">
                {program.age}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-secondary mb-3">
                {t(program.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-secondary/60 text-sm mb-4 leading-relaxed">
                {t(program.descKey)}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-secondary/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-energy rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-hero-primary inline-flex items-center gap-2"
          >
            {t('hero.cta.trials')}
            <svg
              className="w-5 h-5"
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
