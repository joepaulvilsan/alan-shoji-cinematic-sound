import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="mailto:contact@alanshoji.com"
          className="inline-flex items-center gap-3 text-lg font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
        >
          <Mail className="w-5 h-5" />
          <span>contact@alanshoji.com</span>
        </a>
        
        <div className="flex items-center justify-center gap-8 mb-16">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © 2025 Alan Shoji. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
