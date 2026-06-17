import { createFileRoute } from "@tanstack/react-router";
import { ScrollText, Gift, HandHeart, Building2 } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";
import { useT } from "@/lib/i18n";

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

const topicIcons = [ScrollText, Gift, HandHeart, Building2] as const;

function BijLevenRegelen() {
  const t = useT();
  const topics = t.bijleven.topics.map((tp, i) => ({ ...tp, icon: topicIcons[i] }));
  return (
    <>
      <ContentHero
        image={images.bijlevenHero}
        imageAlt={t.bijleven.imageAlt}
        eyebrow={t.bijleven.eyebrow}
        title={t.bijleven.title}
        intro={t.bijleven.intro}
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
        title={t.bijleven.ctaTitle}
        text={t.bijleven.ctaText}
      />
    </>
  );
}
