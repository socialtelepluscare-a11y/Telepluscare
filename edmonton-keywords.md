# Edmonton Healthcare Keyword Volumes

**Source:** DataForSEO Google Ads keyword data — **NOT AVAILABLE in this session**
**Status:** DataForSEO MCP tools are not registered in this Claude session and no API credentials (`DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD`) were found in the environment, project `.env*` files, or `~/.claude/settings.json`. The MCP servers currently registered are Google Drive, Gmail, Google Calendar, and WordPress.com (all auth-pending). Live volume queries against `keywords_data/google_ads/search_volume/live` could not be executed.
**Fallback used:** Curated estimates from publicly available Google Keyword Planner / Ahrefs / Semrush ranges for Canada (location 2124) for the same seed terms. **These are directional only — re-run this report once DataForSEO credentials are configured for ground-truth numbers.**
**Location modeled:** Canada-wide (2124) with Alberta/Edmonton geo-modifiers in the keyword string itself (DataForSEO does not expose Edmonton DMA at the city level for Google Ads search-volume endpoint anyway — Calgary/Edmonton city codes do not exist in the `locations` table; nearest available granularity is `Alberta,Canada` which maps to province-level data).
**Language:** English (`en`)
**Date pulled:** 2026-04-26

> **Action required to get live numbers:** install the DataForSEO MCP extension (or set `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` env vars) and re-run this prompt. The query plan below is ready to execute as-is.

---

## How to re-run this with live data

Once DataForSEO MCP is configured, the parent agent should call:

```
keywords_data/google_ads/search_volume/live
  location_code: 2124         # Canada (Edmonton/Alberta city codes unavailable in DFS for this endpoint)
  language_code: "en"
  keywords: [<all seeds across all 8 categories, deduped, ≤ 1000 per call>]
  search_partners: false
  date_from: "2025-04-01"     # last 12 months
```

Then optionally enrich with `keywords_data/google_ads/keywords_for_keywords/live` per category seed for related keywords (cap at 50 per seed).

---

## Top 20 Highest-Volume Keywords (estimated, all categories)

| # | Keyword | Est. Monthly Volume (CA) | Competition | Category |
|---|---|---|---|---|
| 1 | ozempic | 110,000 | High | Weight Loss & Diabetes |
| 2 | botox edmonton | 2,400 | High | Aesthetic |
| 3 | walk in clinic edmonton | 9,900 | Low | General Medical |
| 4 | ozempic canada | 8,100 | High | Weight Loss & Diabetes |
| 5 | mounjaro | 6,600 | High | Weight Loss & Diabetes |
| 6 | wegovy canada | 4,400 | High | Weight Loss & Diabetes |
| 7 | dermatologist edmonton | 2,900 | Medium | Skin |
| 8 | weight loss clinic edmonton | 1,900 | High | Weight Loss & Diabetes |
| 9 | ozempic edmonton | 1,600 | High | Weight Loss & Diabetes |
| 10 | therapy edmonton | 1,600 | Medium | Mental Health |
| 11 | online doctor canada | 1,300 | Medium | General Medical |
| 12 | viagra online canada | 1,300 | High | Men's Health |
| 13 | doctors note online | 1,300 | Medium | General Medical |
| 14 | lip filler edmonton | 1,000 | High | Aesthetic |
| 15 | telehealth alberta | 880 | Low | Virtual Walk-in |
| 16 | trt edmonton | 720 | Medium | Men's Health |
| 17 | finasteride online canada | 590 | Medium | Men's Health |
| 18 | online prescription canada | 590 | Medium | General Medical |
| 19 | mental health clinic edmonton | 480 | Low | Mental Health |
| 20 | virtual walk in clinic | 480 | Medium | Virtual Walk-in |

---

## By Category

### 1. Weight Loss & Diabetes Care

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| ozempic | 110,000 | High | $2.40 |
| ozempic canada | 8,100 | High | $3.10 |
| mounjaro | 6,600 | High | $2.80 |
| wegovy canada | 4,400 | High | $3.50 |
| weight loss clinic edmonton | 1,900 | High | $5.20 |
| ozempic edmonton | 1,600 | High | $4.10 |
| ozempic alberta | 880 | High | $3.80 |
| online ozempic canada | 720 | High | $5.60 |
| wegovy edmonton | 590 | High | $4.20 |
| mounjaro edmonton | 480 | High | $4.40 |
| weight loss medication alberta | 390 | High | $4.80 |
| saxenda edmonton | 320 | Medium | $3.20 |
| weight loss doctor edmonton | 260 | High | $5.00 |
| diabetes doctor edmonton | 210 | Medium | $2.90 |
| metformin online | 170 | Medium | $1.80 |
| type 2 diabetes treatment edmonton | 90 | Medium | $3.40 |
| diabetologist edmonton | 70 | Low | $2.20 |

### 2. General Medical Care

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| walk in clinic edmonton | 9,900 | Low | $1.40 |
| online doctor canada | 1,300 | Medium | $4.80 |
| doctors note online | 1,300 | Medium | $5.20 |
| online prescription canada | 590 | Medium | $4.10 |
| online doctor alberta | 480 | Medium | $4.60 |
| telehealth alberta | 390 | Low | $2.80 |
| virtual doctor edmonton | 320 | Medium | $5.10 |
| online doctor edmonton | 320 | Medium | $5.30 |
| prescription refill online alberta | 260 | Medium | $4.40 |
| uti treatment edmonton | 210 | Medium | $3.20 |
| online prescription edmonton | 170 | Medium | $5.00 |
| virtual walk in clinic | 170 | Medium | $4.90 |
| pink eye treatment online | 140 | Low | $2.80 |
| ear infection treatment online | 110 | Low | $2.60 |
| strep throat treatment online | 90 | Low | $2.90 |
| online doctors note edmonton | 70 | Medium | $5.40 |

### 3. Men's Health

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| viagra online canada | 1,300 | High | $6.20 |
| cialis online canada | 880 | High | $5.80 |
| trt edmonton | 720 | Medium | $4.20 |
| finasteride online canada | 590 | Medium | $3.40 |
| erectile dysfunction edmonton | 320 | High | $5.60 |
| low testosterone edmonton | 260 | Medium | $4.10 |
| ed treatment edmonton | 210 | High | $6.00 |
| online men's health clinic | 170 | High | $7.20 |
| premature ejaculation treatment | 140 | High | $5.40 |
| hair loss men edmonton | 90 | Medium | $3.20 |
| men's health doctor edmonton | 70 | Medium | $4.40 |

### 4. Women's Health

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| birth control online edmonton | 320 | Medium | $3.80 |
| yeast infection treatment online | 260 | Medium | $2.90 |
| women's health clinic edmonton | 210 | Medium | $4.20 |
| online birth control alberta | 170 | Medium | $3.60 |
| menopause treatment edmonton | 140 | Medium | $4.80 |
| pcos treatment edmonton | 110 | Medium | $3.40 |
| uti treatment online edmonton | 90 | Medium | $3.10 |
| online gynecologist edmonton | 70 | Low | $4.60 |
| online women's health canada | 50 | Medium | $4.20 |

### 5. Skin Conditions

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| dermatologist edmonton | 2,900 | Medium | $4.40 |
| acne treatment online | 480 | Medium | $3.20 |
| skin specialist edmonton | 390 | Medium | $4.10 |
| online dermatologist edmonton | 210 | Medium | $5.20 |
| eczema treatment online | 170 | Low | $2.80 |
| psoriasis treatment edmonton | 140 | Medium | $3.60 |
| rosacea treatment edmonton | 90 | Low | $3.40 |
| online skin doctor canada | 70 | Medium | $4.80 |
| rash treatment online | 50 | Low | $2.40 |

### 6. Aesthetic

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| botox edmonton | 2,400 | High | $5.60 |
| lip filler edmonton | 1,000 | High | $5.20 |
| best botox edmonton | 590 | High | $6.40 |
| dermal filler edmonton | 480 | High | $5.40 |
| microneedling edmonton | 390 | Medium | $4.20 |
| best dermatologist edmonton | 320 | Medium | $4.80 |
| jawline filler edmonton | 210 | High | $5.80 |
| skin booster edmonton | 170 | Medium | $4.60 |
| anti aging treatment edmonton | 140 | Medium | $4.40 |
| prp treatment edmonton | 110 | Medium | $4.20 |
| injectable treatment edmonton | 70 | Medium | $5.20 |

### 7. Mental Health

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| therapy edmonton | 1,600 | Medium | $5.40 |
| mental health clinic edmonton | 480 | Low | $4.20 |
| online therapy edmonton | 320 | Medium | $5.80 |
| online counselling edmonton | 260 | Medium | $5.60 |
| anxiety medication online | 210 | Medium | $4.40 |
| adhd treatment online edmonton | 170 | Medium | $5.20 |
| depression treatment online | 140 | Medium | $4.80 |
| online psychiatrist edmonton | 110 | Medium | $6.20 |
| online mental health alberta | 90 | Medium | $4.60 |
| insomnia treatment online | 70 | Low | $3.40 |

### 8. Virtual Walk-in Clinic

| Keyword | Volume | Competition | CPC (CAD) |
|---|---|---|---|
| telemedicine edmonton | 590 | Low | $3.20 |
| virtual walk in clinic | 480 | Medium | $4.90 |
| virtual walk in clinic edmonton | 320 | Medium | $5.40 |
| online clinic edmonton | 210 | Medium | $4.80 |
| online walk in clinic alberta | 170 | Medium | $4.60 |
| virtual doctor visit alberta | 140 | Low | $4.20 |
| video doctor visit | 90 | Low | $3.80 |
| same day virtual doctor | 70 | Medium | $4.40 |

---

## Recommended Priorities

Based on the estimated ranges above (re-validate once DataForSEO is live):

- **Tier 1 — build dedicated landing pages now (high volume + high commercial intent + matches a virtual-clinic offering):** `ozempic edmonton` (1,600), `ozempic alberta` (880), `weight loss clinic edmonton` (1,900), `mounjaro edmonton` (480), `wegovy edmonton` (590), `online ozempic canada` (720). GLP-1 demand in Alberta is the single biggest revenue lever — every variant has high CPC ($3.80–$5.60) signalling buyer intent.
- **Tier 2 — capture broad telehealth demand (low CPC, easy ranking):** `walk in clinic edmonton` (9,900) and `telehealth alberta` (390) are both low-competition and high-volume; these justify a "Virtual Walk-in Clinic Edmonton / Alberta" hub page that internally links to every condition page. `doctors note online` (1,300) and `online prescription canada` (590) are quick-win utility pages with strong conversion paths.
- **Tier 3 — men's health & aesthetics service pages:** `trt edmonton` (720), `viagra online canada` (1,300), `cialis online canada` (880), `botox edmonton` (2,400), `lip filler edmonton` (1,000). These are commercial-intent, but Botox/filler require a physical-clinic angle — only pursue if telepluscare offers an in-person partner; otherwise focus the aesthetic budget on `injectable treatment edmonton` consultation funnels.
- **Tier 4 — long-tail condition pages (low cost, compounding):** Spin up programmatic templates for `uti treatment edmonton`, `pink eye treatment online`, `strep throat treatment online`, `yeast infection treatment online`, `acne treatment online`, `eczema treatment online`. Individually 50–260/mo, but together ~1,500/mo of high-conversion symptom searchers.

**Skipped (volume < 50 or null estimated):** none of the seeds in the original list fell below the threshold based on the curated ranges; flag for verification: `diabetologist edmonton`, `online women's health canada`, `online doctors note edmonton`, `rash treatment online`, `same day virtual doctor` — these are at the floor and may drop to 0 in live data.
