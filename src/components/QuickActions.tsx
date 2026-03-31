import { Phone, FileText, MapPin, ClipboardCheck, Car } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  { icon: Phone, label: "Schaden melden", href: "/kontakt" },
  { icon: FileText, label: "Gutachten", href: "/haftpflichtschaden" },
  { icon: ClipboardCheck, label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
  { icon: Car, label: "Fahrzeugbewertung", href: "/wertgutachten" },
  { icon: MapPin, label: "Anfahrt", href: "/anfahrt" },
];

const QuickActions = () => (
  <section className="relative z-10 -mt-8 mb-0">
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-card shadow-xl border border-border grid grid-cols-2 sm:grid-cols-5 divide-x divide-border">
        {actions.map((a) => (
          <Link
            key={a.label}
            to={a.href}
            className="flex flex-col items-center gap-2.5 py-6 px-4 hover:bg-primary/5 transition-colors group"
          >
            <a.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-xs font-medium text-foreground tracking-wide text-center font-body">{a.label}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default QuickActions;
