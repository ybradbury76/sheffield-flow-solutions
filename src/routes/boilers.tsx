import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, ArrowRight, PoundSterling } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import boilerImg from "@/assets/boiler.jpg";

export const Route = createFileRoute("/boilers")({
  head: () => ({
    meta: [
      { title: "Boiler Repair & Installation Sheffield | New Boilers from £25/mo" },
      { name: "description", content: "Sheffield boiler installation & repair specialists. Worcester, Vaillant, Ideal. Free quotes, 0% APR finance & 10-year warranties." },
      { property: "og:title", content: "Boiler Services Sheffield — Steel City P&H" },
      { property: "og:description", content: "New A-rated boilers fitted from £1,895 or £25/month. Same-day repairs." },
      { property: "og:image", content: boilerImg },
    ],
  }),
  component: BoilersPage,
});

const tiers = [
  { name: "Combi · Budget", from: "£1,895", brand: "Ideal Logic", feats: ["A-rated efficiency", "7-year warranty", "Free flush", "Smart thermostat"] },
  { name: "Combi · Premium", from: "£2,495", brand: "Worcester Bosch", feats: ["A-rated efficiency", "10-year warranty", "Magnetic filter", "Hive / Nest compatible"], featured: true },
  { name: "System Boiler", from: "£2,895", brand: "Vaillant ecoTEC", feats: ["For homes with cylinder", "10-year warranty", "Whole-house upgrade", "Power flush included"] },
];

function BoilersPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Boilers" title="New A-rated boilers from £25/month, fitted by Sheffield's friendliest engineers" subtitle="Free home survey · Fixed-price quote · 0% APR finance available · Up to 10-year manufacturer warranty." />

      <section className="container-tight grid gap-10 py-20 md:grid-cols-2 md:items-center">
        <img src={boilerImg} alt="Newly installed combi boiler" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-card object-cover" />
        <div>
          <h2 className="text-3xl font-bold">Save up to £340 a year on energy</h2>
          <p className="mt-3 text-muted-foreground">Older G-rated boilers waste a third of every pound you spend on gas. A new A-rated combi pays for itself in lower bills, fewer breakdowns and a much warmer home.</p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Free no-obligation survey within 24 hours", "Old boiler removed, new one tested & registered", "Manufacturer-trained, Gas Safe engineers", "0% APR finance from £25/month (subject to status)"].map((p) => (
              <li key={p} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-trust" /> {p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Indicative pricing</p>
            <h2 className="mt-2 text-3xl font-bold">Honest prices, no nasty surprises</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`rounded-2xl border bg-card p-6 shadow-card ${t.featured ? "border-secondary ring-2 ring-secondary/30" : "border-border"}`}>
                {t.featured && <span className="mb-3 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">Most popular</span>}
                <h3 className="font-display text-xl font-bold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.brand}</p>
                <p className="mt-4 font-display text-3xl font-bold text-primary">{t.from} <span className="text-sm font-medium text-muted-foreground">fitted</span></p>
                <p className="text-sm text-muted-foreground">or from <strong className="text-foreground">£25/month</strong> on finance</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.feats.map((f) => <li key={f} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-trust" /> {f}</li>)}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-cta px-4 py-3 text-sm font-semibold text-primary-foreground shadow-card">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground"><PoundSterling className="h-3.5 w-3.5" /> Representative example: £1,895 over 84 months at 0% APR = £22.56/month. Subject to status.</p>
        </div>
      </section>

      <section className="container-tight py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Boiler not working? We can usually fix it the same day.</h2>
          <p className="mt-3 text-muted-foreground">Common faults we repair every week: pressure loss, pilot light failures, frozen condensate pipes, faulty diverter valves, kettling, and error codes on every major brand. Diagnostic fee from £95 — credited against the repair.</p>
        </div>
        <div><QuoteForm /></div>
      </section>
    </SiteLayout>
  );
}
