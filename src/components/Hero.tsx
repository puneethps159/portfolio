import { Button } from "@/components/ui/button";
import { Building2, HardHat, Mail, MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="absolute top-16 right-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-fade-in"></div>
      <div className="absolute -bottom-10 left-0 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl animate-fade-in"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
              <HardHat className="w-4 h-4" />
              Civil Engineer | Civil Class-1 Contractor
            </div>

            <div className="space-y-3">
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
                PUNEETH KUMAR P S
                <span className="text-primary block">Civil Engineer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none">
                Taking for a challenging position as a Civil Engineer, where I can use my planning, designing and overseeing skills in construction and help grow the company to achieve its goal.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="rounded-xl border border-border bg-card p-4 text-left">
                <p className="text-2xl font-bold text-primary">2021 B.E</p>
                <p className="text-sm text-muted-foreground">Civil Engineering</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-left">
                <p className="text-2xl font-bold text-primary">2023 M.Tech</p>
                <p className="text-sm text-muted-foreground">Structural Engineering</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-left">
                <p className="text-2xl font-bold text-primary">4 Months</p>
                <p className="text-sm text-muted-foreground">Check Dam Project</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Hire for Civil Work
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="/Puneeth%20Kumar%20PS.Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="https://wa.me/918431197599?text=Hello%20Puneeth%20Kumar%2C%20I%20need%20civil%20work%20consultation" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="mailto:puneethps2@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+918431197599" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="inline-flex rounded-2xl overflow-hidden border border-border bg-muted/40">
                <img
                  src="/WhatsApp%20Image%202026-04-05%20at%2013.24.42.jpeg"
                  alt="Puneeth Kumar P S"
                  className="block max-w-full h-auto object-contain"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-left">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Civil Class-1 Contractor Track</p>
                  <p className="text-sm text-muted-foreground">Planning | Designing | Overseeing | Execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
