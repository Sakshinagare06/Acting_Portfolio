import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';


export function SelfImages() {
    const { t } = useLanguage();
    const [visibleCount, setVisibleCount] = useState(5);

    const images= [
        {
            id: 'film1',
            imageUrl: '/src/assets/selfImage/self1.jpg',   // 👈 replace with your image paths
        },
        {
            id: 'film2',
            imageUrl: '/src/assets/selfImage/self7.jpg',
        },
        {
            id: 'film3',
            imageUrl: '/src/assets/selfImage/self3.jpg',
        },
        {
            id: 'film4',
            imageUrl: '/src/assets/selfImage/self4.jpg',
        },
        {
            id: 'film5',
            imageUrl: '/src/assets/selfImage/self5.jpg',
        },
        {
            id: 'film6',
            imageUrl: '/src/assets/selfImage/self6.jpg'
        },
        {
            id: 'film7',
            imageUrl: '/src/assets/selfImage/self9.jpg'
        },
        {
            id: 'film8',
            imageUrl: '/src/assets/selfImage/self8.jpg'
        },
        {
            id: 'film9',
            imageUrl: '/src/assets/selfImage/self2.jpeg'
        },
        {
            id: 'film10',
            imageUrl: '/src/assets/selfImage/self10.jpg'
        }
    ];

    const handleVideoClick = (url: string) => {
        window.open(url, '_blank');
    };

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 5, images.length)); // reveal 5 more
    };

    const loadLess = () => {
        setVisibleCount(5); // reset back to first row
    };

    return (
        <section id="audition" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                {/* Section title */}
                <div className="text-center mb-5 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        {t('images.title')}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
                </div>

                {/* Grid of auditions */}
                <div className="max-w-10xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.slice(0, visibleCount).map((aud, index) => (
                        <Card
                            key={aud.id}
                            className="bg-gradient-card border-border/20 shadow-elegant p-2 md:p-2 hover:shadow-glow transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Thumbnail */}
                            <div className="w-full h-56  rounded-lg overflow-hidden bg-primary/10">
                                <img
                                    src={aud.imageUrl}
                                    alt={t(`audition.${aud.id}.title`)}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Title & Button */}
                            {/* <div className="space-y-3">
                <h3 className="text-xl md:text-lg font-bold text-foreground">
                  {t(`audition.${aud.id}.title`)}
                </h3>

                <Button
                  onClick={() => handleVideoClick(aud)}
                  variant="outline"
                  className="w-fit mt-2"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t(`experience.${aud.id}.link`)}
                </Button>
              </div> */}
                        </Card>
                    ))}
                </div>

                {/* Load More / Load Less */}
                {visibleCount < images.length ? (
                    <div className="text-center mt-12">
                        <Button onClick={loadMore} variant="outline" className="px-8 py-3">
                            <ChevronDown className="w-4 h-4 mr-2" />
                            {t('View More')}
                        </Button>
                    </div>
                ) : (
                    <div className="text-center mt-12">
                        <Button onClick={loadLess} variant="outline" className="px-8 py-3">
                            <ChevronUp className="w-4 h-4 mr-2" />
                            {t('View Less')}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}



