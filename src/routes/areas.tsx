import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import sheffieldImg from "@/assets/sheffield.jpg";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas We Cover | Plumber Sheffield, Rotherham, Chesterfield" },
      { name: "description", content: "We cover all S postcodes plus Rotherham, Chesterfield, Barnsley, Dronfield and surrounding villages. 60-minute emergency response." },
      { property: "og:title", content: "Areas We Cover — Steel City P&H" },
      { property: "og:description", content: "All Sheffield postcodes plus surrounding South Yorkshire & Derbyshire areas." },
      { property: "og:image", content: sheffieldImg },
    ],
  }),
  component: AreasPage,
});

const areas = [
  { city: "Sheffield (S1–S20)", places: ["City Centre", "Crookes", "Hillsborough", "Ecclesall", "Nether Edge", "Walkley", "Sharrow", "Heeley", "Meadowhall", "Stocksbridge", "Totley", "Mosborough"] },
  { city: "Rotherham", places: ["Wickersley", "Whiston", "Bramley", "Maltby", "Wath-upon-Dearne", "Aston"] },
  { city: "Chesterfield & Derbyshire", places: ["Dronfield", "Brimington", "Staveley", "Clowne", "Hasland", "Wingerworth"] },
  { city: "Barnsley & Beyond", places: ["Penistone", "Hoyland", "Wombwell", "Darfield", "Cudworth", "Royston"] },
];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Coverage" title="Local plumbers covering Sheffield & beyond" subtitle="Based in Sheffield, working across South Yorkshire and north Derbyshire. If you're within 25 miles, we can be with you fast." />
      <section className="container-tight py-16">
        <img src={sheffieldImg} alt="Sheffield skyline" width={1536} height={768} loading="lazy" className="mb-12 rounded-2xl shadow-card object-cover" />
        <div className="grid gap-6 md:grid-cols-2">
          {areas.map((a) => (
            <div key={a.city} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-bold text-primary">{a.city}</h2>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {a.places.map((p) => (
                  <span key={p} className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-secondary" /> {p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Don't see your area? Give us a call — we travel further for boiler installs and bigger jobs.</p>
      </section>
    </SiteLayout>
  );
}
