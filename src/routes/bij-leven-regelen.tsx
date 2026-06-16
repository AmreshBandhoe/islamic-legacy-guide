import { createFileRoute } from "@tanstack/react-router";
import { ScrollText, Gift, HandHeart, Building2 } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";

export const Route = createFileRoute("/bij-leven-regelen")({
  head: () => ({
    meta: [
      { title: "Bij leven regelen als moslim" },
      {
        name: "description",
        content:
          "Ontdek welke stappen u bij leven kunt zetten om uw nalatenschap islamitisch én juridisch goed te regelen.",
      },
      { property: "og:title", content: "Bij leven regelen als moslim" },
      {
        property: "og:description",
        content:
          "Ontdek welke stappen u bij leven kunt zetten om uw nalatenschap islamitisch én juridisch goed te regelen.",
      },
      { property: "og:url", content: "/bij-leven-regelen" },
    ],
    links: [{ rel: "canonical", href: "/bij-leven-regelen" }],
  }),
  component: BijLevenRegelen,
});

const topics = [
  {
    icon: ScrollText,
    title: "Een islamitisch testament opstellen (via notaris)",
    text: "Met een testament kunt u in Nederland veel zelf bepalen over de verdeling van uw nalatenschap. Een notaris helpt u dit juridisch correct vast te leggen. Sommige notarissen hebben ervaring met testamenten die rekening houden met islamitische uitgangspunten.",
  },
  {
    icon: Gift,
    title: "Schenken bij leven (hiba)",
    text: "Hiba is een schenking bij leven en wordt in de islam aanbevolen als manier om uw dierbaren reeds tijdens uw leven te ondersteunen. Het kan ook fiscaal gunstig zijn binnen de Nederlandse schenkingsregels.",
  },
  {
    icon: HandHeart,
    title: "Vastleggen van wensen rondom overlijden",
    text: "Denk aan wensen rondom de begrafenis (ghusl, kafan, janazah) en aan een wasiyya: een testamentaire wens waarin u bijvoorbeeld een bedrag of zaak nalaat aan een goed doel of een persoon buiten de wettelijke erfgenamen.",
  },
  {
    icon: Building2,
    title: "Waqf (islamitische stichting / liefdadige bestemming)",
    text: "Een waqf is een vorm van blijvende sadaqah waarbij bezit wordt bestemd voor een liefdadig doel. In Nederland kan dit vorm krijgen via een stichting of via een legaat aan een bestaand goed doel. Een notaris of fiscalist kan u hierin begeleiden.",
  },
];

function BijLevenRegelen() {
  return (
    <>
      <ContentHero
        image={images.bijlevenHero}
        imageAlt="Moslim met baard, professionele uitstraling, denkt rustig na — symbool voor bij leven zaken regelen"
        eyebrow="Een daad van zorg"
        title="Bij leven regelen — een daad van zorg voor uw nabestaanden"
        intro="In de islam wordt het sterk aanbevolen om tijdig uw zaken te regelen. „Schrijf uw testament, want een moslim mag niet twee nachten slapen zonder zijn testament op te hebben geschreven.” (overlevering). Op deze pagina leest u welke stappen u bij leven kunt zetten."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {topics.map((t) => (
              <article
                key={t.title}
                className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <t.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h2 className="mt-6 text-xl text-primary sm:text-2xl">{t.title}</h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </section>

      <CtaSection
        title="Klaar om de eerste stap te zetten?"
        text="Stel uw vraag of laat ons u op weg helpen met heldere informatie. Voor het opstellen van een testament verwijzen wij u door naar een erkende notaris."
      />
    </>
  );
}
