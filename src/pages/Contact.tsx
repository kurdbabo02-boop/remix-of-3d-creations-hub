import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    label: "E-mail",
    value: "info@fastprint3d.nl",
    href: "mailto:info@fastprint3d.nl",
    description: "Voor algemene vragen",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 12345678",
    href: "tel:+31612345678",
    description: "Ma-Vr 9:00 - 17:00",
  },
  {
    icon: MapPin,
    label: "Locatie",
    value: "Nederland",
    href: null,
    description: "Landelijke bezorging",
  },
  {
    icon: Clock,
    label: "Reactietijd",
    value: "Binnen 24 uur",
    href: null,
    description: "Op werkdagen",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor je bericht. We reageren zo snel mogelijk.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
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
              Contact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Heb je vragen of wil je een project bespreken? Neem gerust contact met ons op.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    className="block p-5 rounded-xl bg-card shadow-card hover:shadow-elegant transition-all group"
                  >
                    <method.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-sm mb-0.5">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </a>
                ) : (
                  <div className="p-5 rounded-xl bg-card shadow-card">
                    <method.icon className="w-5 h-5 text-primary mb-3" />
                    <p className="font-medium text-sm mb-0.5">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-xl shadow-elegant p-8">
              <h2 className="font-display text-xl font-semibold mb-2">
                Stuur een bericht
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Vul het formulier in en we reageren zo snel mogelijk
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
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

                <Input
                  placeholder="Onderwerp *"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="h-12"
                />

                <Textarea
                  placeholder="Je bericht *"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Verzenden..."
                  ) : (
                    <>
                      Verstuur Bericht
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Link to Quote */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Offerte nodig?{" "}
                <a href="/custom" className="text-primary font-medium hover:underline">
                  Vraag hier een offerte aan
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;