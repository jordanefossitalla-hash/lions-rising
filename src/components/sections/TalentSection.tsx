import { Star, Sparkles, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import talentVideo from '@/assets/talent-video.mp4';

export function TalentSection() {
  const { t } = useLanguage();

  return (
    <section id="talent" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background to-muted relative overflow-hidden" aria-labelledby="talent-title">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-energy/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy/10 rounded-full text-sm font-medium text-energy mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Nos Pépites</span>
          </div>
          <h2 id="talent-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
            Les Talents de
            <span className="block text-energy mt-1">Demain</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Découvrez les futurs champions qui s'entraînent chaque jour à BM Academy Sport
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Video Container */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-energy via-primary to-energy rounded-3xl opacity-50 blur-lg group-hover:opacity-75 transition-all duration-500 animate-pulse" />
            
            {/* Video Frame */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-energy/30">
              {/* Phone-style frame for vertical video */}
              <div className="relative aspect-[9/16] max-h-[500px] sm:max-h-[600px] mx-auto">
                <video
                  src={talentVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge on video */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-xl p-3">
                  <div className="w-10 h-10 rounded-full bg-energy flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary fill-current" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">Jeune Talent</p>
                    <p className="text-white/70 text-xs sm:text-sm">Maîtrise technique en action</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-energy rounded-full flex items-center justify-center shadow-lg animate-bounce hidden sm:flex">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              La Technique au Cœur de Notre Formation
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              À BM Academy Sport, nous cultivons les talents dès le plus jeune âge. 
              Nos jeunes footballeurs développent leur maîtrise technique à travers 
              des exercices quotidiens comme le jonglage, fondamental pour le contrôle du ballon.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Star, title: "Technique individuelle", desc: "Jonglage, dribbles, passes précises" },
                { icon: Trophy, title: "Progression mesurée", desc: "Suivi personnalisé de chaque joueur" },
                { icon: Sparkles, title: "Confiance en soi", desc: "Développement mental et physique" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-energy/50 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-energy/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-energy" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/237693752118?text=Bonjour%2C%20je%20souhaite%20inscrire%20mon%20enfant%20à%20BM%20Academy%20Sport."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-energy hover:bg-energy/90 text-primary font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-energy/20"
            >
              <Sparkles className="w-5 h-5" />
              Inscrivez votre enfant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
