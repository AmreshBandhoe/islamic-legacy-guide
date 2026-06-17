import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Moon, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const navRoutes = [
  { key: "home", to: "/" },
  { key: "hulp", to: "/hulp-bij-erfenis" },
  { key: "bijLeven", to: "/bij-leven-regelen" },
  { key: "kennisbank", to: "/kennisbank" },
  { key: "over", to: "/over-ons" },
  { key: "contact", to: "/contact" },
] as const;

export type NavKey = (typeof navRoutes)[number]["key"];

function Brand({ onClick }: { onClick?: () => void }) {
  const { t } = useI18n();
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label={t.nav.brandAria}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <Moon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg text-primary sm:text-xl">{t.common.brand}</span>
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          {t.nav.brandTagline}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useI18n();
  const otherLang = lang === "nl" ? "EN" : "NL";

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Hoofdnavigatie">
          {navRoutes.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-[0.92rem] font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary", "data-active": "true" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <span className="relative inline-block py-1">
                  {t.nav[item.key]}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80 transition-colors hover:border-accent hover:text-primary"
            aria-label={t.common.langSwitch}
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={2} />
            {otherLang}
          </button>
          <Button asChild className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">{t.nav.cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80 transition-colors hover:border-accent hover:text-primary"
            aria-label={t.common.langSwitch}
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={2} />
            {otherLang}
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t.nav.menuOpen}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-[320px] bg-background">
            <div className="mt-2 mb-8">
              <Brand onClick={() => setOpen(false)} />
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
              {navRoutes.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "bg-secondary text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {t.nav[item.key]}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8">
              <SheetClose asChild>
                <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">{t.nav.cta}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
