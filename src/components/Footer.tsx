import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="mailto:contact@alanshoji.com"
          className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 sm:mb-10 md:mb-12"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>contact@alanshoji.com</span>
        </a>
        
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
          <a
            href="https://www.instagram.com/alan_shoji_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
         
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground">
          © 2025 Alan Shoji. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
