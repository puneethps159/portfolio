import { BadgeIndianRupee, ClipboardList, HardHat, SearchCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: SearchCheck,
      title: "Plan",
      description: "Requirement study, site understanding, and practical planning support for residential and civil works.",
      points: ["Site visit and discussion", "Scope definition", "Execution roadmap"],
    },
    {
      icon: BadgeIndianRupee,
      title: "Estimate",
      description: "Accurate quantity understanding and cost guidance for better budget control.",
      points: ["Basic BOQ support", "Material and labor estimate", "Budget planning"],
    },
    {
      icon: HardHat,
      title: "Execution",
      description: "On-site coordination and supervision focused on quality and timeline.",
      points: ["Daily work monitoring", "Material coordination", "Workforce alignment"],
    },
    {
      icon: ClipboardList,
      title: "Supervision",
      description: "Structured supervision with updates, quality checks, and clear communication.",
      points: ["Progress updates", "Quality checkpoints", "Issue tracking"],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-secondary/30 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          Service <span className="text-primary">Packages</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-slide-up ${
                index === 0 ? "" : index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : "animation-delay-300"
              }`}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
