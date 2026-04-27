import type { LandingPageData } from "@/types/landing-page";

export const pageData: LandingPageData = {
  metaTitle: "UTI Antibiotics in Canada: Which Work Best (2026 Guide)",
  metaDescription:
    "Compare first-line UTI antibiotics in Canada: nitrofurantoin (Macrobid), fosfomycin, Bactrim. Resistance, pregnancy safety, and when to escalate.",
  title: "UTI Antibiotics in Canada: Which Work Best (2026 Patient Guide)",
  heroDescription:
    "Choosing the right UTI antibiotics in Canada depends on your symptoms, medical history, local bacterial resistance, and whether your infection is uncomplicated or complicated. This 2026 patient guide explains the three first-line antibiotics Canadian physicians most commonly prescribe — nitrofurantoin (Macrobid), fosfomycin (Monurol), and trimethoprim-sulfamethoxazole (Bactrim/Septra) — alongside second-line options, pregnancy considerations, and red flags that mean an emergency department visit. All recommendations align with AMMI Canada and IDSA guidance and are reviewed by a CPSA-registered Alberta physician.",
  heroImage: "/images/urinary-tract-infection-treatments.jpg",
  heroImageAlt: "UTI antibiotics commonly prescribed in Canada",
  bookingUrl: "/book-appointment-alberta",
  conditionType: "Urinary Tract Infection",
  summary:
    "In Canada, the three first-line antibiotics for an uncomplicated UTI are nitrofurantoin (Macrobid) 100mg twice daily for five days, fosfomycin (Monurol) 3g as a single dose, and trimethoprim-sulfamethoxazole (Bactrim/Septra) DS twice daily for three days, per AMMI Canada and IDSA guidelines. Choice depends on local resistance, allergies, kidney function, and pregnancy status, and requires physician assessment.",
  keyFacts: [
    "First-line antibiotics for uncomplicated UTI in Canada per AMMI Canada / IDSA: nitrofurantoin (Macrobid) 100mg BID x 5 days, fosfomycin (Monurol) 3g single dose, TMP-SMX (Bactrim/Septra) DS BID x 3 days",
    "Local resistance patterns matter — TMP-SMX resistance >20% in many provinces; nitrofurantoin remains highly effective",
    "Most uncomplicated UTIs resolve within 24-48 hours of antibiotic start",
    "Recurrent UTI defined as 2 or more infections in 6 months or 3 or more in 12 months",
  ],
  sections: [
    {
      title: "What Is a UTI and Why Antibiotics Are the Standard Treatment",
      content:
        "A urinary tract infection (UTI) happens when bacteria — most commonly Escherichia coli from the bowel — climb the urethra and colonize the bladder. The bladder lining becomes inflamed, producing the burning, urgency, frequency, and pelvic pressure most patients recognize within hours of onset. Because UTIs are caused by bacteria, they require antibiotics to clear; hydration, cranberry products, and over-the-counter analgesics like phenazopyridine relieve symptoms but do not eradicate the infection.\n\nUntreated lower-tract UTIs can ascend the ureters and seed the kidneys, producing pyelonephritis — a more serious infection associated with fever, flank pain, nausea, and the risk of bacteremia. For this reason Canadian guidance from AMMI Canada (the Association of Medical Microbiology and Infectious Disease Canada) and the Infectious Diseases Society of America recommends prompt empiric antibiotic therapy for symptomatic UTIs, with antibiotic choice guided by patient factors and local resistance patterns. A physician assessment is required — antibiotics in Canada are prescription-only and self-treating with leftover or borrowed medication risks resistance and incomplete cure.",
      image: "/images/urinary-tract-infection-treatments.jpg",
      imageAlt: "How UTIs develop and why antibiotics are needed",
    },
    {
      title: "First-Line UTI Antibiotics in Canada: The Top Three",
      content:
        "AMMI Canada and IDSA guidelines name three first-line agents for uncomplicated cystitis (bladder infection) in non-pregnant women. Each has a distinct dosing schedule, side-effect profile, and best-fit patient. Your physician will recommend one based on your allergies, kidney function, prior antibiotic exposure, and whether you are pregnant or breastfeeding.",
      bullets: [
        "Nitrofurantoin (Macrobid, Macrodantin) — 100mg by mouth twice daily for 5 days. Highly active against E. coli with very low Canadian resistance. Concentrates in the bladder, so it is ideal for cystitis but not for kidney infection. Avoid if creatinine clearance is below approximately 30 mL/min.",
        "Fosfomycin (Monurol) — 3g sachet dissolved in water as a single dose. Useful when adherence is a concern or when a patient prefers one-and-done dosing. Effective against most multi-drug-resistant E. coli strains. Take on an empty stomach.",
        "Trimethoprim-sulfamethoxazole (Bactrim, Septra) DS — one double-strength tablet twice daily for 3 days. Effective and inexpensive, but only when local E. coli resistance to TMP-SMX is below 20 percent. Avoid in sulfa-allergic patients.",
      ],
      image: "/images/Group-37522.png",
      imageAlt: "First-line UTI antibiotics nitrofurantoin fosfomycin Bactrim",
    },
    {
      title: "When Each First-Line Antibiotic Is Preferred",
      content:
        "There is no single best antibiotic for UTI — there is a best antibiotic for your situation. Canadian physicians weigh several factors when picking among nitrofurantoin, fosfomycin, and TMP-SMX.",
      bullets: [
        "Choose nitrofurantoin (Macrobid) when: kidney function is normal, you are not allergic to nitrofurans, and the infection is confined to the bladder. It is also generally safe in the second trimester of pregnancy up to roughly 36 weeks.",
        "Choose fosfomycin (Monurol) when: you have a sulfa allergy, prefer single-dose therapy, have impaired kidney function where nitrofurantoin is contraindicated, or have a history of resistant E. coli.",
        "Choose TMP-SMX (Bactrim/Septra) when: you have not used it in the last 3 months, you are not in the first trimester of pregnancy or near term, you are not on warfarin or methotrexate, and your local resistance rate is acceptable.",
        "Consider a urine culture before treatment if: you have had a UTI in the last 3 months, you are pregnant, you are male, or symptoms have not improved on prior empiric therapy.",
      ],
      image: "/images/Rectangle-1090-3.png",
      imageAlt: "Choosing between Macrobid Monurol and Bactrim for UTI",
    },
    {
      title: "Second-Line UTI Antibiotics: Cephalosporins and Beyond",
      content:
        "When the three first-line agents are unsuitable — usually because of allergy, intolerance, prior resistant culture, or a complicated infection — physicians turn to a second tier. These drugs work, but they are less narrow-spectrum and carry more collateral damage to your gut microbiome.",
      bullets: [
        "Cephalexin (Keflex) — 500mg four times daily for 5-7 days. A common second-line choice in pregnancy and in patients with sulfa allergy. Generally well tolerated.",
        "Cefixime (Suprax) — 400mg once daily for 5-7 days. Convenient once-daily dosing; useful in selected complicated UTIs.",
        "Amoxicillin-clavulanate (Clavulin) — 500/125mg three times daily for 5-7 days. Reserved for culture-proven susceptible organisms because empiric resistance is rising.",
        "Ciprofloxacin or levofloxacin (fluoroquinolones) — now reserved for pyelonephritis or culture-confirmed resistant organisms because of significant side-effect concerns (see next section).",
      ],
      image: "/images/Rectangle-1090-7.png",
      imageAlt: "Second-line UTI antibiotics cephalosporins and Clavulin",
    },
    {
      title: "Why Fluoroquinolones (Cipro, Levaquin) Are Now Reserved",
      content:
        "For two decades ciprofloxacin was the workhorse of outpatient UTI treatment in Canada. That changed after Health Canada and the FDA issued repeated safety advisories. In 2017 Health Canada updated fluoroquinolone product monographs to warn of disabling and potentially permanent musculoskeletal and nervous-system side effects, including tendon rupture (especially Achilles), peripheral neuropathy, aortic aneurysm, prolonged QT interval, hypoglycemia, and serious mental-health effects such as anxiety, depression, and suicidal thoughts. AMMI Canada now recommends fluoroquinolones be reserved for situations where no alternative exists — primarily pyelonephritis, complicated UTI, prostatitis, and culture-proven resistance to first- and second-line agents.\n\nIf your physician prescribes a fluoroquinolone, it is because the benefit outweighs the risk for your specific infection. Patients should be counselled on warning signs (sudden tendon pain, new numbness or tingling, mood changes, palpitations) and contact their physician immediately if these develop. Older adults, patients on corticosteroids, and those with prior tendon disease are at highest risk.",
      image: "/images/Rectangle-1090-19.png",
      imageAlt: "Fluoroquinolone Cipro warnings tendon rupture Health Canada",
    },
    {
      title: "Antibiotic Resistance: Why Canadian Patterns Matter",
      content:
        "An antibiotic only works if your bacteria are still susceptible to it. Public Health Ontario, Alberta Precision Laboratories, BCCDC, and the Canadian Antimicrobial Resistance Surveillance System (CARSS) publish provincial antibiograms — local maps of which drugs still kill which bugs. Three patterns matter for outpatient UTI care across Canada in 2026.",
      bullets: [
        "TMP-SMX resistance — exceeds 20 percent in several provinces, which is the threshold above which guidelines advise against empiric use. This is why your physician may avoid Bactrim if your culture history shows prior resistance.",
        "Nitrofurantoin resistance — remains low (typically under 5 percent) for E. coli across Canada, which is why Macrobid has become the preferred first-line agent in most provinces.",
        "Fluoroquinolone resistance — has climbed steadily over the past decade, reinforcing the move to reserve these drugs.",
        "Extended-spectrum beta-lactamase (ESBL) producing E. coli — once rare in community UTIs, now increasingly seen, particularly in patients with recent travel, hospitalization, or repeated antibiotic exposure. ESBL strains often require fosfomycin, nitrofurantoin, or intravenous therapy.",
      ],
      image: "/images/PHOTO-2025-07-05-11-18-45-819x1024.jpg",
      imageAlt: "Canadian UTI antibiotic resistance patterns 2026",
    },
    {
      title: "UTI Antibiotics in Pregnancy: What Is Safe",
      content:
        "Pregnancy changes the calculus. UTIs in pregnancy — including asymptomatic bacteriuria — must be treated to prevent pyelonephritis, preterm labour, and low birth weight. But several common antibiotics are off-limits in specific trimesters. The safest options are typically discussed and confirmed with your maternity provider.",
      bullets: [
        "Cephalexin (Keflex) — generally considered safe throughout pregnancy and is a common first choice.",
        "Nitrofurantoin (Macrobid) — generally acceptable in the second trimester, but typically avoided in the first trimester due to limited safety data and avoided after roughly 36 weeks because of theoretical risk of neonatal hemolytic anemia.",
        "TMP-SMX (Bactrim) — avoided in the first trimester (folate antagonist, neural-tube risk) and near term (kernicterus risk in newborn).",
        "Fluoroquinolones (Cipro, Levaquin) — avoided in pregnancy and breastfeeding due to cartilage and tendon concerns in the developing fetus.",
        "Fosfomycin (Monurol) — single-dose option that is generally considered acceptable in pregnancy when first-line options are unsuitable.",
      ],
      image: "/images/ChatGPT-Image-Nov-3-2025-04_36_39-PM-1024x683.png",
      imageAlt: "Safe UTI antibiotics during pregnancy in Canada",
    },
    {
      title: "Complicated vs. Uncomplicated UTI: The Distinction That Drives Treatment",
      content:
        "An uncomplicated UTI is a bladder infection in an otherwise healthy, non-pregnant adult woman with a normal urinary tract. A complicated UTI is anything else, and complicated UTIs typically need a longer antibiotic course (often 7-14 days), a urine culture before treatment, and sometimes imaging.",
      bullets: [
        "Men with UTI — almost always considered complicated; rule out prostate involvement and structural problems. Treatment usually 7-14 days.",
        "Pregnancy — always treated, often with culture confirmation and follow-up culture to confirm cure.",
        "Pyelonephritis (kidney infection) — fever, flank pain, nausea, vomiting; longer course of oral antibiotics or initial IV therapy.",
        "Diabetes, immunosuppression, or chronic kidney disease — higher risk of complications and resistant organisms.",
        "Indwelling catheters, recent urological procedures, or known anatomical abnormalities — culture-guided therapy and longer treatment.",
        "Recurrent or relapsing infection within 2 weeks of finishing antibiotics — suggests treatment failure or resistant organism.",
      ],
      image: "/images/Rectangle-1090-3.png",
      imageAlt: "Complicated versus uncomplicated UTI treatment differences",
    },
    {
      title: "When IV Antibiotics Are Required",
      content:
        "Most UTIs respond to oral antibiotics taken at home. Intravenous (IV) therapy in a hospital becomes necessary when the infection has spread beyond the bladder, when the patient cannot keep oral medication down, or when sepsis is a concern. IV antibiotics commonly used in Canadian emergency departments and hospitals for severe UTI include ceftriaxone, piperacillin-tazobactam, gentamicin, and (for ESBL or carbapenem-resistant organisms) ertapenem or meropenem. Once the patient is stable and afebrile and oral intake is possible, treatment is usually stepped down to an oral antibiotic guided by the culture result. Conditions that typically warrant IV antibiotics include pyelonephritis with high fever or hemodynamic instability, suspected urosepsis, intractable vomiting, pregnancy with pyelonephritis, and immunocompromised patients with febrile UTI. These situations require an in-person emergency department evaluation rather than virtual care.",
      image: "/images/Rectangle-1090-7.png",
      imageAlt: "IV antibiotics for severe UTI and pyelonephritis",
    },
    {
      title: "UTI Not Getting Better — What to Do",
      content:
        "Most uncomplicated UTIs improve dramatically within 24-48 hours of starting an effective antibiotic. If you are 48-72 hours into treatment and symptoms have not eased, do not just wait it out. Several things can be going wrong, and each has a different next step.",
      bullets: [
        "Resistant organism — the empiric antibiotic does not cover your specific bacteria. A urine culture with sensitivities will identify what will work.",
        "Wrong diagnosis — interstitial cystitis, overactive bladder, vaginitis, sexually transmitted infection, or kidney stones can mimic UTI. A re-assessment is needed.",
        "Pyelonephritis developing — new fever, flank pain, nausea, or vomiting means the infection has reached the kidneys and you need urgent in-person care.",
        "Inadequate antibiotic concentration — for example, nitrofurantoin in a patient whose kidney function does not allow it to reach therapeutic bladder levels.",
        "Adherence or absorption issue — missed doses, vomiting after the dose, or interactions with antacids or supplements can blunt the antibiotic effect.",
      ],
      image: "/images/Rectangle-1090-19.png",
      imageAlt: "What to do when UTI antibiotics are not working",
    },
    {
      title: "Recurrent UTI Prevention: What the Evidence Supports in 2026",
      content:
        "Recurrent UTI is defined as two or more infections in six months or three or more in twelve months. Prevention is built in layers, starting with the lowest-risk options and escalating only if needed. Discuss any new supplement or prophylactic antibiotic with your physician — interactions and contraindications matter.",
      bullets: [
        "Hydration and post-coital voiding — simple, free, and supported by observational evidence.",
        "D-mannose — a sugar that prevents E. coli adhesion. Several randomized trials suggest a modest preventive effect, with a strong safety profile. Typical dose 2g daily.",
        "Cranberry products — proanthocyanidin-standardized cranberry extracts have moderate evidence for prevention; cranberry juice itself is less reliable due to variable concentration.",
        "Vaginal estrogen — for postmenopausal women, topical vaginal estrogen restores the urogenital microbiome and significantly reduces recurrence; available by prescription as creams, tablets, or rings.",
        "Methenamine hippurate — a urinary antiseptic that converts to formaldehyde in acidic urine. The 2022 ALTAR trial showed it was non-inferior to daily prophylactic antibiotics for recurrent UTI prevention.",
        "Prophylactic antibiotics — daily low-dose nitrofurantoin or TMP-SMX, or post-coital single-dose prophylaxis, are options for women with frequent recurrences after non-antibiotic strategies have been tried.",
      ],
      image: "/images/Group-37522.png",
      imageAlt: "Recurrent UTI prevention strategies cranberry D-mannose vaginal estrogen",
    },
    {
      title: "The TelePlus Care Virtual UTI Consultation Process",
      content:
        "Most uncomplicated UTIs in non-pregnant adult women can be safely diagnosed and treated through a virtual visit. Here is what to expect when you book with TelePlus Care. All physicians are registered with the College of Physicians and Surgeons of Alberta (CPSA).",
      bullets: [
        "Step 1 — Intake: complete a secure symptom questionnaire covering onset, severity, prior UTIs, allergies, current medications, pregnancy status, and red-flag features.",
        "Step 2 — Physician assessment: a CPSA-registered Alberta physician reviews your intake and connects with you by video or phone for a 15-20 minute consultation.",
        "Step 3 — Diagnosis: most uncomplicated UTIs are diagnosed clinically. If a urine culture is needed (recent UTI, prior resistance, treatment failure, pregnancy, male patient), the physician sends a requisition to a DynaLIFE collection site.",
        "Step 4 — Prescription: the physician issues an antibiotic prescription, which you fill at any Canadian pharmacy of your choice — Shoppers Drug Mart, Rexall, Save-On-Foods, Loblaws, or your local independent.",
        "Step 5 — Escalation when needed: if red flags or complicated features are identified, the physician will direct you to an in-person clinic, urgent care, or emergency department rather than treating virtually.",
        "Step 6 — Follow-up: a message-based check-in 48-72 hours after treatment confirms symptom resolution and addresses any concerns.",
      ],
      image: "/images/ChatGPT-Image-Nov-3-2025-04_36_39-PM-1024x683.png",
      imageAlt: "Virtual UTI consultation process with TelePlus Care",
    },
    {
      title: "Red Flags That Mean Emergency Care, Not Virtual Care",
      content:
        "Virtual UTI care is appropriate for the majority of uncomplicated bladder infections. It is not appropriate when systemic illness or complications are suspected. Go to an emergency department or urgent care immediately if you have any of the following.",
      bullets: [
        "Fever above 38.5 C with shaking chills (rigors) — concern for pyelonephritis or bacteremia.",
        "Severe one-sided flank or mid-back pain — possible kidney infection or kidney stone.",
        "Persistent vomiting that prevents you from keeping oral fluids or medication down.",
        "Pregnancy with any UTI symptoms — needs urgent assessment and possibly culture.",
        "Confusion, lightheadedness, fast heart rate, or low blood pressure — possible urosepsis.",
        "Symptoms not improving after 48 hours of antibiotics, or rapidly worsening.",
        "Visible blood clots in urine, or inability to urinate.",
      ],
      image: "/images/PHOTO-2025-07-05-11-18-45-819x1024.jpg",
      imageAlt: "UTI red flags requiring emergency department visit",
    },
  ],
  faqs: [
    {
      question: "What's the strongest antibiotic for a UTI?",
      answer:
        "There is no single 'strongest' antibiotic — the right antibiotic is the one your specific bacteria are still sensitive to and that is safe for your medical history. In Canada the three first-line agents per AMMI Canada are nitrofurantoin (Macrobid), fosfomycin (Monurol), and trimethoprim-sulfamethoxazole (Bactrim/Septra). For complicated infections like pyelonephritis, broader-spectrum antibiotics such as ceftriaxone or selected fluoroquinolones may be needed. A physician chooses based on your symptoms, allergies, kidney function, prior cultures, and local resistance.",
    },
    {
      question: "How long do UTI antibiotics take to work?",
      answer:
        "Most uncomplicated UTIs improve significantly within 24-48 hours of starting an effective antibiotic. Burning and urgency typically ease first, with full symptom resolution by day 3-5. If you are not noticeably better at the 48-hour mark, contact your physician — this can signal a resistant organism, an alternative diagnosis, or a more complicated infection. Always finish the full course your physician prescribed, even if you feel completely better, to reduce relapse and resistance.",
    },
    {
      question: "Can I get UTI antibiotics without a doctor visit?",
      answer:
        "No. Antibiotics in Canada are prescription-only and require a physician (or authorized prescriber) to assess your symptoms, allergies, and medical history. TelePlus Care provides virtual visits with CPSA-registered Alberta physicians who can issue a prescription you fill at any pharmacy. The visit itself is the medical assessment — it is not e-prescribing or skipping the doctor; it is a real consultation conducted by video or phone.",
    },
    {
      question: "Is Macrobid safe for older adults?",
      answer:
        "Nitrofurantoin (Macrobid) can be used in older adults with normal kidney function, but it is generally avoided when creatinine clearance falls below approximately 30 mL/min because the drug cannot reach therapeutic concentrations in the bladder and the risk of pulmonary and neurological side effects rises. The Beers Criteria flag long-term nitrofurantoin use in older adults as potentially inappropriate. Your physician will check kidney function and prior tolerance before prescribing.",
    },
    {
      question: "What if I'm allergic to sulfa antibiotics?",
      answer:
        "If you have a documented sulfa allergy, your physician will avoid trimethoprim-sulfamethoxazole (Bactrim/Septra). Excellent alternatives include nitrofurantoin (Macrobid), fosfomycin (Monurol), and cephalosporins such as cephalexin (Keflex). Always tell your physician the nature of your sulfa reaction (rash versus anaphylaxis) — this affects which alternatives are safest.",
    },
    {
      question: "Do UTI antibiotics interact with birth control?",
      answer:
        "Most UTI antibiotics — including nitrofurantoin, fosfomycin, TMP-SMX, and cephalexin — do not meaningfully reduce the efficacy of combined hormonal contraceptives. Rifampin is the main antibiotic that does, and it is not used for UTIs. That said, if vomiting or diarrhea occur during your antibiotic course, hormonal contraceptive absorption can be affected. Many clinicians suggest using a backup method during the course and for 7 days after as a precaution. Discuss any concerns with your prescribing physician.",
    },
    {
      question: "How much do UTI antibiotics cost in Canada?",
      answer:
        "First-line UTI antibiotics are inexpensive generics. A 5-day course of nitrofurantoin (Macrobid) typically costs roughly $15-25 out of pocket; a single 3g sachet of fosfomycin (Monurol) is usually $25-40; a 3-day course of TMP-SMX (Bactrim/Septra) is often under $15. Most provincial drug plans and private insurance cover these. Costs vary by pharmacy, province, and dispensing fee.",
    },
    {
      question: "Can men get UTIs?",
      answer:
        "Yes. UTIs are less common in men because of the longer male urethra, but they do occur — particularly with prostate enlargement, urinary catheters, or kidney stones. UTIs in men are considered complicated, usually warrant a urine culture, often involve the prostate, and typically require a longer antibiotic course (commonly 7-14 days). Recurrent UTIs in men should prompt urology referral to rule out structural causes.",
    },
    {
      question: "Should I take probiotics with UTI antibiotics?",
      answer:
        "Probiotics are reasonable to consider during and after a UTI antibiotic course to support gut and vaginal microbiome recovery and reduce the risk of antibiotic-associated diarrhea or yeast infection. Evidence for direct UTI prevention from probiotics is mixed but generally favourable for Lactobacillus-containing products in postmenopausal women. Take probiotics 2-3 hours apart from the antibiotic dose. Always discuss new supplements with your physician, especially if you are immunocompromised.",
    },
  ],
  locations:
    "All Canadian provinces and territories where TelePlus Care is licensed to deliver virtual care, including Alberta, British Columbia, Saskatchewan, Manitoba, Ontario, Quebec, New Brunswick, Nova Scotia, Prince Edward Island, Newfoundland and Labrador.",
  lastReviewed: "2026-04-26",
  reviewedBy: "Dr. Maher Jerudi, MD",
};
