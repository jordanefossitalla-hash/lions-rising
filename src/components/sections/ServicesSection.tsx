import { useLanguage } from '@/contexts/LanguageContext';
import { Player } from '@lottiefiles/react-lottie-player';
import { Search, GraduationCap, Target, Award, Users, Globe } from 'lucide-react';
import teamworkAnimation from '@/assets/lottie/teamwork.json';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t('services.detection.title'),
      description: t('services.detection.desc'),
    },
    {
      icon: GraduationCap,
      title: t('services.initiation.title'),
      description: t('services.initiation.desc'),
    },
    {
      icon: Target,
      title: t('services.preformation.title'),
      description: t('services.preformation.desc'),
    },
    {
      icon: Award,
      title: t('services.formation.title'),
      description: t('services.formation.desc'),
    },
    {
      icon: Users,
      title: t('services.placement.title'),
      description: t('services.placement.desc'),
    },
    {
      icon: Globe,
      title: t('services.representation.title'),
      description: t('services.representation.desc'),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-primary text-secondary" aria-labelledby="services-title">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Player
              autoplay
              loop
              src={teamworkAnimation}
              className="w-24 h-24 sm:w-28 sm:h-28"
            />
          </div>
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-energy/20 text-energy font-semibold rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {t('services.badge')}
          </span>
          <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-3 sm:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-secondary/70 px-2">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid - Improved responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-secondary/10 hover:border-energy/50 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-energy/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-energy group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-energy group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3 group-hover:text-energy transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary/60 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-energy to-accent rounded-b-xl sm:rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
