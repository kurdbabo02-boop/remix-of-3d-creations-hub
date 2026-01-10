import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, FileText, MessageSquare, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    icon: MessageSquare,
    title: "Beschrijf je project",
    description: "Deel je specificaties",
  },
  {
    icon: FileText,
    title: "Ontvang offerte",
    description: "Binnen 24 uur",
  },
  {
    icon: Truck,
    title: "Productie & levering",
    description: "Snelle verzending",
  },
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
    deadline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
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
      deadline: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Op Maat Laten Maken
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Van custom schroeven tot complete prototypes — deel je wensen en ontvang een offerte
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-primary font-medium">Stap {index + 1}</span>
                  <h3 className="font-display font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="font-display text-xl font-semibold mb-6">
                Offerte Aanvragen
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      placeholder="Je naam"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="je@email.nl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+31 6 12345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Categorie *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer categorie" />
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Aantal (schatting)</Label>
                    <Input
                      id="quantity"
                      placeholder="Bijv. 10, 50, 100+"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Gewenste leverdatum</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Projectomschrijving *</Label>
                  <Textarea
                    id="description"
                    placeholder="Beschrijf je project zo gedetailleerd mogelijk. Denk aan afmetingen, materiaal, kleur, functie, etc."
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                {/* File Upload Placeholder */}
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    3D-bestand uploaden (STL, OBJ, GLTF)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Binnenkort beschikbaar
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Verzenden...</>
                  ) : (
                    <>
                      Offerte Aanvragen
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomPage;
