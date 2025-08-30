// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Calendar, ChevronDown, ChevronUp, ExternalLink, Film, Theater } from 'lucide-react';
// import { useState } from 'react';

// export function Audition() {
//   const { t } = useLanguage();
//   const [visibleCount, setVisibleCount] = useState(3);

//   const auditions = [
//     { id: 'film1', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/1OyczRNw9bymCM9Niu6qDRj3zeIqaS72m/view?usp=drive_link' },
//     { id: 'film2', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/1pYzTkE3R-y3UsHYdraGuui04_kGPY6Hv/view?usp=drive_link' },
//     { id: 'film3', type: 'theater', icon: Film, videoUrl: 'https://drive.google.com/file/d/1Acgi-fnAM9ltqxSvKW3Dlr7uhSs2bb2M/view?usp=drive_link' },
//     { id: 'film4', type: 'film', icon: Film, videoUrl: 'https://drive.google.com/file/d/1hMyIRWuUKLHQnr2aaRrNnom_skR7LoLo/view?usp=drive_link'},
//     { id: 'film5', type: 'theater', icon: Film, videoUrl: 'https://youtu.be/your-video-link-5' },
//     { id: 'film6', type: 'film', icon: Film, videoUrl: 'https://youtu.be/your-video-link-6' }
//     // { id: 'film7', type: 'theater', icon: Film, videoUrl: 'https://youtu.be/your-video-link-7' },
//     // { id: 'film8', type: 'film', icon: Film, videoUrl: 'https://youtu.be/your-video-link-8' },
//     // { id: 'film9', type: 'theater', icon: Film, videoUrl: 'https://youtu.be/your-video-link-9' }
//   ];

//   const handleVideoClick = (url: string) => {
//     window.open(url, '_blank');
//   };

//   const loadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 3,auditions.length)); // reveal 3 more
//   };

//   const loadLess = () => {
//     setVisibleCount(3); // reset back to first row
//   };

//   return (
//     <section id="audition" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             {t('audition.title')}
//           </h2>
//           <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
//         </div>

//         {/* Grid of auditions*/}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {auditions.slice(0, visibleCount).map((aud, index) => {
//             const Icon = aud.icon;
//             return (
//               <Card
//                 key={aud.id}
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
//                       <h3 className="text-xl md:text-lg font-bold text-foreground">
//                         {t(`audition.${aud.id}.title`)}
//                       </h3>
//                       {/* <Badge variant="secondary" className="self-start md:self-start">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         {t(`audition.${aud.id}.year`)}
//                       </Badge> */}
//                     </div>

//                     {/* <p className="text-muted-foreground leading-relaxed">
//                       {t(`audition.${aud.id}.desc`)}
//                     </p> */}

//                     <Button
//                       onClick={() => handleVideoClick(aud.videoUrl)}
//                       variant="outline"
//                       className="w-fit mt-4"
//                     >
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       {t(`experience.${aud.id}.link`)}
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Load More / Load Less */}
//         {visibleCount < auditions.length ? (
//           <div className="text-center mt-12">
//             <Button onClick={loadMore} variant="outline" className="px-8 py-3">
//               <ChevronDown className="w-4 h-4 mr-2" />
//               {t('View More')}
//             </Button>
//           </div>
//         ) : (
//           <div className="text-center mt-12">
//             <Button onClick={loadLess} variant="outline" className="px-8 py-3">
//               <ChevronUp className="w-4 h-4 mr-2" />
//               {t('View Less')}
//             </Button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';


export function Audition() {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(3);

  const auditions = [
    {
      id: 'film1',
      imageUrl: '/src/assets/profile_audition.jpeg',   // 👈 replace with your image paths
      videoUrl: 'https://drive.google.com/file/d/1V_nJaPrKpbRjwwQkp-DqRj8KUqk3J32h/view?usp=sharing'
    },
    {
      id: 'film2',
      type: 'film',
      imageUrl: '/src/assets/tehkikat_audition.jpeg',
      videoUrl: 'https://drive.google.com/file/d/1YupVBkBFSMpHBqjVttXJPFWTpozuaWFH/view?usp=sharing'
    },
    {
      id: 'film3',
      imageUrl: '/src/assets/pandit_audition.jpeg',
      videoUrl: 'https://drive.google.com/file/d/13rSnS8qZLFOkV2TWSxysKbUhqQC_0nDl/view?usp=sharing'
    },
    {
      id: 'film4',
      imageUrl: '/src/assets/lawyer_audition.jpeg',
      videoUrl: 'https://drive.google.com/file/d/14-go5MxRXqGo0RSxHcLP6JRIxQZCdXpE/view?usp=sharing'
    },
    {
      id: 'film5',
      imageUrl: '/src/assets/saadhu_audition.jpeg',
      videoUrl: 'https://drive.google.com/file/d/14CsGhUMcKkWN_fzanSAUDrcO66D-4ivu/view?usp=sharing'
    },
    {
      id: 'film6',
      imageUrl: '/src/assets/police_audition.jpeg',
      videoUrl: 'https://drive.google.com/file/d/14-Gg0TOWDoyKYE2bSibFdM754OAfOr94/view?usp=sharing'
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, auditions.length)); // reveal 3 more
  };

  const loadLess = () => {
    setVisibleCount(3); // reset back to first row
  };

  return (
    <section id="audition" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('audition.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        {/* Grid of auditions */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auditions.slice(0, visibleCount).map((aud, index) => (
            <Card
              key={aud.id}
              className="bg-gradient-card border-border/20 shadow-elegant p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Thumbnail */}
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-primary/10">
                <img
                  src={aud.imageUrl}
                  alt={t(`audition.${aud.id}.title`)}
                  className="w-full h-full object-center hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Button */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-lg font-bold text-foreground">
                  {t(`audition.${aud.id}.title`)}
                </h3>

                <Button
                  onClick={() => handleVideoClick(aud.videoUrl)}
                  variant="outline"
                  className="w-fit mt-2"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t(`experience.${aud.id}.link`)}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More / Load Less */}
        {visibleCount < auditions.length ? (
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




