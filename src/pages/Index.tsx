import { Navigation } from '@/components/Navigation';
import { About } from '@/components/sections/About';
import { Audition } from '@/components/sections/Audition';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Photos } from '@/components/sections/Photos';
import { SelfImages } from '@/components/sections/SelfImages';
import { Training } from '@/components/sections/Training';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <SelfImages/>
        <Experience />
        <Photos />
        <Audition />
        <Training />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
