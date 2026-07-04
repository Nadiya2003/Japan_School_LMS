import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Comprehensive translations for DP Education style LMS
const resources = {
  en: {
    translation: {
      "nav": {
        "aboutUs": "About Us",
        "impact": "Impact",
        "grades": "Grades",
        "resources": "Resources",
        "whatWeOffer": "What We Offer",
        "blog": "Blog",
        "contact": "Contact",
        "search": "Search",
        "login": "Login"
      },
      "hero": {
        "title1": "A School for ",
        "title2": "Life",
        "subtitle": "We make learning engaging & effective, so that you are ready to achieve your goals.",
        "learnWithUs": "Learn With Us",
        "ourBrands": "Our Brands"
      },
      "trustLogos": {
        "title": "Trusted by leading institutions & thousands of students worldwide"
      },
      "categories": {
        "title": "Learning Categories",
        "subtitle": "Explore our wide range of Japanese language courses.",
        "explore": "Explore Courses"
      },
      "whyChooseUs": {
        "title": "Why Choose Us",
        "subtitle": "We provide the best environment for your Japanese language journey.",
        "reason1": "Expert Teachers",
        "reason2": "Interactive Learning",
        "reason3": "JLPT Focused",
        "reason4": "Flexible Schedule"
      },
      "dashboard": {
        "title": "Your Learning Dashboard",
        "subtitle": "Track your progress and stay on top of your goals.",
        "viewProgress": "View Progress"
      },
      "interactive": {
        "title": "Interactive Learning Experience",
        "subtitle": "Engage with modern tools designed for effective Japanese acquisition.",
        "startNow": "Start Now"
      },
      "journey": {
        "title": "Your Learning Journey",
        "step1": "Start Basics",
        "step2": "Practice",
        "step3": "Mastery"
      },
      "testimonials": {
        "title": "What Our Students Say",
        "subtitle": "Join thousands of successful learners."
      },
      "stats": {
        "students": "Active Students",
        "courses": "Available Courses",
        "success": "Success Rate"
      },
      "blog": {
        "title": "Latest Insights",
        "readMore": "Read More"
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "subtitle": "Find answers to common questions about our platform."
      },
      "cta": {
        "title": "Ready to Start Your Journey?",
        "button": "Join Now"
      },
      "footer": {
        "rights": "All rights reserved.",
        "links": "Quick Links",
        "support": "Support"
      },
      "support": {
        "help": "Need Help?"
      }
    }
  },
  si: {
    translation: {
      "nav": {
        "aboutUs": "අප ගැන",
        "impact": "බලපෑම",
        "grades": "ශ්‍රේණි",
        "resources": "සම්පත්",
        "whatWeOffer": "අප පිරිනමන දෑ",
        "blog": "බ්ලොග්",
        "contact": "සම්බන්ධ වන්න",
        "search": "සොයන්න",
        "login": "ඇතුල් වන්න"
      },
      "hero": {
        "title1": "ජීවිතය සඳහා ",
        "title2": "පාසලක්",
        "subtitle": "අපි ඉගෙනීම සිත්ගන්නාසුළු සහ ඵලදායී කරමු, එබැවින් ඔබ ඔබේ අරමුණු සාක්ෂාත් කර ගැනීමට සූදානම්ය.",
        "learnWithUs": "අප සමඟ ඉගෙන ගන්න",
        "ourBrands": "අපගේ සන්නාම"
      },
      "trustLogos": {
        "title": "ලොව පුරා ප්‍රමුඛ ආයතන සහ දහස් ගණන් සිසුන්ගේ විශ්වාසය"
      },
      "categories": {
        "title": "ඉගෙනුම් කාණ්ඩ",
        "subtitle": "අපගේ ජපන් භාෂා පාඨමාලා ගවේෂණය කරන්න.",
        "explore": "පාඨමාලා ගවේෂණය"
      },
      "whyChooseUs": {
        "title": "ඇයි අපව තෝරාගන්නේ",
        "subtitle": "ඔබගේ ජපන් භාෂා ගමන සඳහා හොඳම පරිසරය.",
        "reason1": "ප්‍රවීණ ගුරුවරුන්",
        "reason2": "අන්තර්ක්‍රියාකාරී ඉගෙනීම",
        "reason3": "JLPT ඉලක්කගත",
        "reason4": "නම්‍යශීලී කාලසටහන"
      },
      "dashboard": {
        "title": "ඔබේ ඉගෙනුම් උපකරණ පුවරුව",
        "subtitle": "ඔබේ ප්‍රගතිය නිරීක්ෂණය කරන්න.",
        "viewProgress": "ප්‍රගතිය බලන්න"
      },
      "interactive": {
        "title": "අන්තර්ක්‍රියාකාරී ඉගෙනුම් අත්දැකීමක්",
        "subtitle": "ඵලදායී ජපන් අත්පත් කර ගැනීම සඳහා නවීන මෙවලම්.",
        "startNow": "දැන් ආරම්භ කරන්න"
      },
      "journey": {
        "title": "ඔබේ ඉගෙනුම් ගමන",
        "step1": "මූලික කරුණු",
        "step2": "පුහුණුව",
        "step3": "ප්‍රවීණත්වය"
      },
      "testimonials": {
        "title": "අපගේ සිසුන් පවසන දේ",
        "subtitle": "සාර්ථක සිසුන් දහස් ගණනක් සමඟ එක්වන්න."
      },
      "stats": {
        "students": "ක්‍රියාකාරී සිසුන්",
        "courses": "පාඨමාලා",
        "success": "සාර්ථකත්ව අනුපාතය"
      },
      "blog": {
        "title": "නවතම ලිපි",
        "readMore": "තව දුරටත් කියවන්න"
      },
      "faq": {
        "title": "නිතර අසන ප්‍රශ්න",
        "subtitle": "අපගේ වේදිකාව පිළිබඳ සාමාන්‍ය ප්‍රශ්නවලට පිළිතුරු."
      },
      "cta": {
        "title": "ඔබේ ගමන ආරම්භ කිරීමට සූදානම්ද?",
        "button": "දැන්ම එක්වන්න"
      },
      "footer": {
        "rights": "සියලුම හිමිකම් ඇවිරිණි.",
        "links": "ඉක්මන් සබැඳි",
        "support": "සහාය"
      },
      "support": {
        "help": "උදව් අවශ්‍යද?"
      }
    }
  },
  ta: {
    translation: {
      "nav": {
        "aboutUs": "எங்களை பற்றி",
        "impact": "தாக்கம்",
        "grades": "தரங்கள்",
        "resources": "வளங்கள்",
        "whatWeOffer": "நாங்கள் வழங்குவது",
        "blog": "வலைப்பதிவு",
        "contact": "தொடர்புக்கு",
        "search": "தேடல்",
        "login": "உள்நுழைக"
      },
      "hero": {
        "title1": "வாழ்க்கைக்கான ",
        "title2": "பள்ளி",
        "subtitle": "கற்றலை சுவாரஸ்யமானதாகவும் பயனுள்ளதாகவும் ஆக்குகிறோம், இதனால் உங்கள் இலக்குகளை அடைய நீங்கள் தயாராக உள்ளீர்கள்.",
        "learnWithUs": "எங்களுடன் கற்றுக்கொள்ளுங்கள்",
        "ourBrands": "எங்கள் பிராண்டுகள்"
      },
      "trustLogos": {
        "title": "உலகெங்கிலும் உள்ள முன்னணி நிறுவனங்கள் மற்றும் ஆயிரக்கணக்கான மாணவர்களால் நம்பப்படுகிறது"
      },
      "categories": {
        "title": "கற்றல் பிரிவுகள்",
        "subtitle": "எங்கள் ஜப்பானிய மொழி படிப்புகளை ஆராயுங்கள்.",
        "explore": "படிப்புகளை ஆராயுங்கள்"
      },
      "whyChooseUs": {
        "title": "எங்களை ஏன் தேர்வு செய்ய வேண்டும்",
        "subtitle": "உங்கள் ஜப்பானிய மொழி பயணத்திற்கு சிறந்த சூழலை நாங்கள் வழங்குகிறோம்.",
        "reason1": "நிபுணத்துவ ஆசிரியர்கள்",
        "reason2": "ஊடாடும் கற்றல்",
        "reason3": "JLPT கவனம்",
        "reason4": "நெகிழ்வான அட்டவணை"
      },
      "dashboard": {
        "title": "உங்கள் கற்றல் டாஷ்போர்டு",
        "subtitle": "உங்கள் முன்னேற்றத்தைக் கண்காணிக்கவும்.",
        "viewProgress": "முன்னேற்றத்தைக் காண்க"
      },
      "interactive": {
        "title": "ஊடாடும் கற்றல் அனுபவம்",
        "subtitle": "பயனுள்ள ஜப்பானிய மொழி கையகப்படுத்துதலுக்கான நவீன கருவிகளுடன் ஈடுபடுங்கள்.",
        "startNow": "இப்போது தொடங்குங்கள்"
      },
      "journey": {
        "title": "உங்கள் கற்றல் பயணம்",
        "step1": "அடிப்படைகள்",
        "step2": "பயிற்சி",
        "step3": "தேர்ச்சி"
      },
      "testimonials": {
        "title": "எங்கள் மாணவர்கள் என்ன சொல்கிறார்கள்",
        "subtitle": "ஆயிரக்கணக்கான வெற்றிகரமான மாணவர்களுடன் சேருங்கள்."
      },
      "stats": {
        "students": "செயலில் உள்ள மாணவர்கள்",
        "courses": "கிடைக்கும் படிப்புகள்",
        "success": "வெற்றி விகிதம்"
      },
      "blog": {
        "title": "சமீபத்திய கட்டுரைகள்",
        "readMore": "மேலும் வாசிக்க"
      },
      "faq": {
        "title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        "subtitle": "பொதுவான கேள்விகளுக்கான பதில்கள்."
      },
      "cta": {
        "title": "உங்கள் பயணத்தைத் தொடங்க தயாரா?",
        "button": "இப்போது சேரவும்"
      },
      "footer": {
        "rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        "links": "விரைவான இணைப்புகள்",
        "support": "ஆதரவு"
      },
      "support": {
        "help": "உதவி தேவையா?"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
