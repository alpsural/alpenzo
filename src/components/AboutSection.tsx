import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import fabricTexture from "@/assets/fabric-texture.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">Hakkımızda</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Sadelik, gerçek lüksün<br />
              <span className="text-gradient-gold italic">en saf hâlidir.</span>
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Alpenzo, dağların kusursuz çizgisinden ilham alan, modern estetikle şekillenmiş seçkin bir tekstil markasıdır.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Her ayrıntı özenle azaltıldı; geriye sadece zamansız zarafet, üstün kalite ve mükemmel bir duruş kaldı.
            </p>
            <p className="font-display text-lg text-foreground/70 italic">
              "Minimal değil, öz tasarladık."
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={fabricTexture}
                alt="Premium fabric texture"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/30" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border"
        >
          {[
            { value: "100%", label: "Premium Pamuk" },
            { value: "50+", label: "Tasarım" },
            { value: "10K+", label: "Mutlu Müşteri" },
            { value: "2024", label: "Kuruluş" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gradient-gold mb-2">{stat.value}</p>
              <p className="font-body text-xs tracking-widest text-muted-foreground uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
