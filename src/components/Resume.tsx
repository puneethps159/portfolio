import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-secondary/30 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center space-y-6 animate-slide-in">
          <h3 className="font-heading text-2xl font-bold">Download My Resume</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a comprehensive overview of my education, skills, experience, and projects.
            Available in PDF format for your convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
              <a href="./Pavankumar%20P%20S__ENG22CS0117.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download PDF Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="./Pavankumar%20P%20S__ENG22CS0117.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                View Online
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
