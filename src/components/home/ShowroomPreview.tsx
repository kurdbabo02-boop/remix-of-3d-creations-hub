import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, ZoomIn, Layers, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: MousePointer, label: "Drag om te roteren" },
  { icon: ZoomIn, label: "Scroll om te zoomen" },
  { icon: Layers, label: "Bekijk alle details" },
];

const ShowroomPreview = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <RotateCcw className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Interactieve 3D Viewer
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Bekijk Producten in{" "}
              <span className="text-gradient">360°</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Draai, zoom en bekijk onze producten van alle kanten voordat je 
              bestelt. Volledig interactieve 3D-modellen voor de beste ervaring.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature.label}</span>
                </div>
              ))}
            </div>

            <Link to="/showroom">
              <Button size="lg" className="group">
                Open 3D Showroom
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* 3D Preview Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border" />
              
              {/* Rotating cube visualization */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: "1000px" }}
              >
                <div 
                  className="w-32 h-32 relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-lg backdrop-blur-sm" />
                </div>
              </motion.div>

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 rounded-2xl" />

              {/* Control hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-sm text-muted-foreground">
                Klik en sleep om te draaien
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomPreview;
