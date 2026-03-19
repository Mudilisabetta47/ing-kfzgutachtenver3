import { Phone, Mail, MapPin, Clock } from "lucide-react";

const TopBar = () => (
  <div className="blue-gradient text-primary-foreground text-xs py-2 px-4">
    <div className="container-narrow flex flex-wrap justify-between items-center gap-2">
      <div className="flex flex-wrap items-center gap-5">
        <a href="tel:051112345678" className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium">
          <Phone className="h-3.5 w-3.5 text-accent" />
          0511 / 12345678
        </a>
        <a href="mailto:info@gutachter-hannover.de" className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium">
          <Mail className="h-3.5 w-3.5 text-accent" />
          <span className="hidden sm:inline">info@gutachter-hannover.de</span>
        </a>
        <span className="hidden md:flex items-center gap-1.5 font-medium">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          Hannover & Region
        </span>
      </div>
      <div className="hidden lg:flex items-center gap-1.5 font-medium">
        <Clock className="h-3.5 w-3.5 text-accent" />
        Mo–Fr: 08:00 – 18:00
      </div>
    </div>
  </div>
);

export default TopBar;
