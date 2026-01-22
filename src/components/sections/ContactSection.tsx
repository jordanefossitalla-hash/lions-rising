import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '@/contexts/LanguageContext';
import emailAnimation from '@/assets/lottie/email.json';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Quartier Briqueterie, Yaoundé\nTerrain de Kalakouta, Cameroun',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 699 00 00 00\n+237 677 00 00 00',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@bmacademysport.com\ninscription@bmacademysport.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Sam: 08h00 - 18h00\nDimanche: Matchs uniquement',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-background" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Player
              autoplay
              loop
              src={emailAnimation}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-energy/10 text-energy font-semibold rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {t('nav.contact')}
          </span>
          <h2 id="contact-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
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
            <div className="rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 bg-muted relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7!2d11.5!3d3.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTEnMDAuMCJOIDExwrAzMCcwMC4wIkU!5e0!3m2!1sfr!2scm!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation BM Academy Sport Yaoundé"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
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
                    <option value="inscription">Inscription / Essai</option>
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

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full btn-hero-primary flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
