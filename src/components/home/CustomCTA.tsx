import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomCTA = () => {
  return (
    <section className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-lg font-semibold">
              Op Maat Laten Maken
            </h2>
            <p className="text-primary-foreground/70 text-sm">
              Van custom onderdelen tot prototypes
            </p>
          </div>

          <Link to="/custom">
            <Button size="sm" variant="secondary" className="group">
              Start Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomCTA;