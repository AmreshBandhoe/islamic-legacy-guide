import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";
import { useT } from "@/lib/i18n";

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

function Kennisbank() {
  const t = useT();
  const articles = t.kennisbank.articles;
  return (
    <>
      <ContentHero
        image={images.kennisbankHero}
        imageAlt={t.kennisbank.imageAlt}
        eyebrow={t.kennisbank.eyebrow}
        title={t.kennisbank.title}
        intro={t.kennisbank.intro}
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
                    {t.kennisbank.badge}
                  </span>
                  <span className="text-muted-foreground">{article.readingTime} {t.kennisbank.reading}</span>
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
                  {t.kennisbank.askLink}
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
              alt={t.kennisbank.atmosphereAlt}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl text-primary sm:text-4xl">
              {t.kennisbank.atmosphereTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {t.kennisbank.atmosphereText}
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title={t.kennisbank.ctaTitle}
        text={t.kennisbank.ctaText}
      />
    </>
  );
}
