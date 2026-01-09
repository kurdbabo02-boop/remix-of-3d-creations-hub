import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Placeholder products - will be replaced with real data from database
const featuredProducts = [
  {
    id: 1,
    name: "Kerstboom Decoratie Set",
    price: 24.99,
    image: "🎄",
    category: "Seizoen",
    badge: "Populair",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    name: "Custom M5 Schroeven (10x)",
    price: null,
    image: "🔩",
    category: "Op Maat",
    badge: "Op Aanvraag",
    badgeColor: "bg-secondary",
  },
  {
    id: 3,
    name: "Telefoonhouder Universeel",
    price: 14.99,
    image: "📱",
    category: "Gadgets",
    badge: "Nieuw",
    badgeColor: "bg-accent",
  },
  {
    id: 4,
    name: "Geometrische Vaas",
    price: 29.99,
    image: "🏺",
    category: "Decoratie",
    badge: null,
    badgeColor: null,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Uitgelichte <span className="text-gradient">Producten</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Onze meest populaire en nieuwste 3D-prints
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card shadow-card overflow-hidden hover:shadow-playful transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </span>
                  {product.badge && (
                    <Badge
                      className={`absolute top-3 left-3 ${product.badgeColor} text-white`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link to={`/producten/${product.id}`}>
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <Eye className="w-4 h-4 mr-1" />
                        Bekijk
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs font-medium text-primary">
                    {product.category}
                  </span>
                  <h3 className="font-display font-semibold mt-1 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    {product.price ? (
                      <span className="font-bold text-lg">
                        €{product.price.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Prijs op aanvraag
                      </span>
                    )}
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
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
