import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Hulp bij erfenis (islamitisch)", to: "/hulp-bij-erfenis" },
  { label: "Bij leven regelen", to: "/bij-leven-regelen" },
  { label: "Kennisbank islamitisch erfrecht", to: "/kennisbank" },
  { label: "Over ons", to: "/over-ons" },
  { label: "Contact", to: "/contact" },
] as const;

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="De Islamitische Erfeniswijzer — naar home"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <Moon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg text-primary sm:text-xl">De Islamitische Erfeniswijzer</span>
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Nalatenschap met geloof &amp; zorg
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-[0.92rem] font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary", "data-active": "true" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <span className="relative inline-block py-1">
                  {item.label}
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

        <div className="hidden xl:block">
          <Button asChild className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Neem contact op</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu openen">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] bg-background">
            <div className="mt-2 mb-8">
              <Brand onClick={() => setOpen(false)} />
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "bg-secondary text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8">
              <SheetClose asChild>
                <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">Neem contact op</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
