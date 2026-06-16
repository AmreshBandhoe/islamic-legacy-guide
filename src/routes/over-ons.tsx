import { createFileRoute } from "@tanstack/react-router";
import { Heart, BookOpen, Compass } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over De Islamitische Erfeniswijzer" },
      {
        name: "description",
        content:
          "Wie zijn wij en waarom bestaat De Islamitische Erfeniswijzer?",
      },
      { property: "og:title", content: "Over De Islamitische Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Wie zijn wij en waarom bestaat De Islamitische Erfeniswijzer?",
      },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOns,
});

const values = [
  {
    icon: Heart,
    title: "Respectvol",
    text: "Wij benaderen nalatenschap met aandacht voor uw geloof, uw familie en uw verhaal.",
  },
  {
    icon: BookOpen,
    title: "Begrijpelijk",
    text: "Wij vertalen ingewikkelde onderwerpen naar heldere taal die voor iedereen toegankelijk is.",
  },
  {
    icon: Compass,
    title: "Onafhankelijk",
    text: "Wij verkopen geen producten en geven geen juridisch advies — wij wijzen u de weg.",
  },
];

function OverOns() {
  return (
    <>
      <ContentHero
        image={images.teamHero}
        imageAlt="Moderne Nederlandse moslimgemeenschap — diverse, warme uitstraling"
        eyebrow="Wie wij zijn"
        title="Over De Islamitische Erfeniswijzer"
        intro="Wij geloven dat iedereen — ongeacht achtergrond of religie — verdient om dit belangrijke onderwerp begrijpelijk en toegankelijk aangeboden te krijgen."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              De Islamitische Erfeniswijzer is opgericht om moslims in Nederland
              te ondersteunen bij het nadenken over hun nalatenschap. Veel mensen
              vinden dit een moeilijk onderwerp om te beginnen — zeker wanneer
              islamitisch erfrecht en Nederlands recht beide een rol spelen.
            </p>
            <p>
              Wij geloven dat iedereen — ongeacht achtergrond of religie —
              verdient om dit belangrijke onderwerp begrijpelijk en toegankelijk
              aangeboden te krijgen. Daarom bieden wij informatie en heldere
              uitleg, met respect voor uw geloofsovertuiging.
            </p>
            <p>
              Wij bieden informatie, geen juridisch advies. Voor het opstellen
              van een testament of andere juridische stappen verwijzen wij u
              altijd door naar een erkende notaris.
            </p>
          </div>

          <Disclaimer className="mt-10" />
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Onze waarden
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Waar wij voor staan
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <value.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-xl text-primary">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
