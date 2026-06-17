import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  ScrollText,
  Users,
  ArrowRight,
  BookOpen,
  HandHeart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Islamitische Erfeniswijzer | Nalatenschap & Erfrecht" },
      {
        name: "description",
        content:
          "Informatie over islamitisch erfrecht en nalatenschap in Nederland. Begrijpelijk, betrouwbaar en zonder juridisch advies.",
      },
      { property: "og:title", content: "Islamitische Erfeniswijzer | Nalatenschap & Erfrecht" },
      {
        property: "og:description",
        content:
          "Informatie over islamitisch erfrecht en nalatenschap in Nederland. Begrijpelijk, betrouwbaar en zonder juridisch advies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const blockIcons = [Scale, ScrollText, Users] as const;
const highlightIcons = [BookOpen, HandHeart, ShieldCheck] as const;

function Index() {
  const t = useT();
  const blocks = t.home.blocks.map((b, i) => ({ ...b, icon: blockIcons[i] }));
  const highlights = t.home.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i] }));
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.homeHero}
          alt={t.home.heroImageAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.home.heroEyebrow}
            </p>
            <h1 className="text-5xl leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              {t.home.heroIntro}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
              >
                <Link to="/hulp-bij-erfenis">
                  {t.home.heroCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-primary-foreground/5 px-8 py-6 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                <Link to="/kennisbank">{t.home.heroCta2}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Drie informatieblokken */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {t.home.sectionEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              {t.home.sectionTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {t.home.sectionIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blocks.map((b) => (
              <div
                key={b.title}
                className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <b.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-xl leading-snug text-primary">{b.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </section>

      {/* Vertrouwen / why */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={images.homeWhy}
                  alt={t.home.whyImageAlt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl border-4 border-accent/40 sm:block" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {t.home.whyEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                {t.home.whyTitle}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {t.home.whyText}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-border/60 bg-card p-5"
                  >
                    <h.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                    <p className="mt-3 text-sm font-semibold text-primary">{h.label}</p>
                    <p className="text-xs text-muted-foreground">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA naar contact */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            {t.home.ctaText}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
          >
            <Link to="/contact">
              {t.home.ctaButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
