import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Packages</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] text-foreground">
            YOUR <span className="text-primary neon-glow">INVESTMENT</span>
          </h2>
          <div className="line-accent mt-4 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative rounded-sm p-8 lg:p-10 flex flex-col glass-card transition-all duration-500 ${
                pkg.popular
                  ? "border-primary/30 neon-border"
                  : "border-border/20 hover:border-primary/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 neon-btn px-5 py-1.5 flex items-center gap-1.5 rounded-sm">
                  <Sparkles size={12} className="text-primary-foreground" />
                  <span className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary-foreground">Most Popular</span>
                </div>
              )}

              <h3 className="font-display text-3xl tracking-[0.15em] text-foreground">{pkg.name.toUpperCase()}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1 mb-6 font-light">{pkg.description}</p>

              <p className="font-display text-5xl md:text-6xl price-glow mb-8">{pkg.price}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className="text-neon-cyan mt-1 shrink-0" />
                    <span className="font-body text-sm text-muted-foreground font-light">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 font-body text-sm font-bold tracking-[0.25em] uppercase rounded-sm transition-all duration-300 ${
                  pkg.popular
                    ? "neon-btn text-primary-foreground"
                    : "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60"
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
