import { motion } from "framer-motion";
import heroImage from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Alpenzo Collection" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-xs tracking-[0.5em] text-primary uppercase mb-6"
        >
          Crafted for Elevation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-gradient-gold mb-8"
        >
          ALPENZO
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-px bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-display text-xl md:text-2xl text-foreground/80 font-light italic"
        >
          Sadelikten doğan tarz
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 font-body text-xs tracking-[0.3em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Koleksiyonu Keşfet
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
