import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Sheffield Plumber & Heating Engineer" },
      { name: "description", content: "Get in touch with Steel City Plumbing & Heating. Call, WhatsApp, email or request a free quote online. 24/7 emergency line." },
      { property: "og:title", content: "Contact Steel City P&H" },
      { property: "og:description", content: "Call, WhatsApp or message us for a free quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Get in touch" title="Speak to a Sheffield engineer today" subtitle="Free quotes, friendly advice, and a 24/7 emergency line — we're always at the end of the phone." />
      <section className="container-tight grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { i: Phone, t: "Call us", v: SITE.phone, href: SITE.phoneHref, sub: "24/7 emergency line" },
            { i: MessageCircle, t: "WhatsApp", v: "Send a message", href: `https://wa.me/${SITE.whatsapp}`, sub: "Photos welcome" },
            { i: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}`, sub: "Replies within 1 working hour" },
            { i: MapPin, t: "Based in", v: SITE.address, sub: "Covering S postcodes & beyond" },
            { i: Clock, t: "Hours", v: "Mon–Sat · 7am–7pm", sub: "24/7 for emergencies" },
          ].map(({ i: Icon, t, v, sub, href }) => (
            <a key={t} href={href} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-secondary/40">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-cta text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t}</p>
                <p className="font-semibold">{v}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            </a>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Request a free quote</h2>
          <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 30 minutes during working hours.</p>
          <div className="mt-6"><QuoteForm /></div>
        </div>
      </section>
    </SiteLayout>
  );
}
