import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was kostet ein Kfz-Gutachten?",
    a: "Die Kosten eines Gutachtens richten sich nach der Schadenshöhe und dem Aufwand. Bei unverschuldeten Unfällen werden die Kosten in der Regel vollständig von der gegnerischen Haftpflichtversicherung übernommen – für Sie entstehen keine Kosten.",
  },
  {
    q: "Wer bezahlt das Gutachten nach einem unverschuldeten Unfall?",
    a: "Bei einem unverschuldeten Unfall trägt die Haftpflichtversicherung des Unfallverursachers die Kosten für Ihren Gutachter. Sie haben das Recht, einen unabhängigen Sachverständigen Ihrer Wahl zu beauftragen.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "In der Regel können wir innerhalb von 24 Stunden einen Termin anbieten. In dringenden Fällen sind auch kurzfristigere Termine möglich – kontaktieren Sie uns einfach telefonisch.",
  },
  {
    q: "Kommen Sie auch zu mir vor Ort?",
    a: "Ja, unser Vor-Ort-Service gehört zu unserem Standardangebot. Wir kommen direkt zu Ihnen – an die Unfallstelle, in die Werkstatt oder zu Ihnen nach Hause im gesamten Raum Hannover.",
  },
  {
    q: "Was ist der Unterschied zwischen Kostenvoranschlag und Gutachten?",
    a: "Ein Kostenvoranschlag listet lediglich die voraussichtlichen Reparaturkosten auf. Ein Gutachten hingegen dokumentiert den gesamten Schaden, berechnet den Minderwert, die Reparaturdauer und dient als rechtssichere Grundlage für Ihre Ansprüche.",
  },
  {
    q: "Kann ich den Gutachter frei wählen?",
    a: "Ja, als Geschädigter haben Sie bei einem unverschuldeten Unfall das Recht, einen Gutachter Ihrer Wahl zu beauftragen. Lassen Sie sich nicht von der gegnerischen Versicherung einen Gutachter vorschreiben.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-card">
    <div className="container-narrow max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Häufig gestellte Fragen</h2>
        <p className="text-muted-foreground">Antworten auf die wichtigsten Fragen rund um Kfz-Gutachten.</p>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary rounded px-5 border-none">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
