import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Users } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: t('contact.email.value'),
      href: `mailto:${t('contact.email.value')}`
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: t('contact.phone.value'),
      href: `tel:${t('contact.phone.value')}`
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.location.value'),
      href: '#'
    },
    {
      icon: Users,
      label: t('contact.instagram'),
      value: t('contact.instagram.value'),
      href: 'https://www.instagram.com/avinash.nagare.161?igsh=N2VpdXU0YmQxNnZ5'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.label}
                className="bg-gradient-card border-border/20 shadow-elegant p-6 hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-4 text-left"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.label}
                    </p>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border/20">
          <p className="text-muted-foreground">
            © 2025 {t('hero.title')}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}