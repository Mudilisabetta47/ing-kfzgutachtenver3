import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Muss ich den Gutachter der Versicherung akzeptieren?", a: "Nein. Als Geschädigter haben Sie das Recht auf einen eigenen, unabhängigen Gutachter. Bei einem von der Versicherung beauftragten Gutachter kann ein Interessenkonflikt vorliegen." },
  { q: "Wer zahlt das Gutachten?", a: "In der Regel die gegnerische Versicherung, wenn Sie nicht der Unfallverursacher sind. Alle Kosten, die durch das Schadensereignis entstanden sind, werden von der gegnerischen Versicherung übernommen." },
  { q: "Wie schnell bekomme ich einen Termin?", a: "Meist innerhalb von 24 Stunden. In dringenden Fällen kommen wir noch am selben Tag zu Ihnen." },
  { q: "Kann ich die Werkstatt frei wählen?", a: "Ja, Sie entscheiden selbst, wo Ihr Fahrzeug repariert wird." },
  { q: "Was kostet ein Kfz-Gutachten in Braunschweig?", a: "Die Kosten variieren je nach Schadenumfang. Bei einem unverschuldeten Unfall trägt die gegnerische Versicherung die Gutachterkosten (§ 249 BGB)." },
  { q: "Brauche ich bei jedem Unfall ein Gutachten?", a: "Bei Bagatellschäden unter ca. 750 € netto reicht oft ein Kostenvoranschlag. Bei höheren Schäden empfehlen wir ein vollständiges Gutachten." },
  { q: "Was passiert bei einem wirtschaftlichen Totalschaden?", a: "Ein wirtschaftlicher Totalschaden liegt vor, wenn die Reparaturkosten den Wiederbeschaffungswert übersteigen. Sie haben Anspruch auf den Wiederbeschaffungswert abzüglich Restwert." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-background">
    <div className="max-w-3xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-2">Häufige Fragen</h2>
        <p className="text-muted-foreground text-sm font-body mb-8">Antworten auf die wichtigsten Fragen rund um Kfz-Gutachten.</p>
      </ScrollReveal>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-card">
            <AccordionTrigger className="text-left font-semibold text-foreground text-sm hover:no-underline py-4 font-body">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 font-body">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
