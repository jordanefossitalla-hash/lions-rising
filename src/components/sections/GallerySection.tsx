import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ZoomIn, ChevronLeft, ChevronRight, Play, Camera } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import team5 from '@/assets/team-5.jpg';
import teamVan from '@/assets/team-van.jpg';
import teamCollective from '@/assets/hero-bg.jpg';

type Category = 'Tous' | 'Équipe' | 'Match' | 'Entraînement';

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  featured?: boolean;
}

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { src: team5, alt: 'Tous les joueurs BM Academy Sport', category: 'Équipe', featured: true },
    { src: team1, alt: 'Équipe U15 BM Academy Sport', category: 'Match' },
    { src: teamVan, alt: 'Transport officiel BM Academy', category: 'Équipe' },
    { src: team4, alt: 'Équipe U13 en compétition', category: 'Match', featured: true },
    { src: team3, alt: 'Match amical inter-équipes', category: 'Match' },
    { src: team2, alt: 'Entraînement technique', category: 'Entraînement' },
    { src: teamCollective, alt: 'Session d\'entraînement collectif', category: 'Entraînement' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % images.length
      : (selectedImage - 1 + images.length) % images.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden" aria-labelledby="gallery-title">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-energy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 to-energy/20 backdrop-blur-sm border border-accent/20 rounded-full text-sm mb-4">
            <Camera className="w-4 h-4 text-accent" />
            <span className="font-semibold bg-gradient-to-r from-accent to-energy bg-clip-text text-transparent">
              {t('nav.gallery')}
            </span>
          </div>
          <h2 id="gallery-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Mosaic Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px]">
          {images.map((image, index) => {
            // Elegant 3-column Mosaic Layout
            const getGridClasses = () => {
              switch(index) {
                case 0: return 'md:col-span-2 md:row-span-2'; // Team 5 (Main) - Large
                case 6: return 'md:col-span-3 md:row-span-1'; // HeroBg - Wide Bottom Banner
                default: return 'md:col-span-1 md:row-span-1'; // Others - Standard Tiles
              }
            };

            return (
              <div
                key={`${image.alt}-${index}`}
                onClick={() => openLightbox(index)}
                className={`${getGridClasses()} relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-2.5 py-1 bg-energy/90 backdrop-blur-sm text-primary text-[10px] sm:text-xs font-bold rounded-lg mb-2 shadow-lg">
                        {image.category}
                      </span>
                      <h3 className="text-secondary text-sm sm:text-base font-bold leading-tight">
                        {image.alt}
                      </h3>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                       <ZoomIn className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="group relative inline-flex items-center gap-3 py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-primary to-primary/80 text-secondary rounded-full font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
            <span className="relative z-10">{t('gallery.viewMore')}</span>
            <Camera className="w-4 sm:w-5 h-4 sm:h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-energy to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-secondary hover:bg-energy hover:text-primary transition-all duration-300 hover:scale-110 z-50"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-secondary hover:bg-energy hover:text-primary transition-all duration-300 hover:scale-110 z-50"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-secondary hover:bg-energy hover:text-primary transition-all duration-300 hover:scale-110 z-50"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-primary via-primary/80 to-transparent rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-energy text-primary text-xs font-bold rounded-full mb-2">
                    {images[selectedImage].category}
                  </span>
                  <p className="text-secondary text-sm sm:text-base font-medium">
                    {images[selectedImage].alt}
                  </p>
                </div>
                <div className="text-secondary/60 text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  idx === selectedImage 
                    ? 'ring-2 ring-energy scale-110' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
