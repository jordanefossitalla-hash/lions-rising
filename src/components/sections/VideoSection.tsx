import { useLanguage } from '@/contexts/LanguageContext';
import { Play, Video } from 'lucide-react';

export function VideoSection() {
  const { t } = useLanguage();

  return (
    <section id="video" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">
            <Video className="w-4 h-4 inline mr-2" />
            {t('video.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            {t('video.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('video.subtitle')}
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary shadow-2xl shadow-primary/20">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/80">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />
              </div>

              {/* Play Button */}
              <div className="relative z-10 group cursor-pointer">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-energy/20 flex items-center justify-center mb-6 group-hover:bg-energy/30 transition-all duration-300 group-hover:scale-110">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-energy flex items-center justify-center shadow-lg shadow-energy/30 group-hover:shadow-energy/50 transition-all">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2 text-center px-4">
                {t('video.placeholder.title')}
              </h3>
              <p className="text-secondary/60 text-center max-w-md px-4">
                {t('video.placeholder.subtitle')}
              </p>

              {/* Duration Badge */}
              <div className="mt-6 px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-secondary text-sm font-medium">
                  🎬 20 min
                </span>
              </div>
            </div>

            {/* Video Embed Placeholder - Uncomment and add YouTube URL when ready */}
            {/* 
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Présentation BM Academy Sport"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('video.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
