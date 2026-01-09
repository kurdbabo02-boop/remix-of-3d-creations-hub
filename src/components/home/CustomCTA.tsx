import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Upload, MessageSquare, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    title: "Vertel je wens",
    description: "Beschrijf wat je nodig hebt of upload je eigen ontwerp",
    color: "bg-primary",
  },
  {
    icon: Upload,
    title: "Upload & Bespreek",
    description: "We bekijken je ontwerp en bespreken de details",
    color: "bg-secondary",
  },
  {
    icon: Truck,
    title: "Print & Verzend",
    description: "We printen je product en versturen het naar je toe",
    color: "bg-accent",
  },
];

const CustomCTA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Iets <span className="text-gradient">Op Maat</span> Nodig?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van custom schroeven tot unieke onderdelen - we maken alles wat je nodig hebt
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-highlight text-highlight-foreground font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                </div>
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
            <Button size="lg" className="shadow-playful group">
              Start Je Custom Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomCTA;
