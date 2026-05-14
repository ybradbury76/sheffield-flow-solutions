import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/areas", label: "Areas" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-cta text-primary-foreground">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
          <span className="sm:hidden">{SITE.short}</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-gradient-cta px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-md text-primary lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-tight flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-2 mb-3 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-cta px-4 py-3 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
