import { siteConfig } from "@/config/siteConfig";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl gold-text">{siteConfig.brandName}</p>
        <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
          Made with <Heart size={12} className="text-primary" /> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
