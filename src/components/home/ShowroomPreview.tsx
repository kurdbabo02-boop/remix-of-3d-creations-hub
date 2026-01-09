import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShowroomPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <RotateCcw className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Interactieve 3D Viewer
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Bekijk Producten in{" "}
              <span className="text-primary">360° 3D</span>
            </h2>

            <p className="text-background/70 text-lg mb-8">
              Draai, zoom en bekijk onze producten van alle kanten voordat je 
              bestelt. Upload je eigen 3D-ontwerp en zie precies hoe het eruit komt!
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Draai producten rond met je muis of vinger",
                "Zoom in op details",
                "Bekijk materiaal en textuur",
                "Upload je eigen 3D-bestanden",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                    ✓
                  </span>
                  <span className="text-background/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/showroom">
              <Button size="lg" className="shadow-playful group">
                Open 3D Showroom
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* 3D Preview Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Rotating cube visualization */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: "1000px" }}
              >
                <div className="w-48 h-48 relative" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center">
                    <span className="text-6xl">📦</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-secondary/30 rounded-full"
              />

              {/* Control hints */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm text-sm"
              >
                🖱️ Klik en sleep om te draaien
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomPreview;
