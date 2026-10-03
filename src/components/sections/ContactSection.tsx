import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  const CONTACT_EMAIL = 'mahamanbakari697@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website.trim() !== '') {
      setSubmitError('Envoi bloque. Merci de reessayer.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `Nouveau message BM Academy - ${formData.subject}`,
          _autoresponse:
            'Bonjour, nous avons bien recu votre message. Merci de votre interet pour BM Academy Sport Yaounde. Notre equipe vous repondra rapidement.',
          _honey: formData.website,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur reseau lors de l\'envoi du message.');
      }

      const result = await response.json();
      if (result?.success !== 'true') {
        throw new Error(result?.message || 'Le service d\'envoi a refuse la demande.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi.';
      setSubmitError(message);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Nouvelle Route Bastos (Hôpital Bethesda)\nYaoundé, Cameroun',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 693 752 118\n+237 682 672 792',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'mahamanbakari697@gmail.com',
    },
    {
      icon: Clock,
      title: 'Horaires & Essais',
      content: 'Séance de test : 10 000 FCFA\nLun - Sam : 08h00 - 18h00',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30 relative z-20" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-energy/10 text-energy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t('nav.contact')}</span>
          </div>
          <h2 id="contact-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-1">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-muted rounded-lg sm:rounded-xl hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{info.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-52 sm:h-64 bg-gradient-to-br from-primary/20 to-energy/20 p-1 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-energy to-accent opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              <div className="relative h-full w-full rounded-lg sm:rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.6!2d11.5167!3d3.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSMO0cGl0YWwgQmV0aGVzZGE!5e0!3m2!1sfr!2scm!4v1737561600000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation BM Academy Sport - Hôpital Bethesda Bastos"
                  className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              {/* Map Overlay Label */}
              <div className="absolute bottom-3 left-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 shadow-md opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground truncate">BM Academy Sport • Hôpital Bethesda (Bastos)</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-card">
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-accent text-sm font-medium">Message envoyé avec succès ! Nous vous répondrons sous 24h.</p>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
                  <p className="text-destructive text-sm font-medium">{submitError}</p>
                </div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-energy focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-energy focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-energy focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    {t('contact.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-energy focus:border-transparent transition-all text-sm sm:text-base appearance-none"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="test_10000f">Séance de test / Essai (10 000 FCFA)</option>
                    <option value="inscription">Inscription Académie (U5 à U18)</option>
                    <option value="partenariat">Partenariat / Sponsoring</option>
                    <option value="information">Demande d'information</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-4 sm:mb-5 md:mb-6">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-energy focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Votre message..."
                />
              </div>

              {/* Honeypot anti-spam field: must stay empty */}
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Site web</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero-primary flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                {isSubmitting ? 'Envoi en cours...' : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
