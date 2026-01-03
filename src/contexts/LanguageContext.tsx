import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.programs': { fr: 'Programmes', en: 'Programs' },
  'nav.team': { fr: 'Équipe', en: 'Team' },
  'nav.news': { fr: 'Actualités', en: 'News' },
  'nav.gallery': { fr: 'Galerie', en: 'Gallery' },
  'nav.partners': { fr: 'Partenaires', en: 'Partners' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero
  'hero.title': { fr: 'Former la nouvelle génération de', en: 'Training the next generation of' },
  'hero.lions': { fr: 'Lions Indomptables', en: 'Indomitable Lions' },
  'hero.subtitle': { fr: 'Excellence technique, préparation physique, intelligence de jeu et discipline collective pour les champions de demain.', en: 'Technical excellence, physical preparation, game intelligence and collective discipline for tomorrow\'s champions.' },
  'hero.cta.trials': { fr: "S'inscrire aux essais", en: 'Register for trials' },
  'hero.cta.partner': { fr: 'Devenir partenaire', en: 'Become a partner' },
  'hero.cta.discover': { fr: "Découvrir l'académie", en: 'Discover the academy' },
  
  // Stats
  'stats.players': { fr: 'Jeunes en formation', en: 'Players in training' },
  'stats.coaches': { fr: 'Encadreurs qualifiés', en: 'Qualified coaches' },
  'stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'stats.categories': { fr: 'Catégories d\'âge', en: 'Age categories' },
  
  // Programs
  'programs.title': { fr: 'Nos Programmes de Formation', en: 'Our Training Programs' },
  'programs.subtitle': { fr: 'Des parcours adaptés à chaque âge pour développer le plein potentiel de nos jeunes talents', en: 'Tailored programs for each age group to develop the full potential of our young talents' },
  'programs.u10.title': { fr: 'U10-U12 | École de Foot', en: 'U10-U12 | Football School' },
  'programs.u10.desc': { fr: 'Initiation technique, coordination, plaisir du jeu. Les bases du football dans un environnement ludique et éducatif.', en: 'Technical initiation, coordination, joy of playing. Football basics in a fun and educational environment.' },
  'programs.u14.title': { fr: 'U13-U14 | Perfectionnement', en: 'U13-U14 | Development' },
  'programs.u14.desc': { fr: 'Développement technique avancé, introduction tactique, renforcement physique adapté à la croissance.', en: 'Advanced technical development, tactical introduction, physical training adapted to growth.' },
  'programs.u16.title': { fr: 'U15-U16 | Pré-formation', en: 'U15-U16 | Pre-formation' },
  'programs.u16.desc': { fr: 'Spécialisation par poste, préparation physique intensive, intelligence tactique et compétitions régionales.', en: 'Position specialization, intensive physical preparation, tactical intelligence and regional competitions.' },
  'programs.u18.title': { fr: 'U17-U18 | Formation Pro', en: 'U17-U18 | Pro Training' },
  'programs.u18.desc': { fr: 'Préparation au haut niveau, accompagnement vers les clubs professionnels, matchs de haut niveau.', en: 'High-level preparation, guidance towards professional clubs, high-level matches.' },
  
  // About
  'about.title': { fr: 'Notre Vision', en: 'Our Vision' },
  'about.subtitle': { fr: "L'excellence au service du football camerounais", en: 'Excellence in service of Cameroonian football' },
  'about.description': { fr: "BM Academy Sport Yaoundé est née de la passion de son fondateur, Bakari Mahamat, pour le développement du football camerounais. Située au cœur de la Briqueterie à Yaoundé, notre académie forme plus de 70 jeunes talents âgés de 10 à 18 ans.", en: "BM Academy Sport Yaoundé was born from the passion of its founder, Bakari Mahamat, for the development of Cameroonian football. Located in the heart of Briqueterie in Yaoundé, our academy trains over 70 young talents aged 10 to 18." },
  'about.mission': { fr: "Notre mission : révéler les futurs Lions Indomptables en alliant rigueur technique, préparation physique d'excellence et éducation aux valeurs du sport.", en: "Our mission: to reveal the future Indomitable Lions by combining technical rigor, excellent physical preparation and education in sports values." },
  
  // Contact
  'contact.title': { fr: 'Contactez-nous', en: 'Contact Us' },
  'contact.subtitle': { fr: 'Rejoignez l\'aventure BM Academy Sport', en: 'Join the BM Academy Sport adventure' },
  'contact.name': { fr: 'Nom complet', en: 'Full name' },
  'contact.email': { fr: 'Email', en: 'Email' },
  'contact.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.subject': { fr: 'Sujet', en: 'Subject' },
  'contact.message': { fr: 'Message', en: 'Message' },
  'contact.send': { fr: 'Envoyer le message', en: 'Send message' },
  'contact.address': { fr: 'Quartier Briqueterie, Yaoundé, Cameroun', en: 'Briqueterie District, Yaoundé, Cameroon' },
  
  // Footer
  'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },
  'footer.links.privacy': { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
  'footer.links.terms': { fr: 'Conditions d\'utilisation', en: 'Terms of Use' },
  'footer.newsletter': { fr: 'Inscrivez-vous à notre newsletter', en: 'Subscribe to our newsletter' },
  'footer.newsletter.placeholder': { fr: 'Votre email', en: 'Your email' },
  'footer.newsletter.button': { fr: "S'inscrire", en: 'Subscribe' },
  
  // Gallery
  'gallery.title': { fr: 'Galerie', en: 'Gallery' },
  'gallery.subtitle': { fr: "Découvrez la vie à l'académie en images", en: 'Discover life at the academy in pictures' },
  
  // CTA
  'cta.title': { fr: 'Prêt à rejoindre l\'élite ?', en: 'Ready to join the elite?' },
  'cta.subtitle': { fr: 'Inscrivez votre enfant aux prochaines sessions d\'essai et donnez-lui la chance de réaliser son rêve.', en: 'Register your child for the next trial sessions and give them the chance to achieve their dream.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
