/**
 * ============================================
 * SITE CONFIGURATION
 * ============================================
 * Edit this file to change all content on the website.
 * You can update photos, prices, text, and contact info here.
 */

import heroImage from "@/assets/hero-wedding.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import photographerPortrait from "@/assets/photographer-portrait.jpg";

export const siteConfig = {
  // ---- BRAND ----
  brandName: "Sood's Photography",
  tagline: "Capturing Love, One Frame at a Time",
  heroSubtext: "Premium wedding photography that tells your unique love story with cinematic elegance. Based in Jalandhar, Punjab.",
  heroImage: heroImage,

  // ---- PHOTOGRAPHER ----
  photographer: {
    name: "Chandan Sood",
    portrait: photographerPortrait,
    bio: "With over 26 years of experience capturing love stories, I bring a cinematic eye and a passionate heart to every wedding. My approach blends candid moments with editorial elegance, ensuring every emotion is preserved beautifully.",
    experience: "26+ Years",
    weddingsCovered: "500+",
  },

  // ---- GALLERY IMAGES ----
  // Replace these imports with your own images
  galleryImages: [
    { src: gallery1, alt: "Wedding Ceremony", category: "Ceremony" },
    { src: gallery2, alt: "Bridal Details", category: "Details" },
    { src: gallery3, alt: "Reception Dance", category: "Reception" },
    { src: gallery4, alt: "Pre-Wedding Shoot", category: "Pre-Wedding" },
    { src: gallery5, alt: "Wedding Decor", category: "Decor" },
    { src: gallery6, alt: "Candid Moments", category: "Candid" },
  ],

  // ---- PRICING (INR) ----
  packages: [
    {
      name: "Silver",
      price: "₹49,999",
      description: "Perfect for intimate ceremonies",
      features: [
        "4 Hours Coverage",
        "1 Photographer",
        "100+ Edited Photos",
        "Online Gallery",
        "Basic Photo Album",
      ],
      popular: false,
    },
    {
      name: "Gold",
      price: "₹99,999",
      description: "Our most popular wedding package",
      features: [
        "Full Day Coverage",
        "2 Photographers",
        "300+ Edited Photos",
        "Online Gallery",
        "Premium Photo Album",
        "Pre-Wedding Shoot",
        "Drone Coverage",
      ],
      popular: true,
    },
    {
      name: "Platinum",
      price: "₹1,99,999",
      description: "The ultimate luxury experience",
      features: [
        "Multi-Day Coverage",
        "3 Photographers + Videographer",
        "500+ Edited Photos",
        "Cinematic Wedding Film",
        "Luxury Photo Album",
        "Pre-Wedding Shoot",
        "Drone + Crane Coverage",
        "Same-Day Edit Highlights",
      ],
      popular: false,
    },
  ],

  // ---- TESTIMONIALS ----
  testimonials: [
    {
      name: "Priya & Rahul",
      text: "Arjun captured our wedding day so beautifully that every time we look at the photos, we relive those magical moments. His attention to detail is unmatched!",
      location: "Mumbai",
    },
    {
      name: "Sneha & Vikram",
      text: "From the pre-wedding shoot to the reception, every frame was a masterpiece. We couldn't have asked for a better photographer.",
      location: "Delhi",
    },
    {
      name: "Ananya & Karthik",
      text: "The cinematic wedding film brought tears to our eyes. Arjun's team went above and beyond to capture every emotion perfectly.",
      location: "Bangalore",
    },
  ],

  // ---- CONTACT INFO ----
  contact: {
    email: "chandansood36@gmail.com",
    phone: "+91 98765 43210",
    instagram: "@soodsdigitalstudio",
    location: "Ashok Nagar opposite Sehnai Palace, Jalandhar",
  },

  // ---- SEO ----
  seo: {
    title: "Sood's Photography – Premium Wedding Photography Jalandhar",
    description: "Cinematic wedding photography capturing your love story with elegance. Based in Jalandhar, Punjab. Book your dream wedding photographer today.",
  },
};
