import { Phone, FileText, MapPin, ClipboardCheck, Car } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  { icon: Phone, label: "Schaden melden", href: "/schaden-melden" },
  { icon: FileText, label: "Gutachten", href: "/haftpflichtschaden" },
  { icon: ClipboardCheck, label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
  { icon: Car, label: "Bewertung", href: "/wertgutachten" },
  { icon: MapPin, label: "Anfahrt", href: "/anfahrt" },
];

const QuickActions = () => (
  <section className="relative z-10 -mt-8 sm:-mt-8 mb-0">
    <div className="max-w-5xl mx-auto px-3 sm:px-4">
      <div className="bg-card shadow-xl border border-border grid grid-cols-5 divide-x divide-border">
        {actions.map((a) => (
          <Link
            key={a.label}
            to={a.href}
            className="flex flex-col items-center gap-1.5 sm:gap-2.5 py-4 sm:py-6 px-1 sm:px-4 hover:bg-primary/5 transition-colors group"
          >
            <a.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-[9px] sm:text-xs font-medium text-foreground tracking-wide text-center font-body leading-tight">{a.label}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default QuickActions;
