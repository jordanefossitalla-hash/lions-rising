import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  GraduationCap, 
  Dumbbell, 
  Brain, 
  Star, 
  ShieldCheck, 
  Award, 
  Compass, 
  Activity, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Tag
} from 'lucide-react';

export function ProgramsSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'u5' | 'u10' | 'u13' | 'u15' | 'u16' | 'u17' | 'u18'>('u10');

  const categories = [
    {
      id: 'u5' as const,
      badge: 'U5 • 4-5 ans',
      title: language === 'fr' ? 'U5 • Baby Foot & Éveil Moteur' : 'U5 • Baby Football & Discovery',
      tagline: language === 'fr' ? 'Découverte ludique du ballon et coordination motrice' : 'Playful ball discovery and motor coordination',
      description: language === 'fr' 
        ? 'Premiers pas dans le football. Ateliers récréatifs de motricité, apprentissage de l\'équilibre, développement du plaisir du jeu et socialisation dans un cadre sécurisé et bienveillant.'
        : 'First steps in football. Fun motor workshops, balance development, pure joy of the game, and socialization in a caring environment.',
      objectives: language === 'fr' ? [
        'Coordination motrice globale et équilibre corporelle',
        'Familiarisation et plaisir du contact avec le ballon',
        'Jeux d\'éveil et circuits d\'agilité amusants',
        'Écoute, partage et intégration en petit groupe'
      ] : [
        'Global motor skills, agility and physical balance',
        'Comfort, confidence and pure fun with the ball',
        'Interactive obstacle courses and motor games',
        'Listening, sharing and group socialization'
      ],
      intensity: language === 'fr' ? '2 séances ludiques par semaine' : '2 playful sessions per week',
      icon: Sparkles,
    },
    {
      id: 'u10' as const,
      badge: 'U10 • 8-10 ans',
      title: language === 'fr' ? 'U10 • École de Foot & Dextérité' : 'U10 • Football School & Dexterity',
      tagline: language === 'fr' ? 'L\'apprentissage des fondamentaux dans la joie et la rigueur' : 'Learning fundamentals with joy and rigor',
      description: language === 'fr' 
        ? 'Initiation technique progressive, conduite de balle, première touche et passes. Les bases indispensables du football dans un environnement formateur, structurant et motivant.'
        : 'Progressive technical initiation, ball control, first touch and passing. Essential basics in a stimulating learning environment.',
      objectives: language === 'fr' ? [
        'Dextérité balle au pied, jonglage et première touche',
        'Développement de la vitesse et de la coordination motrice',
        'Jeux réduits (3v3, 5v5, 7v7) pour multiplier les ballons touchés',
        'Sensibilisation au fair-play, au respect et à l\'esprit d\'équipe'
      ] : [
        'Ball mastery, juggling and first touch precision',
        'Motor skills, speed and body coordination development',
        'Small-sided games (3v3, 5v5, 7v7) to maximize touches',
        'Introduction to fair-play, discipline and team spirit'
      ],
      intensity: language === 'fr' ? '3 séances par semaine + matchs d\'initiation' : '3 sessions per week + beginner matches',
      icon: GraduationCap,
    },
    {
      id: 'u13' as const,
      badge: 'U13 • 11-13 ans',
      title: language === 'fr' ? 'U13 • Perfectionnement Technique' : 'U13 • Technical Development',
      tagline: language === 'fr' ? 'Précision gestuelle, prise d\'information et transition à 11' : 'Technical accuracy, awareness and 11-a-side transition',
      description: language === 'fr'
        ? 'Transition vers le grand terrain. Développement de la vitesse d\'exécution, de la vision de jeu sous pression et renforcement physique adapté à la croissance des adolescents.'
        : 'Transition to full pitch. Developing speed of execution, awareness under pressure and growth-adapted physical conditioning.',
      objectives: language === 'fr' ? [
        'Maîtrise des passes courtes/longues et jeu des deux pieds',
        'Prise d\'information avant de recevoir le ballon (scan visuel)',
        'Notions tactiques fondamentales (bloc d\'équipe, transition)',
        'Préparation physique adaptée sans surcharge articulaire'
      ] : [
        'Mastery of short/long passing and two-footed proficiency',
        'Scanning and decision-making before receiving the ball',
        'Fundamental tactical concepts (team shape, pressing triggers)',
        'Adapted physical conditioning avoiding joint overload'
      ],
      intensity: language === 'fr' ? '3 à 4 séances par semaine + confrontations régionales' : '3 to 4 sessions per week + regional matches',
      icon: Dumbbell,
    },
    {
      id: 'u15' as const,
      badge: 'U15 • 14-15 ans',
      title: language === 'fr' ? 'U15 • Pré-Formation & Compétition' : 'U15 • Pre-Formation & Competition',
      tagline: language === 'fr' ? 'Exigence athlétique, discipline tactique et début de spécialisation' : 'Athletic rigor, tactical discipline and specialization',
      description: language === 'fr'
        ? 'Entrée dans la pré-formation intensive. Développement de la vitesse d\'action, de la puissance musculaire et début du travail spécifique par ligne de jeu.'
        : 'Entry into intensive pre-formation. Speed development, athletic power, and position-specific fundamentals.',
      objectives: language === 'fr' ? [
        'Travail spécifique par poste (défenseurs, milieux, attaquants, gardiens)',
        'Endurance aérobie, explosivité et puissance musculaire',
        'Analyse vidéo tactique et lecture des failles adverses',
        'Développement de la force mentale face à l\'adversité'
      ] : [
        'Position-specific training (defenders, midfielders, wingers, keepers)',
        'Aerobic power, speed, agility and explosive acceleration',
        'Tactical video analysis and opponent assessment',
        'Mental resilience and competitive focus'
      ],
      intensity: language === 'fr' ? '4 séances par semaine + championnat officiel' : '4 sessions per week + official competitions',
      icon: Brain,
    },
    {
      id: 'u16' as const,
      badge: 'U16 • 15-16 ans',
      title: language === 'fr' ? 'U16 • Cadets & Haute Intensité' : 'U16 • High-Intensity Cadets',
      tagline: language === 'fr' ? 'Rythme de jeu accéléré, pressing coordonné et puissance' : 'Fast-paced play, coordinated pressing and power',
      description: language === 'fr'
        ? 'Catégorie charnière vers les équipes juniors. Intensification athlétique, prise de décision ultra-rapide sous pression et régularité des performances en match officiel.'
        : 'Pivotal age group toward junior ranks. High athletic intensity, rapid decision-making under pressure and competitive consistency.',
      objectives: language === 'fr' ? [
        'Exécution technique à très haute intensité',
        'Pressing coordonné et maîtrise des transitions offensives/défensives',
        'Renforcement athlétique ciblé et travail de la vitesse pure',
        'Leadership, communication sur le terrain et esprit de vainqueur'
      ] : [
        'High-velocity technical execution under defensive pressure',
        'Coordinated pressing and fluid transitions',
        'Athletic power conditioning and top sprint speed',
        'On-field communication, leadership and winning mentality'
      ],
      intensity: language === 'fr' ? '4 à 5 séances par semaine + matchs d\'élite' : '4 to 5 sessions per week + elite fixtures',
      icon: Activity,
    },
    {
      id: 'u17' as const,
      badge: 'U17 • 16-17 ans',
      title: language === 'fr' ? 'U17 • Juniors & Pré-Professionnalisation' : 'U17 • Juniors & Pre-Pro Pathway',
      tagline: language === 'fr' ? 'Rigueur professionnelle, confrontations seniors et détections' : 'Pro rigor, senior match-ups and scout showcases',
      description: language === 'fr'
        ? 'Préparation directe aux exigences du haut niveau. Matchs d\'exhibition contre des clubs seniors, perfectionnement tactique fin et exposition aux opportunités de carrière.'
        : 'Direct preparation for high-performance standards. Exhibition games against senior clubs, advanced tactical refinement and scout showcases.',
      objectives: language === 'fr' ? [
        'Efficacité maximale dans les zones de vérité (surface offensive/défensive)',
        'Maturité tactique et gestion des temps faibles en match',
        'Hygiène de vie d\'athlète de haut niveau (nutrition, sommeil, récupération)',
        'Préparation aux tests de détection nationaux et internationaux'
      ] : [
        'Clinical efficiency in both penalty boxes',
        'Tactical maturity and composure during tough match phases',
        'Elite athlete lifestyle (nutrition, recovery, discipline)',
        'Preparation for national and international scout trials'
      ],
      intensity: language === 'fr' ? '5 séances par semaine + matchs officiels et tournois' : '5 sessions per week + tournament matches',
      icon: ShieldCheck,
    },
    {
      id: 'u18' as const,
      badge: 'U18 • 17-18 ans',
      title: language === 'fr' ? 'U18 • Élite & Passerelle Pro' : 'U18 • Elite & Pro Gateway',
      tagline: language === 'fr' ? 'L\'antichambre du monde professionnel et des sélections' : 'The gateway to professional clubs and national teams',
      description: language === 'fr'
        ? 'Dernier palier de formation avant l\'intégration des clubs professionnels seniors ou sélections nationales. Immersion complète, préparation psychologique et accompagnement de carrière.'
        : 'Final training step before stepping into professional senior clubs or national teams. Full immersion, mental toughness and career guidance.',
      objectives: language === 'fr' ? [
        'Rythme et intensité calqués sur les exigences professionnelles',
        'Matchs amicaux réguliers contre des clubs seniors et centres d\'élite',
        'Gestion nutritionnelle, récupération active et prévention blessures',
        'Accompagnement de carrière et préparation aux tests de détection'
      ] : [
        'Training intensity and pacing mirroring pro academy standards',
        'Regular exhibition matches against senior and elite squads',
        'Nutrition guidance, active recovery and injury prevention',
        'Career management support and preparation for club trials'
      ],
      intensity: language === 'fr' ? 'Entraînement quotidien + confrontations de très haut niveau' : 'Daily training + high-intensity match play',
      icon: Star,
    }
  ];

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  const pillars = [
    {
      icon: Compass,
      title: language === 'fr' ? 'Technique Individuelle' : 'Individual Technique',
      desc: language === 'fr' ? 'Qualité de touche, maîtrise dans les petits espaces, vitesse d\'exécution et finition.' : 'Ball control, small space agility, quick execution and finishing.'
    },
    {
      icon: Activity,
      title: language === 'fr' ? 'Intelligence Tactique' : 'Tactical Intelligence',
      desc: language === 'fr' ? 'Compréhension du jeu, vision collective, anticipation et transition rapide attaque/défense.' : 'Game understanding, collective vision, anticipation and quick transitions.'
    },
    {
      icon: Dumbbell,
      title: language === 'fr' ? 'Condition Athlétique' : 'Athletic Conditioning',
      desc: language === 'fr' ? 'Vitesse de pointe, explosivité, puissance physique et prévention rigoureuse des blessures.' : 'Top speed, explosive power, stamina and injury prevention.'
    },
    {
      icon: ShieldCheck,
      title: language === 'fr' ? 'Mental & Éducation' : 'Mindset & Education',
      desc: language === 'fr' ? 'Discipline de vie, combativité, humilité, esprit d\'équipe et rigueur scolaire garantie.' : 'Discipline, grit, team ethic, humility and strong academic monitoring.'
    }
  ];

  const strengths = [
    { text: language === 'fr' ? 'Éducateurs certifiés' : 'Certified coaching staff' },
    { text: language === 'fr' ? 'Site : Hôpital Bethesda (Bastos)' : 'Site: Bethesda Hospital (Bastos)' },
    { text: language === 'fr' ? 'Suivi individuel et médical' : 'Individual performance tracking' },
    { text: language === 'fr' ? 'Tournois et matchs officiels' : 'Official matches & tournaments' }
  ];

  return (
    <section id="programs" className="py-20 md:py-28 bg-primary text-secondary relative overflow-hidden" aria-labelledby="programs-title">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-energy/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-energy/15 border border-energy/30 text-energy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <span>{t('programs.title')}</span>
          </div>
          <h2 id="programs-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight mb-4">
            {language === 'fr' ? '7 Pôles de Formation (U5 à U18)' : '7 Training Divisions (U5 to U18)'}
          </h2>
          <p className="text-base sm:text-lg text-secondary/80 leading-relaxed max-w-2xl mx-auto mb-6">
            {language === 'fr'
              ? 'Un parcours complet et structuré de l\'éveil des tout-petits (U5) jusqu\'à l\'élite pro (U18) à la nouvelle route Bastos.'
              : 'A structured pathway from early childhood discovery (U5) to elite pro level (U18) at Nouvelle Route Bastos.'}
          </p>

          {/* Fee & Location Announcement Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 sm:p-2.5 px-4 sm:px-6 bg-secondary/10 border border-energy/40 rounded-2xl backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-2 text-energy font-bold text-xs sm:text-sm">
              <Tag className="w-4 h-4" />
              <span>{language === 'fr' ? 'Test d\'évaluation / Séance d\'essai :' : 'Evaluation trial fee:'}</span>
              <span className="px-2.5 py-0.5 bg-energy text-primary rounded-md font-black text-xs sm:text-sm">10 000 FCFA</span>
            </div>
            <span className="hidden sm:inline text-secondary/40">•</span>
            <div className="flex items-center gap-1.5 text-secondary/90 text-xs sm:text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Hôpital Bethesda, Nouvelle Route Bastos</span>
            </div>
          </div>
        </div>

        {/* Category Tabs (U5, U10, U13, U15, U16, U17, U18) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-energy text-primary shadow-lg shadow-energy/25 scale-105'
                    : 'bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-white'
                }`}
              >
                <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{cat.badge.split(' • ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Card */}
        <div className="max-w-4xl mx-auto bg-secondary/5 border border-secondary/15 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md mb-20 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Overview */}
            <div className="md:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-energy/20 text-energy text-xs font-black uppercase mb-3">
                  <span>{activeCategory.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight mb-3">
                  {activeCategory.title}
                </h3>
                <p className="text-energy font-medium text-sm sm:text-base mb-4">
                  {activeCategory.tagline}
                </p>
                <p className="text-secondary/80 text-sm sm:text-base leading-relaxed mb-6">
                  {activeCategory.description}
                </p>
              </div>

              <div className="p-3.5 bg-secondary/10 rounded-xl border border-secondary/10">
                <span className="text-xs uppercase text-energy font-bold tracking-wider block mb-1">
                  {language === 'fr' ? 'Volume de travail :' : 'Training Load:'}
                </span>
                <p className="text-xs sm:text-sm text-secondary font-medium">
                  {activeCategory.intensity}
                </p>
              </div>
            </div>

            {/* Right Col: Objectives List & Action */}
            <div className="md:col-span-6 bg-secondary/5 border border-secondary/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-energy" />
                  <span>{language === 'fr' ? 'Objectifs & Compétences Clés' : 'Key Objectives & Skills'}</span>
                </h4>
                <ul className="space-y-3 mb-6">
                  {activeCategory.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-energy flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-secondary/90 leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-secondary/10">
                <div className="flex items-center justify-between text-xs text-secondary/80 mb-3">
                  <span>{language === 'fr' ? 'Frais d\'essai :' : 'Trial fee:'}</span>
                  <span className="font-bold text-energy">10 000 FCFA</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-energy hover:bg-energy/90 text-primary font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-md shadow-energy/20"
                >
                  <span>{language === 'fr' ? `Participer au test ${activeCategory.badge.split(' • ')[0]} (10 000 F)` : `Book ${activeCategory.badge.split(' • ')[0]} Trial (10,000 F)`}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* The 4 Methodological Pillars */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
              {language === 'fr' ? 'Les 4 Piliers de l\'Excellence BMAS' : 'The 4 Pillars of BMAS Excellence'}
            </h3>
            <p className="text-sm sm:text-base text-secondary/70 mt-2 max-w-xl mx-auto">
              {language === 'fr' 
                ? 'Une approche pédagogique complète calquée sur les standards du football professionnel.'
                : 'A comprehensive pedagogical methodology tailored to pro football standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-secondary/5 border border-secondary/15 hover:border-energy/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/10 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-energy/15 text-energy flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base sm:text-lg text-secondary mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-secondary/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths / Guarantee Strip */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary/10 via-secondary/15 to-secondary/10 border border-secondary/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {strengths.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-2">
                <CheckCircle2 className="w-5 h-5 text-energy mb-1.5" />
                <span className="text-xs sm:text-sm font-semibold text-secondary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
