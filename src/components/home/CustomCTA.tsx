import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, MessageSquare, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: MessageSquare, title: "Beschrijf", step: "01" },
  { icon: FileText, title: "Offerte", step: "02" },
  { icon: Truck, title: "Levering", step: "03" },
];

const CustomCTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Op Maat Laten Maken
            </h2>
            <p className="text-primary-foreground/70 max-w-md">
              Van custom schroeven tot unieke prototypes
            </p>
          </div>

          {/* Steps */}
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10">
                  <span className="text-xs font-bold text-primary-foreground/50">{step.step}</span>
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary-foreground/30 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/custom">
            <Button size="lg" variant="secondary" className="group">
              Start Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomCTA;