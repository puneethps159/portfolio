import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Driver Drowsiness Detection System",
      description: "Real-time driver monitoring system using Eye Aspect Ratio (EAR) detection with SMS alerts via Twilio, audio alarms, and Google Maps API integration for location tracking.",
      tech: ["Python", "OpenCV", "Twilio API", "Google Maps", "Computer Vision"],
      github: "https://github.com/Pavankumarpsp/drowsiness-detection",
    },
    {
      title: "Social Media Comment Analyzer",
      description: "AI-powered sentiment and toxicity analysis tool for social media comments with visualization features including WordCloud generation.",
      tech: ["Python", "Streamlit", "NLP", "Machine Learning", "Data Visualization"],
      github: "https://github.com/Pavankumarpsp/Social-Media-Comment-Analyzer",
    },
    {
      title: "Money Tracker Web Application",
      description: "Full-stack personal finance management application with expense tracking, categorization, and comprehensive transaction history.",
      tech: ["Node.js", "MongoDB", "JavaScript", "Express", "REST API"],
      github: "https://github.com/Pavankumarpsp/Money-Tracker-web",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group animate-slide-up ${
                index === 0 ? '' : index === 1 ? 'animation-delay-200' : 'animation-delay-400'
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {index === 0 ? "🚗" : index === 1 ? "💬" : "💰"}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
