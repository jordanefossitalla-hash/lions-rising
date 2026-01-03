import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo-bmas.png';

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

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="BM Academy Sport" className="h-20 w-auto mb-4" />
            <p className="text-secondary/70 text-sm leading-relaxed mb-6">
              Former la nouvelle génération de Lions Indomptables avec excellence, discipline et passion.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-energy hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-energy font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary/70 hover:text-energy transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-energy font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-energy mt-1 flex-shrink-0" />
                <span className="text-secondary/70 text-sm">
                  Quartier Briqueterie, Yaoundé<br />
                  Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-energy flex-shrink-0" />
                <a
                  href="tel:+237699000000"
                  className="text-secondary/70 hover:text-energy transition-colors text-sm"
                >
                  +237 699 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-energy flex-shrink-0" />
                <a
                  href="mailto:contact@bmacademysport.com"
                  className="text-secondary/70 hover:text-energy transition-colors text-sm"
                >
                  contact@bmacademysport.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-energy font-bold text-lg mb-4">{t('footer.newsletter')}</h4>
            <p className="text-secondary/70 text-sm mb-4">
              Recevez nos actualités et événements
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-energy transition-colors"
              />
              <button
                type="submit"
                className="btn-hero-primary py-3 text-sm"
              >
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary/50 text-sm text-center md:text-left">
              © 2025 BM Academy Sport Yaoundé. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6 text-sm">
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
