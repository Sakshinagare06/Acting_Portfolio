
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ExternalLink } from 'lucide-react';

export function Training() {
  const { t } = useLanguage();

  const trainings = [
    {
      id: 'item1',
      icon: Award,
      certificateUrl: 'https://drive.google.com/file/d/15L0OY0uGTm2DkwuI_MlYk1-WznSxmn7T/view?usp=sharing' // Replace with actual certificate URL
    },
    // {
    //   id: 'item2',
    //   icon: GraduationCap,
    //   certificateUrl: 'https://drive.google.com/your-certificate-link-2' // Replace with actual certificate URL
    // },
    // {
    //   id: 'item3',
    //   icon: Music,
    //   certificateUrl: 'https://drive.google.com/your-certificate-link-3' // Replace with actual certificate URL
    // }
  ];

  const handleCertificateClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="training" className="py-20 bg-cinematic-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('training.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div
          className={
            trainings.length === 1
              ? 'flex justify-center'
              : 'max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          }
        >
          {trainings.map((training, index) => {
            const Icon = training.icon;
            return (
              <Card
                key={training.id}
                className="bg-gradient-card border-border/20 shadow-elegant p-6 hover:shadow-glow transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {t(`training.${training.id}.title`)}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {t(`training.${training.id}.institute`)}
                    </p>
                  </div>

                  <Badge variant="outline" className="border-primary/30">
                    {t(`training.${training.id}.year`)}
                  </Badge>

                  <Button
                    onClick={() => handleCertificateClick(training.certificateUrl)}
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t(`training.${training.id}.link`)}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
