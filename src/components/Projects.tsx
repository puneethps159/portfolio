import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Construction of Check Dam",
      description: "A check dam is a small dam constructed across a drainage ditch, swale, or channel to lower flow velocity. Reduced runoff velocity helps control erosion and gullying while allowing sediment settlement.",
      tech: ["Hydraulic Understanding", "Erosion Control", "Sediment Management", "Channel Flow Regulation"],
      status: "Completed",
    },
    {
      title: "Project Duration",
      description: "Academic project executed over 4 months with focus on conceptual design, practical implementation understanding, and problem-solving in water management structures.",
      tech: ["4 Months", "Team Collaboration", "Design to Execution", "Technical Presentation"],
      status: "Academic",
    },
    {
      title: "Applied Construction Materials",
      description: "Studied practical usage of stone, pea-gravel sandbags, and logs for check-dam applications based on terrain and flow requirements.",
      tech: ["Stone", "Sandbag with Pea Gravel", "Logs", "Site Suitability"],
      status: "In Progress",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          Key <span className="text-primary">Projects</span>
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
                  {index === 0 ? "🏗" : index === 1 ? "🏢" : "📐"}
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
                  <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <BadgeCheck className="w-4 h-4 mr-2" />
                    {project.status}
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
