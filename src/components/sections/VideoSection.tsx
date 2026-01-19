import { useLanguage } from '@/contexts/LanguageContext';
import { Video, Award, Star, Users, Play } from 'lucide-react';

export function VideoSection() {
  const { t } = useLanguage();

  return (
    <section id="video" className="py-20 lg:py-32 bg-primary relative overflow-hidden" aria-labelledby="video-title">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-energy blur-[120px]" />
         <div className="absolute top-[40%] right-[0%] w-[40%] h-[60%] rounded-full bg-accent blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Video Container */}
          <div className="w-full lg:w-3/5 relative group">
             {/* Abstract Frame Decoration */}
             <div className="absolute -inset-1 bg-gradient-to-r from-energy via-accent to-energy rounded-2xl sm:rounded-3xl opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-700 animate-gradient-xy"></div>
             
             <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/ZcUatE9VCsI"
                  title="BM Academy Sport - Au cœur de l'action"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
             </div>

             {/* Floating Stats Card - Desktop Only */}
             <div className="hidden lg:flex absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl animate-float">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-energy flex items-center justify-center">
                   <Play className="w-6 h-6 text-primary fill-current" />
                 </div>
                 <div>
                   <p className="text-white font-bold text-lg">Immersion Totale</p>
                   <p className="text-white/70 text-sm">Découvrez notre univers</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Right Column: Content & Description */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-energy mb-6 border border-white/10">
              <Video className="w-4 h-4" />
              <span>{t('video.badge')}</span>
            </div>

            <h2 id="video-title" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {t('video.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-energy to-yellow-300 mt-2">
                 L'Excellence en Images
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Star, text: "Formation de haut niveau", color: "text-yellow-400" },
                { icon: Users, text: "Encadrement professionnel", color: "text-blue-400" },
                { icon: Award, text: "Infrastructures de qualité", color: "text-green-400" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-energy hover:bg-energy/90 text-primary font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-energy/20 cursor-default">
                 <Play className="w-5 h-5 fill-current" />
                 Voir plus de vidéos
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
