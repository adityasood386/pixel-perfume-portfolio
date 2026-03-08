import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background with scroll-driven parallax zoom */}
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0"
      >
        <motion.img
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={siteConfig.heroImage}
          alt="Wedding Photography"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Multi-layer overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />

      {/* Animated grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />

      {/* Content with scroll parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20 md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="overflow-hidden mb-6"
        >
          <p className="section-label">Wedding Photography • Jalandhar</p>
        </motion.div>

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
            PHOTOGRAPHY
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-body text-sm md:text-base text-foreground/50 mt-6 md:mt-8 max-w-md tracking-wider font-light"
        >
          {siteConfig.heroSubtext}
        </motion.p>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 animate-float"
        >
          <ChevronDown className="text-primary animate-pulse-neon" size={28} />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-20 left-4 md:left-8 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-20 right-4 md:right-8 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-4 md:left-8 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-4 md:right-8 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default HeroSection;
