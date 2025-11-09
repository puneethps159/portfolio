import { Code, Globe, Database, Cpu, BarChart3, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "C"],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      icon: Cpu,
      title: "Backend & Runtime",
      skills: ["Node.js", "REST APIs"],
    },
    {
      icon: BarChart3,
      title: "ML & Data Science",
      skills: ["Machine Learning", "Data Analysis", "OpenCV","Power BI"] ,
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Tableau", "Linux", "GitHub", "VS Code", "Excel"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
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
