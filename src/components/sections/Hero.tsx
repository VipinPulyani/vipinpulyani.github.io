import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-in fade-in duration-1000">
            Hello, I'm Your Name
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in duration-1000 delay-200">
            Full Stack Developer & Creative Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-300">
            I craft beautiful, functional web experiences that bring ideas to life. 
            Passionate about modern technologies and clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in duration-1000 delay-400">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 animate-in fade-in duration-1000 delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;