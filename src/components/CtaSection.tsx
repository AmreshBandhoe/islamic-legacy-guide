import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

interface CtaSectionProps {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export function CtaSection({
  title,
  text,
  ctaLabel,
  ctaTo = "/contact",
}: CtaSectionProps) {
  const { t } = useI18n();
  const heading = title ?? t.common.ctaQuestion;
  const body = text ?? t.common.ctaText;
  const label = ctaLabel ?? t.common.cta;
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl text-primary-foreground sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          {body}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
        >
          <Link to={ctaTo}>
            {label}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
