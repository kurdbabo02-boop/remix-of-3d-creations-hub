import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "Seizoensproducten",
    description: "Feestelijke decoraties en seizoensgebonden items",
    emoji: "🎄",
    color: "from-primary to-accent",
    count: "12 producten",
  },
  {
    id: 2,
    title: "Custom Schroeven",
    description: "Op maat gemaakte schroeven en bevestigingsmaterialen",
    emoji: "🔩",
    color: "from-secondary to-success",
    count: "Op aanvraag",
  },
  {
    id: 3,
    title: "Gadgets & Tools",
    description: "Handige hulpstukken en gereedschap",
    emoji: "🛠️",
    color: "from-accent to-highlight",
    count: "8 producten",
  },
  {
    id: 4,
    title: "Decoratie",
    description: "Unieke decoratieve items voor thuis",
    emoji: "🏠",
    color: "from-highlight to-primary",
    count: "15 producten",
  },
];

const CategoriesSection = () => {
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
            Ontdek Onze <span className="text-gradient">Categorieën</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van kant-en-klare producten tot volledig op maat gemaakte oplossingen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/producten?category=${category.id}`}>
                <div className="group h-full p-6 rounded-2xl bg-card shadow-card hover:shadow-playful transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {category.emoji}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
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
          className="text-center mt-10"
        >
          <Link to="/producten">
            <Button variant="outline" size="lg" className="group">
              Bekijk Alle Producten
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
