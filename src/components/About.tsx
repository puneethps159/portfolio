import { Building, CalendarDays, FileCheck2, Mail, MapPin, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-primary">The Engineer</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-in">
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              I completed B.E. in Civil Engineering in 2021 from Sri Siddhartha Institute of Engineering College, Maralur, Tumkur. I have also completed M.Tech in Structural Engineering in 2023, and I am focused on working as a Civil Engineer while progressing toward Civil Class-1 Contractor responsibilities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              I am a quick learner, confident team player, active listener, and adaptive professional with strong communication and leadership qualities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">PUC</p>
                <p className="font-semibold">69.00% | 2017</p>
                <p className="text-sm text-muted-foreground">Sri Taralabalu Jagadhguru PU College, Davangere</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">SSLC</p>
                <p className="font-semibold">7.8 CGPA | 2015</p>
                <p className="text-sm text-muted-foreground">Anmol Public School, Davangere (CBSE)</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground ml-8">#193, LahariNilaya, S S Layout, Chitradurga - 577502, Karnataka</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground ml-8">puneethps2@gmail.com</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold">Personal Details</h3>
              </div>
              <div className="ml-8 mt-3 space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-primary" /> Date of Birth: 26 January 2000</p>
                <p className="flex items-center gap-2"><FileCheck2 className="w-4 h-4 text-primary" /> Father: Prabhulingaiah M K</p>
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Languages: English, Kannada, Telugu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
