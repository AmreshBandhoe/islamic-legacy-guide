import { createFileRoute } from "@tanstack/react-router";
import { Heart, BookOpen, Compass } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";
import { useT } from "@/lib/i18n";

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

const valueIcons = [Heart, BookOpen, Compass] as const;

function OverOns() {
  const t = useT();
  const values = t.over.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  return (
    <>
      <ContentHero
        image={images.teamHero}
        imageAlt={t.over.imageAlt}
        eyebrow={t.over.eyebrow}
        title={t.over.title}
        intro={t.over.intro}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {t.over.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <Disclaimer className="mt-10" />
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {t.over.valuesEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              {t.over.valuesTitle}
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
