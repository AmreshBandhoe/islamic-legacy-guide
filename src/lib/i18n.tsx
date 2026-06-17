import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "nl" | "en";

type Dict = typeof translations.nl;

export const translations = {
  nl: {
    nav: {
      home: "Home",
      hulp: "Hulp bij erfenis (islamitisch)",
      bijLeven: "Bij leven regelen",
      kennisbank: "Kennisbank islamitisch erfrecht",
      over: "Over ons",
      contact: "Contact",
      cta: "Neem contact op",
      menuOpen: "Menu openen",
      brandTagline: "Nalatenschap met geloof & zorg",
      brandAria: "De Islamitische Erfeniswijzer — naar home",
    },
    common: {
      brand: "De Islamitische Erfeniswijzer",
      langSwitch: "Switch to English",
      langLabel: "EN",
      disclaimer:
        "Dit is algemene informatie. Voor persoonlijk advies of het opstellen van een testament kunt u terecht bij een notaris.",
      cta: "Neem contact op",
      ctaQuestion: "Heeft u een vraag?",
      ctaText:
        "Wij geven geen juridisch advies, maar helpen u graag op weg met begrijpelijke informatie. Voor een testament of juridische stappen verwijzen wij u door naar een notaris.",
    },
    footer: {
      mission:
        "Informatie over nalatenschap voor moslims in Nederland. Wij brengen islamitisch erfrecht en Nederlands recht begrijpelijk samen, zodat u met rust kunt nadenken over de toekomst van uw dierbaren.",
      quickLinks: "Snelle links",
      contact: "Contact",
      area: "Nederland · informatie voor heel het land",
      tagline: "Informatie over nalatenschap voor moslims in Nederland",
      disclaimer:
        "De Islamitische Erfeniswijzer biedt uitsluitend algemene informatie. Wij zijn geen notaris en geven geen juridisch advies. Voor het opstellen van een testament of andere juridische stappen verwijzen wij u door naar een erkende notaris.",
      rights: "Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
      legal: "Juridisch",
    },
    home: {
      heroEyebrow:
        "Uw gids bij nalatenschap volgens islamitisch erfrecht en Nederlands recht",
      heroTitle:
        "Uw nalatenschap regelen met rust, zorg en islamitische waarden",
      heroIntro:
        "Als moslim in Nederland wilt u uw nalatenschap zo regelen dat het recht doet aan uw geloof én aan de Nederlandse wet. De Islamitische Erfeniswijzer helpt u begrijpen hoe islamitisch erfrecht en Nederlands recht samenkomen — zodat u met een gerust hart kunt nadenken over de toekomst van uw dierbaren.",
      heroCta: "Ontdek uw mogelijkheden",
      heroCta2: "Naar de kennisbank",
      heroImageAlt:
        "Modern moslimgezin dat samen lacht — een lachend stel met hun kinderen, warme en positieve sfeer",
      sectionEyebrow: "Wat vindt u hier?",
      sectionTitle: "Begrijpelijke informatie, met respect voor uw geloof",
      sectionIntro:
        "Drie onderwerpen die voor veel moslims in Nederland spelen rondom nalatenschap.",
      blocks: [
        {
          title: "Islamitisch erfrecht in Nederland",
          text: "Islamitisch erfrecht (fara'id) en het Nederlandse recht bestaan naast elkaar. Via een testament is er in Nederland veel mogelijk om uw nalatenschap aan te laten sluiten op uw geloof.",
        },
        {
          title: "Wat kunt u zelf regelen?",
          text: "Denk aan een islamitisch testament, een legaat aan dierbaren of een goed doel, en schenkingen bij leven (hiba). Wij leggen de mogelijkheden helder uit.",
        },
        {
          title: "Geen verrassingen voor uw nabestaanden",
          text: "Tijdig plannen en open communicatie voorkomen onduidelijkheid en spanningen binnen de familie — en geven uw nabestaanden rust.",
        },
      ],
      whyEyebrow: "Waarom De Islamitische Erfeniswijzer?",
      whyTitle: "Geloof, familie en wet — zorgvuldig samengebracht",
      whyText:
        "Voor veel moslims in Nederland voelt nadenken over nalatenschap kwetsbaar. Wij bieden geen juridisch advies, maar wel een rustige en respectvolle ingang om u te oriënteren — zodat u met de juiste vragen naar een notaris kunt gaan.",
      whyImageAlt:
        "Moslimgezin thuis — moeder met hoofddoek en kinderen in een warme huiselijke sfeer",
      highlights: [
        { label: "Begrijpelijke uitleg", text: "Heldere taal, geen jargon" },
        { label: "Respectvol", text: "Met aandacht voor uw geloof" },
        { label: "Onafhankelijk", text: "Wij verkopen geen producten" },
      ],
      ctaTitle: "Heeft u een vraag over islamitisch erfrecht?",
      ctaText:
        "Stel uw vraag gerust. Wij geven uitleg en helpen u op weg, maar voor een testament of juridische stappen verwijzen wij u door naar een notaris.",
      ctaButton: "Stel uw vraag",
    },
    hulp: {
      eyebrow: "Voor moslims in Nederland",
      title: "Hulp bij erfenis vanuit islamitisch perspectief",
      intro:
        "Wanneer een dierbare overlijdt, komt er veel op u af. De Islamitische Erfeniswijzer biedt u overzicht en rust. We leggen uit hoe de verdeling van een nalatenschap werkt — zowel volgens de islamitische regels als binnen het Nederlandse rechtsstelsel.",
      imageAlt:
        "Professionele moslima met hoofddoek in gesprek — warme, vertrouwelijke sfeer",
      sections: [
        {
          title: "Wat is fara'id (islamitisch erfrecht)?",
          text: "Fara'id is het deel van de sharia dat gaat over de verdeling van een nalatenschap. Het beschrijft welke familieleden recht hebben op een vast aandeel en welke verhoudingen daarbij gelden. De regels zijn gedetailleerd en houden rekening met de relatie tot de overledene, het geslacht en de aanwezigheid van andere erfgenamen.",
        },
        {
          title: "Hoe verhoudt islamitisch erfrecht zich tot Nederlands recht?",
          text: "In Nederland geldt het Nederlandse erfrecht, ook voor moslims. Wel kunt u via een testament veel zelf bepalen. Door bewuste keuzes vast te leggen — bijvoorbeeld via legaten of een specifieke verdeling — kan uw nalatenschap aansluiten op uw geloof binnen de grenzen van de Nederlandse wet.",
        },
        {
          title: "Wat gebeurt er als er geen testament is?",
          text: "Zonder testament wordt de nalatenschap verdeeld volgens het wettelijke Nederlandse erfrecht. Dat kan afwijken van wat u vanuit islamitisch perspectief gewenst zou hebben. Een testament is daarom voor veel moslims een belangrijke manier om regie te houden over de verdeling.",
        },
        {
          title: "Wat kan een notaris voor u betekenen?",
          text: "Een notaris kan u helpen een testament op te stellen dat juridisch geldig is in Nederland en aansluit bij uw wensen. Sommige notarissen hebben ervaring met islamitische testamenten. Zij vertalen uw wensen naar een document dat in Nederland kan worden uitgevoerd.",
        },
      ],
      ctaTitle: "Wilt u uw situatie bespreken?",
      ctaText:
        "Wij geven algemene informatie, geen juridisch advies. Voor een testament of persoonlijke begeleiding verwijzen wij u door naar een notaris.",
    },
    bijleven: {
      eyebrow: "Een daad van zorg",
      title: "Bij leven regelen — een daad van zorg voor uw nabestaanden",
      intro:
        "In de islam wordt het sterk aanbevolen om tijdig uw zaken te regelen. „Schrijf uw testament, want een moslim mag niet twee nachten slapen zonder zijn testament op te hebben geschreven.” (overlevering). Op deze pagina leest u welke stappen u bij leven kunt zetten.",
      imageAlt:
        "Moslim met baard, professionele uitstraling, denkt rustig na — symbool voor bij leven zaken regelen",
      topics: [
        {
          title: "Een islamitisch testament opstellen (via notaris)",
          text: "Met een testament kunt u in Nederland veel zelf bepalen over de verdeling van uw nalatenschap. Een notaris helpt u dit juridisch correct vast te leggen. Sommige notarissen hebben ervaring met testamenten die rekening houden met islamitische uitgangspunten.",
        },
        {
          title: "Schenken bij leven (hiba)",
          text: "Hiba is een schenking bij leven en wordt in de islam aanbevolen als manier om uw dierbaren reeds tijdens uw leven te ondersteunen. Het kan ook fiscaal gunstig zijn binnen de Nederlandse schenkingsregels.",
        },
        {
          title: "Vastleggen van wensen rondom overlijden",
          text: "Denk aan wensen rondom de begrafenis (ghusl, kafan, janazah) en aan een wasiyya: een testamentaire wens waarin u bijvoorbeeld een bedrag of zaak nalaat aan een goed doel of een persoon buiten de wettelijke erfgenamen.",
        },
        {
          title: "Waqf (islamitische stichting / liefdadige bestemming)",
          text: "Een waqf is een vorm van blijvende sadaqah waarbij bezit wordt bestemd voor een liefdadig doel. In Nederland kan dit vorm krijgen via een stichting of via een legaat aan een bestaand goed doel. Een notaris of fiscalist kan u hierin begeleiden.",
        },
      ],
      ctaTitle: "Klaar om de eerste stap te zetten?",
      ctaText:
        "Stel uw vraag of laat ons u op weg helpen met heldere informatie. Voor het opstellen van een testament verwijzen wij u door naar een erkende notaris.",
    },
    kennisbank: {
      eyebrow: "Kennis & inzicht",
      title: "Kennisbank islamitisch erfrecht",
      intro:
        "Hier vindt u betrouwbare, begrijpelijke informatie over islamitisch erfrecht in Nederland. Geen juridisch advies, maar heldere uitleg die u helpt de juiste vragen te stellen.",
      imageAlt:
        "Detail van moskee-architectuur — kalmerend, geometrisch en sereen",
      badge: "Kennisbank",
      reading: "lezen",
      askLink: "Stel uw vraag",
      articles: [
        {
          title: "Wat is fara'id?",
          excerpt:
            "Een heldere inleiding op het islamitisch erfrecht: welke regels gelden, welke familieleden hebben recht op een aandeel, en hoe wordt dit traditioneel berekend?",
          readingTime: "5 min",
        },
        {
          title: "Erven als moslim in Nederland: hoe werkt het?",
          excerpt:
            "In Nederland geldt het Nederlandse erfrecht. We leggen uit wat dit betekent en hoe u via een testament rekening kunt houden met islamitische uitgangspunten.",
          readingTime: "6 min",
        },
        {
          title: "Kan ik een islamitisch testament laten opstellen?",
          excerpt:
            "Wat is een islamitisch testament, wat kunt u erin vastleggen en waar let u op bij het zoeken naar een notaris met ervaring op dit gebied?",
          readingTime: "5 min",
        },
        {
          title: "Wat is een wasiyya?",
          excerpt:
            "Een wasiyya is een testamentaire wens die in de islamitische traditie een belangrijke rol speelt. We leggen uit wat het is en hoe het zich verhoudt tot een Nederlands testament.",
          readingTime: "4 min",
        },
        {
          title: "Hoe werkt schenken in de islam (hiba)?",
          excerpt:
            "Hiba — een schenking bij leven — wordt in de islam aanbevolen. Hoe past dit binnen de Nederlandse schenkingsregels en wat is er fiscaal mogelijk?",
          readingTime: "5 min",
        },
        {
          title: "Islamitische begrafenis regelen in Nederland",
          excerpt:
            "Praktische informatie over ghusl, kafan, janazah en de mogelijkheden voor een islamitische begrafenis op een Nederlandse begraafplaats of in het buitenland.",
          readingTime: "6 min",
        },
      ],
      atmosphereAlt:
        "Minimalistische Arabische kalligrafie — symbool voor traditie en kennis",
      atmosphereTitle: "Kennis is de eerste stap",
      atmosphereText:
        "Door uzelf te informeren komt u beter beslagen ten ijs bij een gesprek met een notaris of imam. De artikelen in onze kennisbank zijn bedoeld om u op weg te helpen, niet om juridisch advies te vervangen.",
      ctaTitle: "Mist u een onderwerp?",
      ctaText:
        "Laat het ons weten. Wij breiden de kennisbank stap voor stap uit met onderwerpen die voor moslims in Nederland leven.",
    },
    over: {
      eyebrow: "Wie wij zijn",
      title: "Over De Islamitische Erfeniswijzer",
      intro:
        "Wij geloven dat iedereen — ongeacht achtergrond of religie — verdient om dit belangrijke onderwerp begrijpelijk en toegankelijk aangeboden te krijgen.",
      imageAlt:
        "Moderne Nederlandse moslimgemeenschap — diverse, warme uitstraling",
      paragraphs: [
        "De Islamitische Erfeniswijzer is opgericht om moslims in Nederland te ondersteunen bij het nadenken over hun nalatenschap. Veel mensen vinden dit een moeilijk onderwerp om te beginnen — zeker wanneer islamitisch erfrecht en Nederlands recht beide een rol spelen.",
        "Wij geloven dat iedereen — ongeacht achtergrond of religie — verdient om dit belangrijke onderwerp begrijpelijk en toegankelijk aangeboden te krijgen. Daarom bieden wij informatie en heldere uitleg, met respect voor uw geloofsovertuiging.",
        "Wij bieden informatie, geen juridisch advies. Voor het opstellen van een testament of andere juridische stappen verwijzen wij u altijd door naar een erkende notaris.",
      ],
      valuesEyebrow: "Onze waarden",
      valuesTitle: "Waar wij voor staan",
      values: [
        {
          title: "Respectvol",
          text: "Wij benaderen nalatenschap met aandacht voor uw geloof, uw familie en uw verhaal.",
        },
        {
          title: "Begrijpelijk",
          text: "Wij vertalen ingewikkelde onderwerpen naar heldere taal die voor iedereen toegankelijk is.",
        },
        {
          title: "Onafhankelijk",
          text: "Wij verkopen geen producten en geven geen juridisch advies — wij wijzen u de weg.",
        },
      ],
    },
    contact: {
      heroImageAlt:
        "Sereen interieur van een moskee met zacht licht — symbool voor rust en bezinning",
      heroEyebrow: "Neem contact op",
      heroTitle: "Neem contact op",
      heroIntroBefore:
        "Heeft u een vraag of wilt u meer weten? Vul het formulier in of stuur een e-mail naar ",
      heroIntroAfter: ". Wij beantwoorden uw vraag zo snel mogelijk.",
      directEyebrow: "Direct contact",
      directTitle: "Wij helpen u graag op weg",
      directText:
        "Let op: wij geven geen juridisch advies en stellen geen testamenten op. Daarvoor verwijzen wij u door naar een notaris.",
      details: {
        emailLabel: "E-mail",
        areaLabel: "Werkgebied",
        area: "Heel Nederland · informatie online beschikbaar",
      },
      formTitle: "Stuur ons een bericht",
      formIntro:
        "Vul het formulier in en wij beantwoorden uw vraag zo snel mogelijk.",
      fields: {
        name: "Naam",
        namePlaceholder: "Uw naam",
        email: "E-mail",
        emailPlaceholder: "uw@email.nl",
        subject: "Waar gaat het over?",
        message: "Bericht",
        messagePlaceholder: "Vertel ons kort waar uw vraag over gaat…",
      },
      subjects: {
        hulp: "Hulp bij erfenis",
        bijLeven: "Bij leven regelen",
        kennisbank: "Vraag over een artikel",
        algemeen: "Algemeen",
      },
      submit: "Verstuur bericht",
      privacyNote: "Wij gaan zorgvuldig en vertrouwelijk om met uw gegevens.",
      toastTitle: "Bedankt! Uw bericht is verzonden.",
      toastDescription: "Wij beantwoorden uw vraag zo snel mogelijk.",
      errors: {
        name: "Vul uw naam in.",
        nameMax: "Naam mag maximaal 100 tekens zijn.",
        email: "Vul een geldig e-mailadres in.",
        emailMax: "E-mailadres mag maximaal 255 tekens zijn.",
        subject: "Maak een keuze.",
        message: "Vertel ons kort waar uw vraag over gaat.",
        messageMax: "Bericht mag maximaal 1500 tekens zijn.",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      hulp: "Inheritance help (Islamic)",
      bijLeven: "Plan during your lifetime",
      kennisbank: "Knowledge base Islamic inheritance",
      over: "About us",
      contact: "Contact",
      cta: "Get in touch",
      menuOpen: "Open menu",
      brandTagline: "Estate planning with faith & care",
      brandAria: "The Islamic Inheritance Guide — back to home",
    },
    common: {
      brand: "The Islamic Inheritance Guide",
      langSwitch: "Wissel naar Nederlands",
      langLabel: "NL",
      disclaimer:
        "This is general information. For personal advice or to draw up a will, please consult a civil-law notary.",
      cta: "Get in touch",
      ctaQuestion: "Have a question?",
      ctaText:
        "We do not give legal advice, but we are happy to help you get started with clear information. For a will or legal steps, we refer you to a notary.",
    },
    footer: {
      mission:
        "Information on inheritance for Muslims in the Netherlands. We bring Islamic inheritance law and Dutch law together in an understandable way, so you can think calmly about the future of your loved ones.",
      quickLinks: "Quick links",
      contact: "Contact",
      area: "The Netherlands · information for the whole country",
      tagline: "Information on inheritance for Muslims in the Netherlands",
      disclaimer:
        "The Islamic Inheritance Guide provides general information only. We are not a notary and do not give legal advice. To draw up a will or take other legal steps, we refer you to a qualified civil-law notary.",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      legal: "Legal",
    },
    home: {
      heroEyebrow:
        "Your guide to inheritance under Islamic law and Dutch law",
      heroTitle:
        "Arrange your estate with calm, care and Islamic values",
      heroIntro:
        "As a Muslim in the Netherlands you want to arrange your estate in a way that honours your faith and the Dutch law. The Islamic Inheritance Guide helps you understand how Islamic inheritance law and Dutch law come together — so you can think about the future of your loved ones with peace of mind.",
      heroCta: "Explore your options",
      heroCta2: "To the knowledge base",
      heroImageAlt:
        "Modern Muslim family smiling together — a couple with their children, warm and positive atmosphere",
      sectionEyebrow: "What will you find here?",
      sectionTitle: "Clear information, with respect for your faith",
      sectionIntro:
        "Three topics that matter to many Muslims in the Netherlands when it comes to inheritance.",
      blocks: [
        {
          title: "Islamic inheritance law in the Netherlands",
          text: "Islamic inheritance law (fara'id) and Dutch law exist side by side. Through a will, much can be arranged in the Netherlands to align your estate with your faith.",
        },
        {
          title: "What can you arrange yourself?",
          text: "Think of an Islamic will, a legacy to loved ones or a charity, and lifetime gifts (hiba). We explain the possibilities clearly.",
        },
        {
          title: "No surprises for your loved ones",
          text: "Planning in time and open communication prevent confusion and tension within the family — and give your loved ones peace of mind.",
        },
      ],
      whyEyebrow: "Why The Islamic Inheritance Guide?",
      whyTitle: "Faith, family and law — carefully brought together",
      whyText:
        "For many Muslims in the Netherlands, thinking about inheritance feels vulnerable. We do not provide legal advice, but a calm and respectful starting point to orient yourself — so that you can approach a notary with the right questions.",
      whyImageAlt:
        "Muslim family at home — mother wearing a headscarf with her children in a warm domestic setting",
      highlights: [
        { label: "Clear explanations", text: "Plain language, no jargon" },
        { label: "Respectful", text: "With attention to your faith" },
        { label: "Independent", text: "We do not sell any products" },
      ],
      ctaTitle: "Do you have a question about Islamic inheritance law?",
      ctaText:
        "Feel free to ask your question. We provide explanations and help you on your way, but for a will or legal steps we refer you to a notary.",
      ctaButton: "Ask your question",
    },
    hulp: {
      eyebrow: "For Muslims in the Netherlands",
      title: "Inheritance help from an Islamic perspective",
      intro:
        "When a loved one passes away, a lot comes your way. The Islamic Inheritance Guide offers you overview and calm. We explain how the distribution of an estate works — both under Islamic rules and within the Dutch legal system.",
      imageAlt:
        "Professional Muslim woman wearing a headscarf in conversation — warm, trusting atmosphere",
      sections: [
        {
          title: "What is fara'id (Islamic inheritance law)?",
          text: "Fara'id is the part of sharia that deals with the distribution of an estate. It describes which relatives are entitled to a fixed share and the relevant ratios. The rules are detailed and take into account the relationship to the deceased, gender and the presence of other heirs.",
        },
        {
          title: "How does Islamic inheritance law relate to Dutch law?",
          text: "In the Netherlands, Dutch inheritance law applies, including to Muslims. However, you can determine a lot yourself through a will. By recording deliberate choices — for example through legacies or a specific distribution — your estate can align with your faith within the boundaries of Dutch law.",
        },
        {
          title: "What happens if there is no will?",
          text: "Without a will, the estate is divided according to Dutch statutory inheritance law. This may differ from what you would have wished from an Islamic perspective. A will is therefore an important way for many Muslims to retain control over the distribution.",
        },
        {
          title: "What can a notary do for you?",
          text: "A notary can help you draw up a will that is legally valid in the Netherlands and aligns with your wishes. Some notaries have experience with Islamic wills. They translate your wishes into a document that can be executed in the Netherlands.",
        },
      ],
      ctaTitle: "Would you like to discuss your situation?",
      ctaText:
        "We provide general information, not legal advice. For a will or personal guidance, we refer you to a notary.",
    },
    bijleven: {
      eyebrow: "An act of care",
      title: "Plan during your lifetime — an act of care for your loved ones",
      intro:
        "In Islam it is strongly recommended to arrange your affairs in time. \"Write your will, for a Muslim should not sleep two nights without having written down his will.\" (narration). On this page you can read which steps you can take during your lifetime.",
      imageAlt:
        "Bearded Muslim man, professional appearance, reflecting calmly — symbol of arranging affairs during one's lifetime",
      topics: [
        {
          title: "Drawing up an Islamic will (via a notary)",
          text: "With a will you can determine much yourself in the Netherlands about the distribution of your estate. A notary helps you record this in a legally correct way. Some notaries have experience with wills that take Islamic principles into account.",
        },
        {
          title: "Lifetime gifts (hiba)",
          text: "Hiba is a gift made during one's lifetime and is recommended in Islam as a way to support your loved ones already during your life. It can also be fiscally advantageous within Dutch gift rules.",
        },
        {
          title: "Recording wishes around death",
          text: "Consider wishes around the funeral (ghusl, kafan, janazah) and a wasiyya: a testamentary wish in which you leave, for example, an amount or item to a charity or a person outside the statutory heirs.",
        },
        {
          title: "Waqf (Islamic foundation / charitable purpose)",
          text: "A waqf is a form of lasting sadaqah whereby property is dedicated to a charitable purpose. In the Netherlands this can take shape through a foundation or a legacy to an existing charity. A notary or tax advisor can guide you in this.",
        },
      ],
      ctaTitle: "Ready to take the first step?",
      ctaText:
        "Ask your question or let us help you on your way with clear information. To draw up a will, we refer you to a qualified notary.",
    },
    kennisbank: {
      eyebrow: "Knowledge & insight",
      title: "Knowledge base Islamic inheritance law",
      intro:
        "Here you will find reliable, understandable information about Islamic inheritance law in the Netherlands. Not legal advice, but clear explanations that help you ask the right questions.",
      imageAlt:
        "Detail of mosque architecture — calming, geometric and serene",
      badge: "Knowledge base",
      reading: "read",
      askLink: "Ask your question",
      articles: [
        {
          title: "What is fara'id?",
          excerpt:
            "A clear introduction to Islamic inheritance law: which rules apply, which relatives are entitled to a share, and how is this traditionally calculated?",
          readingTime: "5 min",
        },
        {
          title: "Inheriting as a Muslim in the Netherlands: how does it work?",
          excerpt:
            "In the Netherlands, Dutch inheritance law applies. We explain what this means and how, through a will, you can take Islamic principles into account.",
          readingTime: "6 min",
        },
        {
          title: "Can I have an Islamic will drawn up?",
          excerpt:
            "What is an Islamic will, what can you record in it and what should you look out for when finding a notary experienced in this area?",
          readingTime: "5 min",
        },
        {
          title: "What is a wasiyya?",
          excerpt:
            "A wasiyya is a testamentary wish that plays an important role in the Islamic tradition. We explain what it is and how it relates to a Dutch will.",
          readingTime: "4 min",
        },
        {
          title: "How does giving in Islam (hiba) work?",
          excerpt:
            "Hiba — a gift during one's lifetime — is recommended in Islam. How does this fit within Dutch gift rules and what is fiscally possible?",
          readingTime: "5 min",
        },
        {
          title: "Arranging an Islamic funeral in the Netherlands",
          excerpt:
            "Practical information on ghusl, kafan, janazah and the options for an Islamic funeral at a Dutch cemetery or abroad.",
          readingTime: "6 min",
        },
      ],
      atmosphereAlt:
        "Minimalist Arabic calligraphy — symbol of tradition and knowledge",
      atmosphereTitle: "Knowledge is the first step",
      atmosphereText:
        "By informing yourself you'll be better prepared for a conversation with a notary or imam. The articles in our knowledge base are intended to help you on your way, not to replace legal advice.",
      ctaTitle: "Missing a topic?",
      ctaText:
        "Let us know. We are gradually expanding the knowledge base with topics that matter to Muslims in the Netherlands.",
    },
    over: {
      eyebrow: "Who we are",
      title: "About The Islamic Inheritance Guide",
      intro:
        "We believe that everyone — regardless of background or religion — deserves to have this important topic presented in an understandable and accessible way.",
      imageAlt:
        "Modern Dutch Muslim community — diverse, warm appearance",
      paragraphs: [
        "The Islamic Inheritance Guide was founded to support Muslims in the Netherlands in thinking about their estate. Many people find this a difficult topic to start with — especially when both Islamic inheritance law and Dutch law play a role.",
        "We believe that everyone — regardless of background or religion — deserves to have this important topic presented in an understandable and accessible way. That is why we offer information and clear explanations, with respect for your faith.",
        "We provide information, not legal advice. To draw up a will or take other legal steps, we always refer you to a qualified notary.",
      ],
      valuesEyebrow: "Our values",
      valuesTitle: "What we stand for",
      values: [
        {
          title: "Respectful",
          text: "We approach inheritance with attention to your faith, your family and your story.",
        },
        {
          title: "Understandable",
          text: "We translate complex topics into clear language that is accessible to everyone.",
        },
        {
          title: "Independent",
          text: "We do not sell products and do not give legal advice — we point the way.",
        },
      ],
    },
    contact: {
      heroImageAlt:
        "Serene mosque interior with soft light — symbol of calm and reflection",
      heroEyebrow: "Get in touch",
      heroTitle: "Get in touch",
      heroIntroBefore:
        "Do you have a question or would you like to know more? Fill in the form or send an email to ",
      heroIntroAfter: ". We will answer your question as soon as possible.",
      directEyebrow: "Direct contact",
      directTitle: "We are happy to help you on your way",
      directText:
        "Please note: we do not give legal advice and do not draw up wills. For that we refer you to a notary.",
      details: {
        emailLabel: "Email",
        areaLabel: "Area",
        area: "All of the Netherlands · information available online",
      },
      formTitle: "Send us a message",
      formIntro:
        "Fill in the form and we will answer your question as soon as possible.",
      fields: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        subject: "What is it about?",
        message: "Message",
        messagePlaceholder: "Tell us briefly what your question is about…",
      },
      subjects: {
        hulp: "Inheritance help",
        bijLeven: "Planning during lifetime",
        kennisbank: "Question about an article",
        algemeen: "General",
      },
      submit: "Send message",
      privacyNote: "We handle your data carefully and confidentially.",
      toastTitle: "Thank you! Your message has been sent.",
      toastDescription: "We will answer your question as soon as possible.",
      errors: {
        name: "Please enter your name.",
        nameMax: "Name may be at most 100 characters.",
        email: "Please enter a valid email address.",
        emailMax: "Email may be at most 255 characters.",
        subject: "Please make a choice.",
        message: "Tell us briefly what your question is about.",
        messageMax: "Message may be at most 1500 characters.",
      },
    },
  },
} as const;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "ie_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "nl" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "nl" ? "en" : "nl");
  }, [lang, setLang]);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang] as Dict }),
    [lang, setLang, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}