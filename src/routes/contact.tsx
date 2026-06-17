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
import { useT } from "@/lib/i18n";

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

type ContactValues = {
  naam: string;
  email: string;
  onderwerp: "hulp-bij-erfenis" | "bij-leven-regelen" | "kennisbank" | "algemeen";
  bericht: string;
};

function Contact() {
  const t = useT();
  const contactSchema = z.object({
    naam: z.string().trim().min(2, { message: t.contact.errors.name }).max(100, { message: t.contact.errors.nameMax }),
    email: z.string().trim().email({ message: t.contact.errors.email }).max(255, { message: t.contact.errors.emailMax }),
    onderwerp: z.enum(["hulp-bij-erfenis", "bij-leven-regelen", "kennisbank", "algemeen"], {
      required_error: t.contact.errors.subject,
    }),
    bericht: z.string().trim().min(10, { message: t.contact.errors.message }).max(1500, { message: t.contact.errors.messageMax }),
  });
  const contactDetails = [
    {
      icon: Mail,
      label: t.contact.details.emailLabel,
      value: "info@islamitische-erfeniswijzer.nl",
      href: "mailto:info@islamitische-erfeniswijzer.nl",
    },
    {
      icon: MapPin,
      label: t.contact.details.areaLabel,
      value: t.contact.details.area,
    },
  ];
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
    toast.success(t.contact.toastTitle, {
      description: t.contact.toastDescription,
    });
    form.reset();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.contactHero}
          alt={t.contact.heroImageAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.contact.heroEyebrow}
            </p>
            <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {t.contact.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              {t.contact.heroIntroBefore}
              <a
                href="mailto:info@islamitische-erfeniswijzer.nl"
                className="underline decoration-accent underline-offset-4 hover:text-accent"
              >
                info@islamitische-erfeniswijzer.nl
              </a>
              {t.contact.heroIntroAfter}
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
                  {t.contact.directEyebrow}
                </p>
                <h2 className="text-3xl text-primary sm:text-4xl">
                  {t.contact.directTitle}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {t.contact.directText}
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
                <h2 className="text-2xl text-primary sm:text-3xl">{t.contact.formTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.contact.formIntro}
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <FormField
                      control={form.control}
                      name="naam"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.fields.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.contact.fields.namePlaceholder} autoComplete="name" {...field} />
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
                          <FormLabel>{t.contact.fields.email}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t.contact.fields.emailPlaceholder}
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
                          <FormLabel>{t.contact.fields.subject}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                              className="grid gap-3 sm:grid-cols-2"
                            >
                              {[
                                { value: "hulp-bij-erfenis", label: t.contact.subjects.hulp },
                                { value: "bij-leven-regelen", label: t.contact.subjects.bijLeven },
                                { value: "kennisbank", label: t.contact.subjects.kennisbank },
                                { value: "algemeen", label: t.contact.subjects.algemeen },
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
                          <FormLabel>{t.contact.fields.message}</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder={t.contact.fields.messagePlaceholder}
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
                      {t.contact.submit}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      {t.contact.privacyNote}
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
