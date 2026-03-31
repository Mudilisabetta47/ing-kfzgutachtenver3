import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import type { LucideIcon } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: LucideIcon;
  intro: string;
  details: string[];
  benefits: string[];
  ctaText?: string;
}

const ServicePage = ({ title, subtitle, heroImage, icon: Icon, intro, details, benefits, ctaText = "Jetzt Gutachten anfragen" }: ServicePageProps) => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,80%,15%)]/95 via-[hsl(217,69%,28%)]/60 to-[hsl(217,80%,15%)]/30" />
      <div className="relative container-narrow px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">{title}</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-gradient w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="h-7 w-7 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground">{title}</h1>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <ScrollReveal>
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed text-base mb-8">{intro}</p>
                
                {details.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-sm mb-4">{paragraph}</p>
                ))}

                <h3 className="font-heading text-2xl text-foreground mt-10 mb-6">Ihre Vorteile</h3>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="blue-gradient p-6 rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="font-heading text-xl mb-4">Schnell & unkompliziert</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir melden uns umgehend.</p>
                <a href="tel:053122436430" className="flex items-center gap-3 mb-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-bold">0531 - 22 436 430</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/kontakt"
                  className="block gold-gradient text-accent-foreground font-bold text-center py-4 px-6 rounded-xl shadow-lg shadow-accent/20 tracking-wide"
                >
                  {ctaText}
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-heading text-lg text-foreground mb-3">Weitere Leistungen</h4>
                <ul className="space-y-2">
                  {[
                    { label: "PKW Gutachten", href: "/kfz-gutachten" },
                    { label: "LKW Gutachten", href: "/lkw-gutachten" },
                    { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
                    { label: "Motorrad", href: "/motorrad-gutachten" },
                    { label: "Oldtimer", href: "/oldtimer-gutachten" },
                    { label: "Bagatellschäden", href: "/bagatellschaeden" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ServicePage;
