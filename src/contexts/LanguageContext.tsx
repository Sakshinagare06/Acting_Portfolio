import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.about': 'Bio',
    'nav.experience': 'Experience',
    'nav.training': 'Training',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',

    // Hero
    'hero.title': 'Avinash Nagare',
    'hero.subtitle': 'Professional Actor',
    'hero.description': 'Telling stories with real emotions and natural performances',
    'hero.cta': 'View My Work',

    // Bio
    'bio.title': 'Bio',
    'bio.text': 'With over 2 years of acting experience and love bringing different characters to life. I believe stories can connect people from all cultures and backgrounds.',
    'bio.fullname': 'Full Name',
    'bio.fullname.value': 'Avinash Madhukar Nagare',
    'bio.address': 'Address',
    'bio.address.value': 'Lokhande Mala, Jail Road, Dasak, Nashik Road, Nashik, Maharashtra',
    'bio.height': 'Height',
    'bio.height.value': '5\'6"',
    'bio.eyecolor': 'Eye Color',
    'bio.eyecolor.value': 'Grey',
    'bio.haircolor': 'Hair Color',
    'bio.haircolor.value': 'Black',
    'bio.weight': 'Weight',
    'bio.weight.value': '62 kg',
    'bio.mobile': 'Mobile',
    'bio.mobile.value': '+91 9272523286',
    'bio.profiles': 'Profiles',

    //Self Image
    'images.title': 'Self Portraits',

    // Experience
    'experience.title': 'Work Experience',
    'experience.film2.title': 'Character Role - "Indrayani , Colours Marathi"',
    'experience.film2.year': '2025',
    'experience.film2.desc': 'Negative role of auto driver as a Theif',
    'experience.film2.link': 'Watch Video',

    'experience.film3.title': 'Character Role - "Savali Hoin Sukhachi, Sun Marathi"',
    'experience.film3.year': '2025',
    'experience.film3.desc': 'Guest role as kandap machine owner',
    'experience.film3.link': 'Watch Video',

    'experience.film1.title': 'Character Role - "Election Add Shoot"',
    'experience.film1.year': '2024',
    'experience.film1.desc': 'Role of a citizen giving testimonials in the Election ad.',
    'experience.film1.link': 'Watch Video',

    'experience.film4.title': 'Character Role - "Farmer Add Shoot"',
    'experience.film4.year': '2025',
    'experience.film4.desc': 'Advertisement of agricultural seeds',
    'experience.film4.link': 'Watch Video',

    'experience.film5.title': 'Short Role - Savali Hoin Sukhachi, Sun Marathi',
    'experience.film5.year': '2025',
    'experience.film5.desc': 'servant role',
    'experience.film5.link': 'Watch Video',

    'experience.film6.title': 'Short Role : Kingmekar, Smiley Film Production',
    'experience.film6.year': '2021',
    'experience.film6.desc': 'As a MLA',
    'experience.film6.link': 'Watch Video',

    // 'experience.film7.title': 'Theater - "Hamlet" (Ophelia)',
    // 'experience.film7.year': '2021',
    // 'experience.film7.desc': 'Classical production at Prithvi Theatre.',
    // 'experience.film7.link': 'Watch Video',

    
    // Audition
    'audition.title': 'Audition',

    'audition.film1.title': 'Profile (Self Introduction)',
    'audition.film1.link': 'Watch Video',

  
    'audition.film2.title': 'Tehkikat (Police Investigation)',
    'audition.film2.link': 'Watch Video',

    
    'audition.film3.title': 'Pandit (Brahman, Guruji)',
    'audition.film3.link': 'Watch Video',

  
    'audition.film4.title': 'Lawyer',
    'audition.film4.link': 'Watch Video',

 
    'audition.film5.title': 'Saadhu',
    'audition.film5.link': 'Watch Video',


    'audition.film6.title': 'Police Inspector',
    'audition.film6.link': 'Watch Video',


    // Training
    'training.title': 'Training & Education',
    'training.item1.title': 'Method Acting Certification',
    'training.item1.institute': 'Miracles Acadamy Of Arts & Media Pvt.Ltd. ',
    'training.item1.year': '2024',
    'training.item1.link': 'View Certificate',
    'training.item2.title': 'Bachelor of Arts in Theatre',
    'training.item2.institute': 'Mumbai University',
    'training.item2.year': '2015-2018',
    'training.item2.link': 'View Certificate',
    'training.item3.title': 'Classical Dance Training',
    'training.item3.institute': 'Kalakshetra Foundation',
    'training.item3.year': '2010-2015',
    'training.item3.link': 'View Certificate',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.instagram': 'Instagram',
    'contact.email.value': 'nagareavi@gmail.com',
    'contact.phone.value': '+91 9272523286',
    'contact.location.value': 'Rukhmini Nagar, Lokhande Mala, Jail Road, Nashik Road, Nashik, Maharashtra',
    'contact.instagram.value': '@avinash.nagare.161'
  },
  mr: {
  //   // Header
  //   'nav.about': 'बायो',
  //   'nav.experience': 'अनुभव',
  //   'nav.training': 'प्रशिक्षण',
  //   'nav.contact': 'संपर्क',
  //   'nav.gallery': 'गॅलरी',

  //   // Hero
  //   'hero.title': 'अविनाश नागरे',
  //   'hero.subtitle': 'व्यावसायिक अभिनेता',
  //   'hero.description': 'प्रामाणिक अभिनय आणि भावनिक खोलीतून कथा जिवंत करत आहे.',
  //   'hero.cta': 'माझे काम पहा',

  //   // Bio
  //   'bio.title': 'बायो',
  //   'bio.text': 'रंगभूमी आणि चित्रपटातील 2 वर्षांच्या अनुभवासह, मी जटिल पात्रांना जीवंत करण्यास आवडत आहे. माझी सुरुवात मुंबईच्या रंगभूमीवर झाली, जिथे मी शास्त्रीय आणि समकालीन नाटकांमध्ये माझी कला सुधारली. संस्कृती आणि भाषा ओलांडून लोकांना जोडण्याच्या कथाकथनाच्या शक्तीवर माझा विश्वास आहे.',
  //   'bio.fullname': 'पूर्ण नाव',
  //   'bio.fullname.value': 'अविनाश मधुकर नागरे',
  //   'bio.address': 'पत्ता',
  //   'bio.address.value': 'लोखंडे माळा, जेल रोड, नाशिक रोड, नाशिक, महाराष्ट्र',
  //   'bio.height': 'उंची',
  //   'bio.height.value': '५\'८"',
  //   'bio.eyecolor': 'डोळ्यांचा रंग',
  //   'bio.eyecolor.value': 'तपकिरी',
  //   'bio.haircolor': 'केसांचा रंग',
  //   'bio.haircolor.value': 'काळा',
  //   'bio.weight': 'वजन',
  //   'bio.weight.value': '62 किलो',
  //   'bio.mobile': 'मोबाइल',
  //   'bio.mobile.value': '+९१ ९२७२५२३२८६',
  //   'bio.profiles': 'प्रोफाइल्स',

  //   // Experience
  //   'experience.title': 'कामाचा अनुभव',
  //   'experience.film1.title': 'मुख्य भूमिका - "मान्सून ड्रीम्स"',
  //   'experience.film1.year': '२०२३',
  //   'experience.film1.desc': 'मुंबईच्या पावसाळ्यातील कौटुंबिक गतिशीलता दर्शविणारा चित्रपट.',
  //   'experience.film1.link': 'व्हिडिओ पहा',
  //   'experience.film2.title': 'सहाय्यक भूमिका - "द लास्ट ट्रेन"',
  //   'experience.film2.year': '२०२२',
  //   'experience.film2.desc': 'फाळणीकाळातील कथांवर आधारित स्वतंत्र नाटक.',
  //   'experience.film2.link': 'व्हिडिओ पहा',
  //   'experience.film3.title': 'रंगभूमी - "हॅम्लेट" (ओफेलिया)',
  //   'experience.film3.year': '२०२१',
  //   'experience.film3.desc': 'पृथ्वी रंगमंचावरील शास्त्रीय सादरीकरण.',
  //   'experience.film3.link': 'व्हिडिओ पहा',

  //   // Training
  //   'training.title': 'प्रशिक्षण आणि शिक्षण',
  //   'training.item1.title': 'मेथड अॅक्टिंग प्रमाणपत्र',
  //   'training.item1.institute': 'फिल्म आणि टेलिव्हिजन इन्स्टिट्यूट ऑफ इंडिया',
  //   'training.item1.year': '२०१८-२०२०',
  //   'training.item1.link': 'प्रमाणपत्र पहा',
  //   'training.item2.title': 'रंगभूमीमध्ये कला स्नातक',
  //   'training.item2.institute': 'मुंबई विद्यापीठ',
  //   'training.item2.year': '२०१५-२०१८',
  //   'training.item2.link': 'प्रमाणपत्र पहा',
  //   'training.item3.title': 'शास्त्रीय नृत्य प्रशिक्षण',
  //   'training.item3.institute': 'कलाक्षेत्र फाउंडेशन',
  //   'training.item3.year': '२०१०-२०१५',
  //   'training.item3.link': 'प्रमाणपत्र पहा',

  //   // Contact
  //   'contact.title': 'संपर्कात रहा',
  //   'contact.email': 'ईमेल',
  //   'contact.phone': 'फोन',
  //   'contact.location': 'स्थान',
  //   'contact.agent': 'एजेंट',
  //   'contact.email.value': 'nagareavi@gmail.com',
  //   'contact.phone.value': '+९१ ९२७२५२३२८६',
  //   'contact.location.value': 'रुक्मिणी नगर, लोखंडे माळा, जेल रोड, नाशिक रोड, नाशिक, महाराष्ट्र',
    //   'contact.agent.value': 'क्रिएटिव्ह आर्टिस्ट एजन्सी'
    
    // Header
    'nav.about': 'बायो',
    'nav.experience': 'अनुभव',
    'nav.training': 'प्रशिक्षण',
    'nav.contact': 'संपर्क',
    'nav.gallery': 'गॅलरी',

    // Hero
    'hero.title': 'अविनाश नागरे',
    'hero.subtitle': 'व्यावसायिक अभिनेता',
    'hero.description': 'खऱ्या भावना आणि नैसर्गिक अभिनयातून कथा सांगतो',
    'hero.cta': 'माझे काम पहा',

    // Bio
    'bio.title': 'बायो',
    'bio.text': '२ वर्षांहून अधिक अभिनयाचा अनुभव असून मला विविध पात्रांना जिवंत करायला आवडते. मला विश्वास आहे की कथा सर्व संस्कृती आणि पार्श्वभूमीतील लोकांना जोडू शकतात.',
    'bio.fullname': 'पूर्ण नाव',
    'bio.fullname.value': 'अविनाश मधुकर नागरे',
    'bio.address': 'पत्ता',
    'bio.address.value': 'लोखंडे मळा, जेल रोड, दसक, नाशिक रोड, नाशिक, महाराष्ट्र',
    'bio.height': 'उंची',
    'bio.height.value': '५\'६"',
    'bio.eyecolor': 'डोळ्यांचा रंग',
    'bio.eyecolor.value': 'राखाडी',
    'bio.haircolor': 'केसांचा रंग',
    'bio.haircolor.value': 'काळा',
    'bio.weight': 'वजन',
    'bio.weight.value': '६२ किलो',
    'bio.mobile': 'मोबाइल',
    'bio.mobile.value': '+९१ ९२७२५२३२८६',
    'bio.profiles': 'प्रोफाइल्स',

    //self Images
    'images.title': 'स्वयंप्रतिमा',

    // Experience
    'experience.title': 'कामाचा अनुभव',

    'experience.film2.title': 'पात्र भूमिका - "इंद्रायणी, कलर्स मराठी"',
    'experience.film2.year': '२०२५',
    'experience.film2.desc': 'ऑटो ड्रायव्हरची नकारात्मक भूमिका चोर म्हणून',
    'experience.film2.link': 'व्हिडिओ पहा',

    'experience.film3.title': 'पात्र भूमिका - "सावली होईन सुखाची, सन मराठी"',
    'experience.film3.year': '२०२५',
    'experience.film3.desc': 'कांडप मशीन मालकाची अतिथी भूमिका',
    'experience.film3.link': 'व्हिडिओ पहा',

    'experience.film1.title': 'पात्र भूमिका - "इलेक्शन जाहिरात शूट"',
    'experience.film1.year': '२०२४',
    'experience.film1.desc': 'नागरिक म्हणून निवडणुकीच्या जाहिरातीत साक्षात्कार देण्याची भूमिका',
    'experience.film1.link': 'व्हिडिओ पहा',

    'experience.film4.title': 'पात्र भूमिका - "शेतकरी जाहिरात शूट"',
    'experience.film4.year': '२०२५',
    'experience.film4.desc': 'कृषी बियाण्यांच्या जाहिरातीसाठी भूमिका',
    'experience.film4.link': 'व्हिडिओ पहा',

    'experience.film5.title': 'लघु भूमिका - "सावली होईन सुखाची, सन मराठी"',
    'experience.film5.year': '२०२५',
    'experience.film5.desc': 'नोकराची भूमिका',
    'experience.film5.link': 'व्हिडिओ पहा',

    'experience.film6.title': 'लघु भूमिका - "किंगमेकर, स्मायली फिल्म प्रॉडक्शन"',
    'experience.film6.year': '२०२१',
    'experience.film6.desc': 'आमदार म्हणून',
    'experience.film6.link': 'व्हिडिओ पहा',

    // Audition
    'audition.title': 'ऑडिशन',

    'audition.film1.title': 'प्रोफाइल (स्वतःची ओळख)',
    'audition.film1.link': 'व्हिडिओ पहा',

    'audition.film2.title': 'तहकीकात (पोलीस तपास)',
    'audition.film2.link': 'व्हिडिओ पहा',

    'audition.film3.title': 'पंडित (ब्राह्मण, गुरुजी)',
    'audition.film3.link': 'व्हिडिओ पहा',

    'audition.film4.title': 'वकील',
    'audition.film4.link': 'व्हिडिओ पहा',

    'audition.film5.title': 'साधू',
    'audition.film5.link': 'व्हिडिओ पहा',

    'audition.film6.title': 'पोलीस निरीक्षक',
    'audition.film6.link': 'व्हिडिओ पहा',

    // Training
    'training.title': 'प्रशिक्षण व शिक्षण',
    'training.item1.title': 'मेथड अॅक्टिंग प्रमाणपत्र',
    'training.item1.institute': 'मिरॅकल्स अकॅडमी ऑफ आर्ट्स अँड मीडिया प्रा. लि.',
    'training.item1.year': '२०२४',
    'training.item1.link': 'प्रमाणपत्र पहा',

    // 'training.item2.title': 'रंगभूमी मध्ये कला पदवी',
    // 'training.item2.institute': 'मुंबई विद्यापीठ',
    // 'training.item2.year': '२०१५-२०१८',
    // 'training.item2.link': 'प्रमाणपत्र पहा',

    // 'training.item3.title': 'शास्त्रीय नृत्य प्रशिक्षण',
    // 'training.item3.institute': 'कलाक्षेत्र फाउंडेशन',
    // 'training.item3.year': '२०१०-२०१५',
    // 'training.item3.link': 'प्रमाणपत्र पहा',

    // Contact
    'contact.title': 'संपर्क साधा',
    'contact.email': 'ईमेल',
    'contact.phone': 'फोन',
    'contact.location': 'स्थान',
    'contact.instagram': 'इंस्टाग्राम',
    'contact.email.value': 'nagareavi@gmail.com',
    'contact.phone.value': '+९१ ९२७२५२३२८६',
    'contact.location.value': 'रुक्मिणी नगर, लोखंडे मळा, जेल रोड, नाशिक रोड, नाशिक, महाराष्ट्र',
    'contact.instagram.value': '@avinash.nagare.161',
  }


};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
