import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Sheffield Plumber — 4.9★ from 327 Customers" },
      { name: "description", content: "Read what Sheffield homeowners and landlords say about our plumbing & heating service. 4.9 stars on Google." },
      { property: "og:title", content: "Customer Reviews — Steel City P&H" },
      { property: "og:description", content: "Real reviews from real Sheffield customers." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sarah Whitfield", area: "Crookes", text: "Boiler packed in on a Sunday morning with two kids in the house. They were here in under an hour and had heat back on the same day. Genuinely couldn't fault them.", stars: 5 },
  { name: "Marcus Thompson", area: "Hillsborough", text: "Replaced our 18-year-old combi with a new Worcester Bosch. Spotless work, exactly the price quoted, and they took the time to set up the smart thermostat for me.", stars: 5 },
  { name: "Priya Kaur", area: "Ecclesall", text: "Found a hidden leak under the bathroom floor without ripping the whole thing apart. Saved us thousands. Polite, prompt and properly skilled.", stars: 5 },
  { name: "David O'Connor", area: "Sharrow", text: "Used them for our rental properties for years. Reliable Gas Safe certificates, fair prices, and tenants always say nice things about the engineers.", stars: 5 },
  { name: "Emma Bennett", area: "Nether Edge", text: "Full bathroom refit — design through to fitting. Beautiful job, on time and on budget. Will definitely use again for our en-suite.", stars: 5 },
  { name: "James Holroyd", area: "Dronfield", text: "Power flushed our system and rebalanced the radiators. Heating bills noticeably down, house actually warm upstairs for the first time in years.", stars: 5 },
];

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Reviews" title="4.9★ from 327 Sheffield customers" subtitle="Most of our work comes from word-of-mouth — here's what our neighbours say." />
      <section className="container-tight py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-secondary/15" />
              <div className="flex gap-0.5 text-secondary">
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 text-xs">
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-muted-foreground">{r.area}, Sheffield</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
