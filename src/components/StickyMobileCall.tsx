import { Phone } from "lucide-react";

const StickyMobileCall = () => (
  <a
    href="tel:053122436430"
    className="fixed bottom-4 right-4 z-50 sm:hidden gold-gradient w-14 h-14 flex items-center justify-center shadow-xl shadow-accent/30"
    aria-label="Jetzt anrufen"
  >
    <Phone className="h-5 w-5 text-accent-foreground" />
  </a>
);

export default StickyMobileCall;
