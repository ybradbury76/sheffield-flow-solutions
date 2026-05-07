import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Wrench, Droplets, ShieldCheck, ThermometerSun, Bath, Search, Gauge, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing & Heating Services Sheffield | Boilers, Bathrooms, Leaks" },
      { name: "description", content: "Full plumbing & heating services in Sheffield: boilers, central heating, bathrooms, leaks, gas safety, power flushing & more." },
      { property: "og:title", content: "Our Services — Steel City P&H" },
      { property: "og:description", content: "Every plumbing & heating service Sheffield homeowners need." },
    ],
  }),
  component: ServicesPage,
});

const all = [
  { icon: Flame, title: "Emergency Plumbing", desc: "60-minute response, 24/7. Burst pipes, leaks, no heat — we'll be there.", price: "From £80 callout" },
  { icon: ThermometerSun, title: "Boiler Installation", desc: "A-rated combi, system & regular boilers. Free survey + 10-year warranty.", price: "From £1,895 fitted" },
  { icon: Wrench, title: "Boiler Repairs", desc: "Same-day diagnostics. Fixed-price repairs on all major brands.", price: "From £95" },
  { icon: Gauge, title: "Central Heating", desc: "Full system installs, upgrades, smart thermostats and zone valves.", price: "Free quote" },
  { icon: Droplets, title: "Leak Detection", desc: "Thermal imaging & acoustic detection — find leaks without ripping up floors.", price: "From £180" },
  { icon: Bath, title: "Bathroom Plumbing", desc: "Showers, taps, full suites, wet rooms and accessibility installs.", price: "Free design" },
  { icon: ShieldCheck, title: "Gas Safety Checks", desc: "Landlord CP12 certificates, same-week appointments.", price: "From £75" },
  { icon: Search, title: "Power Flushing", desc: "Restore radiator efficiency and lower your heating bills.", price: "From £395" },
  { icon: Wrench, title: "Radiator Repairs", desc: "Cold spots, leaks, replacements and TRVs fitted.", price: "From £85" },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Everything plumbing & heating, under one trusted roof" subtitle="One Sheffield team for every job — from a leaky tap to a full central heating overhaul." />
      <section className="container-tight py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.map(({ icon: Icon, title, desc, price }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-secondary/40">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground"><Icon className="h-6 w-6" /></span>
              <h2 className="mt-4 font-display text-xl font-semibold">{title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-4 text-sm font-semibold text-secondary">{price}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card">Request a free quote <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
