import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="FastPrint3D" className="h-8 w-auto brightness-0 invert" />
            <span className="font-display text-lg font-semibold">
              FastPrint3D
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { name: "Producten", path: "/producten" },
              { name: "Showroom", path: "/showroom" },
              { name: "Op Maat", path: "/custom" },
              { name: "Over Ons", path: "/over-ons" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@fastprint3d.nl" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
              info@fastprint3d.nl
            </a>
            <a href="tel:+31612345678" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +31 6 12345678
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 pt-6 text-center text-primary-foreground/50 text-sm">
          <p>© 2025 FastPrint3D. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;