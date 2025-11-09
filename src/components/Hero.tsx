import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/Photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-fade-in"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-fade-in"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="font-heading text-5xl md:text-7xl font-bold">
              PAVANKUMAR P S
              <span className="text-primary"></span>
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl text-muted-foreground">
              Software Developer
            </h2>
            <p className="text-accent text-xl font-semibold">Web & AI Enthusiast</p>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building reliable, scalable and intelligent digital experiences.
          </p>

          <div className="flex gap-4 pt-4 justify-center animate-slide-in">
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Hire Me
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="./Pavankumar%20P%20S__ENG22CS0117.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4 justify-center animate-slide-in">
            <a href="https://github.com/Pavankumarpsp" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/pavankumar-p-s-53071a265/" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pavankumarps215@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
