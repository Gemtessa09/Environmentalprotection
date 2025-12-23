import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    explore: 'Explore',
    practice: 'Practice',
    policies: 'Policies',
    science: 'Science',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',

    // Contact Page
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s Connect & Grow Together',
    contactDescription: 'Join our environmental mission, partner with us, or invite us for workshops. We\'re here to make a difference together.',
    reachOut: 'Reach Out to Us',
    sendMessage: 'Send us a Message',
    contactFormDescription: 'Have questions, suggestions, or want to collaborate? We\'d love to hear from you.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessageBtn: 'Send Message',
    sending: 'Sending...',
    thankYou: 'Thank you for your message! We\'ll get back to you soon.',
    followUs: 'Follow Us',
    followUsDescription: 'Stay connected with our latest environmental initiatives and events.',
    whyContact: 'Why Contact Us?',
    findUs: 'Find Us',
    haramayaCampus: 'Haramaya University Main Campus',

    // Contact Cards
    emailUs: 'Email Us',
    callUs: 'Call Us',
    visitUs: 'Visit Us',
    officeHours: 'Office Hours',
    officeHoursText: 'Mon–Fri • 9:00 AM – 5:00 PM',
    contactUs: 'Contact us →',

    // Social Media
    facebook: 'Facebook',
    youtube: 'YouTube',
    instagram: 'Instagram',
    twitter: 'Twitter',

    // Why Contact Reasons
    joinInitiatives: 'Join our environmental initiatives and make a real impact',
    partnerWorkshops: 'Partner with us for workshops and awareness campaigns',
    expertAdvice: 'Get expert advice on sustainable practices',
    collaborateProjects: 'Collaborate on research and environmental projects',

    // Navigation Submenu Items
    announcements: 'Announcements',
    biodiversitySites: 'Biodiversity Sites',
    environmentalClubs: 'Environmental Clubs',
    wildlifePhotographers: 'Wildlife Photographers',
    fundingOpportunities: 'Funding Opportunities',
    latestNews: 'Latest News and Updates',
    stakeholders: 'Stakeholders',
    projects: 'Projects',
    nbsaps: 'NBSAPs',
    otherStrategies: 'Other Strategies',
    nationalReports: 'Biodiversity National Reports',
    nationalLegislation: 'National Legislation',
    internationalConventions: 'International Conventions',
    biodiversityOverview: 'Biodiversity Overview',
    biodiversityConservation: 'Biodiversity Conservation',
    ecosystems: 'Ecosystems',
    publications: 'Publications',
    haramayaUniversity: 'Haramaya University',
    eqa: 'Environment Quality Authority (EQA)',
    nationalChm: 'National CHM',

    // Member Section
    becomeMember: 'Become Member',
    createAccount: 'Create Account',
    login: 'Login',

    // Logo/Brand
    haramayaUniversityBrand: 'Haramaya University',
    environmentalProtectionClub: 'Environmental Protection Club',

    // Navigation
    menu: 'Menu',

    // Alt Text
    haramayaUniversityLogo: 'Haramaya University logo',

    // Home Page
    protectNature: 'Protect Nature, Preserve Life',
    homeSubtitle: 'Join Haramaya University\'s Environmental Protection Club in our mission to create a sustainable future through education, action, and innovation.',
    searchPlaceholder: 'Search for environmental topics, projects, or initiatives...',
    searchButton: 'Search',
    exploreInitiatives: 'Explore Initiatives',
    joinClub: 'Join Our Club',
    featuredInitiatives: 'Featured Initiatives',
    discoverLatest: 'Discover our latest environmental initiatives and projects',
    treesPlanted: 'Trees Planted',
    cleanups: 'Cleanups',
    activeMembers: 'Active Members',

    // Quick Links
    explore: 'Explore',
    science: 'Science',
    practice: 'Practice',
    policies: 'Policies',
    about: 'About',

    // University Badge
    universityClubBadge: 'Haramaya University • Environmental Club',

    // 3D Scene
    live3dScene: 'Live 3D Scene',

    // Links
    viewAll: 'View all',

    // What We Do Section
    whatWeDo: 'What We Do',
    whatWeDoSubtitle: 'Our core activities for environmental protection and education',

    // Features
    campusGreening: 'Campus Greening',
    campusGreeningDesc: 'Tree planting, native plants, and biodiversity-friendly spaces around the campus.',
    wasteReduction: 'Waste Reduction',
    wasteReductionDesc: 'Awareness, sorting systems, clean-up events, and better recycling habits.',
    environmentalEducation: 'Environmental Education',
    environmentalEducationDesc: 'Workshops, research talks, and student-led campaigns that turn knowledge into action.',

    // Language Switcher
    amharicButton: 'አማርኛ',
    englishButton: 'English',

    // About Page
    aboutOurPartners: 'About Our Partners',
    keyInstitutions: 'Key Institutions',
    aboutPartnersDescription: 'Learn about the key institutions and context behind the Haramaya University environmental initiatives. Discover our partners in environmental protection and biodiversity conservation.',
    learnMore: 'Learn More',
    haramayaUniversityTitle: 'Haramaya University',
    haramayaUniversityDesc: 'The university community and its role in sustainability.',
    eqaTitle: 'Environment Quality Authority (EQA)',
    eqaDesc: 'A reference institution for environmental information and awareness.',
    nationalChmTitle: 'National CHM',
    nationalChmDesc: 'About the Clearing-House Mechanism concept and national role.',

    // Environmental Awareness Section
    environmentalAwarenessTitle: 'Protecting Our Planet Together',
    environmentalAwarenessSubtitle: 'Environmental protection in Ethiopia and around the world starts with each of us. Join the global movement for a sustainable future.',
    environmentalAwarenessDesc: 'Every action counts in preserving our beautiful planet. From the highlands of Ethiopia to the global community, we work together to protect our environment for future generations.',
    learnAboutProtection: 'Learn About Environmental Protection',

    // Environmental Photo Gallery
    photoGalleryTitle: 'Environmental Protection in Action',
    photoGallerySubtitle: 'Witness the beauty of nature and our commitment to protecting it across Ethiopia and the world.',
    treePlanting: 'Tree Planting Initiative',
    treePlantingDesc: 'Restoring green spaces in Haramaya University campus',
    wildlifeConservation: 'Wildlife Conservation',
    wildlifeConservationDesc: 'Protecting Ethiopia\'s diverse wildlife species',
    cleanWater: 'Clean Water Protection',
    cleanWaterDesc: 'Ensuring access to clean water for communities',
    sustainableFarming: 'Sustainable Farming',
    sustainableFarmingDesc: 'Promoting eco-friendly agricultural practices',
    wasteManagement: 'Waste Management',
    wasteManagementDesc: 'Community clean-up and recycling programs',
    climateAction: 'Climate Action',
    climateActionDesc: 'Fighting climate change through education and action',
  },
  am: {
    // Navigation
    home: 'መነሻ',
    explore: 'አስስ',
    practice: 'ልምድ',
    policies: 'መተግበሪያዎች',
    science: 'ሳይንስ',
    about: 'ስለ እኛ',
    contact: 'አገናኝ',
    login: 'ግባ',
    register: 'ተመዝገብ',

    // Contact Page
    contactTitle: 'አገናኝ',
    contactSubtitle: 'አንድ ላይ እንስብን እና እንቀሳቀስ',
    contactDescription: 'የአካባቢ ተግባራችን ይቀላቀሉ፣ ከእኛ ጋር ተባበሉ ወይም ለተማሪ ሰልፋዎች ያውቁን። አንድ ላይ ለመለወጥ እዚህ ነን።',
    reachOut: 'አገናኝ',
    sendMessage: 'መልእክት ላክ',
    contactFormDescription: 'ጥያቄዎች አሉዎት፣ አስተያየቶች ወይም ለመስበክ ይፈልጋሉ? እኛ ከእርስዎ ጋር መስበክ እንፈልጋለን።',
    name: 'ስም',
    email: 'ኢሜይል',
    subject: 'ርዕስ',
    message: 'መልእክት',
    sendMessageBtn: 'መልእክት ላክ',
    sending: 'በማስተላለፍ ላይ...',
    thankYou: 'ለመልእክትዎ እናመሰግናለን! በቅርቡ እንመለሳለን።',
    followUs: 'ተከተሉን',
    followUsDescription: 'ከቅርቡ የአካባቢ ተግባራችን እና የህዝብ ማሳወቂያ ተግባራት ጋር ይቀሳቀሱ።',
    whyContact: 'ለምን እንኳን አገናኝ?',
    findUs: 'እኛን ያግኙን',
    haramayaCampus: 'የሃራማያ ዩኒቨርሲቲ ዋና ካምፓስ',

    // Contact Cards
    emailUs: 'ኢሜይል ላክልን',
    callUs: 'ያውቁን',
    visitUs: 'ያስተያዩን',
    officeHours: 'የሥራ ሰዓት',
    officeHoursText: 'ሰኞ–አርብ • 9:00 ቀትር – 5:00 ማታ',
    contactUs: 'አገናኝ →',

    // Social Media
    facebook: 'ፌስቡክ',
    youtube: 'ዩቲዩብ',
    instagram: 'ኢንስታግራም',
    twitter: 'ትዊተር',

    // Why Contact Reasons
    joinInitiatives: 'የአካባቢ ተግባራችን ይቀላቀሉ እና ትልቅ ተጽእኖ ያሳድሩ',
    partnerWorkshops: 'ለተማሪ ሰልፋዎች እና ማሳወቂያ ተግባራት ከእኛ ጋር ተባበሉ',
    expertAdvice: 'ስለ ተቀጣጣይ ልምዶች ምክር ያግኙ',
    collaborateProjects: 'ስለ ምርምር እና የአካባቢ ፕሮጀክቶች ይስብክክ',

    // Navigation Submenu Items
    announcements: 'ማስታወቂያዎች',
    biodiversitySites: 'የተፈጥሮ ተራሮች ቦታዎች',
    environmentalClubs: 'የአካባቢ ክለቦች',
    wildlifePhotographers: 'የተፈጥሮ ፎቶግራፎች',
    fundingOpportunities: 'የገንዘብ እድሎች',
    latestNews: 'ቅርቡ ዜናዎች እና ማሻሻያዎች',
    stakeholders: 'የሚሳተፉ ወገኖች',
    projects: 'ፕሮጀክቶች',
    nbsaps: 'ኤንቢኤስኤፒኤሶች',
    otherStrategies: 'ሌሎች ስትራትጂዎች',
    nationalReports: 'ብሄራዊ የተፈጥሮ ሪፖርቶች',
    nationalLegislation: 'ብሄራዊ ህጎች',
    internationalConventions: 'ኢንተርናሽናል ኮንቬንሽኖች',
    biodiversityOverview: 'የተፈጥሮ አጠቃላይ እይታ',
    biodiversityConservation: 'የተፈጥሮ ጥበቃ',
    ecosystems: 'ኢኮሲስተሞች',
    publications: 'ህትመቶች',
    haramayaUniversity: 'የሃራማያ ዩኒቨርሲቲ',
    eqa: 'የአካባቢ ጥሩነት ባለስልጣን (ኢኤችኤይ)',
    nationalChm: 'ብሄራዊ ሲኤችኤም',

    // Member Section
    becomeMember: 'አባል ለመሆን',
    createAccount: 'መለያ ፍጠር',
    login: 'ግባ',

    // Logo/Brand
    haramayaUniversityBrand: 'የሃራማያ ዩኒቨርሲቲ',
    environmentalProtectionClub: 'የአካባቢ ጥበቃ ክለብ',

    // Navigation
    menu: 'ሜኑ',

    // Alt Text
    haramayaUniversityLogo: 'የሃራማያ ዩኒቨርሲቲ አርማ',

    // Home Page
    protectNature: 'ተፈጥሮን ጠብቅ፣ ሕይወትን አስተያየት',
    homeSubtitle: 'በሃራማያ ዩኒቨርሲቲ የአካባቢ ጥበቃ ክለብ ከእኛ ጋር ተቀላቀሉ በትምህርት፣ በተግባር እና በኢኖቬሽን በኩል ተቀጣጣይ የሆነ የቀጣይ ለመስራት።',
    searchPlaceholder: 'ለአካባቢ ርዕሶች፣ ፕሮጀክቶች ወይም ተግባራት ያስስ...',
    searchButton: 'ፈልግ',
    exploreInitiatives: 'ተግባራትን አስስ',
    joinClub: 'ክለባችን ተቀላቀሉ',
    featuredInitiatives: 'የሚተያዩ ተግባራት',
    discoverLatest: 'ቅርቡ የአካባቢ ተግባራችንን እና ፕሮጀክቶችን ያግኙ',
    treesPlanted: 'የተሰቀሉ ዛፎች',
    cleanups: 'የተነጻጸሩ ቦታዎች',
    activeMembers: 'ንቁ አባላት',

    // Quick Links
    explore: 'አስስ',
    science: 'ሳይንስ',
    practice: 'ልምድ',
    policies: 'መተግበሪያዎች',
    about: 'ስለ እኛ',

    // University Badge
    universityClubBadge: 'የሃራማያ ዩኒቨርሲቲ • የአካባቢ ክለብ',

    // 3D Scene
    live3dScene: 'ቀጥታ 3D ቦታ',

    // Links
    viewAll: 'ሁሉንም ተመልክት',

    // What We Do Section
    whatWeDo: 'የምንለው ሥራ',
    whatWeDoSubtitle: 'ለአካባቢ ጥበቃ እና ትምህርት የእኛ መሰረታዊ ተግባራት',

    // Features
    campusGreening: 'የካምፓስ አረንጓዴ ስራ',
    campusGreeningDesc: 'በካምፓስ አካባቢ ዛፎች መስቀል፣ ተፈጥሮአዊ ተክሎች እና የተፈጥሮ ተራሮች ለተለመዱ ቦታዎች።',
    wasteReduction: 'የቆሻሻ መቀነስ',
    wasteReductionDesc: 'ማሳወቂያ፣ መለየት ስርዓቶች፣ የተነጻጸሩ ቦታዎች እና የተሻለ የማቀዝቀዣ ልምዶች።',
    environmentalEducation: 'የአካባቢ ትምህርት',
    environmentalEducationDesc: 'ተማሪዎች የሚመሩበት ስልፋዎች፣ የምርምር ተያያያዎች እና እውቀትን በተግባር የሚቀይሩ ተግባራት።',

    // Language Switcher
    amharicButton: 'አማርኛ',
    englishButton: 'English',

    // About Page
    aboutOurPartners: 'ስለ አጋሮቻችን',
    keyInstitutions: 'ዋና ተቋማት',
    aboutPartnersDescription: 'ስለ ሃራማያ ዩኒቨርሲቲ ኢንቫይሮመንታል ተግባራት ያሉ ዋና ተቋማት እና አውድ ይለምዱ። በአካባቢ ጥበቃ እና በተፈጥሮ ተራሮች ጥበቃ ላይ ያሉ አጋሮቻችንን ያግኙ።',
    learnMore: 'ተጨማሪ ለማወቅ',
    haramayaUniversityTitle: 'የሃራማያ ዩኒቨርሲቲ',
    haramayaUniversityDesc: 'የዩኒቨርሲቲ ማህበረሰብ እና በተቀጣጣይ ልምዱ ላይ ያለው ሚና።',
    eqaTitle: 'የአካባቢ ጥሩነት ባለስልጣን (ኢኤችኤይ)',
    eqaDesc: 'ለአካባቢ መረጃ እና ማሳወቂያ ያልተራቁ ተቋም።',
    nationalChmTitle: 'ብሄራዊ ሲኤችኤም',
    nationalChmDesc: 'ስለ የማፅዳት ቤት መርሃ ግብር አገላለጽ እና ብሄራዊ ሚና።',

    // Environmental Awareness Section
    environmentalAwarenessTitle: 'አንድ ላይ ፕላኔታችንን እናርክል',
    environmentalAwarenessSubtitle: 'በኢትዮጵያ እና በዓለም አቀፍ የአካባቢ ጥበቃ ከእኛ ሁሉ ጋር ያቀናል። ለተቀጣጣይ የቀጣይ አለም አቀፍ እንቅስቃሴ ተቀላቀሉ።',
    environmentalAwarenessDesc: 'በሚሊዮኖች የሆኑ ተፈጥሮአዊ ሕይወቶች ለማርክ እያንዳንዱ ተግባር ያህል ያስተያየታል። ከኢትዮጵያ ከፍተኛ አካባቢ እስከ አለም አቀፍ ማህበረሰብ ያለን ተፈጥሮአዊ ፕላኔት ለሚመጣ ተፈኖች ለማርክ አንድ ላይ እንሰራለን።',
    learnAboutProtection: 'ስለ አካባቢ ጥበቃ ይለምዱ',

    // Environmental Photo Gallery
    photoGalleryTitle: 'የአካባቢ ጥበቃ በተግባር',
    photoGallerySubtitle: 'በኢትዮጵያ እና በዓለም አቀፍ ተፈጥሮአዊ ውበት እና ለመጠበቅ ያለንን ቁርጠኝነት ያስተያዩ።',
    treePlanting: 'የዛፎች መስቀል ተግባር',
    treePlantingDesc: 'በሃራማያ ዩኒቨርሲቲ ካምፓስ አረንጓዴ ቦታዎችን መልሰን መስጠት',
    wildlifeConservation: 'የተፈጥሮ ጥበቃ',
    wildlifeConservationDesc: 'የኢትዮጵያ ተለያዩ የተፈጥሮ ሕይወቶች አይነቶችን መጠበቅ',
    cleanWater: 'የንጽህ ውሃ ጥበቃ',
    cleanWaterDesc: 'ለማህበረሰቦች ንጽህ ውሃ መስጠትን ማረጋገጥ',
    sustainableFarming: 'ተቀጣጣይ እህል ስራ',
    sustainableFarmingDesc: 'ኢኮ-ፍረንድሊ የሆኑ የእህል ስራ ልምዶችን ማሳደግ',
    wasteManagement: 'የቆሻሻ አስተያየት',
    wasteManagementDesc: 'የማህበረሰብ ተነጻጸሩ ቦታዎች እና የማቀዝቀዣ ፕሮግራሞች',
    climateAction: 'የአየር አጠቃላይ ተግባር',
    climateActionDesc: 'በትምህርት እና በተግባር አየር አጠቃላይ ለውጥን መዋጋት',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'am' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;