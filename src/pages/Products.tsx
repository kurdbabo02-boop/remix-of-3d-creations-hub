import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Box, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";

const categories = ["Alle", "Seizoensproducten", "Custom Onderdelen", "Gadgets", "Decoratie"];

const products = [
  { id: 1, name: "Modulaire Wandhouder Set", price: 34.99, category: "Gadgets", badge: "Populair" },
  { id: 2, name: "Custom M5 Schroeven (10x)", price: null, category: "Custom Onderdelen", badge: "Op Aanvraag" },
  { id: 3, name: "Kabelmanagement Systeem", price: 19.99, category: "Gadgets", badge: "Nieuw" },
  { id: 4, name: "Geometrische Plantenbak", price: 44.99, category: "Decoratie", badge: null },
  { id: 5, name: "Kerst Ornament Set (6x)", price: 24.99, category: "Seizoensproducten", badge: null },
  { id: 6, name: "Bureauorganizer Compact", price: 29.99, category: "Gadgets", badge: null },
  { id: 7, name: "Custom Spacers Kit", price: null, category: "Custom Onderdelen", badge: "Op Aanvraag" },
  { id: 8, name: "Moderne Vaas Medium", price: 39.99, category: "Decoratie", badge: "Nieuw" },
  { id: 9, name: "Paas Decoratie Set", price: 19.99, category: "Seizoensproducten", badge: null },
  { id: 10, name: "Telefoonstandaard Pro", price: 14.99, category: "Gadgets", badge: "Populair" },
  { id: 11, name: "Custom Behuizing", price: null, category: "Custom Onderdelen", badge: "Op Aanvraag" },
  { id: 12, name: "Geometrisch Wandobject", price: 54.99, category: "Decoratie", badge: null },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Alle" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Producten
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Ontdek ons complete assortiment van 3D-geprinte producten
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Zoek producten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="group"
              >
                <div className="h-full rounded-xl bg-card shadow-card overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="relative aspect-square bg-muted flex items-center justify-center">
                    <Box className="w-16 h-16 text-muted-foreground/20" />
                    {product.badge && (
                      <Badge
                        variant={product.price ? "default" : "secondary"}
                        className="absolute top-3 left-3"
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-1" />
                        Bekijk
                      </Button>
                    </div>
                  </div>

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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Box className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-muted-foreground">Geen producten gevonden</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;