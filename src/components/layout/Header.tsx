import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo-bmas.png';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.programs', href: '#programs' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/98 backdrop-blur-xl shadow-xl py-2'
          : 'bg-gradient-to-b from-primary/80 to-transparent py-3 md:py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group" aria-label="BM Academy Sport - Accueil">
            <img
              src={logo}
              alt="BM Academy Sport Yaoundé"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 group-hover:scale-105"
              loading="eager"
            />
            <div className="hidden xs:block sm:block">
              <span className="text-secondary font-bold text-sm sm:text-base md:text-lg lg:text-xl block leading-tight">
                BM Academy
              </span>
              <span className="text-energy text-[10px] sm:text-xs md:text-sm font-medium">
                Sport Yaoundé
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a 
                key={item.key} 
                href={item.href} 
                className="nav-link text-sm xl:text-base"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage('fr')}
                className={`transition-transform duration-300 hover:scale-110 ${language === 'fr' ? 'opacity-100 scale-110 ring-2 ring-energy rounded-sm' : 'opacity-50 grayscale hover:grayscale-0'}`}
                aria-label="Français"
                title="Français"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-6 h-4 object-cover rounded-sm shadow-sm">
                  <path fill="#ED2939" d="M0 0h3v2H0z"/>
                  <path fill="#fff" d="M0 0h2v2H0z"/>
                  <path fill="#002395" d="M0 0h1v2H0z"/>
                </svg>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-transform duration-300 hover:scale-110 ${language === 'en' ? 'opacity-100 scale-110 ring-2 ring-energy rounded-sm' : 'opacity-50 grayscale hover:grayscale-0'}`}
                aria-label="English"
                title="English"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4 object-cover rounded-sm shadow-sm">
                  <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                  <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                  <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                  </g>
                </svg>
              </button>
            </div>

            {/* CTA Button - Hidden on small mobile */}
            <a
              href="https://wa.me/237621721892?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20aux%20essais%20de%20BM%20Academy%20Sport."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block btn-hero-primary text-xs sm:text-sm py-2 px-3 sm:px-4 md:px-6 whitespace-nowrap"
            >
              {t('hero.cta.trials')}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-secondary p-2 hover:bg-secondary/10 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        <div 
          className={`lg:hidden fixed inset-0 top-0 bg-primary/98 backdrop-blur-xl transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-x-0' 
              : 'opacity-0 invisible translate-x-full'
          }`}
          style={{ zIndex: 100 }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-secondary p-2 hover:bg-secondary/10 rounded-lg transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={28} />
          </button>

          {/* Menu Content */}
          <nav className="flex flex-col items-center justify-center h-full px-6 py-20" role="navigation" aria-label="Navigation mobile">
            <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-sm">
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-secondary hover:text-energy transition-all duration-300 py-3 sm:py-4 text-xl sm:text-2xl font-bold border-b border-secondary/10 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{t(item.key)}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-energy" />
                </a>
              ))}
              
              {/* Mobile CTA */}
              <a
                href="https://wa.me/237621721892?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20aux%20essais%20de%20BM%20Academy%20Sport."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-hero-primary text-center mt-6 sm:mt-8 text-base sm:text-lg py-4"
              >
                {t('hero.cta.trials')}
              </a>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-8 mt-8">
                <button
                  onClick={() => { setLanguage('fr'); setIsMobileMenuOpen(false); }}
                  className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                    language === 'fr' 
                      ? 'scale-110 opacity-100' 
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div className={`p-1 rounded-md ${language === 'fr' ? 'bg-energy ring-2 ring-energy ring-offset-2 ring-offset-primary' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-12 h-8 object-cover rounded shadow-lg">
                      <path fill="#ED2939" d="M0 0h3v2H0z"/>
                      <path fill="#fff" d="M0 0h2v2H0z"/>
                      <path fill="#002395" d="M0 0h1v2H0z"/>
                    </svg>
                  </div>
                  <span className={`text-base font-bold ${language === 'fr' ? 'text-energy' : 'text-secondary'}`}>Français</span>
                </button>

                <button
                  onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                  className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                    language === 'en' 
                      ? 'scale-110 opacity-100' 
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div className={`p-1 rounded-md ${language === 'en' ? 'bg-energy ring-2 ring-energy ring-offset-2 ring-offset-primary' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-12 h-8 object-cover rounded shadow-lg">
                      <clipPath id="mb-s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                      <clipPath id="mb-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                      <g clipPath="url(#mb-s)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#mb-t)" stroke="#C8102E" strokeWidth="4"/>
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                      </g>
                    </svg>
                  </div>
                  <span className={`text-base font-bold ${language === 'en' ? 'text-energy' : 'text-secondary'}`}>English</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
