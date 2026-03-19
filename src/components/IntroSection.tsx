import aboutImg from "@/assets/about-gutachter.jpg";

const IntroSection = () => (
  <section id="ueber-uns" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ihr unabhängiger Kfz-Sachverständiger in Hannover
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Als zertifizierter Kfz-Gutachter mit langjähriger Erfahrung stehen wir Ihnen kompetent zur Seite – ob nach einem Verkehrsunfall, bei der Fahrzeugbewertung oder zur Beweissicherung. Unser Büro in Hannover betreut Privatkunden, Werkstätten, Anwälte und Versicherungen gleichermaßen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wir legen besonderen Wert auf Unabhängigkeit, Schnelligkeit und Transparenz. Als freier Sachverständiger sind wir an keine Versicherung gebunden und erstellen Gutachten ausschließlich in Ihrem Interesse.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Kurzfristige Termine, Vor-Ort-Service und eine professionelle Dokumentation – darauf können Sie sich verlassen.
          </p>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img src={aboutImg} alt="Kfz-Gutachter Mustermann" className="w-full h-80 object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
