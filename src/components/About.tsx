import { MapPin, Mail, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-in">
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              I am an aspiring Software Development Engineer with a strong focus on Data Structures and Algorithms (DSA).  
               I work with Java, Python, SQL, and data-driven applications involving APIs, databases, and machine learning models.           
             I believe in writing clean, efficient code and enjoy solving complex problems through technology while continuously learning and improving as a developer.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              I welcome opportunities to connect and collaboratively delve into the dynamic realm of technology. Let's explore and innovate together!
            </p>
          </div>

          <div className="space-y-6 animate-slide-in">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground ml-8">Bengaluru, India</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground ml-8">pavankumarps215@gmail.com</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold">Profiles</h3>
              </div>
              <div className="flex gap-4 ml-8 mt-3">
                <a href="https://github.com/Pavankumarpsp" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/pavankumar-p-s-53071a265/" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  LinkedIn
                </a>
                <a href="https://leetcode.com/pavankumar" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
