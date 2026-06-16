## Doel

Een nieuw project bouwen — **De Islamitische Erfeniswijzer** — dat de complete structuur, huisstijl en componenten van het bestaande "De Erfeniswijzer"-project hergebruikt, met aangepaste branding, teksten en beelden voor een islamitische doelgroep. Het originele project wordt niet aangeraakt.

## Aanpak

Aangezien een Lovable-chat altijd in één project werkt, kan dit huidige (lege TanStack Start) project gebruikt worden als doelproject. Ik kopieer alle relevante bronbestanden uit het Erfeniswijzer-project hierheen via cross-project tooling en pas vervolgens alle inhoudelijke wijzigingen toe.

> Let op: dit gebeurt binnen het huidige project. Als u liever een apart, los project hiervoor wilt aanmaken in plaats van de huidige sandbox te overschrijven, laat het me weten — dan moet u dat project eerst via de Lovable UI aanmaken en daar deze prompt opnieuw plaatsen.

## Stappen

### 1. Bronproject kopiëren
- Kopieer uit project `f8279d5b-d5a3-4892-a5bc-1f18ec4ec298`:
  - `src/styles.css` (tokens, kleuren — behouden zoals is)
  - `src/components/*` (Header, Footer, PageHeader, ContentHero, CtaSection, Reveal)
  - `src/routes/__root.tsx`, `index.tsx`, `hulp-bij-erfenis.tsx`, `bij-leven-regelen.tsx`, `kennisbank.tsx`, `over-ons.tsx`, `contact.tsx`
  - Eventuele relevante `src/lib`- en `src/assets`-bestanden die door componenten worden geïmporteerd
- Bestanden die niet nodig zijn voor de islamitische variant (`gratis-gids.tsx`, `bedankt.tsx`) worden overgeslagen of verwijderd uit de routes
- `package.json` afhankelijkheden die nog niet aanwezig zijn worden via `bun add` geïnstalleerd

### 2. Branding & navigatie
- Header / Footer / metadata: sitenaam → **De Islamitische Erfeniswijzer**, slogan → *"Uw gids bij nalatenschap volgens islamitisch erfrecht en Nederlands recht"*
- Contact e-mail → `info@islamitische-erfeniswijzer.nl`
- Navigatie labels: Home · Hulp bij erfenis (islamitisch) · Bij leven regelen · Kennisbank islamitisch erfrecht · Over ons · Contact
- Kleurenpalet (tokens in `src/styles.css`) ongewijzigd laten (teal/groen `#0A3D3A` blijft)

### 3. Afbeeldingen
- Vervang alle "mensen"-afbeeldingen door Unsplash-URLs (`https://source.unsplash.com/...`) met de opgegeven zoektermen:
  - Hero homepage: `muslim family smiling modern`
  - Vertrouwen/over ons: `muslim professional woman hijab` / `muslim man beard professional`
  - Kennisbank/sfeer: `mosque architecture detail`, `arabic calligraphy minimal`
- Bestaande lokale asset-imports vervangen door deze URL-strings (of de assets-imports verwijderen)

### 4. Pagina-inhoud herschrijven
Per route de Nederlandse content vervangen volgens uw briefing:
- **index.tsx**: hero-kop, intro, CTA "Ontdek uw mogelijkheden", drie informatieblokken (Islamitisch erfrecht in Nederland, Wat kunt u zelf regelen?, Geen verrassingen voor uw nabestaanden)
- **hulp-bij-erfenis.tsx**: H1 + intro + secties (fara'id, verhouding tot NL recht, geen testament, rol van notaris) + disclaimer per sectie
- **bij-leven-regelen.tsx**: H1 + intro met overlevering + secties (islamitisch testament, hiba, wasiyya, waqf)
- **kennisbank.tsx**: H1 + intro + 6 kaartartikelen (fara'id, erven als moslim in NL, islamitisch testament, wasiyya, hiba, islamitische begrafenis)
- **over-ons.tsx**: H1 + tekst volgens briefing
- **contact.tsx**: H1 + tekst + formulier (zelfde component, ander e-mailadres, disclaimer)
- Footer: nieuwe slogan + disclaimer onderaan

### 5. SEO per route
- `lang="nl"` op het html-element in `__root.tsx`
- Per route in `head()` unieke `title` + `description` + bijbehorende `og:title`/`og:description`/`og:url` + zelf-verwijzende `canonical` (relatief), volgens de opgegeven SEO-tabel
- `og:type: website` op root, geen `og:image` op root

### 6. Disclaimers
- Vaste disclaimer-tekst ("informatief, geen juridisch advies, raadpleeg een notaris") in een herbruikbaar component of als snippet onder relevante secties + in de footer

### 7. Routes opschonen
- `gratis-gids.tsx` en `bedankt.tsx` verwijderen (niet in nieuwe navigatie)
- `routeTree.gen.ts` wordt automatisch geregenereerd

## Technische details
- Stack: TanStack Start (al aanwezig) — niets aan de Vite-/router-bootstrap wijzigen
- Geen Lovable Cloud nodig (contactformulier kan voorlopig client-side of mailto blijven; als persistente opslag/e-mail gewenst is, laat het weten en dan voegen we Cloud + een server function toe)
- Tokens in `src/styles.css` blijven exact gelijk aan bronproject

## Open vraag
Wilt u het contactformulier echt werkend maken (e-mails laten verzenden / opslaan in een database)? Zo ja, dan schakel ik Lovable Cloud in en voeg een server function + Resend-integratie toe. Zo niet, dan blijft het formulier visueel hetzelfde maar zonder backend.
