import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      {/* Mobile sticky call bar */}
      <a
        href={SITE.phoneHref}
        className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-emergency py-3.5 text-sm font-bold text-emergency-foreground shadow-elegant animate-pulse-ring sm:hidden"
      >
        <Phone className="h-4 w-4" /> Call Now · {SITE.phone}
      </a>
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110 sm:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
