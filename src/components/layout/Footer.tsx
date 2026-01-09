import { Link } from "react-router-dom";
import { Printer, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary">
                <Printer className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">3D Print Shop</span>
            </div>
            <p className="text-background/70 text-sm">
              Alles wat je nodig hebt op het gebied van 3D-printen. 
              Van kant-en-klare producten tot custom ontwerpen op maat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/producten" className="text-background/70 hover:text-primary transition-colors">
                  Producten
                </Link>
              </li>
              <li>
                <Link to="/showroom" className="text-background/70 hover:text-primary transition-colors">
                  3D Showroom
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-background/70 hover:text-primary transition-colors">
                  Op Maat
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-background/70 hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@3dprintshop.nl</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>+31 6 12345678</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nederland</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Volg Ons</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 rounded-xl bg-background/10 hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-background/10 hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/50 text-sm">
          <p>© 2025 3D Print Shop. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
