import { useLanguage } from '@/contexts/LanguageContext';
import { Search, GraduationCap, Target, Award, Users, Globe } from 'lucide-react';

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
    <section id="services" className="py-20 md:py-28 bg-primary text-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-energy/20 text-energy font-semibold rounded-full text-sm mb-4">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-secondary/70">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 md:p-8 border border-secondary/10 hover:border-energy/50 transition-all duration-500 hover:transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-energy/20 flex items-center justify-center mb-6 group-hover:bg-energy group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-energy group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-energy transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary/60 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-energy to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
