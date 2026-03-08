import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
            Love Notes
          </h2>
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
                  <Quote className="mx-auto text-primary/40 mb-6" size={40} />
                  <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="mt-8">
                    <p className="font-body text-sm text-primary tracking-wider">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{t.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
