import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";

export const Route = createFileRoute("/kennisbank")({
  head: () => ({
    meta: [
      { title: "Kennisbank islamitisch erfrecht" },
      {
        name: "description",
        content:
          "Betrouwbare informatie over fara'id, testament en nalatenschap voor moslims in Nederland.",
      },
      { property: "og:title", content: "Kennisbank islamitisch erfrecht" },
      {
        property: "og:description",
        content:
          "Betrouwbare informatie over fara'id, testament en nalatenschap voor moslims in Nederland.",
      },
      { property: "og:url", content: "/kennisbank" },
    ],
    links: [{ rel: "canonical", href: "/kennisbank" }],
  }),
  component: Kennisbank,
});

const articles = [
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
];

function Kennisbank() {
  return (
    <>
      <ContentHero
        image={images.kennisbankHero}
        imageAlt="Detail van moskee-architectuur — kalmerend, geometrisch en sereen"
        eyebrow="Kennis & inzicht"
        title="Kennisbank islamitisch erfrecht"
        intro="Hier vindt u betrouwbare, begrijpelijke informatie over islamitisch erfrecht in Nederland. Geen juridisch advies, maar heldere uitleg die u helpt de juiste vragen te stellen."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary px-3 py-1 font-semibold uppercase tracking-wide text-primary">
                    Kennisbank
                  </span>
                  <span className="text-muted-foreground">{article.readingTime} lezen</span>
                </div>
                <h2 className="mt-5 text-xl leading-snug text-primary">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                >
                  Stel uw vraag
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img
              src={images.kennisbankAtmosphere}
              alt="Minimalistische Arabische kalligrafie — symbool voor traditie en kennis"
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Kennis is de eerste stap
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Door uzelf te informeren komt u beter beslagen ten ijs bij een
              gesprek met een notaris of imam. De artikelen in onze kennisbank
              zijn bedoeld om u op weg te helpen, niet om juridisch advies te
              vervangen.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Mist u een onderwerp?"
        text="Laat het ons weten. Wij breiden de kennisbank stap voor stap uit met onderwerpen die voor moslims in Nederland leven."
      />
    </>
  );
}
