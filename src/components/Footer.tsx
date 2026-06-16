import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Moon } from "lucide-react";
import { navItems } from "@/components/Header";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + missie */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                <Moon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="font-display text-2xl">De Islamitische Erfeniswijzer</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Informatie over nalatenschap voor moslims in Nederland. Wij brengen
              islamitisch erfrecht en Nederlands recht begrijpelijk samen, zodat u
              met rust kunt nadenken over de toekomst van uw dierbaren.
            </p>
          </div>

          {/* Snelle links */}
          <div>
            <h2 className="text-lg font-semibold text-accent">Snelle links</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-accent">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:info@islamitische-erfeniswijzer.nl"
                  className="break-all transition-colors hover:text-accent"
                >
                  info@islamitische-erfeniswijzer.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Nederland · informatie voor heel het land</span>
              </li>
            </ul>
            <p className="mt-5 font-display text-sm tracking-wide text-accent">
              Informatie over nalatenschap voor moslims in Nederland
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-14 max-w-3xl text-xs leading-relaxed text-primary-foreground/55">
          De Islamitische Erfeniswijzer biedt uitsluitend algemene informatie. Wij
          zijn geen notaris en geven geen juridisch advies. Voor het opstellen van
          een testament of andere juridische stappen verwijzen wij u door naar een
          erkende notaris.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {year} De Islamitische Erfeniswijzer. Alle rechten voorbehouden.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Juridisch">
            <Link to="/contact" className="transition-colors hover:text-accent">
              Privacybeleid
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Algemene voorwaarden
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
