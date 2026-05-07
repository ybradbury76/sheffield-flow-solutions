import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, ShieldCheck, Zap } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Plumber Sheffield | 24/7 Same-Day Callout" },
      { name: "description", content: "24/7 emergency plumber in Sheffield. 60-minute response for burst pipes, leaks, no heat & no hot water. Gas Safe engineers." },
      { property: "og:title", content: "Emergency Plumber Sheffield — 60 Minute Response" },
      { property: "og:description", content: "24/7 callouts across Sheffield. Gas Safe engineers, fixed prices." },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <SiteLayout>
      <section className="bg-emergency text-emergency-foreground">
        <div className="container-tight py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Zap className="h-3.5 w-3.5" /> 24/7 · 365 days
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">Emergency plumber in Sheffield — on site within 60 minutes.</h1>
          <p className="mt-5 max-w-2xl text-lg text-emergency-foreground/90">Burst pipe? No hot water? Leak through the ceiling? Don't panic — call us now and we'll get an engineer to you straight away.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-emergency shadow-elegant">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-semibold">Request callback</a>
          </div>
        </div>
      </section>

      <section className="container-tight grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold">What counts as an emergency?</h2>
          <p className="mt-3 text-muted-foreground">If it can't wait until tomorrow, we treat it as urgent. Common emergencies we handle every week:</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Burst pipes & water leaks",
              "No heating or hot water",
              "Boiler breakdowns",
              "Overflowing toilets",
              "Frozen pipes in winter",
              "Gas leaks (call National Gas first: 0800 111 999)",
              "Blocked drains & sewage backup",
              "Loss of water pressure",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-trust" /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { i: Clock, t: "60 min", d: "Average response" },
              { i: ShieldCheck, t: "Fixed", d: "Transparent pricing" },
              { i: Zap, t: "24/7", d: "Day, night, weekends" },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-muted p-5 text-center">
                <Icon className="mx-auto h-6 w-6 text-secondary" />
                <div className="mt-2 font-display text-2xl font-bold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div id="quote">
          <h3 className="text-2xl font-bold">Request urgent callback</h3>
          <p className="mt-2 text-sm text-muted-foreground">For genuine emergencies please call us directly — it's the fastest way to reach an engineer.</p>
          <div className="mt-5"><QuoteForm /></div>
        </div>
      </section>
    </SiteLayout>
  );
}
