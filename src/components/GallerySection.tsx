import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { siteConfig } from "@/config/siteConfig";

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + siteConfig.galleryImages.length) % siteConfig.galleryImages.length : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % siteConfig.galleryImages.length : null
    );

  return (
    <>
      <section id="portfolio" className="section-padding overflow-hidden relative">
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
                    onClick={() => openLightbox(i)}
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border/20">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                    </div>

                    <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <div>
                        <p className="section-label text-[10px]">{img.category}</p>
                        <p className="font-display text-2xl text-foreground tracking-wider mt-1">{img.alt.toUpperCase()}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-sm border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none group-hover:neon-border" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground/60 hover:text-primary transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-foreground/60 hover:text-primary transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={siteConfig.galleryImages[lightboxIndex].src}
              alt={siteConfig.galleryImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-foreground/60 hover:text-primary transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 font-body text-sm text-muted-foreground tracking-widest">
              {lightboxIndex + 1} / {siteConfig.galleryImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
