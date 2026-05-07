import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().max(800).optional(),
});

const services = [
  "Emergency Plumbing",
  "Boiler Installation",
  "Boiler Repair",
  "Central Heating",
  "Bathroom Plumbing",
  "Leak Detection",
  "Gas Safety Check",
  "Other",
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = schema.safeParse(data);
    if (!res.success) {
      const fieldErrors: Record<string, string> = {};
      res.error.issues.forEach((i) => { fieldErrors[String(i.path[0])] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-trust/30 bg-trust/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-trust" />
        <h3 className="mt-3 text-xl font-bold">Thanks — request received!</h3>
        <p className="mt-2 text-sm text-muted-foreground">An engineer will be in touch within 30 minutes during working hours.</p>
      </div>
    );
  }

  const input = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-ring transition focus:ring-2";

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "rounded-2xl bg-card p-6 shadow-card sm:p-8"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Your name</label>
          <input name="name" className={input} placeholder="Jane Smith" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Phone</label>
          <input name="phone" className={input} placeholder="07XXX XXXXXX" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Email</label>
        <input name="email" type="email" className={input} placeholder="you@example.com" />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Service required</label>
        <select name="service" className={input} defaultValue="">
          <option value="" disabled>Select a service…</option>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Tell us about the job</label>
        <textarea name="message" rows={4} className={input} placeholder="e.g. Boiler making strange noises, no hot water since this morning…" />
      </div>
      <button type="submit" className="rounded-lg bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]">
        Get my free quote
      </button>
      <p className="text-xs text-muted-foreground">No obligation. We'll never share your details.</p>
    </form>
  );
}
