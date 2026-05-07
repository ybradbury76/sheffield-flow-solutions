import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col pb-14 sm:pb-0">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="container-tight py-20 md:py-28">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{subtitle}</p>}
      </div>
    </section>
  );
}
