import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Producten", path: "/producten" },
  { name: "3D Showroom", path: "/showroom" },
  { name: "Op Maat", path: "/custom" },
  { name: "Over Ons", path: "/over-ons" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-xl bg-gradient-playful"
            >
              <Printer className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <span className="font-display text-xl md:text-2xl font-bold text-gradient">
              3D Print Shop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={`font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground shadow-playful"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="relative border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={location.pathname === item.path ? "default" : "ghost"}
                        className={`w-full justify-start font-medium ${
                          location.pathname === item.path
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
