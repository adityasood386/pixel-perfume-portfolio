import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { siteConfig } from "@/config/siteConfig";

const GallerySection = () => {
  return (
    <section id="portfolio" className="section-padding overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] text-foreground">
            OUR <span className="text-primary neon-glow">STORIES</span>
          </h2>
          <div className="line-accent mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation
            className="!pb-16"
          >
            {siteConfig.galleryImages.map((img, i) => (
              <SwiperSlide key={i} className="!w-[260px] sm:!w-[380px] md:!w-[480px]">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border/20">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      <p className="section-label text-[10px]">{img.category}</p>
                      <p className="font-display text-2xl text-foreground tracking-wider mt-1">{img.alt.toUpperCase()}</p>
                    </div>
                  </div>

                  {/* Neon border on hover */}
                  <div className="absolute inset-0 rounded-sm border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none group-hover:neon-border" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
