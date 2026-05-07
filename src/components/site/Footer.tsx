import { Link } from "@tanstack/react-router";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary"><Wrench className="h-5 w-5" /></span>
            {SITE.short}
          </div>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Gas Safe registered plumbing & heating engineers serving Sheffield and surrounding areas since 2008.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/emergency" className="hover:text-secondary">Emergency Plumbing</Link></li>
            <li><Link to="/boilers" className="hover:text-secondary">Boiler Installation</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Central Heating</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Bathroom Plumbing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/areas" className="hover:text-secondary">Areas We Cover</Link></li>
            <li><Link to="/reviews" className="hover:text-secondary">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {SITE.email}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Gas Safe Reg. 123456. All rights reserved.</p>
          <p>Sheffield · Rotherham · Chesterfield · Barnsley</p>
        </div>
      </div>
    </footer>
  );
}
