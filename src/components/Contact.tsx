import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Civil Work Request from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`
    );

    window.location.href = `mailto:puneethps2@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Project request sent to Puneeth Kumar P S",
      description: "Your mail app opened with the project request addressed to puneethps2@gmail.com.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          Contact For <span className="text-primary">Civil Works</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">Let's build your project</h3>
              <p className="text-muted-foreground text-lg">
                Reach out for residential, renovation, and civil contract requirements. Share your scope and location, and I will get back with a practical execution plan.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">puneethps2@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">#193, LahariNilaya, S S Layout, Chitradurga - 577502, Karnataka</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+91 84311 97599</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="mailto:puneethps2@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:+918431197599">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Project Request</h4>
              <div className="flex gap-4">
                <a
                  href="mailto:puneethps2@gmail.com"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://wa.me/918431197599?text=Hello%20Puneeth%20Kumar%2C%20I%20need%20details%20for%20civil%20work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <MessageCircle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://maps.app.goo.gl/TUxqX6F47qAbsp2k8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <MapPin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in">
            <div>
              <Input
                placeholder="Client Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Project details (location, type of work, timeline)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Send className="w-5 h-5 mr-2" />
              Request for a project
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
