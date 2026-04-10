import { FAQItem } from "./faq";

export interface ServiceCard {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  href: string;
}

export interface ServicePage extends ServiceCard {
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  sections: ServiceSection[];
  faqs: FAQItem[];
}

export interface ServiceSection {
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
}

export const serviceCards: ServiceCard[] = [
  {
    slug: "weight-loss-diabetes",
    title: "Weight Loss & Diabetes Management",
    shortTitle: "Weight Loss & Diabetes",
    description:
      "Managing weight and diabetes can be challenging without guidance. TelePlus Care offers digital health solutions in Alberta through virtual programs focused on sustainable lifestyle changes. Our virtual doctor consultations provide dietary advice, exercise plans, and ongoing monitoring to support your journey to better health.",
    image: "/images/Rectangle-1090-3.png",
    href: "/services/weight-loss-diabetes",
  },
  {
    slug: "general-health",
    title: "General Medical Care",
    shortTitle: "General Health",
    description:
      "From common illnesses to ongoing health concerns, TelePlus Care connects you with experienced healthcare providers for general medical consultations. Get diagnosis, treatment plans, prescriptions, and referrals—all from the comfort of your home.",
    image: "/images/Rectangle-1090-6.png",
    href: "/services/general-health",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    shortTitle: "Women's Health",
    description:
      "TelePlus Care provides specialized women's health services including birth control consultations, UTI treatment, hormonal health management, and preventive care. Our compassionate providers understand women's unique health needs and deliver personalized virtual care.",
    image: "/images/Rectangle-1090-7.png",
    href: "/services/womens-health",
  },
  {
    slug: "skin-conditions",
    title: "Skin Conditions",
    shortTitle: "Skin Conditions",
    description:
      "Get expert dermatological care from the comfort of your home. TelePlus Care offers virtual consultations for acne, eczema, psoriasis, rashes, and other skin conditions. Our providers can diagnose, prescribe treatments, and refer you to specialists when needed.",
    image: "/images/Rectangle-1090-8.png",
    href: "/services/skin-conditions",
  },
  {
    slug: "mens-health",
    title: "Men's Health",
    shortTitle: "Men's Health",
    description:
      "TelePlus Care addresses men's health concerns with discretion and expertise. From hair loss and sexual health to prostate concerns and hormonal imbalances, our providers offer confidential virtual consultations tailored to men's unique health needs.",
    image: "/images/Rectangle-1090-9.png",
    href: "/services/mens-health",
  },
  {
    slug: "aesthetic",
    title: "Aesthetic Services",
    shortTitle: "Aesthetic",
    description:
      "Explore our aesthetic services including Botox, dermal fillers, and skin rejuvenation treatments. TelePlus Care combines medical expertise with aesthetic artistry to help you look and feel your best with personalized treatment plans.",
    image: "/images/Rectangle-1090-10.png",
    href: "/services/aesthetic",
  },
];

export const servicePages: ServicePage[] = [
  {
    ...serviceCards[0],
    metaTitle: "Weight Loss & Diabetes Care Alberta - Get Virtual Care",
    metaDescription:
      "Get expert virtual care for weight loss and diabetes management in Alberta. Personalized plans, ongoing monitoring, and licensed healthcare providers. Book today!",
    heroDescription:
      "Managing weight and diabetes can be challenging without the right guidance. TelePlus Care offers comprehensive digital health solutions through virtual programs focused on sustainable lifestyle changes. Our licensed healthcare providers deliver personalized dietary advice, exercise plans, medication management, and ongoing monitoring.",
    sections: [
      {
        title: "Personalized Weight Management",
        description:
          "Our healthcare providers create customized weight management plans that consider your medical history, lifestyle, and goals. Through regular virtual check-ins, we monitor your progress and adjust your plan to ensure sustainable results.",
        image: "/images/Rectangle-1090-3.png",
      },
      {
        title: "Diabetes Care & Monitoring",
        description:
          "Living with diabetes requires consistent monitoring and expert guidance. Our virtual diabetes care program includes blood sugar management, medication adjustments, lifestyle coaching, and regular follow-ups with experienced healthcare providers.",
        image: "/images/CHRONIC-DISEASES-Healthcare-concept-1024x683.jpg",
      },
      {
        title: "GLP-1 Medication Consultations",
        description:
          "Interested in GLP-1 medications like Ozempic or Mounjaro for weight management? Our providers can assess your eligibility, prescribe appropriate medications, and provide ongoing monitoring to ensure safe and effective treatment.",
      },
    ],
    faqs: [
      {
        question: "What weight loss programs does TelePlus Care offer?",
        answer:
          "We offer personalized weight management programs that include dietary counseling, exercise planning, medication management (including GLP-1 medications), and regular virtual follow-ups with our healthcare providers.",
      },
      {
        question: "Can you prescribe diabetes medications virtually?",
        answer:
          "Yes, our licensed healthcare providers can prescribe and manage diabetes medications through virtual consultations. We also provide ongoing monitoring and medication adjustments as needed.",
      },
      {
        question: "How often will I have follow-up appointments?",
        answer:
          "Follow-up frequency depends on your individual needs. Typically, we recommend check-ins every 2-4 weeks during active treatment, with the option to schedule additional appointments as needed.",
      },
    ],
  },
  {
    ...serviceCards[1],
    metaTitle: "Primary Care Services Alberta - Virtual Health Solutions",
    metaDescription:
      "Access primary care services online in Alberta. Get diagnosis, prescriptions, referrals, and treatment plans from licensed doctors. Book your virtual appointment today!",
    heroDescription:
      "From common illnesses to ongoing health concerns, TelePlus Care connects you with experienced healthcare providers for comprehensive general medical consultations. Get expert diagnosis, personalized treatment plans, prescription management, and specialist referrals—all from the comfort of your home.",
    sections: [
      {
        title: "Common Illness Treatment",
        description:
          "Don't wait in crowded clinics for common health issues. Our virtual doctors can diagnose and treat colds, flu, allergies, infections, headaches, and many other everyday health concerns quickly and conveniently.",
        image: "/images/family-therapy-psychologist-office-1024x683.webp",
      },
      {
        title: "Prescription Management",
        description:
          "Need a new prescription or refill? Our providers can assess your needs, prescribe medications, and send prescriptions directly to your preferred pharmacy. We also manage ongoing medication needs with regular reviews.",
      },
      {
        title: "Lab Requisitions & Referrals",
        description:
          "Our healthcare providers can order lab tests, review results, and provide specialist referrals when needed. We coordinate your care to ensure you receive comprehensive treatment.",
      },
    ],
    faqs: [
      {
        question: "What conditions can you treat virtually?",
        answer:
          "We treat a wide range of conditions including cold and flu, allergies, skin rashes, UTIs, mental health concerns, chronic disease management, and more. If your condition requires in-person care, we'll refer you appropriately.",
      },
      {
        question: "Can I get a prescription through a virtual visit?",
        answer:
          "Yes, our licensed providers can prescribe medications during your virtual consultation. Prescriptions are sent directly to your preferred pharmacy for convenient pickup.",
      },
      {
        question: "Do you provide sick notes and medical certificates?",
        answer:
          "Yes, we can provide sick notes, medical certificates, and return-to-work documentation following a virtual consultation with one of our healthcare providers.",
      },
    ],
  },
  {
    ...serviceCards[2],
    metaTitle: "Women's Health Alberta - Get Expert Care Online",
    metaDescription:
      "Specialized women's health services online in Alberta. Birth control, UTI treatment, hormonal health, and more. Compassionate virtual care from licensed providers.",
    heroDescription:
      "TelePlus Care provides specialized women's health services with compassion and expertise. From birth control consultations and UTI treatment to hormonal health management and preventive care, our experienced providers understand women's unique health needs and deliver personalized virtual care tailored to you.",
    sections: [
      {
        title: "Birth Control Consultations",
        description:
          "Explore your birth control options with our knowledgeable healthcare providers. We offer consultations for oral contraceptives, IUD referrals, emergency contraception, and help you find the right method for your lifestyle and health needs.",
        image: "/images/Rectangle-1090-7.png",
      },
      {
        title: "UTI Treatment",
        description:
          "Urinary tract infections are uncomfortable and need prompt treatment. Our virtual consultations allow you to get diagnosed and receive a prescription quickly, without the wait of a traditional clinic visit.",
      },
      {
        title: "Hormonal Health & Menopause",
        description:
          "Whether you're dealing with irregular periods, PCOS, or menopause symptoms, our providers offer expert guidance and treatment options to help you manage hormonal changes and maintain your quality of life.",
      },
    ],
    faqs: [
      {
        question: "Can I get birth control prescribed online?",
        answer:
          "Yes, our healthcare providers can prescribe various forms of birth control through a virtual consultation. We'll discuss your options and help you find the method that works best for you.",
      },
      {
        question: "How quickly can I get treated for a UTI?",
        answer:
          "We offer same-day virtual appointments for UTI symptoms. After a brief consultation, our provider can prescribe antibiotics and have your prescription sent to your pharmacy right away.",
      },
      {
        question: "Do you offer prenatal care?",
        answer:
          "While we can provide initial consultations and referrals for prenatal care, ongoing prenatal monitoring is best managed by an obstetrician. We can help connect you with appropriate specialists.",
      },
    ],
  },
  {
    ...serviceCards[3],
    metaTitle: "Best Dermatologist In Alberta - Get Virtual Consultations",
    metaDescription:
      "Virtual dermatology consultations in Alberta. Expert treatment for acne, eczema, psoriasis, rashes, and more. Get diagnosed and treated from home. Book today!",
    heroDescription:
      "Get expert dermatological care from the comfort of your home. TelePlus Care offers comprehensive virtual consultations for a wide range of skin conditions including acne, eczema, psoriasis, rashes, and more. Our experienced providers can diagnose your condition, prescribe effective treatments, and refer you to dermatology specialists when needed.",
    sections: [
      {
        title: "Acne Treatment",
        description:
          "Whether you're dealing with teenage acne or adult breakouts, our providers can assess your skin condition and create a personalized treatment plan including topical treatments, oral medications, and skincare recommendations.",
        image: "/images/Rectangle-1090-8.png",
      },
      {
        title: "Eczema & Psoriasis Management",
        description:
          "Living with eczema or psoriasis requires ongoing management. Our virtual consultations provide expert guidance on managing flare-ups, prescription treatments, and lifestyle modifications to keep your skin healthy.",
      },
      {
        title: "Skin Rash Assessment",
        description:
          "Concerned about a skin rash or unusual skin changes? Our providers can evaluate your symptoms through our virtual platform, provide a diagnosis, and recommend appropriate treatment or specialist referral.",
      },
    ],
    faqs: [
      {
        question: "Can skin conditions be diagnosed virtually?",
        answer:
          "Yes, many skin conditions can be effectively diagnosed through virtual consultations using high-quality photos and video assessments. Our providers are experienced in virtual dermatology assessments.",
      },
      {
        question: "What skin conditions do you treat?",
        answer:
          "We treat a wide range of skin conditions including acne, eczema, psoriasis, dermatitis, fungal infections, rashes, hives, and more. For conditions requiring in-person examination, we'll provide appropriate referrals.",
      },
      {
        question: "Can you prescribe skin medications online?",
        answer:
          "Yes, our providers can prescribe topical and oral medications for skin conditions during your virtual consultation. Prescriptions are sent directly to your pharmacy.",
      },
    ],
  },
  {
    ...serviceCards[4],
    metaTitle: "Alberta Men's Health Services - Convenient Online Care",
    metaDescription:
      "Confidential men's health services online in Alberta. Hair loss, sexual health, hormonal health, and more. Expert virtual care from licensed providers.",
    heroDescription:
      "TelePlus Care addresses men's health concerns with discretion, expertise, and understanding. From hair loss treatments and sexual health to prostate concerns and hormonal imbalances, our experienced providers offer confidential virtual consultations tailored specifically to men's unique health needs.",
    sections: [
      {
        title: "Hair Loss Treatment",
        description:
          "Hair loss can affect confidence and well-being. Our providers offer evidence-based treatments including prescription medications, lifestyle recommendations, and referrals to hair restoration specialists when appropriate.",
        image: "/images/Rectangle-1090-9.png",
      },
      {
        title: "Sexual Health",
        description:
          "Discuss sensitive health concerns in a comfortable, private virtual setting. Our providers offer discreet consultations for erectile dysfunction, STI testing referrals, and other sexual health concerns with professionalism and confidentiality.",
      },
      {
        title: "Hormonal Health",
        description:
          "Experiencing fatigue, mood changes, or decreased energy? These could be signs of hormonal imbalances. Our providers can order appropriate testing, evaluate your symptoms, and develop a treatment plan to help you feel your best.",
      },
    ],
    faqs: [
      {
        question: "Are men's health consultations confidential?",
        answer:
          "Absolutely. All virtual consultations at TelePlus Care are completely confidential. Your health information is protected by strict privacy regulations and only accessible to your authorized healthcare providers.",
      },
      {
        question: "Can you prescribe hair loss medications?",
        answer:
          "Yes, our providers can prescribe Health Canada-approved hair loss medications such as finasteride and minoxidil after a virtual assessment of your condition and medical history.",
      },
      {
        question: "Do you offer testosterone testing?",
        answer:
          "Yes, our providers can order blood tests to check testosterone levels and other hormone panels. Based on the results, we'll develop an appropriate treatment plan tailored to your needs.",
      },
    ],
  },
  {
    ...serviceCards[5],
    metaTitle: "Aesthetic Services in Alberta - Book Consultation Today!",
    metaDescription:
      "Premium aesthetic services in Alberta. Botox, dermal fillers, skin rejuvenation, and more. Expert consultations with licensed providers. Book your appointment today!",
    heroDescription:
      "Explore our comprehensive aesthetic services combining medical expertise with aesthetic artistry. TelePlus Care offers consultations for Botox, dermal fillers, skin rejuvenation treatments, and more. Our experienced providers help you achieve your aesthetic goals with personalized treatment plans designed for natural, beautiful results.",
    sections: [
      {
        title: "Botox Consultations",
        description:
          "Interested in Botox treatments? Our providers offer detailed consultations to discuss treatment areas, expected results, and create a personalized plan. We ensure you're fully informed and comfortable before proceeding with any treatment.",
        image: "/images/Rectangle-1090-10.png",
      },
      {
        title: "Dermal Fillers",
        description:
          "Restore volume, enhance contours, and reduce signs of aging with dermal filler treatments. Our aesthetic providers assess your facial structure and goals to recommend the most suitable filler treatments for natural-looking results.",
      },
      {
        title: "Skin Rejuvenation",
        description:
          "From chemical peels to microneedling consultations, we offer a range of skin rejuvenation options to help you achieve healthier, more youthful-looking skin. Our providers create customized treatment plans based on your skin type and goals.",
      },
    ],
    faqs: [
      {
        question: "Do you offer in-person aesthetic treatments?",
        answer:
          "Yes, while initial consultations can be conducted virtually, aesthetic treatments such as Botox and fillers are performed in-person at our clinic. We'll schedule your treatment appointment during your consultation.",
      },
      {
        question: "How much do Botox treatments cost?",
        answer:
          "Botox pricing varies based on the treatment area and amount of product needed. During your consultation, our provider will give you a detailed cost estimate based on your personalized treatment plan.",
      },
      {
        question: "Is there downtime after aesthetic treatments?",
        answer:
          "Most aesthetic treatments have minimal downtime. Your provider will discuss expected recovery time, potential side effects, and aftercare instructions during your consultation.",
      },
    ],
  },
];
