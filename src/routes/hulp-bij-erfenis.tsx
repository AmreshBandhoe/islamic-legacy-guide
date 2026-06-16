import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Scale, ScrollText, Users2 } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";

export const Route = createFileRoute("/hulp-bij-erfenis")({
  head: () => ({
    meta: [
      { title: "Hulp bij islamitische erfenis in Nederland" },
      {
        name: "description",
        content:
          "Hoe werkt islamitisch erfrecht in Nederland? Wij leggen het u helder uit.",
      },
      { property: "og:title", content: "Hulp bij islamitische erfenis in Nederland" },
      {
        property: "og:description",
        content:
          "Hoe werkt islamitisch erfrecht in Nederland? Wij leggen het u helder uit.",
      },
      { property: "og:url", content: "/hulp-bij-erfenis" },
    ],
    links: [{ rel: "canonical", href: "/hulp-bij-erfenis" }],
  }),
  component: HulpBijErfenis,
});

const sections = [
  {
    icon: BookOpen,
    title: "Wat is fara'id (islamitisch erfrecht)?",
    text: "Fara'id is het deel van de sharia dat gaat over de verdeling van een nalatenschap. Het beschrijft welke familieleden recht hebben op een vast aandeel en welke verhoudingen daarbij gelden. De regels zijn gedetailleerd en houden rekening met de relatie tot de overledene, het geslacht en de aanwezigheid van andere erfgenamen.",
  },
  {
    icon: Scale,
    title: "Hoe verhoudt islamitisch erfrecht zich tot Nederlands recht?",
    text: "In Nederland geldt het Nederlandse erfrecht, ook voor moslims. Wel kunt u via een testament veel zelf bepalen. Door bewuste keuzes vast te leggen — bijvoorbeeld via legaten of een specifieke verdeling — kan uw nalatenschap aansluiten op uw geloof binnen de grenzen van de Nederlandse wet.",
  },
  {
    icon: ScrollText,
    title: "Wat gebeurt er als er geen testament is?",
    text: "Zonder testament wordt de nalatenschap verdeeld volgens het wettelijke Nederlandse erfrecht. Dat kan afwijken van wat u vanuit islamitisch perspectief gewenst zou hebben. Een testament is daarom voor veel moslims een belangrijke manier om regie te houden over de verdeling.",
  },
  {
    icon: Users2,
    title: "Wat kan een notaris voor u betekenen?",
    text: "Een notaris kan u helpen een testament op te stellen dat juridisch geldig is in Nederland en aansluit bij uw wensen. Sommige notarissen hebben ervaring met islamitische testamenten. Zij vertalen uw wensen naar een document dat in Nederland kan worden uitgevoerd.",
  },
];

function HulpBijErfenis() {
  return (
    <>
      <ContentHero
        image={images.hulpHero}
        imageAlt="Professionele moslima met hoofddoek in gesprek — warme, vertrouwelijke sfeer"
        eyebrow="Voor moslims in Nederland"
        title="Hulp bij erfenis vanuit islamitisch perspectief"
        intro="Wanneer een dierbare overlijdt, komt er veel op u af. De Islamitische Erfeniswijzer biedt u overzicht en rust. We leggen uit hoe de verdeling van een nalatenschap werkt — zowel volgens de islamitische regels als binnen het Nederlandse rechtsstelsel."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h2 className="text-2xl text-primary sm:text-3xl">{s.title}</h2>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <Disclaimer className="mt-6" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Wilt u uw situatie bespreken?"
        text="Wij geven algemene informatie, geen juridisch advies. Voor een testament of persoonlijke begeleiding verwijzen wij u door naar een notaris."
      />
    </>
  );
}
