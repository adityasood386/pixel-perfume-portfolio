import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax-like zoom */}
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={siteConfig.heroImage}
          alt="Wedding Photography"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Multi-layer overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="overflow-hidden mb-6"
        >
          <p className="section-label">Wedding Photography • Jalandhar</p>
        </motion.div>

        {/* Main title - GTA style massive condensed text */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="font-display text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[0.85] tracking-[0.05em] text-foreground"
        >
          <span className="block">SOOD'S</span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block text-primary neon-glow"
          >
            DIGITAL
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="block"
          >
            STUDIO
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-body text-sm md:text-base text-foreground/50 mt-6 md:mt-8 max-w-md tracking-wider font-light"
        >
          {siteConfig.heroSubtext}
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 md:mt-12 neon-btn px-12 py-4 text-primary-foreground font-body text-sm font-bold tracking-[0.3em] uppercase"
        >
          Explore Work
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 animate-float"
        >
          <ChevronDown className="text-primary animate-pulse-neon" size={28} />
        </motion.div>
      </div>

      {/* Corner accents like GTA */}
      <div className="absolute top-20 left-4 md:left-8 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-20 right-4 md:right-8 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-4 md:left-8 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-4 md:right-8 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default HeroSection;
