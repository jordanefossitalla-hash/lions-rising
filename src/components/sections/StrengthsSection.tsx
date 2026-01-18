import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calendar, 
  UserCheck, 
  Wrench, 
  Trophy, 
  Handshake, 
  Plane, 
  Heart, 
  BarChart3,
  CheckCircle
} from 'lucide-react';

export function StrengthsSection() {
  const { t } = useLanguage();

  const strengths = [
    { icon: Calendar, text: t('strengths.training') },
    { icon: UserCheck, text: t('strengths.coaches') },
    { icon: Wrench, text: t('strengths.equipment') },
    { icon: Trophy, text: t('strengths.competitions') },
    { icon: Handshake, text: t('strengths.partnerships') },
    { icon: Plane, text: t('strengths.tournaments') },
    { icon: Heart, text: t('strengths.staff') },
    { icon: BarChart3, text: t('strengths.management') },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-field/10 via-background to-energy/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-4 py-2 bg-field/20 text-field font-semibold rounded-full text-sm mb-4">
            {t('strengths.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {t('strengths.title')}
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <strength.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {strength.text}
              </span>
            </div>
          ))}
        </div>

        {/* Categories Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">
                  {t('strengths.categories.title')}
                </h3>
                <p className="text-secondary/70 text-sm">
                  {t('strengths.categories.subtitle')}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {['U10', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18'].map((cat) => (
                  <span
                    key={cat}
                    className="px-4 py-2 bg-energy text-primary font-bold rounded-full text-sm hover:scale-110 transition-transform cursor-default"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-secondary/20 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-energy" />
                <span className="text-secondary text-sm">{t('strengths.boys')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-energy" />
                <span className="text-secondary text-sm">{t('strengths.girls')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
