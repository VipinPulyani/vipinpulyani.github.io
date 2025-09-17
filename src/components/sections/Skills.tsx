import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", 
        "HTML5", "CSS3", "JavaScript", "SASS", "Framer Motion"
      ]
    },
    {
      category: "Backend",
      skills: [
        "Node.js", "Python", "Express.js", "Django", "FastAPI",
        "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "GitHub Actions",
        "Jest", "Cypress", "Figma", "VS Code", "Linux"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;