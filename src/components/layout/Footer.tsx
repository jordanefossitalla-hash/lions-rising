import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo-bmas.png';
import fecafootLogo from '@/assets/fecafoot-logo.png';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/bmacademysport', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/bmacademysport', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@bmacademysport', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/bmacademysport', label: 'Twitter' },
  ];

  const quickLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.programs'), href: '#programs' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* Back to top button */}
      <div className="relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-energy rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Retour en haut de page"
        >
          <ArrowUp className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 pt-16 sm:pt-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img src={logo} alt="BM Academy Sport" className="h-14 sm:h-16 md:h-20 w-auto" loading="lazy" />
              <div className="h-10 sm:h-12 md:h-16 w-px bg-energy/30 hidden xs:block" />
              <div className="flex flex-col items-center bg-white/10 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                <img src={fecafootLogo} alt="FECAFOOT - Fédération Camerounaise de Football" className="h-10 sm:h-12 md:h-16 w-auto" loading="lazy" />
                <span className="text-[8px] sm:text-[10px] text-energy font-semibold mt-0.5 sm:mt-1">FECAFOOT</span>
              </div>
            </div>
            <p className="text-secondary/70 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
              Former la nouvelle génération de Lions Indomptables avec excellence, discipline et passion.
            </p>
            <p className="text-energy font-medium text-xs sm:text-sm mb-3 sm:mb-4">
              ⚽ {t('footer.fecafoot')}
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-energy hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-energy font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Liens rapides</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary/70 hover:text-energy transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-energy font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="text-energy mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="text-secondary/70 text-xs sm:text-sm leading-relaxed">
                  Quartier Briqueterie, Yaoundé<br />
                  Cameroun
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={16} className="text-energy flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <a
                  href="tel:+237693752118"
                  className="text-secondary/70 hover:text-energy transition-colors text-xs sm:text-sm"
                >
                  +237 693 752 118
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={16} className="text-energy flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <a
                  href="mailto:bmasacademysport@gmail.com"
                  className="text-secondary/70 hover:text-energy transition-colors text-xs sm:text-sm break-all"
                >
                  bmasacademysport@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-energy font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">{t('footer.newsletter')}</h4>
            <p className="text-secondary/70 text-xs sm:text-sm mb-3 sm:mb-4">
              Recevez nos actualités et événements
            </p>
            <form className="flex flex-col gap-2 sm:gap-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-secondary/10 border border-secondary/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-energy transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="btn-hero-primary py-2.5 sm:py-3 text-xs sm:text-sm"
              >
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-secondary/50 text-xs sm:text-sm text-center sm:text-left">
              © 2025 BM Academy Sport Yaoundé. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-secondary/50 hover:text-energy transition-colors"
              >
                {t('footer.links.privacy')}
              </a>
              <a
                href="#"
                className="text-secondary/50 hover:text-energy transition-colors"
              >
                {t('footer.links.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
