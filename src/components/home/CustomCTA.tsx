import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, MessageSquare, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    title: "Beschrijf je project",
    description: "Deel je specificaties en wensen met ons",
    step: "01",
  },
  {
    icon: FileText,
    title: "Ontvang offerte",
    description: "We sturen een gedetailleerde prijsopgave",
    step: "02",
  },
  {
    icon: Truck,
    title: "Productie & levering",
    description: "We printen en verzenden je product",
    step: "03",
  },
];

const CustomCTA = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Op Maat Laten Maken
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van custom schroeven tot unieke prototypes — we maken alles wat je nodig hebt
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-4xl font-bold text-muted-foreground/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link to="/custom">
            <Button size="lg" className="group">
              Start Je Custom Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomCTA;
