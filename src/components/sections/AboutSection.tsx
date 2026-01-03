import { Target, Heart, Award, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import presidentImg from '@/assets/president.jpg';

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
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-energy/10 text-energy font-semibold rounded-full text-sm mb-4">
            {t('nav.about')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* President Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={presidentImg}
                alt="Bakari Mahamat - Président BM Academy Sport"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-secondary font-bold text-xl">Bakari Mahamat</h3>
                <p className="text-secondary/80 text-sm">Fondateur & Président</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-energy rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-accent rounded-xl -z-10" />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.mission')}
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-energy/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-energy">70+</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Jeunes talents en formation</h4>
                  <p className="text-sm text-muted-foreground">De 10 à 18 ans, encadrés par des professionnels</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Terrain synthétique professionnel</h4>
                  <p className="text-sm text-muted-foreground">Infrastructures modernes à Kalakouta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-program text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-energy rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
