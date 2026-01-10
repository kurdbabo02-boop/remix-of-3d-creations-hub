import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Gratis offerte binnen 24 uur",
  "Persoonlijk advies van experts",
  "Hoogwaardige materialen",
  "Snelle levertijden",
];

const CustomPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    description: "",
    quantity: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Offerte aanvraag verzonden!",
      description: "We nemen binnen 24 uur contact met je op.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      description: "",
      quantity: "",
    });
    setIsSubmitting(false);
  };

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
              Op Maat Laten Maken
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Van custom onderdelen tot complete prototypes — deel je wensen en ontvang een offerte
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                <h2 className="font-display text-xl font-semibold mb-6">
                  Waarom FastPrint3D?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-primary text-primary-foreground">
                  <h3 className="font-display font-semibold mb-2">
                    Direct contact?
                  </h3>
                  <p className="text-sm text-primary-foreground/70 mb-4">
                    Bel of mail ons voor een snelle reactie
                  </p>
                  <p className="text-sm font-medium">info@fastprint3d.nl</p>
                  <p className="text-sm font-medium">+31 6 12345678</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-xl shadow-elegant p-8">
                <h2 className="font-display text-xl font-semibold mb-2">
                  Vraag een offerte aan
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Vul het formulier in en we nemen binnen 24 uur contact op
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Naam *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Telefoonnummer"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Categorie *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="schroeven">Custom Schroeven & Bevestigingen</SelectItem>
                        <SelectItem value="onderdelen">Technische Onderdelen</SelectItem>
                        <SelectItem value="prototype">Prototype</SelectItem>
                        <SelectItem value="behuizing">Behuizing / Case</SelectItem>
                        <SelectItem value="decoratie">Decoratie</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Input
                    placeholder="Geschat aantal stuks"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="h-12"
                  />

                  <Textarea
                    placeholder="Beschrijf je project zo gedetailleerd mogelijk. Denk aan afmetingen, materiaal, kleur, functie, etc. *"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />

                  {/* File Upload */}
                  <div className="border border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Sleep je 3D-bestand hierheen of klik om te uploaden
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      STL, OBJ, GLTF • Binnenkort beschikbaar
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Verzenden..."
                    ) : (
                      <>
                        Offerte Aanvragen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomPage;