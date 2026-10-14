import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      brand: {
        name: "World Lanka Japanese Education",
        tagline: "The Cultural Center",
        sriLankaFocus: "Japanese Language Education for Sri Lankan Students",
        motto: "Learn Japanese. Understand the Culture. Build Your Future."
      },
      nav: {
        aboutUs: "About Us",
        impact: "Impact",
        grades: "Grades",
        resources: "Resources",
        whatWeOffer: "What We Offer",
        blog: "Blog",
        contact: "Contact",
        search: "Search courses, JLPT levels...",
        login: "Student Portal"
      },
      hero: {
        badge: "Japanese Language Education for Sri Lankan Students",
        mainTitle1: "Your Journey to Japan ",
        mainTitle2: "Starts Here",
        subtitle: "Learn Japanese with confidence through structured language education, cultural understanding, and practical guidance designed for Sri Lankan students.",
        jpLine: "日本語を学び、未来への一歩を踏み出そう。",
        exploreCourses: "Explore Courses",
        startLearning: "Start Learning Japanese",
        contactUs: "Contact Us",
        cardBadge: "JLPT Focused Curriculum",
        cardSubtitle: "Step-by-step mastery from Hiragana to Advanced JLPT"
      },
      about: {
        title: "About World Lanka Japanese Education",
        subtitle: "The Cultural Center for Japanese Language & Learning",
        intro: "World Lanka Japanese Education is a Sri Lankan Japanese language education centre focused on helping students develop practical Japanese communication skills, prepare for language examinations, and understand Japanese culture.",
        pillars: {
          langTitle: "Japanese Language Education",
          langDesc: "Systematic learning from writing scripts (Hiragana, Katakana, Kanji) to grammar, listening, and conversational fluency.",
          cultureTitle: "Japanese Cultural Understanding",
          cultureDesc: "Deep insight into Japanese manners, social etiquette, corporate communication, and traditional customs.",
          studentTitle: "Student-Focused Learning",
          studentDesc: "Dedicated classroom guidance tailored to Sri Lankan students, ensuring every learner progresses with confidence.",
          guidanceTitle: "Academic & Career Guidance",
          guidanceDesc: "Clear educational guidance for students preparing for Japanese language tests and future aspirations."
        }
      },
      impact: {
        title: "Educational Impact & Benefits",
        subtitle: "Empowering Sri Lankan learners with practical language capability, exam readiness, and cultural confidence.",
        cards: {
          confidenceTitle: "Language Confidence",
          confidenceDesc: "Develop reading, writing, listening and speaking skills step by step through interactive classroom practice.",
          examTitle: "Exam Preparation",
          examDesc: "Structured learning designed to support students preparing for Japanese language examinations like the JLPT.",
          cultureTitle: "Cultural Knowledge",
          cultureDesc: "Understand Japanese traditions, etiquette, daily life, workplace manners, and communication styles.",
          futureTitle: "Future Opportunities",
          futureDesc: "Build Japanese language skills useful for further education, higher studies, and future career opportunities."
        }
      },
      grades: {
        title: "Grades & Japanese Levels",
        subtitle: "Structured course levels aligned with the Japanese-Language Proficiency Test (JLPT) standard.",
        n5Title: "JLPT N5",
        n5Level: "Beginner Japanese",
        n4Title: "JLPT N4",
        n4Level: "Elementary Japanese",
        n3Title: "JLPT N3",
        n3Level: "Intermediate Japanese",
        n2Title: "JLPT N2",
        n2Level: "Pre-Advanced Japanese",
        n1Title: "JLPT N1",
        n1Level: "Advanced Japanese",
        previewNotice: "Course level examples and curriculums structured for gradual language acquisition."
      },
      resources: {
        title: "Student Learning Resources",
        subtitle: "Essential study guides, practice materials, and cultural references for our students.",
        items: {
          alphabet: "Japanese Alphabet Guide",
          alphabetDesc: "Complete Hiragana & Katakana charts with stroke orders and pronunciation guides.",
          jlpt: "JLPT Study Materials",
          jlptDesc: "Official-style syllabus overviews, question patterns, and practice exercises.",
          vocab: "Vocabulary Practice",
          vocabDesc: "Essential vocabulary lists categorized by everyday topics and JLPT levels.",
          kanji: "Kanji Learning Resources",
          kanjiDesc: "Radical breakdowns, mnemonic memory aids, and writing stroke practice sheets.",
          grammar: "Grammar Notes",
          grammarDesc: "Clear grammar explanations with practical example sentences and usage notes.",
          listening: "Listening Practice",
          listeningDesc: "Native audio dialogues, pronunciation drills, and listening test exercises.",
          culture: "Japanese Culture Guides",
          cultureDesc: "Handbooks on Japanese greetings, bowing etiquette, customs, and seasonal events.",
          notices: "Student Notices",
          noticesDesc: "Class announcements, examination timetables, and academic calendar updates."
        }
      },
      whatWeOffer: {
        title: "What We Offer",
        subtitle: "Structured educational services built around the real learning needs of Sri Lankan students.",
        items: {
          classesTitle: "Japanese Language Classes",
          classesDesc: "Structured lessons from beginner to advanced levels, fostering genuine fluency.",
          jlptTitle: "JLPT Preparation",
          jlptDesc: "Focused lessons, revision and practice for Japanese language proficiency examinations.",
          speakingTitle: "Speaking & Listening Practice",
          speakingDesc: "Improve practical Japanese communication skills with interactive spoken exercises.",
          kanjiTitle: "Kanji & Grammar Training",
          kanjiDesc: "Step-by-step learning for Japanese writing characters and sentence structures.",
          cultureTitle: "Japanese Culture Education",
          cultureDesc: "Learn Japanese etiquette, customs, traditions and everyday cultural practices.",
          guidanceTitle: "Student Guidance",
          guidanceDesc: "General educational guidance for students planning their Japanese learning journey."
        }
      },
      blog: {
        title: "Educational Insights & Blog",
        subtitle: "Articles, study techniques, and cultural perspectives to assist your language learning.",
        readMore: "Read More",
        posts: {
          p1Title: "How to Start Learning Japanese",
          p1Cat: "Beginner Guide",
          p2Title: "Hiragana vs Katakana: What Should You Learn First?",
          p2Cat: "Writing Systems",
          p3Title: "5 Tips for JLPT Preparation",
          p3Cat: "Exam Strategy",
          p4Title: "Understanding Japanese Culture and Etiquette",
          p4Cat: "Culture & Manners",
          p5Title: "Common Japanese Phrases for Beginners",
          p5Cat: "Daily Conversation",
          p6Title: "Why Learning Kanji Is Important",
          p6Cat: "Kanji Mastery"
        }
      },
      contact: {
        title: "Ready to Start Learning Japanese?",
        subtitle: "Contact World Lanka Japanese Education and take the first step in your Japanese language learning journey.",
        nameLabel: "Your Name",
        phoneLabel: "Phone Number",
        emailLabel: "Email Address",
        levelLabel: "Interested Japanese Level / Course",
        levelPlaceholder: "Select a level or course",
        messageLabel: "Message / Inquiry",
        sendBtn: "Send Inquiry",
        sending: "Sending...",
        successMsg: "Thank you! Your inquiry has been received. We will contact you shortly.",
        officialEmail: "Official Email",
        location: "Centre Location",
        locationText: "Sri Lanka"
      },
      footer: {
        desc: "World Lanka Japanese Education – The Cultural Center. Dedicated to empowering Sri Lankan students with practical Japanese language proficiency and authentic cultural understanding.",
        rights: "World Lanka Japanese Education. All rights reserved.",
        quickLinks: "Quick Navigation",
        contactInfo: "Contact & Information",
        academicLevels: "Language Levels"
      }
    }
  },
  si: {
    translation: {
      brand: {
        name: "වර්ල්ඩ් ලංකා ජපන් අධ්‍යාපන ආයතනය",
        tagline: "සංස්කෘතික මධ්‍යස්ථානය",
        sriLankaFocus: "ශ්‍රී ලාංකික සිසුන් සඳහා ජපන් භාෂා අධ්‍යාපනය",
        motto: "ජපන් භාෂාව ඉගෙන ගන්න. සංස්කෘතිය තේරුම් ගන්න. ඔබේ අනාගතය ගොඩනගන්න."
      },
      nav: {
        aboutUs: "අප ගැන",
        impact: "ප්‍රතිලාභ",
        grades: "ශ්‍රේණි (JLPT)",
        resources: "අධ්‍යයන සම්පත්",
        whatWeOffer: "අප පිරිනමන සේවාවන්",
        blog: "බ්ලොග් ලිපි",
        contact: "සම්බන්ධ වන්න",
        search: "පාඨමාලා සොයන්න...",
        login: "ශිෂ්‍ය පිවිසුම"
      },
      hero: {
        badge: "ශ්‍රී ලාංකික සිසුන් වෙනුවෙන්ම වෙන්වූ ජපන් භාෂා අධ්‍යාපනය",
        mainTitle1: "ඔබේ ජපන් සිහිනයට ",
        mainTitle2: "මුලපුරන්න",
        subtitle: "ශ්‍රී ලාංකික සිසුන් වෙනුවෙන්ම සකස් කළ ක්‍රමානුකූල භාෂා අධ්‍යාපනය, සංස්කෘතික අවබෝධය සහ ප්‍රායෝගික මගපෙන්වීම තුළින් ජපන් භාෂාව විශ්වාසයෙන් යුතුව ඉගෙන ගන්න.",
        jpLine: "日本語を学び、未来への一歩を踏み出そう。",
        exploreCourses: "පාඨමාලා ගවේෂණය",
        startLearning: "ජපන් භාෂාව ඉගෙනීම අරඹන්න",
        contactUs: "අප අමතන්න",
        cardBadge: "JLPT විභාග ඉලක්කගත විෂය මාලාව",
        cardSubtitle: "හිරගනා සිට උසස් මට්ටම දක්වා පියවරෙන් පියවර මගපෙන්වීම"
      },
      about: {
        title: "වර්ල්ඩ් ලංකා ජපන් අධ්‍යාපන ආයතනය පිළිබඳව",
        subtitle: "ජපන් භාෂාව සහ සංස්කෘතිය උගන්වන සංස්කෘතික මධ්‍යස්ථානය",
        intro: "වර්ල්ඩ් ලංකා ජපන් අධ්‍යාපන ආයතනය යනු ශ්‍රී ලාංකික සිසුන්ට ප්‍රායෝගික ජපන් සන්නිවේදන කුසලතා වර්ධනය කර ගැනීමට, භාෂා විභාග සඳහා සූදානම් වීමට සහ ජපන් සංස්කෘතිය ගැඹුරින් අවබෝධ කර ගැනීමට උපකාරී වන ප්‍රමුඛ ජපන් භාෂා අධ්‍යාපන මධ්‍යස්ථානයකි.",
        pillars: {
          langTitle: "ජපන් භාෂා අධ්‍යාපනය",
          langDesc: "හිරගනා, කතකනා සහ කාන්ජි අක්ෂර මාලාවේ සිට ව්‍යාකරණ, සවන්දීම සහ කථන හැකියාව දක්වා ක්‍රමානුකූල අධ්‍යාපනයක්.",
          cultureTitle: "ජපන් සංස්කෘතික අවබෝධය",
          cultureDesc: "ජපන් ආචාර ධර්ම, සමාජ සම්ප්‍රදායන්, කාර්යාලීය සන්නිවේදනය සහ දෛනික ජීවන රටාව පිළිබඳ මනා අවබෝධයක්.",
          studentTitle: "ශිෂ්‍ය කේන්ද්‍රීය ඉගෙනුම",
          studentDesc: "ශ්‍රී ලාංකික සිසුන්ගේ ඉගෙනුම් අවශ්‍යතාවලට ගැළපෙන අයුරින් මනා මගපෙන්වීමක් සහිත අධ්‍යයන පරිසරයක්.",
          guidanceTitle: "අධ්‍යාපනික මගපෙන්වීම",
          guidanceDesc: "ජපන් භාෂා විභාග සහ අනාගත අධ්‍යාපනික ඉලක්ක සඳහා පැහැදිලි හා සත්‍යවාදී මගපෙන්වීමක්."
        }
      },
      impact: {
        title: "අධ්‍යාපනික ප්‍රතිලාභ සහ බලපෑම",
        subtitle: "ශ්‍රී ලාංකික සිසුන්ට ප්‍රායෝගික භාෂා නිපුණතාවය සහ සංස්කෘතික සූදානම ලබා දීම.",
        cards: {
          confidenceTitle: "භාෂා විශ්වාසය",
          confidenceDesc: "පන්ති කාමරයේ ප්‍රායෝගික පුහුණුව තුළින් කියවීම, ලිවීම, සවන්දීම සහ කථන හැකියාව පියවරෙන් පියවර දියුණු කරගන්න.",
          examTitle: "විභාග පෙරහුරුව",
          examDesc: "JLPT වැනි ජපන් භාෂා ප්‍රවීණතා විභාග ඉලක්ක කරගත් ක්‍රමානුකූල හා විධිමත් අධ්‍යයන සැලැස්ම.",
          cultureTitle: "සංස්කෘතික දැනුම",
          cultureDesc: "ජපන් සම්ප්‍රදායන්, ආචාර විධි, දෛනික ජීවිතය සහ ගෞරවනීය සන්නිවේදන රටාවන් මනාව තේරුම් ගන්න.",
          futureTitle: "අනාගත අවස්ථා",
          futureDesc: "උසස් අධ්‍යාපනයට සහ අනාගත වෘත්තීය අවස්ථාවන් සඳහා අත්‍යවශ්‍ය වන ජපන් භාෂා කුසලතා ගොඩනගා ගන්න."
        }
      },
      grades: {
        title: "ශ්‍රේණි සහ ජපන් භාෂා මට්ටම්",
        subtitle: "ජපන් භාෂා ප්‍රවීණතා පරීක්ෂණ (JLPT) ප්‍රමිතියට අනුකූලව සකස් කරන ලද පාඨමාලා මට්ටම්.",
        n5Title: "JLPT N5",
        n5Level: "ආරම්භක මට්ටම (Beginner)",
        n4Title: "JLPT N4",
        n4Level: "මූලික මට්ටම (Elementary)",
        n3Title: "JLPT N3",
        n3Level: "මධ්‍යම මට්ටම (Intermediate)",
        n2Title: "JLPT N2",
        n2Level: "පූර්ව උසස් මට්ටම (Pre-Advanced)",
        n1Title: "JLPT N1",
        n1Level: "උසස් මට්ටම (Advanced Mastery)",
        previewNotice: "ක්‍රමානුකූල භාෂා ප්‍රගතියක් සඳහා නිර්මාණය කරන ලද විෂය මාලා ආදර්ශයන්."
      },
      resources: {
        title: "ශිෂ්‍ය අධ්‍යයන සම්පත්",
        subtitle: "අපගේ සිසුන් වෙනුවෙන් සකස් කළ අත්‍යවශ්‍ය අධ්‍යයන මාර්ගෝපදේශ සහ අත්වැල්.",
        items: {
          alphabet: "ජපන් අක්ෂර මාලා මාර්ගෝපදේශය",
          alphabetDesc: "හිරගනා සහ කතකනා අක්ෂර නිවැරදිව ලිවීම සහ උච්චාරණය කිරීමේ සටහන්.",
          jlpt: "JLPT අධ්‍යයන ද්‍රව්‍ය",
          jlptDesc: "විභාග ප්‍රශ්න රටාවන්, විෂය නිර්දේශ සහ පෙරහුරු අභ්‍යාස මාලාවන්.",
          vocab: "වචන මාලා අභ්‍යාස",
          vocabDesc: "දෛනික භාවිතයට සහ JLPT විභාග මට්ටම්වලට අදාළ වැදගත් වචන ලැයිස්තු.",
          kanji: "කාන්ජි ඉගෙනුම් උපකාරක",
          kanjiDesc: "කාන්ජි අක්ෂර පහසුවෙන් මතක තබා ගැනීමේ ක්‍රම සහ ලිවීමේ අභ්‍යාස.",
          grammar: "ව්‍යාකරණ සටහන්",
          grammarDesc: "ප්‍රායෝගික උදාහරණ වාක්‍ය සහිත පැහැදිලි ව්‍යාකරණ පැහැදිලි කිරීම්.",
          listening: "සවන්දීමේ අභ්‍යාස",
          listeningDesc: "ස්වදේශික ජපන් උච්චාරණය සහිත හඬපට සහ සවන්දීමේ පරීක්ෂණ පෙරහුරු.",
          culture: "ජපන් සංස්කෘතික අත්පොත",
          cultureDesc: "ජපන් ආචාර විධි, චාරිත්‍ර වාරිත්‍ර සහ සම්ප්‍රදායන් පිළිබඳ හැඳින්වීම්.",
          notices: "ශිෂ්‍ය නිවේදන",
          noticesDesc: "පන්ති කාලසටහන්, විභාග දිනයන් සහ වැදගත් අධ්‍යයන නිවේදන."
        }
      },
      whatWeOffer: {
        title: "අප පිරිනමන සේවාවන්",
        subtitle: "ශ්‍රී ලාංකික සිසුන්ගේ ජපන් භාෂා අවශ්‍යතා වෙනුවෙන්ම නිර්මාණය කළ අධ්‍යාපනික වැඩසටහන්.",
        items: {
          classesTitle: "ජපන් භාෂා පන්ති",
          classesDesc: "ආරම්භක මට්ටමේ සිට උසස් මට්ටම දක්වා ක්‍රමානුකූලව මෙහෙයවන පන්ති.",
          jlptTitle: "JLPT විභාග පෙරහුරුව",
          jlptDesc: "ජපන් භාෂා ප්‍රවීණතා විභාග සඳහා ඉලක්කගත පුනරීක්ෂණ සහ අභ්‍යාස.",
          speakingTitle: "කථන සහ සවන්දීමේ පුහුණුව",
          speakingDesc: "ප්‍රායෝගික සන්නිවේදන හැකියාව වැඩිදියුණු කිරීම සඳහා වන අන්තර්ක්‍රියාකාරී සැසි.",
          kanjiTitle: "කාන්ජි සහ ව්‍යාකරණ පුහුණුව",
          kanjiDesc: "ජපන් වාක්‍ය රටා සහ කාන්ජි අක්ෂර පියවරෙන් පියවර ප්‍රගුණ කිරීම.",
          cultureTitle: "ජපන් සංස්කෘතික අධ්‍යාපනය",
          cultureDesc: "ජපන් සිරිත් විරිත්, ආචාර විධි සහ දෛනික සංස්කෘතික භාවිතයන් ඉගෙනීම.",
          guidanceTitle: "ශිෂ්‍ය මගපෙන්වීම",
          guidanceDesc: "ජපන් භාෂා අධ්‍යයන ගමන සැලසුම් කරගැනීම සඳහා සාමාන්‍ය අධ්‍යාපනික උපදෙස්."
        }
      },
      blog: {
        title: "අධ්‍යාපනික ලිපි සහ මාර්ගෝපදේශ",
        subtitle: "ජපන් භාෂා ඉගෙනුමට උපකාරී වන ලිපි, උපදෙස් සහ සංස්කෘතික තොරතුරු.",
        readMore: "තව කියවන්න",
        posts: {
          p1Title: "ජපන් භාෂාව ඉගෙනීම නිවැරදිව ආරම්භ කරන්නේ කෙසේද?",
          p1Cat: "ආරම්භක මාර්ගෝපදේශය",
          p2Title: "හිරගනා ද කතකනා ද: ඔබ පළමුව ඉගෙන ගත යුත්තේ කුමක්ද?",
          p2Cat: "අක්ෂර ක්‍රම",
          p3Title: "JLPT විභාගයට සාර්ථකව සූදානම් වීමට උපදෙස් 5ක්",
          p3Cat: "විභාග උපදෙස්",
          p4Title: "ජපන් සංස්කෘතිය සහ ආචාර විධි තේරුම් ගැනීම",
          p4Cat: "සංස්කෘතිය සහ ආචාර ධර්ම",
          p5Title: "ආරම්භකයින් සඳහා නිතර භාවිත වන ජපන් වාක්‍ය ඛණ්ඩ",
          p5Cat: "දෛනික කථනය",
          p6Title: "කාන්ජි අක්ෂර ඉගෙනීම අත්‍යවශ්‍ය වන්නේ ඇයි?",
          p6Cat: "කාන්ජි ප්‍රගුණ කිරීම"
        }
      },
      contact: {
        title: "ජපන් භාෂාව ඉගෙනීම ආරම්භ කිරීමට සූදානම්ද?",
        subtitle: "වර්ල්ඩ් ලංකා ජපන් අධ්‍යාපන ආයතනය හා සම්බන්ධ වී ඔබේ ජපන් භාෂා ගමනේ පළමු පියවර තබන්න.",
        nameLabel: "ඔබේ නම",
        phoneLabel: "දුරකථන අංකය",
        emailLabel: "විද්‍යුත් තැපෑල",
        levelLabel: "ඔබ උනන්දු වන ජපන් මට්ටම / පාඨමාලාව",
        levelPlaceholder: "මට්ටම හෝ පාඨමාලාව තෝරන්න",
        messageLabel: "ඔබේ පණිවිඩය / විමසීම",
        sendBtn: "විමසීම යොමු කරන්න",
        sending: "යොමු කරමින්...",
        successMsg: "ස්තූතියි! ඔබේ විමසීම අප වෙත ලැබිණි. අපි ඉක්මනින් ඔබව සම්බන්ධ කරගන්නෙමු.",
        officialEmail: "නිල විද්‍යුත් තැපෑල",
        location: "මධ්‍යස්ථානය පිහිටීම",
        locationText: "ශ්‍රී ලංකාව"
      },
      footer: {
        desc: "වර්ල්ඩ් ලංකා ජපන් අධ්‍යාපන ආයතනය – සංස්කෘතික මධ්‍යස්ථානය. ශ්‍රී ලාංකික සිසුන්ට ප්‍රායෝගික ජපන් භාෂා ප්‍රවීණතාවය සහ නිවැරදි සංස්කෘතික අවබෝධය ලබා දීමට කැපවී සිටිමු.",
        rights: "වර්ල්ඩ් ලංකා ජපන් අධ්‍යාපන ආයතනය. සියලු හිමිකම් ඇවිරිණි.",
        quickLinks: "ක්ෂණික සබැඳි",
        contactInfo: "සම්බන්ධතා තොරතුරු",
        academicLevels: "භාෂා මට්ටම්"
      }
    }
  },
  ja: {
    translation: {
      brand: {
        name: "ワールド・ランカ日本語教育センター",
        tagline: "文化センター",
        sriLankaFocus: "スリランカの学習者のための日本語教育",
        motto: "日本語を学び、文化を理解し、未来を築く。"
      },
      nav: {
        aboutUs: "当校について",
        impact: "学習成果",
        grades: "JLPTレベル",
        resources: "学習リソース",
        whatWeOffer: "教育内容",
        blog: "ブログ",
        contact: "お問い合わせ",
        search: "コース・レベルを検索...",
        login: "受講生ポータル"
      },
      hero: {
        badge: "スリランカの学習者のための日本語教育",
        mainTitle1: "日本への第一歩は、",
        mainTitle2: "ここから始まる",
        subtitle: "スリランカの学習者に向けた体系的な日本語教育、文化理解、そして実践的な指導を通じて、自信を持って日本語を学びましょう。",
        jpLine: "日本語を学び、未来への一歩を踏み出そう。",
        exploreCourses: "コースを見る",
        startLearning: "日本語学習を始める",
        contactUs: "お問い合わせ",
        cardBadge: "JLPT対応カリキュラム",
        cardSubtitle: "ひらがなから上級レベルまで段階的な習得指導"
      },
      about: {
        title: "ワールド・ランカ日本語教育について",
        subtitle: "日本語と文化を学ぶ総合カルチャーセンター",
        intro: "ワールド・ランカ日本語教育センターは、スリランカの学生が実践的な日本語コミュニケーション力を養い、各種語学試験に合格し、日本文化を深く理解できるようサポートする教育機関です。",
        pillars: {
          langTitle: "実践的な日本語教育",
          langDesc: "ひらがな・カタカナ・漢字の基礎文字から、文法、聴解、日常会話までを体系的に学習します。",
          cultureTitle: "日本文化の理解",
          cultureDesc: "日本の礼儀作法、ビジネスマナー、伝統行事、日々の生活習慣を学びます。",
          studentTitle: "学生に寄り添う指導",
          studentDesc: "スリランカの学生一人ひとりの学習進度と目標に応じた丁寧で親身な指導を行います。",
          guidanceTitle: "進路・学習ガイダンス",
          guidanceDesc: "日本語能力試験（JLPT）の受験準備や将来の進路に向けた的確なアドバイスを提供します。"
        }
      },
      impact: {
        title: "学習の成果とメリット",
        subtitle: "実践的な語学力と文化適応力を身につけ、可能性を広げます。",
        cards: {
          confidenceTitle: "言葉への自信",
          confidenceDesc: "読む・書く・聞く・話すの4技能を段階的に伸ばし、確かな自信を培います。",
          examTitle: "試験対策の充実",
          examDesc: "JLPTなどの日本語能力試験の合格を見据えた、確かなカリキュラムと演習。",
          cultureTitle: "本物の文化知識",
          cultureDesc: "日本の伝統、エチケット、社会常識、敬語の使い方を自然に身につけます。",
          futureTitle: "広がる将来の可能性",
          futureDesc: "将来の日本留学やキャリア形成に直結する、実用的な日本語力を育みます。"
        }
      },
      grades: {
        title: "日本語レベル・グレード",
        subtitle: "日本語能力試験（JLPT）の基準に基づいた段階的な学習レベルです。",
        n5Title: "JLPT N5",
        n5Level: "入門・初級（Beginner）",
        n4Title: "JLPT N4",
        n4Level: "初級（Elementary）",
        n3Title: "JLPT N3",
        n3Level: "中級（Intermediate）",
        n2Title: "JLPT N2",
        n2Level: "中上級（Pre-Advanced）",
        n1Title: "JLPT N1",
        n1Level: "上級（Advanced Mastery）",
        previewNotice: "着実な語学力向上のために設計されたカリキュラム構成例です。"
      },
      resources: {
        title: "学習リソース",
        subtitle: "学習を支える基礎教材、練習帳、文化ガイドをご活用ください。",
        items: {
          alphabet: "日本語文字ガイド",
          alphabetDesc: "ひらがな・カタカナの筆順表と発音の手引き。",
          jlpt: "JLPT学習教材",
          jlptDesc: "シラバス概要、出題パターン分析、模擬練習問題。",
          vocab: "語彙練習",
          vocabDesc: "日常会話とJLPT各レベルに対応した重要単語リスト。",
          kanji: "漢字学習リソース",
          kanjiDesc: "部首の理解、覚えやすい記憶法、書き取りシート。",
          grammar: "文法ノート",
          grammarDesc: "実用的な例文と詳しい用例解説付きの文法ノート。",
          listening: "聴解トレーニング",
          listeningDesc: "ネイティブ音声、発音ドリル、リスニング練習問題。",
          culture: "日本文化ハンドブック",
          cultureDesc: "お辞儀の作法、挨拶、季節行事などの文化解説。",
          notices: "受講生へのお知らせ",
          noticesDesc: "開講案内、試験日程、アカデミックカレンダー。"
        }
      },
      whatWeOffer: {
        title: "教育プログラム・サービス",
        subtitle: "スリランカの学習者のニーズに応える、充実した日本語教育サービス。",
        items: {
          classesTitle: "日本語クラス",
          classesDesc: "初心者から上級者まで、着実にレベルアップできる体系的授業。",
          jlptTitle: "JLPT試験対策",
          jlptDesc: "日本語能力試験の合格を目指した集中講義と演習問題。",
          speakingTitle: "会話・聴解トレーニング",
          speakingDesc: "インタラクティブな練習で、生きた日本語の対話力を強化。",
          kanjiTitle: "漢字・文法演習",
          kanjiDesc: "日本語の文字構造と文型を基礎から一歩ずつ習得。",
          cultureTitle: "日本文化講座",
          cultureDesc: "礼儀作法、生活習慣、日本のエチケットを体系的に学習。",
          guidanceTitle: "学習ガイダンス",
          guidanceDesc: "日本語学習の進め方や目標達成のための学習相談と助言。"
        }
      },
      blog: {
        title: "ブログ・学習コラム",
        subtitle: "学習のコツ、試験対策、日本文化に関する役立つ記事をお届けします。",
        readMore: "続きを読む",
        posts: {
          p1Title: "ゼロから始める日本語学習の正しいステップ",
          p1Cat: "初心者ガイド",
          p2Title: "ひらがなとカタカナ：どちらから学ぶべき？",
          p2Cat: "文字体系",
          p3Title: "JLPT試験対策で押さえておくべき5つのポイント",
          p3Cat: "試験対策",
          p4Title: "知っておきたい日本のエチケットと文化マナー",
          p4Cat: "文化・マナー",
          p5Title: "初心者がまず覚えたい便利な日常日本語フレーズ",
          p5Cat: "日常会話",
          p6Title: "なぜ漢字の学習が重要なのか？",
          p6Cat: "漢字の習得"
        }
      },
      contact: {
        title: "日本語学習を始めませんか？",
        subtitle: "ワールド・ランカ日本語教育センターへお気軽にお問い合わせください。日本への第一歩を応援します。",
        nameLabel: "お名前",
        phoneLabel: "お電話番号",
        emailLabel: "メールアドレス",
        levelLabel: "ご希望の日本語レベル・コース",
        levelPlaceholder: "レベルまたはコースを選択",
        messageLabel: "お問い合わせ内容",
        sendBtn: "送信する",
        sending: "送信中...",
        successMsg: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
        officialEmail: "公式メール",
        location: "所在地",
        locationText: "スリランカ"
      },
      footer: {
        desc: "ワールド・ランカ日本語教育センター（文化センター）。スリランカの学習者に向けて、実践的な日本語教育と真正な文化理解を提供しています。",
        rights: "World Lanka Japanese Education. All rights reserved.",
        quickLinks: "クイックリンク",
        contactInfo: "お問い合わせ",
        academicLevels: "日本語レベル"
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
      escapeValue: false
    }
  });

export default i18n;
