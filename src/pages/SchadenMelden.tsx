import { useState, FormEvent } from "react";
import { Send, CheckCircle, Phone, Upload, Car, User, FileText, MapPin, Calendar, Clock, AlertTriangle, Camera } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const carBrands = [
  "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Cadillac",
  "Chevrolet", "Chrysler", "Citroën", "Cupra", "Dacia", "Daewoo", "Daihatsu",
  "Dodge", "DS", "Ferrari", "Fiat", "Ford", "Genesis", "Honda", "Hummer",
  "Hyundai", "Infiniti", "Isuzu", "Iveco", "Jaguar", "Jeep", "Kia",
  "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lincoln", "Lotus",
  "MAN", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "MG",
  "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Polestar", "Porsche",
  "Renault", "Rolls-Royce", "Rover", "Saab", "Scania", "Seat", "Škoda",
  "Smart", "SsangYong", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen",
  "Volvo", "Wiesmann", "Sonstige"
];

const years = Array.from({ length: 35 }, (_, i) => (2025 - i).toString());

const damageTypes = [
  "Haftpflichtschaden (unverschuldet)",
  "Kaskoschaden (selbst verschuldet)",
  "Parkschaden",
  "Auffahrunfall",
  "Wildschaden",
  "Hagelschaden",
  "Vandalismus",
  "Sonstiger Schaden",
];

const serviceTypes = [
  "Unfallgutachten",
  "Kostenvoranschlag",
  "Kurzgutachten",
  "Wertgutachten",
  "Reparaturbestätigung",
  "Beweissicherung",
];

const inputClass =
  "w-full border border-input bg-background px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body transition-colors rounded-none";
const labelClass = "block text-[10px] sm:text-xs font-semibold text-foreground mb-1.5 font-body uppercase tracking-wider";
const selectClass =
  "w-full border border-input bg-background px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body text-foreground transition-colors appearance-none rounded-none";

const SchadenMelden = () => {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const totalSteps = 4;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero banner */}
        <section className="bg-primary-dark py-10 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary-foreground/40 mb-2 sm:mb-3 font-body">
              Sofort-Meldung
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl text-primary-foreground tracking-wide mb-3 sm:mb-4">
              Schaden melden
            </h1>
            <p className="text-primary-foreground/60 text-sm sm:text-base md:text-lg font-body max-w-2xl">
              Füllen Sie das Formular aus und wir kümmern uns um alles Weitere.
              Bei unverschuldeten Unfällen entstehen Ihnen keine Kosten.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <a
                href="tel:053122436430"
                className="text-accent font-bold font-body flex items-center gap-2 hover:text-accent-hover transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                0531 - 22 436 430
              </a>
              <span className="text-primary-foreground/30 hidden sm:inline">|</span>
              <span className="text-primary-foreground/40 text-xs sm:text-sm font-body">24h Erreichbar</span>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="py-8 sm:py-12 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-3 sm:px-4">
            {submitted ? (
              <ScrollReveal>
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="font-heading text-4xl text-foreground mb-4 tracking-wide">
                    Meldung erhalten!
                  </h2>
                  <p className="text-muted-foreground font-body text-lg mb-2 max-w-md mx-auto">
                    Vielen Dank für Ihre Schadensmeldung. Wir werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    In der Regel innerhalb von 30 Minuten während unserer Geschäftszeiten.
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              <>
                {/* Progress bar */}
                <div className="mb-8 sm:mb-12">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    {[
                      { num: 1, label: "Persönliche Daten", icon: User },
                      { num: 2, label: "Fahrzeugdaten", icon: Car },
                      { num: 3, label: "Schadendetails", icon: AlertTriangle },
                      { num: 4, label: "Fotos & Absenden", icon: Camera },
                    ].map((s) => (
                      <button
                        key={s.num}
                        type="button"
                        onClick={() => setStep(s.num)}
                        className={`flex flex-col items-center gap-2 flex-1 group ${
                          s.num <= step ? "cursor-pointer" : "cursor-default"
                        }`}
                        disabled={s.num > step}
                      >
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold transition-colors ${
                            s.num === step
                              ? "bg-primary text-primary-foreground"
                              : s.num < step
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {s.num < step ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <s.icon className="h-4 w-4" />
                          )}
                        </div>
                        <span
                          className={`text-[10px] md:text-xs font-medium tracking-wide uppercase hidden sm:block ${
                            s.num === step ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {s.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="h-1 bg-muted">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal data */}
                  {step === 1 && (
                    <ScrollReveal>
                      <div className="space-y-1 mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
                          Ihre Kontaktdaten
                        </h2>
                        <p className="text-muted-foreground text-sm font-body">
                          Damit wir Sie schnellstmöglich zurückrufen können.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Vorname *</label>
                          <input type="text" required className={inputClass} placeholder="Max" />
                        </div>
                        <div>
                          <label className={labelClass}>Nachname *</label>
                          <input type="text" required className={inputClass} placeholder="Mustermann" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Telefon *</label>
                          <input type="tel" required className={inputClass} placeholder="0531 123456" />
                        </div>
                        <div>
                          <label className={labelClass}>E-Mail *</label>
                          <input type="email" required className={inputClass} placeholder="max@beispiel.de" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-5 mb-6">
                        <div className="md:col-span-1">
                          <label className={labelClass}>PLZ</label>
                          <input type="text" className={inputClass} placeholder="38100" maxLength={5} />
                        </div>
                        <div className="md:col-span-2">
                          <label className={labelClass}>Ort</label>
                          <input type="text" className={inputClass} placeholder="Braunschweig" />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className={labelClass}>Straße & Hausnr.</label>
                        <input type="text" className={inputClass} placeholder="Musterstraße 1" />
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full sm:w-auto gold-gradient text-accent-foreground font-bold px-8 sm:px-10 py-3.5 text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
                        >
                          Weiter <span>→</span>
                        </button>
                      </div>
                    </ScrollReveal>
                  )}

                  {/* Step 2: Vehicle data */}
                  {step === 2 && (
                    <ScrollReveal>
                      <div className="space-y-1 mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
                          Fahrzeugdaten
                        </h2>
                        <p className="text-muted-foreground text-sm font-body">
                          Angaben zu Ihrem Fahrzeug für die Schadensermittlung.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Fahrzeugmarke *</label>
                          <select required className={selectClass}>
                            <option value="">Marke wählen...</option>
                            {carBrands.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Modell *</label>
                          <input type="text" required className={inputClass} placeholder="z.B. Golf, 3er, A4..." />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Erstzulassung</label>
                          <select className={selectClass}>
                            <option value="">Jahr wählen...</option>
                            {years.map((y) => (
                              <option key={y} value={y}>{y}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Kilometerstand</label>
                          <input type="text" className={inputClass} placeholder="z.B. 85.000 km" />
                        </div>
                        <div>
                          <label className={labelClass}>Kennzeichen</label>
                          <input type="text" className={inputClass} placeholder="BS-AB 1234" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Fahrzeugtyp</label>
                          <select className={selectClass}>
                            <option value="">Typ wählen...</option>
                            <option>PKW</option>
                            <option>LKW / Transporter</option>
                            <option>Motorrad</option>
                            <option>Wohnmobil</option>
                            <option>Oldtimer</option>
                            <option>E-Auto / Hybrid</option>
                            <option>Sonstiges</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Kraftstoff</label>
                          <select className={selectClass}>
                            <option value="">Kraftstoff wählen...</option>
                            <option>Benzin</option>
                            <option>Diesel</option>
                            <option>Elektro</option>
                            <option>Hybrid</option>
                            <option>Erdgas (CNG)</option>
                            <option>Autogas (LPG)</option>
                            <option>Wasserstoff</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="border border-border text-foreground font-medium px-8 py-3.5 text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                        >
                          ← Zurück
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="gold-gradient text-accent-foreground font-bold px-10 py-3.5 text-sm uppercase tracking-wider inline-flex items-center gap-2"
                        >
                          Weiter <span>→</span>
                        </button>
                      </div>
                    </ScrollReveal>
                  )}

                  {/* Step 3: Damage details */}
                  {step === 3 && (
                    <ScrollReveal>
                      <div className="space-y-1 mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
                          Schadendetails
                        </h2>
                        <p className="text-muted-foreground text-sm font-body">
                          Beschreiben Sie den Unfallhergang und die gewünschte Leistung.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Art des Schadens *</label>
                          <select required className={selectClass}>
                            <option value="">Bitte wählen...</option>
                            {damageTypes.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Gewünschte Leistung *</label>
                          <select required className={selectClass}>
                            <option value="">Bitte wählen...</option>
                            {serviceTypes.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label className={labelClass}>Unfalldatum</label>
                          <input type="date" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Unfallort</label>
                          <input type="text" className={inputClass} placeholder="z.B. A2 Höhe Braunschweig" />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className={labelClass}>Polizei vor Ort?</label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center gap-2 text-sm font-body text-foreground cursor-pointer">
                            <input type="radio" name="polizei" value="ja" className="accent-primary w-4 h-4" />
                            Ja
                          </label>
                          <label className="flex items-center gap-2 text-sm font-body text-foreground cursor-pointer">
                            <input type="radio" name="polizei" value="nein" className="accent-primary w-4 h-4" />
                            Nein
                          </label>
                          <label className="flex items-center gap-2 text-sm font-body text-foreground cursor-pointer">
                            <input type="radio" name="polizei" value="unbekannt" className="accent-primary w-4 h-4" defaultChecked />
                            Weiß nicht
                          </label>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className={labelClass}>Gegnerische Versicherung</label>
                        <input type="text" className={inputClass} placeholder="z.B. Allianz, HUK-Coburg, ADAC..." />
                      </div>

                      <div className="mb-6">
                        <label className={labelClass}>Schadenbeschreibung *</label>
                        <textarea
                          required
                          rows={5}
                          className={`${inputClass} resize-none`}
                          placeholder="Beschreiben Sie den Unfallhergang und die sichtbaren Schäden möglichst genau..."
                        />
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="border border-border text-foreground font-medium px-8 py-3.5 text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                        >
                          ← Zurück
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(4)}
                          className="gold-gradient text-accent-foreground font-bold px-10 py-3.5 text-sm uppercase tracking-wider inline-flex items-center gap-2"
                        >
                          Weiter <span>→</span>
                        </button>
                      </div>
                    </ScrollReveal>
                  )}

                  {/* Step 4: Photos & Submit */}
                  {step === 4 && (
                    <ScrollReveal>
                      <div className="space-y-1 mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
                          Fotos & Absenden
                        </h2>
                        <p className="text-muted-foreground text-sm font-body">
                          Laden Sie Fotos vom Schaden hoch – das beschleunigt die Bearbeitung.
                        </p>
                      </div>

                      {/* Upload area */}
                      <div className="mb-6">
                        <label className={labelClass}>Schadenfotos (optional)</label>
                        <label className="mt-2 border-2 border-dashed border-border hover:border-primary/40 transition-colors cursor-pointer flex flex-col items-center justify-center py-12 px-6 bg-secondary/30 group">
                          <Upload className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                          <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">
                            Klicken oder Dateien hierher ziehen
                          </span>
                          <span className="text-xs text-muted-foreground mt-1 font-body">
                            JPG, PNG oder PDF · max. 10 MB pro Datei
                          </span>
                          <input
                            type="file"
                            multiple
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={handleFiles}
                          />
                        </label>
                      </div>

                      {files.length > 0 && (
                        <div className="mb-6 space-y-2">
                          {files.map((f, i) => (
                            <div key={i} className="flex items-center justify-between border border-border px-4 py-3 bg-card">
                              <div className="flex items-center gap-3">
                                <FileText className="h-4 w-4 text-primary" />
                                <span className="text-sm font-body text-foreground truncate max-w-[200px] md:max-w-none">{f.name}</span>
                                <span className="text-xs text-muted-foreground font-body">
                                  {(f.size / 1024 / 1024).toFixed(1)} MB
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-muted-foreground hover:text-destructive transition-colors text-xs font-bold uppercase tracking-wider"
                              >
                                Entfernen
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Summary hints */}
                      <div className="bg-primary/5 border border-primary/10 p-6 mb-8">
                        <h3 className="font-heading text-lg text-foreground mb-3 tracking-wide">Tipps für gute Fotos:</h3>
                        <ul className="space-y-2">
                          {[
                            "Gesamtansicht des Fahrzeugs mit sichtbarem Kennzeichen",
                            "Detailaufnahmen aller beschädigten Bereiche",
                            "Unfallstelle / Umgebung wenn möglich",
                            "Kilometerstand auf dem Tacho",
                          ].map((tip, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm font-body text-muted-foreground">
                              <Camera className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Consent */}
                      <div className="mb-8">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" required className="accent-primary w-4 h-4 mt-0.5" />
                          <span className="text-xs text-muted-foreground font-body leading-relaxed">
                            Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Schadensmeldung
                            gespeichert und verarbeitet werden. Weitere Informationen finden Sie in unserer{" "}
                            <a href="/datenschutz" className="text-primary underline">Datenschutzerklärung</a>.
                          </span>
                        </label>
                      </div>

                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="border border-border text-foreground font-medium px-8 py-3.5 text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                        >
                          ← Zurück
                        </button>
                        <button
                          type="submit"
                          className="gold-gradient text-accent-foreground font-bold px-12 py-4 text-sm uppercase tracking-wider inline-flex items-center gap-3 shadow-lg shadow-accent/20"
                        >
                          <Send className="h-4 w-4" />
                          Schaden jetzt melden
                        </button>
                      </div>

                      <p className="text-center text-xs text-muted-foreground font-body mt-6">
                        Bei unverschuldeten Unfällen übernimmt die gegnerische Versicherung alle Gutachterkosten.
                      </p>
                    </ScrollReveal>
                  )}
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SchadenMelden;
