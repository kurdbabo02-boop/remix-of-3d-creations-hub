import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
  {
    id: 1,
    name: "Modulaire Wandhouder Set",
    price: 34.99,
    category: "Accessoires",
    badge: "Populair",
  },
  {
    id: 2,
    name: "Custom M5 Schroeven (10x)",
    price: null,
    category: "Op Maat",
    badge: "Op Aanvraag",
  },
  {
    id: 3,
    name: "Kabelmanagement Systeem",
    price: 19.99,
    category: "Gadgets",
    badge: "Nieuw",
  },
  {
    id: 4,
    name: "Geometrische Plantenbak",
    price: 44.99,
    category: "Decoratie",
    badge: null,
  },
];

const FeaturedProducts = () => {
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
            Uitgelichte Producten
          </h2>
          <p className="text-muted-foreground text-lg">
            Onze meest populaire en nieuwste 3D-prints
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-lg bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <Box className="w-16 h-16 text-muted-foreground/30" />
                  {product.badge && (
                    <Badge
                      variant={product.price ? "default" : "secondary"}
                      className="absolute top-3 left-3"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link to={`/producten/${product.id}`}>
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-1" />
                        Bekijk
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-display font-semibold mt-1 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    {product.price ? (
                      <span className="font-semibold text-lg">
                        €{product.price.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Prijs op aanvraag
                      </span>
                    )}
                    <Button size="sm" variant="ghost" className="text-primary hover:bg-primary hover:text-primary-foreground">
                      {product.price ? (
                        <ShoppingCart className="w-4 h-4" />
                      ) : (
                        "Offerte"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
