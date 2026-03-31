import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Impressum = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Impressum</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-primary-foreground">
          Impressum
        </motion.h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              ING KFZ Gutachten<br />
              Sachverständigenbüro für Kraftfahrzeuge<br />
              Hildesheimer Straße 229<br />
              30519 Hannover
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Kontakt</h3>
            <p>
              Telefon: 0511 - 543 00 976<br />
              Mobil: 0173 - 72 79 763<br />
              E-Mail: info@ing-gutachten.de
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Berufsbezeichnung</h3>
            <p>Kfz-Sachverständiger / Kfz-Gutachter</p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
              ING KFZ Gutachten<br />
              Hildesheimer Straße 229<br />
              30519 Hannover
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Streitschlichtung</h3>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-sm leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Haftung für Inhalte</h3>
            <p className="text-sm leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Haftung für Links</h3>
            <p className="text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Urheberrecht</h3>
            <p className="text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Impressum;
