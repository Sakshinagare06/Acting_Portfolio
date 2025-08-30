
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Film, Theater, Calendar, ExternalLink } from 'lucide-react';

// export function Experience() {
//   const { t } = useLanguage();

//   const experiences = [
//     {
//       id: 'film1',
//       type: 'film',
//       icon: Film,
//       videoUrl: 'https://youtu.be/7LnPhiz30WM?si=JZHy5rxQAtdOtaSt' // Replace with actual video URL
//     },
//     {
//       id: 'film2',
//       type: 'film',
//       icon: Film,
//       videoUrl: 'https://youtu.be/your-video-link-2' // Replace with actual video URL
//     },
//     {
//       id: 'film3',
//       type: 'theater',
//       icon: Theater,
//       videoUrl: 'https://youtu.be/your-video-link-3' // Replace with actual video URL
//     }
//   ];

//   const handleVideoClick = (url: string) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <section id="experience" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             {t('experience.title')}
//           </h2>
//           <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
//         </div>

//         {/* <div className="max-w-4xl mx-auto space-y-8">
//           {experiences.map((exp, index) => {
//             const Icon = exp.icon; */}

//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experiences.map((exp, index) => {
//             const Icon = exp.icon;
//             return (
//               <Card
//                 key={exp.id}
//                 className="bg-gradient-card border-border/20 shadow-elegant p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="flex flex-col md:flex-row md:items-center gap-6">
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//                       <Icon className="w-8 h-8 text-primary" />
//                     </div>
//                   </div>

//                   <div className="flex-grow space-y-3">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//                       <h3 className="text-xl md:text-2xl font-bold text-foreground">
//                         {t(`experience.${exp.id}.title`)}
//                       </h3>
//                       <Badge variant="secondary" className="self-start md:self-auto">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         {t(`experience.${exp.id}.year`)}
//                       </Badge>
//                     </div>

//                     <p className="text-muted-foreground leading-relaxed">
//                       {t(`experience.${exp.id}.desc`)}
//                     </p>

//                     <Button
//                       onClick={() => handleVideoClick(exp.videoUrl)}
//                       variant="outline"
//                       className="w-fit mt-4"
//                     >
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       {t(`experience.${exp.id}.link`)}
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Calendar, ChevronDown, ChevronUp, ExternalLink, Film, Theater } from 'lucide-react';
// import { useState } from 'react';

// export function Experience() {
//   const { t } = useLanguage();
//   const [showMore, setShowMore] = useState(false);

//   const experiences = [
//     {
//       id: 'film1',
//       type: 'film',
//       icon: Film,
//       videoUrl: 'https://youtu.be/your-video-link-1' // Replace with actual video URL
//     },
//     {
//       id: 'film2',
//       type: 'film',
//       icon: Film,
//       videoUrl: 'https://youtu.be/your-video-link-2' // Replace with actual video URL
//     },
//     {
//       id: 'film3',
//       type: 'theater',
//       icon: Theater,
//       videoUrl: 'https://youtu.be/your-video-link-3' // Replace with actual video URL
//     }
//   ];

//   const initialCount = 3;
//   const displayedExperiences = showMore ? experiences : experiences.slice(0, initialCount);

//   const handleVideoClick = (url: string) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <section id="experience" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             {t('experience.title')}
//           </h2>
//           <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
//         </div>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {displayedExperiences.map((exp, index) => {
//             const Icon = exp.icon;
//             return (
//               <Card
//                 key={exp.id}
//                 className="bg-gradient-card border-border/20 shadow-elegant p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="md:items-center ">
//                   <div className="flex-shrink-0">
//                     <div className="w-10 h-10 mb-3 bg-primary/10 rounded-full flex items-center justify-center">
//                       <Icon className="w-6 h-6 text-primary" />
//                     </div>
//                   </div>

//                   <div className="flex-grow space-y-3">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//                       <h3 className="text-lg md:text-lg font-bold text-foreground">
//                         {t(`experience.${exp.id}.title`)}
//                       </h3>
//                       <Badge variant="secondary" className="self-start md:self-start">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         {t(`experience.${exp.id}.year`)}
//                       </Badge>
//                     </div>

//                     <p className="text-muted-foreground leading-relaxed">
//                       {t(`experience.${exp.id}.desc`)}
//                     </p>

//                     <Button
//                       onClick={() => handleVideoClick(exp.videoUrl)}
//                       variant="outline"
//                       className="w-fit mt-4"
//                     >
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       {t(`experience.${exp.id}.link`)}
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>

//         {experiences.length > initialCount && (
//           <div className="text-center mt-12">
//             <Button
//               onClick={() => setShowMore(!showMore)}
//               variant="outline"
//               className="px-8 py-3"
//             >
//               {showMore ? (
//                 <>
//                   <ChevronUp className="w-4 h-4 mr-2" />
//                   {t('View Less')}
//                 </>
//               ) : (
//                 <>
//                   <ChevronDown className="w-4 h-4 mr-2" />
//                   {t('View More')}
//                 </>
//               )}
//             </Button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, Film, Theater } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(3);

  const experiences = [
    { id: 'film1', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/1OyczRNw9bymCM9Niu6qDRj3zeIqaS72m/view?usp=drive_link' },
    { id: 'film2', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/1pYzTkE3R-y3UsHYdraGuui04_kGPY6Hv/view?usp=drive_link' },
    { id: 'film3', type: 'theater', icon: Film, videoUrl: 'https://drive.google.com/file/d/13gjlhHf4K1pL6U_3b17yLNRIen9BE97Z/view?usp=sharing' },
    { id: 'film4', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/1hMyIRWuUKLHQnr2aaRrNnom_skR7LoLo/view?usp=drive_link'},
    { id: 'film5', type: 'theater', icon: Film, videoUrl: 'https://drive.google.com/file/d/13dOAXLxcfhHjZ2iNyTgX264LwAnjCJ87/view?usp=sharing' },
    { id: 'film6', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/13fClOahx-hSeY0TOOLuOlpSlfiXMOjBT/view?usp=sharing' }
    // { id: 'film7', type: 'theater', icon: Film, videoUrl: 'https://youtu.be/your-video-link-7' },
    // { id: 'film8', type: 'film', icon: Film, videoUrl: 'https://youtu.be/your-video-link-8' },
    // { id: 'film9', type: 'theater', icon: Film, videoUrl: 'https://youtu.be/your-video-link-9' }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, experiences.length)); // reveal 3 more
  };

  const loadLess = () => {
    setVisibleCount(3); // reset back to first row
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('experience.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        {/* Grid of experiences */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.slice(0, visibleCount).map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card
                key={exp.id}
                className="bg-gradient-card border-border/20 shadow-elegant p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:items-center ">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl md:text-lg font-bold text-foreground">
                        {t(`experience.${exp.id}.title`)}
                      </h3>
                      <Badge variant="secondary" className="self-start md:self-start">
                        <Calendar className="w-4 h-4 mr-1" />
                        {t(`experience.${exp.id}.year`)}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {t(`experience.${exp.id}.desc`)}
                    </p>

                    <Button
                      onClick={() => handleVideoClick(exp.videoUrl)}
                      variant="outline"
                      className="w-fit mt-4"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t(`experience.${exp.id}.link`)}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Load More / Load Less */}
        {visibleCount < experiences.length ? (
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
