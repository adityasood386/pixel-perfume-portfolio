import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Packages</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
            Investment
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-lg p-8 lg:p-10 flex flex-col ${
                pkg.popular
                  ? "glass-card border-primary/40 shadow-[0_0_40px_-10px_hsl(var(--gold)/0.3)]"
                  : "glass-card"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient px-4 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={12} className="text-primary-foreground" />
                  <span className="font-body text-xs tracking-wider uppercase text-primary-foreground">Most Popular</span>
                </div>
              )}

              <h3 className="font-display text-2xl text-foreground">{pkg.name}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1 mb-6">{pkg.description}</p>

              <p className="font-display text-4xl md:text-5xl gold-text mb-8">{pkg.price}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 font-body text-sm tracking-widest uppercase rounded-sm transition-all ${
                  pkg.popular
                    ? "gold-gradient text-primary-foreground"
                    : "border border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
