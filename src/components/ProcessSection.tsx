const steps = [
  { num: "1", title: "Kontaktaufnahme", desc: "Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir beraten Sie kostenlos und unverbindlich." },
  { num: "2", title: "Terminvereinbarung", desc: "Wir vereinbaren kurzfristig einen Termin – meist innerhalb von 24 Stunden." },
  { num: "3", title: "Begutachtung", desc: "Unser Sachverständiger begutachtet Ihr Fahrzeug vor Ort und dokumentiert alle Schäden." },
  { num: "4", title: "Gutachten-Erstellung", desc: "Sie erhalten ein detailliertes, gerichtsfestes Gutachten innerhalb weniger Werktage." },
  { num: "5", title: "Abwicklung", desc: "Wir unterstützen Sie bei der Kommunikation mit Versicherungen und stehen Ihnen zur Seite." },
];

const ProcessSection = () => (
  <section id="ablauf" className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">So läuft die Begutachtung ab</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">In fünf einfachen Schritten zu Ihrem professionellen Kfz-Gutachten.</p>
      </div>
      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center">
            <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
              {s.num}
            </div>
            <h3 className="font-heading text-base font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-0.5 bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
