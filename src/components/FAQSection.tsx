import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Muss ich den Gutachter der Versicherung akzeptieren?", a: "Nein. Als Geschädigter haben Sie das Recht auf einen eigenen, unabhängigen Gutachter. Durch die Beauftragung der gegnerischen Versicherung kann ein Interessenkonflikt vorliegen." },
  { q: "Wer zahlt das Gutachten?", a: "In der Regel die gegnerische Versicherung, wenn Sie nicht der Unfallverursacher sind. Alle Kosten, die durch das Schadensereignis entstanden sind, werden von der gegnerischen Versicherung übernommen." },
  { q: "Wie schnell bekomme ich einen Termin?", a: "Meist innerhalb von 24–48 Stunden, in dringenden Fällen noch schneller. Wir bieten kurzfristige Termine, oft noch am selben Tag." },
  { q: "Kann ich die Werkstatt frei wählen?", a: "Ja, Sie entscheiden selbst, wo Ihr Fahrzeug repariert wird. Bei Fahrzeugen älter als drei Jahre müssen Sie eine lückenlose Wartungshistorie nachweisen, wenn Sie eine markengebundene Werkstatt wählen." },
  { q: "Wie lange dauert die Gutachtenerstellung?", a: "Die Bearbeitungsdauer hängt vom Schadensumfang ab. Je nach Art der Beschädigung müssen evtl. technische Maßnahmen wie Achsvermessung oder Karosserievermessung durchgeführt werden." },
  { q: "Was kostet ein Kfz-Gutachten in Hannover?", a: "Die Kosten variieren je nach Schadenumfang und Fahrzeugtyp. Bei einem unverschuldeten Unfall trägt die gegnerische Versicherung die Gutachterkosten gemäß § 249 BGB." },
  { q: "Brauche ich bei jedem Unfall ein Gutachten?", a: "Bei Bagatellschäden unter ca. 750–1.000 € netto reicht oft ein qualifizierter Kostenvoranschlag. Bei höheren Schäden empfehlen wir immer ein vollständiges Gutachten." },
  { q: "Was passiert bei einem wirtschaftlichen Totalschaden?", a: "Ein wirtschaftlicher Totalschaden liegt vor, wenn die Reparaturkosten den Wiederbeschaffungswert übersteigen. Sie haben Anspruch auf den Wiederbeschaffungswert abzüglich Restwert." },
  { q: "Soll ich das Fahrzeug vor der Besichtigung waschen?", a: "Um die Spuren des Schadensereignisses bestmöglich dokumentieren zu können, empfehlen wir das Fahrzeug vor der Schadensaufnahme nicht zu waschen." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-background overflow-hidden">
    <div className="container-narrow max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Häufige Fragen – kurz & knapp</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 gap-3">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{faq.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
