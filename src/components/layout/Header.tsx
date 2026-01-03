import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.programs', href: '#programs' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="BM Academy Sport Yaoundé"
              className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="text-secondary font-bold text-lg md:text-xl block leading-tight">
                BM Academy
              </span>
              <span className="text-energy text-xs md:text-sm font-medium">
                Sport Yaoundé
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="nav-link">
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-4">
            <div className="lang-switch">
              <button
                onClick={() => setLanguage('fr')}
                className={language === 'fr' ? 'active' : ''}
              >
                FR
              </button>
              <span className="text-secondary/40">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'active' : ''}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="hidden md:block btn-hero-primary text-sm py-2 px-4"
            >
              {t('hero.cta.trials')}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-secondary p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-secondary/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-secondary hover:text-energy transition-colors py-2 text-lg font-medium"
                >
                  {t(item.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-hero-primary text-center mt-2"
              >
                {t('hero.cta.trials')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
