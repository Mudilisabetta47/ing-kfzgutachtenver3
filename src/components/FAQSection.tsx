import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Was kostet ein Kfz-Gutachten?", a: "Die Kosten richten sich nach der Schadenshöhe. Bei unverschuldeten Unfällen übernimmt die gegnerische Versicherung die Kosten vollständig." },
  { q: "Wer bezahlt das Gutachten nach einem unverschuldeten Unfall?", a: "Die Haftpflichtversicherung des Unfallverursachers. Sie haben das Recht, einen unabhängigen Sachverständigen Ihrer Wahl zu beauftragen." },
  { q: "Wie schnell bekomme ich einen Termin?", a: "In der Regel innerhalb von 24 Stunden. In dringenden Fällen auch kurzfristiger – rufen Sie uns einfach an." },
  { q: "Kommen Sie auch zu mir vor Ort?", a: "Ja! Vor-Ort-Service gehört zu unserem Standard – an die Unfallstelle, Werkstatt oder zu Ihnen nach Hause im Raum Hannover." },
  { q: "Was ist der Unterschied zwischen Kostenvoranschlag und Gutachten?", a: "Ein Kostenvoranschlag listet nur Reparaturkosten. Ein Gutachten dokumentiert den gesamten Schaden inklusive Minderwert und dient als rechtssichere Grundlage." },
  { q: "Kann ich den Gutachter frei wählen?", a: "Ja! Als Geschädigter haben Sie das Recht auf einen Gutachter Ihrer Wahl. Lassen Sie sich keinen von der Versicherung vorschreiben." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-card overflow-hidden">
    <div className="container-narrow max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Häufige Fragen</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <AccordionItem value={`faq-${i}`} className="bg-secondary border-none px-6">
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
