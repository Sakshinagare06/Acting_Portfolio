import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { SkipForward } from 'lucide-react';
import { useRef } from 'react';
import AshishChachalani from '@/assets/Ashish chanchalani.jpg';
import KunalChhabria from '@/assets/kunal chhabria.jpg';
import Indrayani from '@/assets/Indrayani.jpg';
import vyankatMaharaj from '@/assets/vyankat maharaj.jpg';
import anitadate from '@/assets/anitadate.jpg';
import unknown from '@/assets/unknown.jpg';
import vidhwaa from '@/assets/vidhva.jpeg';
import nimKaroliBaba from '@/assets/nimkarolibaba.jpg';
// import actorHeadshot from '@/assets/actor-headshot.jpg';
// import actorHeadshot from '@/assets/actor-headshot.jpg';


export function Photos() {
  const { t } = useLanguage();
  const carouselApi = useRef<any>(null);

  // Sample photos - you can replace with actual photo URLs
  const photos = [
    {
      id: 1,
      url: AshishChachalani,
      title: 'Ashsih Chanchalani',
      description: 'On the set Ekaki'
    },
    {
      id: 2,
      url: KunalChhabria,
      title: 'Kunal Chhabria',
      description: 'On the set of Ekaki'
    },
    {
      id: 3,
      url: Indrayani,
      title: 'Sanchi Bhoyar (Indrayani)',
      description: 'On the set of Indrayani'
    },
    {
      id: 4,
      url: vyankatMaharaj,
      title: 'Swanand Barve (Venkat Maharaj)',
      description: 'On the set of Indrayani'
    },
    {
      id: 5,
      url: anitadate,
      title: 'with Anita Date (Anandibai Digraskar) & Dhananjay Gosavi (Winze srakar)',
      description: 'On the set of Indrayani',
    },
    {
      id: 6,
      url: unknown ,
      title: 'Abhijit Chavan',
      description: 'On the set of Laal Chikhal '
    },
    {
      id: 7,
      url: vidhwaa,
      title: 'Vidhwaa- Short Movie',
      description: 'Poster of Vidhwaa'
    },
    {
      id: 7,
      url: nimKaroliBaba,
      title: 'With the actor as nimKaroli Baba',
      description: 'On the set of Nim Karoli baba as Railway TC'
    }
  ];

  return (
    <section id="photos" className="py-8 bg-background relative overflow-hidden">
      {/* Cinema-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            hsl(var(--primary)) 2px,
            hsl(var(--primary)) 4px
          )`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            {t('Shared Frames') || 'Gallery'}
          </h2>
        </div>

        {/* Cinema-style border container */}
        <div className="relative max-w-6xl mx-auto px-16">
          {/* Top cinema border */}
          <div className="absolute -top-8 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          <div className="absolute -top-6 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary-glow to-transparent" />
          
          {/* Bottom cinema border */}
          <div className="absolute -bottom-8 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          <div className="absolute -bottom-6 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary-glow to-transparent" />
          
          {/* Side film perforations */}
          <div className="absolute -left-6 top-0 bottom-0 w-4 bg-primary/20 rounded-l-lg" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 10px,
              hsl(var(--primary)) 10px,
              hsl(var(--primary)) 12px,
              transparent 12px,
              transparent 18px
            )`
          }} />
          <div className="absolute -right-6 top-0 bottom-0 w-4 bg-primary/20 rounded-r-lg" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 10px,
              hsl(var(--primary)) 10px,
              hsl(var(--primary)) 12px,
              transparent 12px,
              transparent 18px
            )`
          }} />

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            setApi={(api) => (carouselApi.current = api)}
            className="w-full"
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Film grain overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Photo info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {photo.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary/20 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 -left-14" />
            <CarouselNext className="bg-primary/20 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 -right-14" />
            
            {/* Skip button for fast navigation */}
            <Button
              onClick={() => carouselApi.current?.scrollTo(carouselApi.current?.selectedScrollSnap() + 3)}
              variant="outline"
              size="icon"
              className="absolute -right-28 top-1/2 -translate-y-1/2 bg-primary/20 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title="Skip 3 photos"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </Carousel>
        </div>

        {/* Cinema reel decoration */}
        <div className="flex justify-center mt-12 space-x-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-primary/30 relative animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="absolute inset-1 rounded-full bg-primary/20" />
              <div className="absolute inset-2 rounded-full bg-primary/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


