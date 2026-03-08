import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useRef } from "react";

const stats = [
  { icon: Camera, label: "Experience", value: siteConfig.photographer.experience },
  { icon: Heart, label: "Weddings", value: siteConfig.photographer.weddingsCovered },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -left-40 top-1/3 w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div style={{ y: imgY }} className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img
                src={siteConfig.photographer.portrait}
                alt={siteConfig.photographer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            {/* Corner accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-primary" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.05em] text-foreground mb-2">
              THE <span className="text-primary neon-glow">ARTIST</span>
            </h2>
            <div className="line-accent mb-8" />

            <h3 className="font-display text-2xl md:text-3xl text-foreground/80 tracking-wider mb-6">
              {siteConfig.photographer.name.toUpperCase()}
            </h3>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-10 font-light">
              {siteConfig.photographer.bio}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, borderColor: "hsl(var(--neon-pink) / 0.4)" }}
                  className="glass-card rounded-sm p-4 text-center border border-border/20 transition-all duration-300"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={18} />
                  <p className="font-display text-2xl md:text-3xl text-foreground tracking-wider">{stat.value}</p>
                  <p className="font-body text-[10px] text-muted-foreground tracking-[0.2em] uppercase mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
