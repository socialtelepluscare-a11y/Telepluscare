import type { LandingPageData } from "@/types/landing-page";

export const pageData: LandingPageData = {
  metaTitle: "How to Save Money on Prescriptions in Canada (2026 Guide)",
  metaDescription:
    "13 proven ways Canadians cut prescription costs in 2026 — generic substitution, provincial programs (Trillium, Pharmacare), pharmacy comparison, and tax credits.",
  title: "How to Save Money on Prescriptions in Canada: 13 Proven Strategies for 2026",
  heroDescription:
    "Canadians spend an average of CA$1,055 per person per year on prescription medications according to the Canadian Institute for Health Information — the highest per-capita figure outside the United States. Yet most of those costs are reducible with the right strategy. From generic substitution rules and provincial drug programs to manufacturer assistance, pharmacy price-shopping, 90-day fills, and the federal Medical Expense Tax Credit, this guide walks through every legitimate way to lower your prescription bill in 2026.",
  heroImage: "/images/prescription-refill/13-819x1024.jpeg",
  heroImageAlt: "How to save money on prescriptions Canada pharmacy savings",
  bookingUrl: "/book-appointment-alberta",
  summary:
    "Canadians can reduce prescription costs by switching to generics (60-80% cheaper), using provincial drug programs like Trillium (ON), Pharmacare (BC), or Alberta Blue Cross seniors, leveraging manufacturer patient assistance, comparison-shopping among Costco, Walmart, Loblaws, and Shoppers Drug Mart, requesting 90-day fills, and claiming the Medical Expense Tax Credit on line 33099.",
  keyFacts: [
    "Canadians spend CA$1,055 per person per year on prescriptions on average (CIHI, 2024) — generic substitution alone reduces this by 60-80% per drug.",
    "Ontario's Trillium Drug Program caps eligible household prescription costs at roughly 4% of net family income, after a deductible.",
    "Costco Canada pharmacies do not require a membership to fill prescriptions, and dispensing fees are typically 30-50% lower than community pharmacies.",
    "The federal Medical Expense Tax Credit on line 33099 reimburses unreimbursed medical costs above 3% of net income or CA$2,759 in 2026, whichever is less.",
  ],
  sections: [
    {
      title: "Why Are Prescriptions So Expensive in Canada?",
      content:
        "Despite universal hospital and physician coverage, Canada is the only country with universal healthcare that does not have universal prescription coverage. Provinces operate fragmented drug plans, leaving roughly one in five Canadians without any prescription insurance and another quarter underinsured according to a 2023 Angus Reid Institute survey. Even within insured populations, copayments, deductibles, and exclusions add up. Brand-name drugs in Canada are among the most expensive in the OECD outside the United States, although the Patented Medicine Prices Review Board keeps them well below US retail. The good news: the system has many overlooked savings levers, most of which are legal, easy to access, and cumulative.",
      image: "/images/Rectangle-1090-3.png",
      imageAlt: "Canadian prescription cost crisis universal healthcare gap",
    },
    {
      title: "Strategy 1: Always Ask for the Generic Equivalent",
      content:
        "Generic medications contain the same active ingredient, dosage, and route of administration as the brand name and meet Health Canada's bioequivalence standards. They cost 60 to 80 percent less. Provincial substitution rules require pharmacists to dispense the generic when one exists unless the prescriber specifies no substitution. In British Columbia and Ontario, mandatory generic substitution is the default. In Alberta, pharmacists ask before substituting. Always ask: Is there a generic? — even if you have insurance, since plan formularies often pay only the generic price and bill the brand premium back to you. The savings on a long-term medication can exceed CA$500 a year for a single drug.",
      image: "/images/best-diabetes-doctor-in-edmonton/section-1.png",
      imageAlt: "Generic drug substitution Canada Health Canada bioequivalence",
    },
    {
      title: "Strategy 2: Provincial Drug Programs You May Qualify For",
      content:
        "Each province operates its own pharmacare-style program. Eligibility is typically based on income, age, or specific conditions. Many Canadians who qualify never apply because the programs are not well advertised. A 30-minute application can save thousands per year for chronic-medication users.",
      bullets: [
        "Ontario — Trillium Drug Program for households without private coverage; deductible scaled to income then 4% cap.",
        "British Columbia — BC PharmaCare Fair Pharmacare with income-tested deductible and assistance for low-income families.",
        "Alberta — Alberta Blue Cross Coverage for Seniors and the Non-Group Coverage program for non-seniors.",
        "Saskatchewan — Saskatchewan Drug Plan with seniors deductible, family deductible, and special support program.",
        "Manitoba — Manitoba Pharmacare based on income.",
        "Quebec — Public Prescription Drug Insurance Plan administered by RAMQ; mandatory if no private coverage.",
        "Atlantic provinces — provincial Pharmacare programs with senior, low-income, and high-cost categories.",
        "Federal — Non-Insured Health Benefits (NIHB) for First Nations and Inuit, Veterans Affairs, and Interim Federal Health Program for refugees.",
      ],
      image: "/images/best-diabetes-doctor-in-edmonton/section-2.png",
      imageAlt: "Canadian provincial drug programs Trillium Pharmacare Alberta Blue Cross",
    },
    {
      title: "Strategy 3: Compare Pharmacies — Prices Vary Widely",
      content:
        "Same drug, same DIN, very different prices. Dispensing fees vary from CA$5 at Costco Canada (no membership needed for the pharmacy) to CA$15 or more at standalone community pharmacies. Markups on the drug itself also vary. Walmart Canada, Loblaws-owned Real Canadian Superstore, Shoppers Drug Mart, Rexall, London Drugs, Save-On-Foods, and independent pharmacies all set their own prices. For a chronic medication taken monthly, choosing the lowest-cost pharmacy can save CA$120 to CA$300 a year per prescription. Tools like RxAssist Canada and direct phone-arounds remain the simplest way to compare. Some Albertans report saving 25 percent by switching from a downtown community pharmacy to a Costco location.",
      image: "/images/best-diabetes-doctor-in-edmonton/section-3.png",
      imageAlt: "Pharmacy price comparison Costco Walmart Shoppers Canada",
    },
    {
      title: "Strategy 4: Request 90-Day Fills Instead of Monthly",
      content:
        "Most provinces and most insurance plans permit 90-day prescriptions for stable chronic medications. The savings come from paying one dispensing fee instead of three. On a drug with a CA$11 dispensing fee, switching from monthly to 90-day refills saves CA$88 a year. Multiply that across several long-term medications and the savings reach hundreds of dollars. Some plans require prior authorization for 90-day fills; others do it automatically. Ask your prescriber to write the prescription for 90 days. Note that some controlled substances and recently initiated therapies must remain on shorter cycles for safety monitoring.",
      image: "/images/best-diabetes-doctor-in-edmonton/section-4.png",
      imageAlt: "90 day prescription fill versus monthly Canadian pharmacy",
    },
    {
      title: "Strategy 5: Manufacturer Patient Assistance Programs",
      content:
        "Most major pharmaceutical companies operating in Canada run patient assistance programs (PAPs) that subsidize cost when private and public coverage fall short. They are surprisingly underused. Application typically requires a prescription, recent insurance denial or coverage gap, and basic income information. Many PAPs offer copay cards, free starter doses, and ongoing rebates.",
      bullets: [
        "Novo Nordisk Care — covers Ozempic, Wegovy, Saxenda, Tresiba, and Levemir; copay assistance up to plan caps.",
        "Eli Lilly Cares — covers Mounjaro, Trulicity, Humalog, Jardiance, and Verzenio.",
        "AstraZeneca AZ&Me — covers Forxiga, Brilinta, and several oncology drugs.",
        "Pfizer RxPathways Canada — covers select cardiovascular and oncology medications.",
        "Sanofi Patient Connect — covers diabetes, multiple sclerosis, and rare disease medications.",
        "Boehringer Ingelheim Patient Support — covers Trajenta, Jardiance combinations, and respiratory drugs.",
      ],
      image: "/images/best-diabetes-doctor-in-edmonton/section-5.png",
      imageAlt: "Manufacturer patient assistance programs Canada Novo Lilly",
    },
    {
      title: "Strategy 6: Online Pharmacy Savings Without the Risk",
      content:
        "Licensed online Canadian pharmacies regulated by provincial colleges (such as Pharmacy Examining Board of Canada-recognized operations) often offer 20 to 40 percent off retail through reduced overhead. Your prescription can be transferred from any walk-in pharmacy with a phone call. Look for verification: every legitimate online pharmacy displays its provincial pharmacy license number and the supervising pharmacist's registration. Avoid foreign websites — Health Canada has flagged thousands of unverified online pharmacies as illegal sources of counterfeit medication. Importing prescriptions into Canada from non-Canadian sources is restricted under the Food and Drugs Act outside narrow personal-use exceptions and remains a real legal and safety risk.",
      image: "/images/best-diabetes-doctor-in-edmonton/section-6.png",
      imageAlt: "Online Canadian pharmacy savings licensed verified",
    },
    {
      title: "Strategy 7: Combine Spouse and Partner Insurance Plans",
      content:
        "If both you and your partner have private extended health plans, coordinate them. Most plans permit dual coverage for spouses and dependents, with one plan acting as primary and the other as secondary to cover the remaining percentage. The order is set by the Canadian Life and Health Insurance Association coordination of benefits rules — your own plan is primary for you, your partner's for them, and dependent children are covered first by the parent with the earlier birthday in the calendar year. Coordinated coverage commonly reduces a 20 percent copay to less than 5 percent and can effectively zero out costs for many medications.",
      image: "/images/best-diabetes-doctor-in-edmonton/section-7.png",
      imageAlt: "Coordinate spouse partner insurance plans prescription Canada",
    },
    {
      title: "Strategy 8: Therapeutic Substitution — Same Class, Lower Price",
      content:
        "Sometimes the best savings come from changing to a different drug in the same therapeutic class. A statin for cholesterol that costs CA$80 a month brand may have a generic alternative in the same class at CA$10. SSRIs, ACE inhibitors, beta-blockers, and proton pump inhibitors all have well-established substitution patterns. Discuss with your physician — therapeutic substitution must be a clinical decision, not just a financial one, but the choice within a class often meaningfully changes cost without changing outcomes. A 15-minute virtual visit can identify substitutions worth hundreds of dollars per year.",
      image: "/images/prescription-refill/111-819x1024.jpeg",
      imageAlt: "Therapeutic substitution drug class savings Canada",
    },
    {
      title: "Strategy 9: Federal Programs for Specific Populations",
      content:
        "Three large federal programs cover prescriptions outside the provincial system. If you fall into any of these categories, the medication is typically free or near-free.",
      bullets: [
        "Non-Insured Health Benefits (NIHB) — covers prescriptions, dental, vision, mental health, and medical transportation for status First Nations and recognized Inuit.",
        "Veterans Affairs Canada — covers eligible veterans with service-related conditions; benefits depend on disability assessment.",
        "Interim Federal Health Program (IFHP) — covers refugees, refugee claimants, protected persons, and resettled refugees during their initial period in Canada.",
        "Canadian Armed Forces — full coverage for active-duty members and dependents.",
        "Royal Canadian Mounted Police — Public Service Health Care Plan covers prescriptions for officers and dependents.",
      ],
      image: "/images/best-diabetes-doctor-in-edmonton/section-8.png",
      imageAlt: "Federal drug programs NIHB Veterans Affairs IFHP Canada",
    },
    {
      title: "Strategy 10: Medical Expense Tax Credit — Don't Miss Line 33099",
      content:
        "The federal Medical Expense Tax Credit (METC) on line 33099 of the T1 return reimburses 15 percent of eligible unreimbursed medical expenses above the smaller of 3 percent of net income or CA$2,759 in 2026. Provincial tax credits add another 4 to 11 percent on top. Eligible expenses include prescriptions, dental, vision, paramedical services, premiums on private health plans (including travel insurance medical portions), and even kilometres travelled for medical care more than 40 kilometres from home. Save every receipt — the CRA accepts pharmacy printouts that list patient name, drug name, prescriber, dispensing date, and amount. Do not throw out a single receipt.",
      image: "/images/Rectangle-1090-7.png",
      imageAlt: "Medical Expense Tax Credit line 33099 Canada CRA",
    },
    {
      title: "Strategy 11: Pharmacist-Led Medication Reviews",
      content:
        "Provincial pharmacists are trained to perform medication reviews and reconciliations. Alberta, Ontario, BC, and most other provinces fund the service publicly when you take three or more chronic medications. The pharmacist reviews everything you take — prescription, over-the-counter, and supplements — and identifies redundancies, drug interactions, expired prescriptions, and cheaper alternatives. They communicate recommendations directly to your physician. The review is free for eligible patients and frequently identifies CA$300 to CA$600 in annual savings on a typical chronic-medication regimen. Ask at any major pharmacy chain about the MedsCheck program (Ontario) or its provincial equivalent.",
      image: "/images/best-diabetes-doctor-in-edmonton/section-9.png",
      imageAlt: "Pharmacist medication review MedsCheck program Canada",
    },
    {
      title: "Strategy 12: New National Pharmacare — What's Coming in 2026",
      content:
        "The federal Pharmacare Act passed in 2024 begins phased implementation in 2026 with first-dollar coverage for select diabetes medications and contraceptives. The first phase includes insulin (all forms), metformin, sulfonylureas, several oral combination diabetes medications, and most prescription contraceptives. Provinces and territories must sign bilateral agreements to deliver the program. As of April 2026, Manitoba, BC, Yukon, and PEI have signed agreements. Negotiations continue with the remaining provinces. If you take any of the listed medications, register through your pharmacy once your province signs on — coverage is first-dollar with no deductible.",
      image: "/images/Group-37522.png",
      imageAlt: "National Pharmacare Act 2026 Canada diabetes contraception",
    },
    {
      title: "Strategy 13: Get Smarter Prescribing With a Virtual Doctor",
      content:
        "A short consultation with a Canadian-licensed physician focused on cost-conscious prescribing can transform your medication budget. Virtual physicians have time to review your full medication list, recommend therapeutic substitutions, switch to 90-day fills, identify generic options, suggest manufacturer assistance programs, and write requisitions for medication review with your pharmacist. TelePlus Care offers AHCIP-billed visits to Albertans and direct-pay consultations to non-residents — typically saving CA$300 to CA$1,500 a year on prescriptions for patients who book a comprehensive medication review. Same-day appointments are available.",
      image: "/images/Group-37520.png",
      imageAlt: "Virtual doctor cost-conscious prescribing TelePlus Care Canada",
    },
  ],
  faqs: [
    {
      question: "How much do Canadians actually spend on prescriptions per year?",
      answer:
        "The average is CA$1,055 per person per year according to CIHI's 2024 Prescribed Drug Spending in Canada report. Households with chronic disease often spend three to five times that amount. Out-of-pocket spending after insurance still averages roughly CA$450 per Canadian.",
    },
    {
      question: "Are generic drugs really as effective as brand name?",
      answer:
        "Yes. Health Canada requires generics to demonstrate bioequivalence — meaning the same active ingredient is absorbed at the same rate and reaches the same blood levels. Inactive ingredients can differ slightly, which rarely matters clinically. Generics are 60-80% cheaper.",
    },
    {
      question: "Is Costco Canada's pharmacy really open to non-members?",
      answer:
        "Yes. Federal and provincial regulations require pharmacies in Costco Canada to serve the general public regardless of membership. You can fill prescriptions, transfer existing ones, and receive medication advice without ever paying for a Costco membership.",
    },
    {
      question: "What's the difference between Trillium and OHIP+?",
      answer:
        "OHIP+ provides drug coverage for Ontarians under 25 without private insurance. The Trillium Drug Program covers Ontario residents of any age without private insurance whose household drug costs exceed approximately 4% of net income after a deductible. Both are administered through Ontario Drug Benefit.",
    },
    {
      question: "Can I import cheaper prescriptions from another country?",
      answer:
        "Personal importation is restricted under the Food and Drugs Act. There are narrow personal-use exceptions for limited supplies of certain medications when accompanied by a prescription, but this carries real legal and safety risks including counterfeit products. Use licensed Canadian pharmacies for safety.",
    },
    {
      question: "How do I claim prescription costs on my taxes?",
      answer:
        "Add up all unreimbursed prescription costs paid in the year, request a year-end medication summary from your pharmacy (every chain provides this), and enter the total on line 33099 of your T1. The credit applies to the portion above 3% of net income or CA$2,759, whichever is less.",
    },
    {
      question: "Will the new national Pharmacare cover all prescriptions in 2026?",
      answer:
        "No. Phase 1 covers select diabetes medications and contraceptives only. Future phases are planned for additional drug classes, but timing depends on federal-provincial agreements. Continue using your existing public and private coverage for medications outside the phase 1 list.",
    },
    {
      question: "Can a virtual doctor help me lower prescription costs?",
      answer:
        "Yes. Virtual physicians can switch you to generic equivalents, recommend therapeutic substitutions in the same drug class, write 90-day prescriptions, identify manufacturer assistance program candidates, and refer you for a pharmacist-led medication review. A single visit often pays for itself many times over.",
    },
  ],
  locations:
    "Alberta (Edmonton, Calgary, Red Deer, Lethbridge, Fort McMurray, Grande Prairie, Medicine Hat, Airdrie), British Columbia, Ontario, Saskatchewan, Manitoba, Quebec, Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward Island, and the territories.",
  lastReviewed: "2026-04-25",
  reviewedBy: "Dr. Maher Jerudi, MD",
};
