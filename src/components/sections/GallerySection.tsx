import { useLanguage } from '@/contexts/LanguageContext';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import team5 from '@/assets/team-5.jpg';
import teamVan from '@/assets/team-van.jpg';
import facility from '@/assets/facility.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export function GallerySection() {
  const { t } = useLanguage();

  const images = [
    { src: team5, alt: 'Tous les joueurs BM Academy Sport', category: 'Équipe' },
    { src: team1, alt: 'Équipe U15 BM Academy Sport', category: 'Match' },
    { src: teamVan, alt: 'Transport officiel BM Academy', category: 'Déplacements' },
    { src: team4, alt: 'Équipe U13 en compétition', category: 'Équipe' },
    { src: facility, alt: 'Terrain synthétique homologué', category: 'Installations' },
    { src: team3, alt: 'Match amical inter-équipes', category: 'Match' },
    { src: team2, alt: 'Entraînement technique', category: 'Entraînement' },
    { src: heroBg, alt: 'Session d\'entraînement collectif', category: 'Entraînement' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">
            {t('nav.gallery')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 4 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'aspect-square' : index === 4 ? 'aspect-video' : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-energy text-primary text-xs font-bold rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-secondary text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button className="btn-hero-accent inline-flex items-center gap-2 py-3 px-6">
            {t('gallery.viewMore')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
