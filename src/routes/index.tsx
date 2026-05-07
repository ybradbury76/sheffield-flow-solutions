import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Flame, Wrench, Droplets, ShieldCheck, ThermometerSun,
  Bath, Search, Gauge, ArrowRight, Star, MapPin, Clock, BadgeCheck,
  PoundSterling, ChevronDown,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-engineer.jpg";
import boilerImg from "@/assets/boiler.jpg";
import sheffieldImg from "@/assets/sheffield.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plumber Sheffield | Emergency Plumbing & Boiler Repair — Steel City P&H" },
      { name: "description", content: "Trusted Sheffield plumber & Gas Safe heating engineer. 24/7 emergency callouts, boiler installation, repairs & central heating. Free quotes." },
      { property: "og:title", content: "Trusted Plumbing & Heating Experts in Sheffield" },
      { property: "og:description", content: "Gas Safe registered. Same-day emergency callouts across Sheffield. Free quotes." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: SITE.name,
          telephone: SITE.phone,
          areaServed: ["Sheffield", "Rotherham", "Chesterfield", "Barnsley"],
          address: { "@type": "PostalAddress", addressLocality: "Sheffield", addressRegion: "South Yorkshire", addressCountry: "GB" },
          priceRange: "££",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "327" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Flame, title: "Emergency Plumbing", desc: "Burst pipes, leaks, no heat — we're with you fast.", to: "/emergency" as const },
  { icon: ThermometerSun, title: "Boiler Installation", desc: "Worcester, Vaillant, Ideal. Finance available.", to: "/boilers" as const },
  { icon: Wrench, title: "Boiler Repairs", desc: "Same-day diagnostics & fixed-price repairs.", to: "/boilers" as const },
  { icon: Gauge, title: "Central Heating", desc: "Full system installs, radiators & smart controls.", to: "/services" as const },
  { icon: Droplets, title: "Leak Detection", desc: "Non-invasive thermal & acoustic leak finding.", to: "/services" as const },
  { icon: Bath, title: "Bathroom Plumbing", desc: "Showers, taps, suites & full refurbishments.", to: "/services" as const },
  { icon: ShieldCheck, title: "Gas Safety Checks", desc: "Landlord CP12 certificates from £75.", to: "/services" as const },
  { icon: Search, title: "Power Flushing", desc: "Restore radiator efficiency & cut bills.", to: "/services" as const },
];

const reviews = [
  { name: "Sarah W.", area: "Crookes", text: "Boiler packed in on a Sunday — they were here in under an hour and had heat back on the same day. Brilliant.", stars: 5 },
  { name: "Marcus T.", area: "Hillsborough", text: "Replaced our old combi with a new Worcester. Clean, tidy, on budget and explained everything. Wouldn't use anyone else.", stars: 5 },
  { name: "Priya K.", area: "Ecclesall", text: "Found and fixed a hidden leak under the bathroom floor without ripping it apart. Saved us a fortune.", stars: 5 },
];

const faqs = [
  { q: "How quickly can you respond to an emergency?", a: "We aim to be on site within 60 minutes for emergencies in Sheffield, 24 hours a day, 365 days a year." },
  { q: "Are you Gas Safe registered?", a: "Yes — every engineer is fully Gas Safe registered (Reg. 123456) and carries ID. We're also fully insured." },
  { q: "Do you give free quotes?", a: "Absolutely. Quotes for boiler installs, bathrooms and heating systems are always free with no obligation." },
  { q: "Do you offer finance on boilers?", a: "Yes — interest-free options and 0% APR plans available, subject to status. Spread the cost from £25/month." },
  { q: "Which areas of Sheffield do you cover?", a: "All S postcodes plus Rotherham, Chesterfield, Barnsley and Dronfield. See our Areas page for the full list." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Emergency banner */}
      <div className="bg-emergency text-emergency-foreground">
        <div className="container-tight flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center text-xs font-medium sm:text-sm">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 24/7 Emergency Callouts</span>
          <span className="opacity-50">·</span>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 font-bold underline-offset-2 hover:underline">
            <Phone className="h-3.5 w-3.5" /> Call {SITE.phone}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="container-tight grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:gap-12 md:py-24 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1 text-xs font-medium backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5 text-secondary" /> Gas Safe Registered · 4.9★ on Google
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Trusted Plumbing & Heating Experts in <span className="text-secondary">Sheffield</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/80">
              Fast 60-minute response from qualified, Gas Safe engineers. From burst pipes to brand-new boilers — we've got Sheffield covered.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-emergency px-6 py-3.5 text-sm font-semibold text-emergency-foreground shadow-elegant transition-transform hover:scale-105">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="#quote" className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-105">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-sm">
              {[
                { n: "15+", l: "Years experience" },
                { n: "5,200+", l: "Happy customers" },
                { n: "60min", l: "Avg. response" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-secondary">{s.n}</div>
                  <div className="text-xs text-primary-foreground/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Gas Safe heating engineer servicing a modern boiler in a Sheffield home"
              width={1536}
              height={1024}
              className="rounded-2xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card p-4 text-card-foreground shadow-elegant sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-trust/15 text-trust">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Gas Safe Reg.</p>
                  <p className="text-xs text-muted-foreground">No. 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-border bg-muted/40">
        <div className="container-tight grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            { i: ShieldCheck, t: "Gas Safe Registered" },
            { i: BadgeCheck, t: "Fully Insured" },
            { i: MapPin, t: "Local Sheffield Business" },
            { i: PoundSterling, t: "No Hidden Costs" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </span>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-tight py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">What we do</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">A complete plumbing & heating service for Sheffield homes</h2>
          <p className="mt-3 text-muted-foreground">From a dripping tap to a full central heating overhaul — one trusted local team for every job.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, to }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-secondary/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Boiler / Finance feature */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight grid gap-10 md:grid-cols-2 md:items-center">
          <img src={boilerImg} alt="Newly installed combi boiler with copper pipework" width={1280} height={896} loading="lazy" className="rounded-2xl object-cover shadow-card" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Boilers from £25/month</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">New A-rated boiler installed — finance available</h2>
            <p className="mt-3 text-muted-foreground">
              Cut your bills with a high-efficiency Worcester, Vaillant or Ideal boiler. Spread the cost with 0% APR finance, subject to status. Free home survey, fixed-price quote, and a 10-year manufacturer guarantee.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Free no-obligation quote within 24 hours", "Old boiler removed & disposed of", "Up to 10-year manufacturer warranty", "0% APR finance options"].map((p) => (
                <li key={p} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-trust" /> {p}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-lg bg-gradient-cta px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card">Get my boiler quote</a>
              <Link to="/boilers" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">Boiler services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-tight py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Loved by Sheffield</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">4.9★ from 327 reviews</h2>
          </div>
          <Link to="/reviews" className="text-sm font-medium text-secondary hover:underline">Read all reviews →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 text-secondary">
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">— {r.name}, {r.area}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Local & proud</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Covering all of Sheffield & surrounding areas</h2>
            <p className="mt-3 text-primary-foreground/75">From the city centre to the Peak District edge — if you're within 25 miles, we'll be there.</p>
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {["S1–S20", "Crookes", "Hillsborough", "Ecclesall", "Nether Edge", "Walkley", "Rotherham", "Chesterfield", "Barnsley", "Dronfield", "Stocksbridge", "Penistone"].map((a) => (
                <span key={a} className="flex items-center gap-1.5 text-primary-foreground/85"><MapPin className="h-3.5 w-3.5 text-secondary" /> {a}</span>
              ))}
            </div>
            <Link to="/areas" className="mt-6 inline-flex rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground">See all areas</Link>
          </div>
          <img src={sheffieldImg} alt="Sheffield skyline at golden hour" width={1536} height={768} loading="lazy" className="rounded-2xl object-cover shadow-elegant" />
        </div>
      </section>

      {/* FAQ + Quote */}
      <section id="quote" className="container-tight py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">FAQs</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Got a question? We've got answers.</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f, i) => <Faq key={i} {...f} />)}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Free quote</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tell us about the job</h2>
            <p className="mt-3 text-muted-foreground">Quick form — we'll come back within 30 minutes during working hours.</p>
            <div className="mt-6"><QuoteForm /></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 -mt-2 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
