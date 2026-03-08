import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-primary/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("#home")} className="font-display text-lg md:text-xl tracking-[0.1em] text-primary neon-glow shrink-0">
          {siteConfig.brandName.toUpperCase()}
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors duration-150 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-150" />
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 28px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={() => scrollTo(link.href)}
                className="font-display text-4xl tracking-[0.2em] text-foreground hover:text-primary transition-colors"
              >
                {link.label.toUpperCase()}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
