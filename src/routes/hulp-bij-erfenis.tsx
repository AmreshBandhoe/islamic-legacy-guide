import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Scale, ScrollText, Users2 } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";
import { useT } from "@/lib/i18n";

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

const sectionIcons = [BookOpen, Scale, ScrollText, Users2] as const;

function HulpBijErfenis() {
  const t = useT();
  const sections = t.hulp.sections.map((s, i) => ({ ...s, icon: sectionIcons[i] }));
  return (
    <>
      <ContentHero
        image={images.hulpHero}
        imageAlt={t.hulp.imageAlt}
        eyebrow={t.hulp.eyebrow}
        title={t.hulp.title}
        intro={t.hulp.intro}
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
        title={t.hulp.ctaTitle}
        text={t.hulp.ctaText}
      />
    </>
  );
}
