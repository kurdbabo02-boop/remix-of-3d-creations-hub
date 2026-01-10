import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Wrench, Cpu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "Seizoensproducten",
    description: "Decoraties en items voor elk seizoen",
    icon: Calendar,
    count: "12 producten",
  },
  {
    id: 2,
    title: "Custom Onderdelen",
    description: "Op maat gemaakte componenten en schroeven",
    icon: Wrench,
    count: "Op aanvraag",
  },
  {
    id: 3,
    title: "Technische Parts",
    description: "Functionele onderdelen en prototypes",
    icon: Cpu,
    count: "8 producten",
  },
  {
    id: 4,
    title: "Woondecoratie",
    description: "Moderne decoratieve objecten",
    icon: Home,
    count: "15 producten",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Onze Categorieën
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van standaard producten tot volledig op maat gemaakte oplossingen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/producten?category=${category.id}`}>
                <div className="group h-full p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {category.count}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/producten">
            <Button variant="outline" className="group">
              Bekijk Alle Producten
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
