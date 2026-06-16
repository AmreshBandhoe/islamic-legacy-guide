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

const blocks = [
  {
    icon: Scale,
    title: "Islamitisch erfrecht in Nederland",
    text: "Islamitisch erfrecht (fara'id) en het Nederlandse recht bestaan naast elkaar. Via een testament is er in Nederland veel mogelijk om uw nalatenschap aan te laten sluiten op uw geloof.",
  },
  {
    icon: ScrollText,
    title: "Wat kunt u zelf regelen?",
    text: "Denk aan een islamitisch testament, een legaat aan dierbaren of een goed doel, en schenkingen bij leven (hiba). Wij leggen de mogelijkheden helder uit.",
  },
  {
    icon: Users,
    title: "Geen verrassingen voor uw nabestaanden",
    text: "Tijdig plannen en open communicatie voorkomen onduidelijkheid en spanningen binnen de familie — en geven uw nabestaanden rust.",
  },
];

const highlights = [
  { icon: BookOpen, label: "Begrijpelijke uitleg", text: "Heldere taal, geen jargon" },
  { icon: HandHeart, label: "Respectvol", text: "Met aandacht voor uw geloof" },
  { icon: ShieldCheck, label: "Onafhankelijk", text: "Wij verkopen geen producten" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.homeHero}
          alt="Modern moslimgezin dat samen lacht — een lachend stel met hun kinderen, warme en positieve sfeer"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Uw gids bij nalatenschap volgens islamitisch erfrecht en Nederlands recht
            </p>
            <h1 className="text-5xl leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl">
              Uw nalatenschap regelen met rust, zorg en islamitische waarden
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              Als moslim in Nederland wilt u uw nalatenschap zo regelen dat het
              recht doet aan uw geloof én aan de Nederlandse wet. De Islamitische
              Erfeniswijzer helpt u begrijpen hoe islamitisch erfrecht en
              Nederlands recht samenkomen — zodat u met een gerust hart kunt
              nadenken over de toekomst van uw dierbaren.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
              >
                <Link to="/hulp-bij-erfenis">
                  Ontdek uw mogelijkheden
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-primary-foreground/5 px-8 py-6 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                <Link to="/kennisbank">Naar de kennisbank</Link>
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
              Wat vindt u hier?
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Begrijpelijke informatie, met respect voor uw geloof
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Drie onderwerpen die voor veel moslims in Nederland spelen rondom
              nalatenschap.
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
                  alt="Moslimgezin thuis — moeder met hoofddoek en kinderen in een warme huiselijke sfeer"
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
                Waarom De Islamitische Erfeniswijzer?
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                Geloof, familie en wet — zorgvuldig samengebracht
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Voor veel moslims in Nederland voelt nadenken over nalatenschap
                kwetsbaar. Wij bieden geen juridisch advies, maar wel een rustige
                en respectvolle ingang om u te oriënteren — zodat u met de juiste
                vragen naar een notaris kunt gaan.
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
            Heeft u een vraag over islamitisch erfrecht?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            Stel uw vraag gerust. Wij geven uitleg en helpen u op weg, maar voor
            een testament of juridische stappen verwijzen wij u door naar een
            notaris.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
          >
            <Link to="/contact">
              Stel uw vraag
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
