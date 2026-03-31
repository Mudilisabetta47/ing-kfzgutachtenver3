import { Phone, Mail, MapPin, Clock } from "lucide-react";

const TopBar = () => (
  <div className="blue-gradient text-primary-foreground text-xs py-2.5 px-4">
    <div className="container-narrow flex flex-wrap justify-between items-center gap-2">
      <div className="flex flex-wrap items-center gap-6">
        <a href="tel:051154300976" className="flex items-center gap-2 hover:text-accent transition-colors font-medium">
          <Phone className="h-3.5 w-3.5 text-accent" />
          0511 - 543 00 976
        </a>
        <a href="tel:017372979763" className="flex items-center gap-2 hover:text-accent transition-colors font-medium hidden sm:flex">
          <Phone className="h-3.5 w-3.5 text-accent" />
          0173 - 72 79 763
        </a>
        <a href="mailto:info@ing-gutachten.de" className="flex items-center gap-2 hover:text-accent transition-colors font-medium hidden md:flex">
          <Mail className="h-3.5 w-3.5 text-accent" />
          info@ing-gutachten.de
        </a>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <span className="flex items-center gap-2 font-medium">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          Hildesheimer Str. 229, 30519 Hannover
        </span>
        <span className="flex items-center gap-2 font-medium">
          <Clock className="h-3.5 w-3.5 text-accent" />
          Mo–Fr: 08:00 – 18:00
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
