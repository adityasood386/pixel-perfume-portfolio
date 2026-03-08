import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg tracking-[0.15em] text-primary neon-glow">
          {siteConfig.brandName.toUpperCase()}
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
