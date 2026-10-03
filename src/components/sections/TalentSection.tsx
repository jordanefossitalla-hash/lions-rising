import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import talentVideo from '@/assets/talent-video.mp4';

export function TalentSection() {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const keyStrengths = language === 'fr' ? [
    {
      title: 'Maîtrise technique et coordination motrice',
      desc: 'Dextérité, contrôle orienté et aisance corporelle dès les plus jeunes catégories.'
    },
    {
      title: 'Encadrement personnalisé au quotidien',
      desc: 'Chaque joueur dispose d\'un plan de progression ciblant ses points forts et axes d\'amélioration.'
    },
    {
      title: 'Culture de l\'effort et mental de gagneur',
      desc: 'Préparation psychologique pour performer sous pression et révéler le potentiel de lion indomptable.'
    }
  ] : [
    {
      title: 'Technical mastery and motor coordination',
      desc: 'Agility, directional control, and composure on the ball from the youngest age groups.'
    },
    {
      title: 'Daily individualized coaching',
      desc: 'Every player follows a personalized progression plan focused on strengths and growth areas.'
    },
    {
      title: 'Grit, determination and winning mindset',
      desc: 'Psychological conditioning to perform under pressure and embody the Indomitable spirit.'
    }
  ];

  return (
    <section id="talent" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden" aria-labelledby="talent-title">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-energy/10 text-energy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Immersion & Détection' : 'Immersion & Talent Scouting'}</span>
          </div>
          <h2 id="talent-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            {language === 'fr' ? 'La Technique au Cœur du Jeu' : 'Technique at the Heart of the Game'}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez nos jeunes talents en action : discipline, répétition des gammes techniques et passion du football.'
              : 'Witness our young talents in action: discipline, technical drills, and absolute passion for the beautiful game.'}
          </p>
        </div>

        {/* Video & Description Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Video Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-card/80 group">
              
              {/* Aspect Ratio Container for Vertical Footage */}
              <div className="relative aspect-[9/16] w-full">
                <video
                  ref={videoRef}
                  src={talentVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />
                
                {/* Subtle gradient overlay at bottom for controls readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Interactive Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <div className="text-left px-2">
                    <p className="text-white text-xs font-bold leading-tight">BM Academy Sport</p>
                    <p className="text-white/70 text-[10px]">Session Technique • Bastos (Bethesda)</p>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                    aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-energy font-bold text-xs uppercase tracking-wider mb-2 block">
              {language === 'fr' ? 'Détection & Éclosion' : 'Scouting & Development'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-5 leading-snug">
              {language === 'fr' 
                ? 'Former des footballeurs complets, intelligents et compétitifs'
                : 'Developing complete, intelligent and competitive footballers'}
            </h3>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'À BM Academy Sport, chaque jeune bénéficie d\'une méthodologie rigoureuse. De la coordination motrice élémentaire aux circuits techniques intenses, nous inculquons le sens de la précision et le plaisir d\'apprendre.'
                : 'At BM Academy Sport, each player benefits from a structured methodology. From basic motor coordination to high-intensity technical drills, we instill precision and joy in learning.'}
            </p>

            {/* Strengths List */}
            <div className="space-y-4 mb-8">
              {keyStrengths.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-card border border-border/80 hover:border-energy/40 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-energy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base leading-snug">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trial Registration CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-energy hover:bg-energy/90 text-primary font-bold rounded-xl shadow-lg shadow-energy/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>{language === 'fr' ? 'Inscrire mon enfant aux essais' : 'Register child for trials'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/237693752118?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20d%C3%A9tections%20BM%20Academy%20Sport."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card hover:bg-muted text-foreground border border-border font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>{language === 'fr' ? 'Échanger sur WhatsApp' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
