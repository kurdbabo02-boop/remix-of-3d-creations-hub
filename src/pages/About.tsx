import { motion } from "framer-motion";
import { Box, Target, Users, Award, Zap, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Precisie",
    description: "Elk product wordt met de hoogste nauwkeurigheid geprint.",
  },
  {
    icon: Zap,
    title: "Snelheid",
    description: "Van ontwerp naar product in de kortst mogelijke tijd.",
  },
  {
    icon: Users,
    title: "Samenwerking",
    description: "We werken nauw samen met klanten voor het beste resultaat.",
  },
  {
    icon: Award,
    title: "Kwaliteit",
    description: "Alleen de beste materialen en technieken.",
  },
];

const features = [
  "FDM en SLA printtechnologieën",
  "Breed scala aan materialen",
  "Van prototype tot productie",
  "Snelle levertijden",
  "Persoonlijk advies",
  "Concurrerende prijzen",
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Over 3DPrintPro
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wij zijn gespecialiseerd in hoogwaardige 3D-printoplossingen voor 
              bedrijven en particulieren
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Van Passie naar Professie
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wat begon als een hobby is uitgegroeid tot een volwaardig bedrijf 
                  dat bedrijven en particulieren helpt met hun 3D-printprojecten.
                </p>
                <p>
                  Of je nu een enkel prototype nodig hebt, custom onderdelen voor 
                  je project, of een complete productierun — wij hebben de expertise 
                  en apparatuur om het te realiseren.
                </p>
                <p>
                  Met een focus op kwaliteit, precisie en klanttevredenheid leveren 
                  we producten die aan de hoogste standaarden voldoen.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                <Box className="w-24 h-24 text-primary/30" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Onze Kernwaarden
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-lg bg-card border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="font-display text-xl font-semibold mb-6 text-center">
                Wat Wij Bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
