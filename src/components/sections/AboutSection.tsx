import { Target, Heart, Award, Shield, Trophy } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '@/contexts/LanguageContext';
import presidentImg from '@/assets/president.jpg';
import targetAnimation from '@/assets/lottie/target.json';

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Viser le plus haut niveau dans chaque entraînement',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'L\'amour du football comme moteur de progression',
    },
    {
      icon: Award,
      title: 'Discipline',
      description: 'Rigueur et respect comme fondements du succès',
    },
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Valeurs morales et fair-play au cœur de notre formation',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden" aria-labelledby="about-title">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 sm:w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-energy/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Player
              autoplay
              loop
              src={targetAnimation}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-energy/10 text-energy font-semibold rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {t('nav.about')}
          </span>
          <h2 id="about-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-10 sm:mb-12 md:mb-16">
          {/* President Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={presidentImg}
                alt="Bakari Mahaman - Président BM Academy Sport"
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-secondary font-bold text-lg sm:text-xl">Bakari Mahaman</h3>
                <p className="text-secondary/80 text-xs sm:text-sm">Fondateur & Président</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-energy rounded-xl sm:rounded-2xl -z-10" />
            <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-12 sm:w-16 h-12 sm:h-16 border-2 sm:border-4 border-accent rounded-lg sm:rounded-xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              {t('about.description')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              {t('about.mission')}
            </p>
            
            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted rounded-xl hover:shadow-soft transition-shadow duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-energy/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-black text-energy">70+</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Jeunes talents en formation</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">De 10 à 18 ans, encadrés par des professionnels</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted rounded-xl hover:shadow-soft transition-shadow duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Terrain synthétique professionnel</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Infrastructures modernes à Kalakouta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-program text-center group p-4 sm:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-energy rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg text-foreground mb-1 sm:mb-2">{value.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
