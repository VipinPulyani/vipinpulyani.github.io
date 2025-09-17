import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-secondary border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Your Name
            </div>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;