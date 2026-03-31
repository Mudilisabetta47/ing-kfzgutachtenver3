import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ChevronRight, Star, Shield } from "lucide-react";
import logoImg from "@/assets/logo-ing.png";
import dgsvImg from "@/assets/dgsv-siegel.png";
import gutachterImg from "@/assets/gutachter-bei-arbeit.jpg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground" itemScope itemType="https://schema.org/LocalBusiness">
    {/* Pre-footer CTA */}
    <div className="blue-gradient">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-5">
            <img
              src={gutachterImg}
              alt="ING Kfz Gutachter bei der Fahrzeugbegutachtung in Braunschweig"
              className="w-20 h-20 rounded-full object-cover border-2 border-accent shadow-lg hidden sm:block"
              loading="lazy"
              width={80}
              height={80}
            />
            <div>
              <h3 className="font-heading text-2xl md:text-3xl tracking-wide">Unfall gehabt? Wir helfen sofort.</h3>
              <p className="text-primary-foreground/60 text-sm mt-1 font-body">Kostenlose Erstberatung – auch abends und am Wochenende erreichbar.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="tel:053122436430"
              className="gold-gradient text-accent-foreground font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 shadow-lg text-sm tracking-wide"
              aria-label="Jetzt anrufen: 0531 22 436 430"
            >
              <Phone className="h-4 w-4" />
              0531 - 22 436 430
            </a>
            <Link
              to="/kontakt"
              className="border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-sm hover:border-accent hover:text-accent transition-all"
            >
              Schaden melden
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block mb-5" aria-label="ING KFZ Gutachten Startseite">
            <img src={logoImg} alt="ING KFZ Gutachten Braunschweig – Logo" className="h-12" width={180} height={48} />
          </Link>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-5 font-body" itemProp="description">
            ING Kfz Gutachten – Ihr unabhängiger und zertifizierter Kfz-Sachverständiger in Braunschweig.
            Unfallgutachten, Wertgutachten, Kostenvoranschläge und Fahrzeugbewertungen. Seit über 10 Jahren
            für Geschädigte in Braunschweig, Salzgitter, Wolfsburg und der gesamten Region.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <img src={dgsvImg} alt="DGSV Zertifizierung – Deutscher Gutachter und Sachverständigen Verband" className="h-12 w-12 object-contain" loading="lazy" width={48} height={48} />
            <div>
              <span className="text-xs text-primary-foreground/40 font-body block">Empfohlener Gutachter</span>
              <span className="text-sm font-semibold text-primary-foreground/70 font-body">DGSV e.V.</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent" />
            ))}
            <span className="text-primary-foreground/50 text-xs ml-2 font-body">120+ Bewertungen</span>
          </div>
        </div>

        {/* Gutachten Links */}
        <nav aria-label="Gutachten Navigation">
          <h4 className="font-heading text-xl mb-5 text-accent tracking-wide">Gutachten</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Unfall-Gutachten", href: "/haftpflichtschaden" },
              { label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
              { label: "Wertgutachten", href: "/wertgutachten" },
              { label: "PKW Gutachten", href: "/kfz-gutachten" },
              { label: "LKW Gutachten", href: "/lkw-gutachten" },
              { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
              { label: "Motorrad Gutachten", href: "/motorrad-gutachten" },
              { label: "Oldtimer Gutachten", href: "/oldtimer-gutachten" },
              { label: "Bagatellschäden", href: "/bagatellschaeden" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-primary-foreground/50 text-sm hover:text-accent transition-colors flex items-center gap-1.5 font-body">
                  <ChevronRight className="h-3 w-3 text-accent/50" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info Links */}
        <nav aria-label="Informationen Navigation">
          <h4 className="font-heading text-xl mb-5 text-accent tracking-wide">Informationen</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Kfz Gutachter", href: "/der-kfz-gutachter" },
              { label: "Ihre Rechte", href: "/ihre-rechte" },
              { label: "Nutzungsausfall", href: "/nutzungsausfall" },
              { label: "Reparaturbestätigung", href: "/reparaturbestaetigung" },
              { label: "Anfahrt & Standort", href: "/anfahrt" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-primary-foreground/50 text-sm hover:text-accent transition-colors flex items-center gap-1.5 font-body">
                  <ChevronRight className="h-3 w-3 text-accent/50" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info with Schema */}
        <div>
          <h4 className="font-heading text-xl mb-5 text-accent tracking-wide">Kontakt</h4>
          <address className="not-italic space-y-4 text-sm text-primary-foreground/50 font-body">
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-primary-foreground/30 text-xs block">Telefon</span>
                <a href="tel:053122436430" className="hover:text-accent transition-colors font-semibold text-primary-foreground/70" itemProp="telephone">
                  0531 - 22 436 430
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-primary-foreground/30 text-xs block">E-Mail</span>
                <a href="mailto:info@kfz-sachverstaendiger-braunschweig.de" className="hover:text-accent transition-colors break-all text-xs" itemProp="email">
                  info@kfz-sachverstaendiger-braunschweig.de
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span className="text-primary-foreground/30 text-xs block">Standort</span>
                <span itemProp="addressLocality">Braunschweig</span> & Region
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-primary-foreground/30 text-xs block">Öffnungszeiten</span>
                <span>Mo – Fr: 08:00 – 18:00</span>
                <br />
                <span>Sa: nach Vereinbarung</span>
              </div>
            </div>
          </address>

          <div className="mt-6 flex items-center gap-2">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs text-primary-foreground/40 font-body">100% unabhängig & versicherungsungebunden</span>
          </div>
        </div>
      </div>

      {/* SEO region keywords */}
      <div className="mt-12 pt-8 border-t border-primary-foreground/10">
        <p className="text-xs text-primary-foreground/30 leading-relaxed font-body">
          <strong className="text-primary-foreground/40">Einzugsgebiet:</strong>{" "}
          Kfz Gutachter Braunschweig · Kfz Sachverständiger Salzgitter · Unfallgutachten Wolfsburg ·
          Kfz Gutachten Gifhorn · Fahrzeugbewertung Peine · Wertgutachten Wolfenbüttel ·
          Schadengutachten Helmstedt · Kfz Gutachter Goslar · Sachverständiger Königslutter ·
          Unfallgutachter Braunschweig-Mitte · Gutachter Weststadt · Kfz Bewertung Stöckheim
        </p>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4 text-xs text-primary-foreground/35 font-body">
        <span>&copy; {new Date().getFullYear()} ING Kfz Gutachten Braunschweig – Alle Rechte vorbehalten</span>
        <nav className="flex gap-4" aria-label="Rechtliches">
          <Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link>
        </nav>
      </div>
    </div>

    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "ING Kfz Gutachten Braunschweig",
          description:
            "Unabhängiger und zertifizierter Kfz-Sachverständiger in Braunschweig. Unfallgutachten, Wertgutachten, Kostenvoranschläge für PKW, LKW, E-Auto und Oldtimer.",
          url: "https://kfz-sachverstaendiger-braunschweig.de",
          telephone: "+49-531-22436430",
          email: "info@kfz-sachverstaendiger-braunschweig.de",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Braunschweig",
            addressRegion: "Niedersachsen",
            addressCountry: "DE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "52.2689",
            longitude: "10.5268",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "14:00",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Braunschweig" },
            { "@type": "City", name: "Salzgitter" },
            { "@type": "City", name: "Wolfsburg" },
            { "@type": "City", name: "Gifhorn" },
            { "@type": "City", name: "Peine" },
            { "@type": "City", name: "Wolfenbüttel" },
            { "@type": "City", name: "Helmstedt" },
            { "@type": "City", name: "Goslar" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
            bestRating: "5",
          },
          priceRange: "Kostenlos bei unverschuldeten Unfällen",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Kfz-Gutachten Leistungen",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unfallgutachten" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kostenvoranschlag" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wertgutachten" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Auto Gutachten" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "LKW Gutachten" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oldtimer Gutachten" } },
            ],
          },
          sameAs: [],
        }),
      }}
    />
  </footer>
);

export default Footer;
