import { Calculator, ClipboardCheck, Compass, HardHat, Ruler, ShieldCheck } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Compass,
      title: "Core Civil Skills",
      skills: ["Planning", "Designing", "Overseeing Construction", "Execution Support"],
    },
    {
      icon: Calculator,
      title: "Key Strengths",
      skills: ["Quick Learner", "Confident", "Team Player", "Active Listener"],
    },
    {
      icon: HardHat,
      title: "Personal Skills",
      skills: ["Excellent Communication", "Adaptive Nature", "Leadership Qualities", "Positive Mindset"],
    },
    {
      icon: ShieldCheck,
      title: "Certifications",
      skills: ["C++", "HTML", "MS Office 2007", "Basics of Java"],
    },
    {
      icon: Ruler,
      title: "Current Learning",
      skills: ["Manual Testing (Pursuing)", "Technical Documentation", "Construction Reporting", "Site Communication"],
    },
    {
      icon: ClipboardCheck,
      title: "Work Values",
      skills: ["Accuracy", "Responsibility", "Punctuality", "Safety First"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          Core <span className="text-primary">Expertise</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all hover-scale group animate-slide-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
