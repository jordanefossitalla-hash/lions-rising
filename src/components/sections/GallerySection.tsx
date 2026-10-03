import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  LayoutGrid, 
  SlidersHorizontal,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

import team5 from '@/assets/team-5.jpg';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import teamVan from '@/assets/team-van.jpg';
import facility from '@/assets/facility.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import heroBg from '@/assets/hero-bg.jpg';

type Category = 'Tous' | 'Match' | 'Entraînement' | 'Club';
type ViewMode = 'bento' | 'carousel';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: 'Match' | 'Entraînement' | 'Club';
  location: string;
  date: string;
  badge?: string;
  featured?: boolean;
}

export function GallerySection() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<Category>('Tous');
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'team-official',
      src: team5,
      title: language === 'fr' ? 'Promotion Officielle 2025-2026' : 'Official Promotion 2025-2026',
      subtitle: language === 'fr' ? 'Effectif complet de BM Academy Sport réunis avec le staff' : 'Full BM Academy Sport squad gathered with staff',
      category: 'Club',
      location: 'Yaoundé, Bastos',
      date: 'Saison 2025-2026',
      badge: language === 'fr' ? 'Équipe Officielle' : 'Official Squad',
      featured: true,
    },
    {
      id: 'facility-ground',
      src: facility,
      title: language === 'fr' ? 'Infrastructures & Cadre d\'Entraînement' : 'Facilities & Training Grounds',
      subtitle: language === 'fr' ? 'Le terrain de pratique à la Nouvelle Route Bastos' : 'Training pitch at Nouvelle Route Bastos',
      category: 'Club',
      location: 'Hôpital Bethesda',
      date: 'Quotidien',
      badge: language === 'fr' ? 'Nos Terrains' : 'Our Pitch',
    },
    {
      id: 'team-van-official',
      src: teamVan,
      title: language === 'fr' ? 'Transport Officiel BMAS' : 'Official BMAS Transport',
      subtitle: language === 'fr' ? 'Mobilité sécurisée des joueurs pour les matchs et tournois' : 'Safe player mobility for matches and tournaments',
      category: 'Club',
      location: 'Yaoundé & Régions',
      date: 'Logistique Pro',
      badge: language === 'fr' ? 'Mobilité Club' : 'Club Van',
    },
    {
      id: 'match-u15',
      src: team1,
      title: language === 'fr' ? 'Équipe U15 en Championnat' : 'U15 Championship Squad',
      subtitle: language === 'fr' ? 'Compétition régionale et rigueur tactique en match' : 'Regional competition and tactical discipline in game',
      category: 'Match',
      location: 'Yaoundé',
      date: 'Championnat Régional',
      badge: 'U15 Compétition',
    },
    {
      id: 'training-intensity',
      src: gallery2,
      title: language === 'fr' ? 'Maîtrise Technique & Dribbles' : 'Technical Mastery & Dribbling',
      subtitle: language === 'fr' ? 'Ateliers spécifiques de prise de balle et percussion' : 'Specific workshops for ball control and acceleration',
      category: 'Entraînement',
      location: 'Hôpital Bethesda',
      date: 'Séance Technique',
      badge: language === 'fr' ? 'Perfectionnement' : 'Skill Drill',
    },
    {
      id: 'tournament-u13',
      src: team4,
      title: language === 'fr' ? 'Équipe U13 au Tournoi' : 'U13 Squad at Tournament',
      subtitle: language === 'fr' ? 'Apprentissage du dépassement de soi en compétition' : 'Learning resilience and passion in competition',
      category: 'Match',
      location: 'Stade Régional',
      date: 'Tournoi Jeunes',
      badge: 'U13 Élite',
    },
    {
      id: 'training-agility',
      src: team2,
      title: language === 'fr' ? 'Atelier Vitesse & Coordination' : 'Speed & Coordination Drill',
      subtitle: language === 'fr' ? 'Développement moteur adapté dès les petites catégories' : 'Motor skills development adapted from early ages',
      category: 'Entraînement',
      location: 'Nouvelle Route Bastos',
      date: 'Préparation Physique',
      badge: language === 'fr' ? 'Physique & Vitesse' : 'Athletic Work',
    },
    {
      id: 'match-teamwork',
      src: team3,
      title: language === 'fr' ? 'Cohésion & Esprit d\'Équipe' : 'Team Cohesion & Unity',
      subtitle: language === 'fr' ? 'Causerie d\'avant-match et solidarité collective' : 'Pre-match team talk and collective solidarity',
      category: 'Match',
      location: 'Stade Kalakouta',
      date: 'Match Amical',
      badge: language === 'fr' ? 'Esprit d\'Équipe' : 'Team Spirit',
    },
    {
      id: 'academy-lifestyle',
      src: gallery1,
      title: language === 'fr' ? 'Moments Forts à l\'Académie' : 'Academy Highlights',
      subtitle: language === 'fr' ? 'Discipline, camaraderie et passion au cœur de Yaoundé' : 'Discipline, camaraderie and passion in Yaoundé',
      category: 'Entraînement',
      location: 'Bastos',
      date: 'Vie du Club',
      badge: language === 'fr' ? 'Quotidien' : 'Highlights',
    },
    {
      id: 'collective-pitch',
      src: heroBg,
      title: language === 'fr' ? 'Entraînement Collectif sur Grand Terrain' : 'Collective Full-Pitch Training',
      subtitle: language === 'fr' ? 'Mise en place tactique et vision globale du jeu' : 'Tactical set-up and overall game vision',
      category: 'Entraînement',
      location: 'Hôpital Bethesda',
      date: 'Grand Format',
      badge: language === 'fr' ? 'Grand Terrain' : 'Full Pitch',
    },
  ];

  const categories: Category[] = ['Tous', 'Match', 'Entraînement', 'Club'];

  const filteredItems = selectedCategory === 'Tous'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    setSelectedImage(curr => {
      if (curr === null) return null;
      return direction === 'next'
        ? (curr + 1) % filteredItems.length
        : (curr - 1 + filteredItems.length) % filteredItems.length;
    });
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 400;
    carouselRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (selectedImage === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
      if (event.key === 'ArrowRight') {
        setSelectedImage(curr => curr === null ? null : (curr + 1) % filteredItems.length);
      }
      if (event.key === 'ArrowLeft') {
        setSelectedImage(curr => curr === null ? null : (curr - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/20 relative overflow-hidden" aria-labelledby="gallery-title">
      {/* Background athletic accent gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-energy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-energy/10 text-energy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>{t('nav.gallery')}</span>
            </div>
            <h2 id="gallery-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-3">
              {t('gallery.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* View Mode Toggle (Bento Grid vs Cinematic Carousel) */}
          <div className="flex items-center gap-2 bg-muted p-1 rounded-xl border border-border flex-shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode('bento')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                viewMode === 'bento'
                  ? 'bg-primary text-secondary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Affichage en Grille Bento"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Mosaïque Bento</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-primary text-secondary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Affichage en Carrousel Cinématique"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Carrousel Pro</span>
            </button>
          </div>
        </div>

        {/* Category Filters with Counts */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border/50">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === 'Tous'
                ? galleryItems.length
                : galleryItems.filter(item => item.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat
                      ? 'bg-primary text-secondary shadow-md scale-105'
                      : 'bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span>
                    {cat === 'Tous' && (language === 'fr' ? 'Tous les clichés' : 'All Photos')}
                    {cat === 'Match' && (language === 'fr' ? 'Matchs & Tournois' : 'Matches')}
                    {cat === 'Entraînement' && (language === 'fr' ? 'Entraînements' : 'Training')}
                    {cat === 'Club' && (language === 'fr' ? 'Club & Infrastructures' : 'Club & Facilities')}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat ? 'bg-energy text-primary font-black' : 'bg-background/80 text-muted-foreground'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carousel arrows if in carousel mode */}
          {viewMode === 'carousel' && (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-xl bg-card border border-border hover:border-energy text-foreground flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Défiler vers la gauche"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-xl bg-card border border-border hover:border-energy text-foreground flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Défiler vers la droite"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* --- 1. BENTO GRID VIEW --- */}
        {viewMode === 'bento' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-auto">
            {filteredItems.map((item, index) => {
              // Master Hero Card for first item when on "Tous"
              const isHeroCard = selectedCategory === 'Tous' && index === 0;
              // Secondary highlight card
              const isSecondFeature = selectedCategory === 'Tous' && (index === 1 || index === 3);

              let colSpan = 'lg:col-span-4 md:col-span-1 col-span-1 min-h-[300px]';
              if (isHeroCard) {
                colSpan = 'lg:col-span-8 md:col-span-2 col-span-1 min-h-[420px] lg:min-h-[480px]';
              } else if (isSecondFeature) {
                colSpan = 'lg:col-span-4 md:col-span-1 col-span-1 min-h-[360px] lg:min-h-[480px]';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`${colSpan} group relative rounded-2xl overflow-hidden bg-card border border-border/80 shadow-soft hover:shadow-2xl hover:border-energy/60 transition-all duration-500 cursor-pointer flex flex-col justify-end`}
                >
                  {/* Photo with zoom effect on hover */}
                  <img
                    src={item.src}
                    alt={item.title}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Cinematic Athletic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="px-3 py-1 bg-energy text-primary text-[11px] font-black uppercase rounded-lg shadow-md flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          <span>{item.badge}</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold rounded-lg border border-white/10 hidden sm:inline-block">
                        {item.category}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="relative z-10 p-5 sm:p-6 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 text-xs text-white/75 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-energy" />
                        <span>{item.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-energy" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    <h3 className={`${isHeroCard ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg'} font-black text-white leading-tight mb-2 tracking-tight group-hover:text-energy transition-colors`}>
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Integrated Club Highlights Bento Card */}
            {selectedCategory === 'Tous' && (
              <div className="lg:col-span-4 md:col-span-1 col-span-1 min-h-[300px] rounded-2xl bg-gradient-to-br from-primary via-primary/95 to-primary-dark p-6 sm:p-8 border border-energy/30 shadow-soft flex flex-col justify-between text-secondary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-44 h-44 bg-energy/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-energy/20 border border-energy/40 flex items-center justify-center text-energy mb-4 group-hover:rotate-6 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-energy text-xs font-black uppercase tracking-wider block mb-1">
                    Académie d'Excellence
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-secondary leading-tight mb-3">
                    L'Excellence au Quotidien
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary/75 leading-relaxed">
                    Plus de 70 jeunes joueurs formés à l'Hôpital Bethesda (Bastos) sous la supervision de coachs certifiés FECAFOOT.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-energy font-bold">
                  <span>Séance de Test : 10 000 F</span>
                  <a href="#contact" className="inline-flex items-center gap-1 hover:underline">
                    <span>Rejoindre</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- 2. CAROUSEL PRO VIEW --- */}
        {viewMode === 'carousel' && (
          <div 
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] h-[360px] sm:h-[420px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-soft hover:shadow-2xl border border-border hover:border-energy/60 transition-all duration-500 snap-center"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  {item.badge && (
                    <span className="px-3 py-1 bg-energy text-primary text-[11px] font-black uppercase rounded-lg shadow">
                      {item.badge}
                    </span>
                  )}
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white z-10">
                  <div className="flex items-center gap-3 text-xs text-white/75 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-energy" />
                      <span>{item.location}</span>
                    </span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-1.5 leading-snug group-hover:text-energy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* --- 3. LIGHTBOX 2.0 (Full-Screen Modal with Filmstrip) --- */}
      {selectedImage !== null && filteredItems[selectedImage] && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse galerie"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between z-50 text-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-energy text-primary text-xs font-black uppercase rounded-lg shadow">
                {filteredItems[selectedImage].category}
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-semibold">
                {selectedImage + 1} / {filteredItems.length}
              </span>
            </div>

            <button 
              onClick={closeLightbox}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-energy hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg hover:scale-110"
              aria-label="Fermer la visionneuse"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-energy hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 z-50 cursor-pointer shadow-xl"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-energy hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 z-50 cursor-pointer shadow-xl"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Center Container */}
          <div 
            className="relative flex-1 flex flex-col items-center justify-center my-3 max-h-[72vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImage].src}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-[62vh] object-contain rounded-2xl shadow-2xl border border-white/15"
            />
            
            {/* Title & Metadata Strip under the photo */}
            <div className="mt-3 text-center max-w-2xl px-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                {filteredItems[selectedImage].subtitle} • <span className="text-energy font-medium">{filteredItems[selectedImage].location}</span>
              </p>
            </div>
          </div>

          {/* Filmstrip Bottom Thumbnails Strip */}
          <div 
            className="w-full max-w-3xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(idx)}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 cursor-pointer ${
                  idx === selectedImage 
                    ? 'ring-2 ring-energy scale-110 opacity-100 shadow-md' 
                    : 'opacity-50 hover:opacity-100'
                }`}
                aria-label={`Miniature ${idx + 1}`}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

