import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Users, Heart, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import plumbingImg from "@/assets/plumbing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sheffield Plumbing & Heating Engineers" },
      { name: "description", content: "Family-run, Gas Safe registered plumbing & heating company serving Sheffield since 2008. Meet the team behind Steel City P&H." },
      { property: "og:title", content: "About Steel City Plumbing & Heating" },
      { property: "og:description", content: "Local, Gas Safe, family-run plumbers serving Sheffield since 2008." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our story" title="Sheffield's friendly local plumbing & heating team" subtitle="Family-run since 2008. Gas Safe engineers who treat your home like our own — boots off, dust sheets down, job done right." />
      <section className="container-tight grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <img src={plumbingImg} alt="Plumber working under a sink" width={1280} height={896} loading="lazy" className="rounded-2xl object-cover shadow-card" />
        <div>
          <h2 className="text-3xl font-bold">Built on word-of-mouth</h2>
          <p className="mt-4 text-muted-foreground">Steel City Plumbing & Heating started with one engineer, one van and a simple promise: turn up on time, do brilliant work, and charge a fair price. Fifteen years on, that hasn't changed — we've just got a bigger team and even more happy neighbours.</p>
          <p className="mt-3 text-muted-foreground">Today our nine engineers cover the whole of Sheffield, Rotherham and the surrounding villages. Most of our work still comes from recommendations — and that's how we like it.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-cta px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card">Get in touch <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <h2 className="text-center text-3xl font-bold">Why Sheffield trusts us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { i: ShieldCheck, t: "Gas Safe Registered", d: "Reg. 123456 — every engineer carries ID." },
              { i: Award, t: "15+ Years Experience", d: "Thousands of installs and repairs." },
              { i: Users, t: "Family Run", d: "Local team, local values." },
              { i: Heart, t: "5,200+ Happy Customers", d: "4.9★ on Google & Trustpilot." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-6 text-center shadow-card">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary/10 text-secondary"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
