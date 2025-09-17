import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to bring complex projects to life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs 
            and bringing ideas to life through code.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
            or enjoying a good cup of coffee while sketching out ideas for the next big thing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;