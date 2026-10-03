import { Target, Heart, Award, Shield, Trophy, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import presidentImg from '@/assets/president.jpg';

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Viser le plus haut niveau dans chaque séance et chaque geste technique.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'L\'amour du maillot et du jeu comme moteur fondamental de progression.',
    },
    {
      icon: Award,
      title: 'Discipline',
      description: 'Rigueur tactique, assiduité et respect des règles comme piliers du succès.',
    },
    {
      icon: Shield,
      title: 'Intégrité & Éducation',
      description: 'Formation humaine intégrale, fair-play et exemplarité sur et hors du terrain.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden" aria-labelledby="about-title">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-energy/10 text-energy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <span>{t('nav.about')}</span>
          </div>
          <h2 id="about-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Grid: President & Story */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* President Image Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border/80 group">
              <img
                src={presidentImg}
                alt="Bakari Mahaman - Président BM Academy Sport"
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-energy text-primary text-xs font-black uppercase rounded-md mb-2 shadow-sm">
                  Fondateur & Président
                </span>
                <h3 className="text-secondary font-black text-xl sm:text-2xl">Bakari Mahaman</h3>
                <p className="text-secondary/80 text-sm mt-0.5">BM Academy Sport Yaoundé</p>
              </div>
            </div>
          </div>

          {/* Text Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-energy font-bold text-sm uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" />
              <span>Nouvelle Route Bastos (Hôpital Bethesda) • Yaoundé</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-6 leading-snug">
              Une pépinière d'excellence dédiée à l'éclosion du football camerounais
            </h3>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.mission')}
            </p>
            
            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-muted/60 border border-border/60 rounded-xl hover:border-energy/40 transition-colors">
                <div className="w-12 h-12 bg-energy/15 rounded-xl flex items-center justify-center flex-shrink-0 text-energy font-black text-xl">
                  70+
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Jeunes en formation</h4>
                  <p className="text-xs text-muted-foreground">Catégories U5, U10, U13, U15, U16, U17, U18</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/60 border border-border/60 rounded-xl hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0 text-accent">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Séances & Détections</h4>
                  <p className="text-xs text-muted-foreground">Hôpital Bethesda, Nouvelle Route Bastos</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Les 4 Valeurs Fondamentales
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Ce qui guide chaque jour nos joueurs et notre équipe d'encadrement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border hover:border-energy/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-energy/10 text-energy flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-energy group-hover:text-primary transition-all duration-300">
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
