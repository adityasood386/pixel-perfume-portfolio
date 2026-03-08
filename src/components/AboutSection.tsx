import { motion } from "framer-motion";
import { Camera, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const stats = [
  { icon: Camera, label: "Experience", value: siteConfig.photographer.experience },
  { icon: Heart, label: "Weddings", value: siteConfig.photographer.weddingsCovered },
  { icon: MapPin, label: "Cities", value: siteConfig.photographer.citiesCovered },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={siteConfig.photographer.portrait}
                alt={siteConfig.photographer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg hidden md:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6">
              {siteConfig.photographer.name}
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
              {siteConfig.photographer.bio}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-lg p-4 text-center"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={20} />
                  <p className="font-display text-2xl text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">{stat.label}</p>
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
