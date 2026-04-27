import type { LandingPageData } from "@/types/landing-page";

export const pageData: LandingPageData = {
  metaTitle: "Family Doctor Wait Times Canada (2026 Guide)",
  metaDescription:
    "How long does it take to find a family doctor in Canada in 2026? Province-by-province wait times, registries, and what unattached patients can do today.",
  title: "Family Doctor Wait Times in Canada: A 2026 Province-by-Province Guide",
  heroDescription:
    "Family doctor wait times in Canada have reached a national breaking point in 2026, with roughly 6.5 million Canadians lacking a regular family physician (Statistics Canada, 2024). Across Ontario, Quebec, British Columbia, Alberta and the Atlantic provinces, average waits to be rostered with a new family doctor now range from several months to more than four years, depending on postal code. This guide explains the actual numbers, the structural reasons behind the shortage, the official provincial registries you can join today, and what unattached patients can realistically do in the meantime — including when virtual care is appropriate and when it is not.",
  heroImage: "/images/online-doctors-notes-in-edmonton/hero.jpg",
  heroImageAlt: "Family doctor wait times Canada 2026 — primary care access guide",
  bookingUrl: "/book-appointment-alberta",
  summary:
    "Approximately 6.5 million Canadians (about 1 in 5 adults) have no regular family physician as of 2024 (Statistics Canada). Average wait to be attached to a new family doctor ranges from 6 months in parts of Alberta to over 4 years in Nova Scotia. Most provinces operate official registries (Health Care Connect, Find a Doctor BC, Alberta Find a Doctor). Provincially insured virtual care is the main interim option for routine, non-emergency issues.",
  keyFacts: [
    "Approximately 6.5 million Canadians lack a regular family physician (Statistics Canada, Canadian Community Health Survey, 2024).",
    "Provincial orphaned-patient counts (CIHI and provincial sources, 2024-2025): Ontario 2.5 million, Quebec 1.6 million, BC 900,000, Alberta 650,000, Nova Scotia 160,000+ on Need a Family Practice Registry, Newfoundland and Labrador 136,000+ on the provincial registry.",
    "Average wait to be matched with a new family doctor: Ontario 12-24 months (Health Care Connect), Alberta 6-18 months, BC 12-36 months, Quebec up to 24 months on Guichet d'acces a un medecin de famille, Nova Scotia 24-60+ months in many regions.",
    "Virtual care is now formally insured under most provincial plans (AHCIP, OHIP for rostered patients, MSP, RAMQ for registered Quebec residents) and has become the primary access route for unattached patients seeking routine, non-emergency care.",
  ],
  sections: [
    {
      title: "The Canadian Primary-Care Crisis: Where We Are in 2026",
      content:
        "Canada's family medicine system was designed around the assumption that nearly every resident would have a long-term relationship with a single family physician — a gatekeeper who manages chronic conditions, orders preventive screening, coordinates specialist referrals, and knows the patient's history. That model has eroded. The Canadian Institute for Health Information (CIHI) and Statistics Canada both report that about 17 to 22 percent of Canadians 18 and older now lack a regular primary-care provider, with the figure climbing higher in Quebec, Nova Scotia, and rural regions of every province. The result is a two-tier reality: rostered patients still receive coordinated care, while unattached patients cycle through walk-in clinics, emergency departments, and virtual visits. Federal and provincial governments have responded with new training seats, team-based care funding, and expanded scope-of-practice rules for nurse practitioners and pharmacists, but capacity is still well short of demand heading into 2026.",
      image: "/images/online-doctors-notes-in-edmonton/section-1.webp",
      imageAlt: "Canadian primary care crisis 2026 — family doctor shortage overview",
    },
    {
      title: "By the Numbers: How Many Canadians Lack a Family Doctor",
      content:
        "Statistics Canada's Canadian Community Health Survey is the authoritative source. As of the 2024 release covering 2023 data, 6.5 million Canadians 12 and older reported not having a regular health-care provider — up from 4.6 million in 2019. The Angus Reid Institute, OurCare and other independent surveys produce slightly higher estimates (closer to 1 in 5 Canadian adults), capturing patients who technically have a family doctor but cannot get an appointment within a reasonable timeframe. CIHI's primary-care indicators reinforce the trend: only 86 percent of Canadians have a regular doctor, place, or team to go to for primary care, and just 38 percent are able to get a same- or next-day appointment when sick — among the worst access metrics in the OECD.",
      bullets: [
        "6.5 million Canadians without a regular family physician (Statistics Canada, 2024).",
        "Approximately 1 in 5 Canadian adults functionally unattached (OurCare survey, 2024).",
        "Only 38 percent get a same- or next-day appointment when sick (Commonwealth Fund, 2023; CIHI, 2024).",
        "Roughly 4.7 million Canadians live in a community with primary-care access designated as inadequate (CIHI, 2024).",
      ],
      image: "/images/online-doctors-notes-in-edmonton/section-2.jpg",
      imageAlt: "Statistics Canada family doctor shortage data 2024",
    },
    {
      title: "Province-by-Province Breakdown of Orphaned Patients",
      content:
        "The shortage is national, but it is not evenly distributed. Quebec and the Atlantic provinces have the highest proportional rates of unattached patients, while Alberta and Saskatchewan generally fare better than the Canadian average. The figures below are drawn from provincial ministries of health, CIHI, and the most recent provincial registry counts (2024-2025).",
      bullets: [
        "Ontario — approximately 2.5 million residents without a family doctor (Ontario College of Family Physicians, 2024); Health Care Connect carries hundreds of thousands of active registrations.",
        "Quebec — approximately 1.6 million Quebecers without a regular medecin de famille (MSSS / Guichet d'acces a un medecin de famille, 2024).",
        "British Columbia — approximately 900,000 unattached patients pre-Health Connect Registry; the registry continues to absorb hundreds of thousands of waiting residents (BC Ministry of Health, 2024).",
        "Alberta — approximately 650,000 Albertans without a family doctor (Alberta Medical Association, 2024); rural and Calgary-zone shortages are the most acute.",
        "Saskatchewan — roughly 1 in 7 residents without a regular provider (Saskatchewan Health Authority, 2024).",
        "Manitoba — Family Doctor Finder lists thousands of waiting patients; rural Manitoba access is among the worst in the prairies (Manitoba Health, 2024).",
        "Nova Scotia — over 160,000 residents on the Need a Family Practice Registry (Nova Scotia Health, 2025), the highest per-capita unattached rate in Canada.",
        "New Brunswick — Patient Connect NB carries tens of thousands of unattached patients; the registry has grown each year since 2020.",
        "Newfoundland and Labrador — over 136,000 people on the Patient Connect NL registry, in a province of just over 540,000 (NL Health Services, 2024).",
        "Prince Edward Island — Patient Registry holds approximately 38,000 Islanders, roughly 1 in 5 residents (Health PEI, 2024).",
      ],
      image: "/images/online-doctors-notes-in-edmonton/section-3.jpg",
      imageAlt: "Provincial breakdown family doctor wait times Canada 2026",
    },
    {
      title: "Why the Family Doctor Shortage Exists",
      content:
        "The shortage is the product of decisions made over three decades, not a single recent failure. Canadian medical schools reduced their intake in the 1990s in response to a Barer-Stoddart report that mistakenly forecast physician oversupply. Family medicine residency match rates have fallen — in CaRMS 2024, more than 100 family medicine seats went unfilled across Canada in the first iteration. Fee-for-service billing models reward shorter, episodic visits over the longitudinal complexity of modern primary care, pushing many graduates toward focused practices, hospitalist work, or sub-specialties such as sports medicine and emergency medicine. A 2023 College of Family Physicians of Canada survey found that 65 percent of family physicians are considering reducing hours or retiring within 5 years. Demographic pressure compounds all of this: Canada's population grew by more than 1.2 million in 2023 alone (Statistics Canada), the largest annual increase since 1957, while net family physician supply per 100,000 residents has been roughly flat.",
      bullets: [
        "Reduced medical school intake in the 1990s following the Barer-Stoddart report.",
        "Unfilled family medicine residency positions in CaRMS each year since 2019.",
        "Fee-for-service models that undervalue chronic disease management and mental health care.",
        "Aging physician workforce — average Canadian family doctor is over 50, and many are reducing rosters or retiring.",
        "Population growth outpacing physician supply, particularly in Ontario, BC and Alberta.",
        "Administrative burden — the average family doctor reports 19 hours per week on paperwork (CFPC, 2023).",
      ],
      image: "/images/Group-37520.png",
      imageAlt: "Reasons for family doctor shortage Canada training pipeline retiring physicians",
    },
    {
      title: "How Long Does It Actually Take to Find a Family Doctor?",
      content:
        "Wait times to be rostered (formally accepted as a regular patient) vary dramatically by province and region. The numbers below represent the most recent figures published or reported by provincial health authorities, the College of Family Physicians of Canada, and reputable news investigations through 2024-2025. Rural and small-town waits are typically shorter than urban waits because rural practices have explicit recruitment incentives, while major city waitlists are oversubscribed.",
      bullets: [
        "Ontario — Health Care Connect averages 12 to 24 months to a match in most regions; some Toronto, Ottawa and Hamilton postal codes exceed 36 months.",
        "Quebec — Guichet d'acces a un medecin de famille (GAMF) average wait is 12 to 24 months; many Montreal-area registrants wait 3+ years.",
        "British Columbia — Health Connect Registry quoted 12 to 36 months in 2024; Lower Mainland and Vancouver Island the slowest.",
        "Alberta — Find a Doctor service typically returns options within 6 to 18 months in Edmonton and Calgary metros; rural waits can be much shorter.",
        "Saskatchewan — Find a Family Doctor Saskatchewan averages 6 to 18 months in Regina and Saskatoon.",
        "Manitoba — Family Doctor Finder waits range from a few months in some rural towns to over 24 months in Winnipeg.",
        "Nova Scotia — Need a Family Practice Registry waits commonly exceed 24 to 60 months; some rural communities have no rostering capacity at all.",
        "New Brunswick — Patient Connect NB waits typically 12 to 36 months.",
        "Newfoundland and Labrador — Patient Connect NL waits frequently exceed 24 months; St. John's and Corner Brook the most strained.",
        "Prince Edward Island — Patient Registry waits commonly 24 to 48 months.",
      ],
      image: "/images/Rectangle-1090-3.png",
      imageAlt: "Average wait time to find family doctor by province Canada 2026",
    },
    {
      title: "Provincial Registries: How to Sign Up Today",
      content:
        "Every province operates an official registry — a single waitlist that connects unattached residents with family physicians or nurse practitioners as openings become available. Registering is free, requires only your provincial health card, and is the most important first step for anyone serious about being attached. Registration does not preclude using virtual care or walk-in clinics in the meantime, and most registries allow you to update your preferences (language, specific clinic, accessibility needs) at any time.",
      bullets: [
        "Ontario — Health Care Connect, run by Ontario Health: call 1-800-445-1822 or register online with your OHIP number.",
        "Quebec — Guichet d'acces a un medecin de famille (GAMF): register at quebec.ca with your RAMQ card.",
        "British Columbia — Health Connect Registry: call 8-1-1 (HealthLink BC) or register online with your MSP number.",
        "Alberta — Alberta Find a Doctor service (albertafindadoctor.ca), operated by the Alberta Medical Association.",
        "Saskatchewan — Find a Family Doctor Saskatchewan: provincial Health Authority directory.",
        "Manitoba — Family Doctor Finder: call Health Links-Info Sante 204-788-8200 or 1-888-315-9257.",
        "Nova Scotia — Need a Family Practice Registry: call 8-1-1 or register online with Nova Scotia Health.",
        "New Brunswick — Patient Connect NB: 1-888-298-3128, in English or French.",
        "Newfoundland and Labrador — Patient Connect NL: 811 HealthLine.",
        "Prince Edward Island — Patient Registry: 1-855-563-2101 or register through Health PEI online.",
      ],
      image: "/images/Rectangle-1090-7.png",
      imageAlt: "Provincial registries Health Care Connect Find a Doctor BC Alberta",
    },
    {
      title: "What Unattached Patients Can Do Today: Virtual Clinics",
      content:
        "While you wait on a registry — which may take months or years — you still need access to medical care. Provincial colleges (CPSA in Alberta, CPSO in Ontario, CPSBC in British Columbia, CPSS in Saskatchewan, and the equivalent regulators in every other province) have permitted virtual care since 2020 and continue to update standards. Most provincial insurance plans now cover virtual visits with a Canadian-licensed physician for residents of that province: Alberta covers virtual care through AHCIP, BC through MSP for established relationships, Quebec through RAMQ where eligible, and Ontario through OHIP for rostered patients (with private-pay options for the unattached). Virtual clinics such as TelePlus Care offer routine assessment, medication renewals (excluding controlled drugs), referrals, sick notes, and chronic-disease follow-up — typically same-day or next-business-day. Virtual care is appropriate for routine and minor concerns; it is not a replacement for a long-term family doctor relationship.",
      image: "/images/online-doctors-notes-in-edmonton/section-2.jpg",
      imageAlt: "Virtual clinic options for unattached patients Canada",
    },
    {
      title: "Limitations of Virtual Care — When You Still Need In-Person",
      content:
        "Virtual care is not a substitute for every clinical scenario, and being honest about its limits is part of practising responsibly. A camera and a telephone cannot replace a stethoscope, a physical exam, or a properly equipped procedure room. Provincial colleges (CPSA, CPSO, CPSBC, CPSS, CMQ in Quebec) all require that physicians redirect patients to in-person care when symptoms warrant it. Use virtual care for routine, low-acuity concerns; seek in-person assessment, walk-in clinics, urgent care, or emergency services for the situations below.",
      bullets: [
        "Any chest pain, shortness of breath, or symptoms suggesting heart attack or stroke — call 9-1-1 immediately.",
        "Acute abdominal pain, severe injury, or significant bleeding.",
        "Suspected fractures, deep wounds, or anything requiring imaging or sutures.",
        "Pediatric fever in infants under 3 months, or any sick child appearing significantly unwell.",
        "Pelvic, breast, prostate, or skin-lesion examinations that require palpation or dermoscopy.",
        "Mental-health crises, including active suicidal ideation — call 9-8-8 (Suicide Crisis Helpline Canada).",
        "Specialist referrals that require formal in-person workup before a consultation can be processed.",
      ],
      image: "/images/online-doctors-notes-in-edmonton/section-3.jpg",
      imageAlt: "Limitations of virtual care when in person family doctor needed",
    },
    {
      title: "The Expanded Role of Nurse Practitioners and Pharmacists",
      content:
        "Several provinces have responded to the family doctor shortage by expanding scope of practice for other regulated professionals. Nurse practitioners (NPs) can independently diagnose, order investigations, prescribe most medications, and manage chronic disease in every Canadian province. Ontario, BC, Saskatchewan, Alberta, and the Atlantic provinces now publicly fund NP-led clinics. Pharmacists in Alberta, BC, Nova Scotia, New Brunswick, and Saskatchewan can prescribe for an expanded list of minor ailments — UTIs, cold sores, allergies, acne, eczema, smoking cessation, hormonal contraception, and more — and the list continues to grow. Pharmacists can also renew most prescriptions and administer injections including travel vaccines. For unattached patients, an NP or scope-expanded pharmacist visit is often a faster and equally appropriate substitute for a routine family doctor visit.",
      bullets: [
        "Nurse practitioners are independently licensed in every province and can fulfil most family-doctor functions for routine care.",
        "Alberta and BC pharmacists can prescribe for 30+ minor ailments and renew most chronic medications.",
        "Ontario's expanded pharmacist scope covers 19 common ailments including UTIs and pink eye.",
        "Nova Scotia's Community Pharmacy Primary Care Clinics now treat hundreds of thousands of visits annually.",
        "Saskatchewan and New Brunswick allow pharmacist-led contraception and tobacco-cessation prescribing.",
      ],
      image: "/images/Group-37522.png",
      imageAlt: "Nurse practitioners and pharmacists expanded scope Canada",
    },
    {
      title: "Government Action Plans: What's Being Done in 2025-2026",
      content:
        "Federal and provincial governments have rolled out several initiatives in response to the shortage, although results will take years to appear. The federal government's 2023 Working Together to Improve Health Care for Canadians plan committed $196 billion over 10 years, with bilateral agreements tied to access metrics. British Columbia's Team Family Care BC and longitudinal family physician (LFP) payment model, launched in 2023, raised average family doctor compensation by roughly 20 to 25 percent and is credited with attaching hundreds of thousands of additional residents through 2024-2025. Ontario's primary-care expansion announced in 2024 funds new Family Health Teams and Nurse-Practitioner-Led Clinics with the goal of attaching every Ontarian by 2029. Alberta is migrating to Connect Care, a province-wide electronic health record run by Alberta Health Services, and has expanded the Modernized Alberta Primary Care payment model. Quebec, Nova Scotia, New Brunswick and Newfoundland and Labrador have all introduced new physician retention bonuses, return-of-service incentives for residents, and accelerated international medical graduate (IMG) licensing pathways.",
      bullets: [
        "Federal — $196 billion over 10 years through bilateral agreements (Health Canada, 2023).",
        "BC — Team Family Care BC plus longitudinal family physician (LFP) model launched February 2023.",
        "Ontario — primary-care expansion targeting attachment for every Ontarian by 2029 (announced 2024).",
        "Alberta — Connect Care province-wide EHR rollout plus Modernized Alberta Primary Care payment model.",
        "Quebec — accelerated IMG licensing and recurring medecin de famille bonuses.",
        "Nova Scotia and Atlantic provinces — Atlantic Physician Register launched to ease cross-provincial mobility.",
      ],
      image: "/images/Rectangle-1090-3.png",
      imageAlt: "Government action plans family doctor shortage Canada 2025 2026",
    },
    {
      title: "Self-Help: How to Maximize a 10-Minute Family Doctor Visit",
      content:
        "Even if you do have a family doctor, appointments are often capped at 10 to 15 minutes by fee-for-service billing realities. Walking in prepared dramatically improves what you get out of the visit. Bring a written list of your concerns ranked by priority, current medication bottles or photos of the labels, recent lab values you have access to, and a brief summary of what has changed since your last visit. Avoid the trap of saving the most important issue for last — front-load your top concern. If you have multiple unrelated issues, tell the doctor up front and offer to book a follow-up rather than try to compress everything into one visit. Take notes during the visit, ask for a printed list of any new prescriptions, and confirm follow-up timelines before you leave the room.",
      bullets: [
        "Bring a written list of concerns, ranked top-3.",
        "Bring all current medications (bottles or photos of the labels).",
        "Have any recent labs or imaging available — through MyChart, MyHealth Records (Alberta), or your portal of choice.",
        "Front-load your most important issue rather than saving it for last.",
        "If you have multiple unrelated issues, ask to book a follow-up rather than rush them all.",
        "Confirm next steps and follow-up timing before leaving the room.",
      ],
      image: "/images/PHOTO-2025-07-05-11-18-45-819x1024.jpg",
      imageAlt: "How to prepare for short family doctor visit Canada",
    },
    {
      title: "When to Use Virtual Care vs. Wait for an In-Person Family Doctor",
      content:
        "Virtual care and traditional family medicine are complements, not substitutes. The right choice depends on the issue, urgency, and whether you need a physical examination. As a rule of thumb: use virtual care when the issue is routine, when you need a fast answer or prescription renewal, or when travelling; wait for or seek your in-person family doctor for new physical findings, complex chronic-disease management, mental-health concerns requiring continuity, and well-baby and prenatal care. Both routes are legitimate, both are insured in most provinces, and the best primary-care plan in 2026 combines them: stay on a provincial registry, use a virtual clinic such as TelePlus Care for routine in-between needs, and reserve in-person visits for situations that genuinely require them.",
      image: "/images/Group-37520.png",
      imageAlt: "Virtual care vs in person family doctor decision Canada",
    },
    {
      title: "Get Routine Virtual Care Today — While You Wait for a Family Doctor",
      content:
        "TelePlus Care provides virtual primary-care visits with physicians licensed by the College of Physicians and Surgeons of Alberta and other provincial regulators. We do not replace a long-term family doctor — we provide same-day or next-business-day access to assessment, prescription renewals (excluding controlled drugs), referrals, sick notes, and chronic-disease follow-up while you remain on your provincial registry. Book a virtual appointment online and a Canadian-licensed physician will see you, document the visit in your chart, and share records with your eventual family doctor when you are matched.",
      image: "/images/Group-37522.png",
      imageAlt: "Book virtual family doctor appointment Canada TelePlus Care",
    },
  ],
  faqs: [
    {
      question: "How long does it take to get a family doctor in Canada?",
      answer:
        "It depends on the province and city. Average waits to be rostered with a new family physician range from 6-18 months in parts of Alberta and Saskatchewan to 2-5 years in Nova Scotia, Newfoundland and Labrador, and Prince Edward Island. Ontario's Health Care Connect typically averages 12-24 months, BC's Health Connect Registry 12-36 months, and Quebec's Guichet d'acces a un medecin de famille up to 24 months. Rural and small-town waits are usually shorter than waits in major cities.",
    },
    {
      question: "Can I get a family doctor without OHIP, AHCIP, or MSP?",
      answer:
        "No. Provincial registries (Health Care Connect, Alberta Find a Doctor, Health Connect Registry BC, etc.) require an active provincial health card to register. If you are new to Canada or to a province, you usually have a 3-month waiting period for coverage. During that period, urgent and walk-in care is available on a fee-for-service basis, and travel/newcomer health insurance plans cover most care while you wait for activation.",
    },
    {
      question: "How many Canadians don't have a family doctor?",
      answer:
        "Approximately 6.5 million Canadians 12 and older reported not having a regular health-care provider in the most recent Statistics Canada Canadian Community Health Survey (2024 release, 2023 data). Independent surveys (OurCare, Angus Reid) place the functionally unattached figure closer to 1 in 5 Canadian adults — the higher number captures people who technically have a doctor but cannot get appointments in a reasonable timeframe.",
    },
    {
      question: "What's the fastest way to see a doctor in Canada right now?",
      answer:
        "For routine, non-emergency concerns, a virtual clinic with a Canadian-licensed physician is typically the fastest option — same-day or next-business-day access in most provinces. Walk-in clinics and urgent care centres are next quickest for in-person needs. For anything potentially life-threatening (chest pain, stroke symptoms, severe bleeding, severe shortness of breath), call 9-1-1 or go directly to an emergency department.",
    },
    {
      question: "Can a virtual doctor replace a family doctor?",
      answer:
        "No. Virtual care is appropriate for routine, low-acuity issues such as prescription renewals, minor infections, sick notes, lab follow-up, and many chronic-disease check-ins. It cannot replace a long-term family doctor for tasks that require physical examination, complex multi-system management, well-baby and prenatal care, or continuity of mental-health care. Use virtual care as a complement while you remain on your provincial registry.",
    },
    {
      question: "Will the family doctor shortage end?",
      answer:
        "Not quickly. Federal and provincial action plans — including BC's Team Family Care, Ontario's primary-care expansion, and federal bilateral health agreements — are projected to take 5 to 10 years to meaningfully change attachment rates. The Canadian Medical Association and College of Family Physicians of Canada both project the shortage will persist through at least 2030, with gradual improvement as new training seats, IMG licensing, and team-based care models scale up.",
    },
    {
      question: "Are nurse practitioners the same as family doctors?",
      answer:
        "No, but in Canada they have substantially overlapping scope for routine primary care. Nurse practitioners are independently licensed clinicians who can diagnose, order tests, prescribe most medications, and manage chronic disease. They work in NP-led clinics, family health teams, and walk-in settings in every province. For most routine adult primary care, an NP visit is clinically equivalent to a family-doctor visit; complex multi-system or specialist-bridging care may still require a physician.",
    },
    {
      question: "What's the difference between a walk-in clinic and a virtual clinic?",
      answer:
        "A walk-in clinic is an in-person family-medicine clinic that sees patients without an appointment, typically for episodic care. A virtual clinic provides the same kind of episodic care over video or phone, with a Canadian-licensed physician issuing a prescription you can fill at any pharmacy. Both are appropriate for routine concerns; only an in-person clinic can perform a physical exam, give injections, or do procedures.",
    },
    {
      question: "How do I sign up for a family doctor in my province?",
      answer:
        "Every province operates a registry. Ontario: Health Care Connect, 1-800-445-1822. Quebec: Guichet d'acces a un medecin de famille, quebec.ca. BC: Health Connect Registry, call 8-1-1. Alberta: Alberta Find a Doctor (albertafindadoctor.ca). Saskatchewan: Find a Family Doctor Saskatchewan. Manitoba: Family Doctor Finder, 204-788-8200. Nova Scotia: Need a Family Practice Registry, 8-1-1. New Brunswick: Patient Connect NB, 1-888-298-3128. Newfoundland and Labrador: Patient Connect NL, 811. PEI: Patient Registry, 1-855-563-2101.",
    },
    {
      question: "Does TelePlus Care replace having a family doctor?",
      answer:
        "No. TelePlus Care provides virtual access to Canadian-licensed physicians for routine, non-emergency needs while you wait for a family doctor. We are a complement to long-term primary care, not a substitute. We strongly encourage every patient to register on their provincial waitlist and to seek in-person care for any issue requiring physical examination or continuity-based management.",
    },
  ],
  locations:
    "All provinces — Ontario, Quebec, British Columbia, Alberta (Edmonton, Calgary, Red Deer, Lethbridge, Medicine Hat, Fort McMurray, Grande Prairie, Airdrie), Saskatchewan, Manitoba, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island.",
  lastReviewed: "2026-04-26",
  reviewedBy: "Dr. Maher Jerudi, MD",
};
