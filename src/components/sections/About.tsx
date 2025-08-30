import actorHeadshot from '@/assets/actor-headshot.jpg';
import profile_actor2 from '@/assets/profile_actor2.jpg';
import profile_actor3 from '@/assets/profile_actor3.jpg';
import profile_actor4 from '@/assets/profile_actor4.jpg';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const bioDetails = [
    { label: t('bio.fullname'), value: t('bio.fullname.value') },
    { label: t('bio.address'), value: t('bio.address.value') },
    { label: t('bio.height'), value: t('bio.height.value') },
    { label: t('bio.eyecolor'), value: t('bio.eyecolor.value') },
    { label: t('bio.haircolor'), value: t('bio.haircolor.value') },
    { label: t('bio.weight'), value: t('bio.weight.value') },
    { label: t('bio.mobile'), value: t('bio.mobile.value') },
  ];

  return (
    <section id="about" className="py-20 bg-cinematic-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('bio.title')}
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 items-start">
            {/* Bio Text */}
            <Card className="bg-gradient-card border-border/20 shadow-elegant p-8 md:p-12 animate-scale-in">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed text-lg md:text-xl">
                  {t('bio.text')}
                </p>
              </div>

              {/* a3
            hariom
            smiley film production */}

              {/* Decorative quote marks */}
              {/* <div className="mt-8 flex justify-between text-primary/20 text-6xl font-serif">
                <span>"</span>
                <span>"</span>
              </div> */}
            </Card>

            {/* Personal Details */}
            <div className="space-y-6 animate-fade-in">
              <Card className="bg-gradient-card border-border/20 shadow-elegant p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Personal Details</h3>
                <div className="space-y-4">
                  {bioDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-border/10 pb-3">
                      <span className="text-muted-foreground font-medium">{detail.label}:</span>
                      <span className="text-foreground">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Profiles Section */}
              <Card className="bg-gradient-card border-border/20 shadow-elegant p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('bio.profiles')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={actorHeadshot}
                      alt="Profile 1"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-muted/20 flex items-center justify-center">
                    <img
                      src={profile_actor2}
                      alt="Profile 1"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-muted/20 flex items-center justify-center">
                    <img
                      src={profile_actor3}
                      alt="Profile 1"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-muted/20 flex items-center justify-center">
                    <img
                      src={profile_actor4}
                      alt="Profile 1"
                      className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}