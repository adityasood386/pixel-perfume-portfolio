import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { siteConfig } from "@/config/siteConfig";
import { useRef } from "react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 0.3], [3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div style={{ rotateX: rotate, scale }} className="max-w-5xl mx-auto relative [perspective:1000px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] text-foreground">
            LOVE <span className="text-primary neon-glow">NOTES</span>
          </h2>
          <div className="line-accent mt-4 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop
            className="!pb-14"
          >
            {siteConfig.testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="text-center px-4 md:px-16">
                  <span className="font-display text-8xl md:text-9xl text-primary/20 leading-none select-none">"</span>

                  <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-light -mt-10 md:-mt-14">
                    {t.text}
                  </p>

                  <div className="mt-8 flex flex-col items-center">
                    <div className="line-accent mb-4 mx-auto" />
                    <p className="font-display text-xl tracking-[0.15em] text-primary">{t.name.toUpperCase()}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
