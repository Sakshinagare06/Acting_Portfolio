
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import actorHeadshot from '@/assets/actor-headshot.jpg';

export function Hero() {
  const { t } = useLanguage();

  const scrollToWork = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                {t('hero.title')}
              </h1>
              <div className="h-1 w-24 bg-gradient-accent rounded-full"></div>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>

            <Button
              onClick={scrollToWork}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-lg opacity-30 animate-glow-pulse"></div>
              <img
                src={actorHeadshot}
                alt="Avinash Madhukar Nagare"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-elegant border-4 border-primary/20 hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
