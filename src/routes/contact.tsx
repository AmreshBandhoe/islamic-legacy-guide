import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { images } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Islamitische Erfeniswijzer" },
      {
        name: "description",
        content: "Stel uw vraag aan De Islamitische Erfeniswijzer.",
      },
      { property: "og:title", content: "Contact | Islamitische Erfeniswijzer" },
      {
        property: "og:description",
        content: "Stel uw vraag aan De Islamitische Erfeniswijzer.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactSchema = z.object({
  naam: z
    .string()
    .trim()
    .min(2, { message: "Vul uw naam in." })
    .max(100, { message: "Naam mag maximaal 100 tekens zijn." }),
  email: z
    .string()
    .trim()
    .email({ message: "Vul een geldig e-mailadres in." })
    .max(255, { message: "E-mailadres mag maximaal 255 tekens zijn." }),
  onderwerp: z.enum(["hulp-bij-erfenis", "bij-leven-regelen", "kennisbank", "algemeen"], {
    required_error: "Maak een keuze.",
  }),
  bericht: z
    .string()
    .trim()
    .min(10, { message: "Vertel ons kort waar uw vraag over gaat." })
    .max(1500, { message: "Bericht mag maximaal 1500 tekens zijn." }),
});

type ContactValues = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    icon: Mail,
    label: "E-mail",
    value: "info@islamitische-erfeniswijzer.nl",
    href: "mailto:info@islamitische-erfeniswijzer.nl",
  },
  {
    icon: MapPin,
    label: "Werkgebied",
    value: "Heel Nederland · informatie online beschikbaar",
  },
];

function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      naam: "",
      email: "",
      onderwerp: "algemeen",
      bericht: "",
    },
  });

  function onSubmit(_values: ContactValues) {
    toast.success("Bedankt! Uw bericht is verzonden.", {
      description: "Wij beantwoorden uw vraag zo snel mogelijk.",
    });
    form.reset();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.contactHero}
          alt="Sereen interieur van een moskee met zacht licht — symbool voor rust en bezinning"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Neem contact op
            </p>
            <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              Neem contact op
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              Heeft u een vraag of wilt u meer weten? Vul het formulier in of
              stuur een e-mail naar{" "}
              <a
                href="mailto:info@islamitische-erfeniswijzer.nl"
                className="underline decoration-accent underline-offset-4 hover:text-accent"
              >
                info@islamitische-erfeniswijzer.nl
              </a>
              . Wij beantwoorden uw vraag zo snel mogelijk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + formulier */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="space-y-8">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Direct contact
                </p>
                <h2 className="text-3xl text-primary sm:text-4xl">
                  Wij helpen u graag op weg
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Let op: wij geven geen juridisch advies en stellen geen
                  testamenten op. Daarvoor verwijzen wij u door naar een notaris.
                </p>
              </div>

              <ul className="space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <item.icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-words text-lg text-primary transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="break-words text-lg text-primary">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Disclaimer />
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10">
                <h2 className="text-2xl text-primary sm:text-3xl">Stuur ons een bericht</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Vul het formulier in en wij beantwoorden uw vraag zo snel mogelijk.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <FormField
                      control={form.control}
                      name="naam"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Naam</FormLabel>
                          <FormControl>
                            <Input placeholder="Uw naam" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="uw@email.nl"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="onderwerp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Waar gaat het over?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                              className="grid gap-3 sm:grid-cols-2"
                            >
                              {[
                                { value: "hulp-bij-erfenis", label: "Hulp bij erfenis" },
                                { value: "bij-leven-regelen", label: "Bij leven regelen" },
                                { value: "kennisbank", label: "Vraag over een artikel" },
                                { value: "algemeen", label: "Algemeen" },
                              ].map((opt) => (
                                <label
                                  key={opt.value}
                                  htmlFor={`onderwerp-${opt.value}`}
                                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-accent has-[:checked]:border-accent has-[:checked]:bg-accent/10"
                                >
                                  <RadioGroupItem
                                    id={`onderwerp-${opt.value}`}
                                    value={opt.value}
                                  />
                                  <span className="text-foreground">{opt.label}</span>
                                </label>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bericht"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Vertel ons kort waar uw vraag over gaat…"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-full rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
                    >
                      Verstuur bericht
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Wij gaan zorgvuldig en vertrouwelijk om met uw gegevens.
                    </p>
                  </form>
                </Form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
