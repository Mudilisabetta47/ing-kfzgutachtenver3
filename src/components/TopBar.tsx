import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
    <div className="container-narrow flex flex-wrap justify-between items-center gap-2">
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <a href="tel:051112345678" className="flex items-center gap-1.5 hover:text-accent transition-colors">
          <Phone className="h-3.5 w-3.5" />
          <span>0511 / 12345678</span>
        </a>
        <a href="mailto:info@gutachter-hannover.de" className="flex items-center gap-1.5 hover:text-accent transition-colors">
          <Mail className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">info@gutachter-hannover.de</span>
        </a>
        <span className="hidden md:flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          Hannover und Region
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
