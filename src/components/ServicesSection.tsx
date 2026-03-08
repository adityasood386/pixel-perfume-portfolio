import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Printer, Image, Film, Video, PartyPopper, Heart, GraduationCap, Sparkles } from "lucide-react";
import { useRef } from "react";

const studioServices = [
  { icon: Camera, title: "Passport Photos", desc: "Standard & custom size passport and visa photos" },
  { icon: Printer, title: "Photo Printing", desc: "All sizes — wallet, 4×6, 5×7, 8×10, A4 & custom" },
  { icon: Image, title: "Photo Lamination", desc: "Glossy & matte lamination for lasting prints" },
  { icon: Sparkles, title: "Photo Restoration", desc: "Restore & retouch old or damaged photographs" },
  { icon: Printer, title: "Canvas & Frames", desc: "Premium canvas prints & designer photo frames" },
  { icon: Film, title: "VCR/DVD to Pen Drive", desc: "Convert old VCR tapes & DVDs to digital pen drives" },
];

const coverageServices = [
  { icon: Heart, title: "Wedding Shoot", desc: "Complete wedding day cinematic coverage" },
  { icon: Film, title: "Pre-Wedding", desc: "Dreamy pre-wedding shoots at stunning locations" },
  { icon: PartyPopper, title: "Birthday Shoot", desc: "Fun & vibrant birthday party photography" },
  { icon: Heart, title: "Anniversary", desc: "Celebrate milestones with beautiful portraits" },
  { icon: GraduationCap, title: "Retirement", desc: "Capture farewell & retirement ceremonies" },
  { icon: Video, title: "Live Streaming", desc: "Professional camera live event streaming" },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25 } }}
    className="glass-card border border-border/20 hover:border-primary/40 rounded-sm p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 group cursor-default"
  >
    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      <Icon size={22} className="text-primary" />
    </div>
    <h3 className="font-display text-lg tracking-wider text-foreground">{title}</h3>
    <p className="font-body text-xs text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerX = useTransform(scrollYProgress, [0, 0.25], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          style={{ x: headerX, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">What We Offer</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] text-foreground">
            OUR <span className="text-primary neon-glow">SERVICES</span>
          </h2>
          <div className="line-accent mt-4 mx-auto" />
        </motion.div>

        {/* Studio Services */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <h3 className="font-display text-2xl md:text-4xl tracking-[0.1em] text-foreground">
              STUDIO <span className="text-primary">SERVICES</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {studioServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Coverage Services */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h3 className="font-display text-2xl md:text-4xl tracking-[0.1em] text-foreground">
              COVERAGE <span className="text-primary">SERVICES</span>
            </h3>
            <div className="w-1 h-10 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {coverageServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
