import { motion } from "framer-motion";
import { Target, Users, Award, Zap, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Precisie", description: "Hoogste nauwkeurigheid" },
  { icon: Zap, title: "Snelheid", description: "Korte levertijden" },
  { icon: Users, title: "Samenwerking", description: "Persoonlijk contact" },
  { icon: Award, title: "Kwaliteit", description: "Premium materialen" },
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
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Over FastPrint3D
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Gespecialiseerd in hoogwaardige 3D-printoplossingen voor bedrijven en particulieren
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl shadow-elegant p-8 flex items-center justify-center">
                <img src={logo} alt="FastPrint3D" className="w-full max-w-xs h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-center mb-12">
            Onze Kernwaarden
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl shadow-elegant p-8">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;