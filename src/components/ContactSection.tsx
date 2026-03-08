import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useState, useRef } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, date, message } = formData;
    const text = `Hi, I'm ${name}.%0APhone: ${phone}%0AEvent Date: ${date}%0A%0A${message}`;
    const phoneNumber = siteConfig.contact.phone.replace(/[\s+\-]/g, "");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactItems = [
    { icon: Mail, label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Phone, label: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: siteConfig.contact.location, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.location)}` },
    { icon: Instagram, label: siteConfig.contact.instagram, href: `https://www.instagram.com/${siteConfig.contact.instagram.replace("@", "")}` },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Contact</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] text-foreground">
            LET'S <span className="text-primary neon-glow">CONNECT</span>
          </h2>
          <div className="line-accent mt-4 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
              Ready to capture your special day? Get in touch and let's create something unforgettable together.
            </p>

            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin || item.icon === Instagram ? "_blank" : undefined}
                  rel={item.icon === MapPin || item.icon === Instagram ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-sm glass-card border border-border/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="font-body text-sm text-foreground/70 group-hover:text-primary transition-colors">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-secondary/50 border border-border/30 rounded-sm px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-secondary/50 border border-border/30 rounded-sm px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              className="w-full bg-secondary/50 border border-border/30 rounded-sm px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Wedding / Event Date"
              className="w-full bg-secondary/50 border border-border/30 rounded-sm px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Tell us about your event..."
              rows={5}
              className="w-full bg-secondary/50 border border-border/30 rounded-sm px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 neon-btn text-primary-foreground font-body text-sm font-bold tracking-[0.25em] uppercase rounded-sm flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent! ✨" : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
