import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import signatureLogo from "@/assets/alpenzo-signature.png";
import design1 from "@/assets/design-1.jpeg";

const SignatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Signature logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative p-8">
              <img
                src={signatureLogo}
                alt="Alpenzo Signature Collection"
                className="w-full max-w-lg mx-auto"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/40" />
            </div>
          </motion.div>

          {/* Text + product preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">Özel Seri</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Signature<br />
              <span className="text-gradient-gold italic">Collection</span>
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Alpenzo Signature Collection, markanın en öz tasarım felsefesini yansıtan seçkin bir seridir. 
              Her parça, el yazısı logomuzun zarafetiyle buluşan premium kumaşlarla hayat bulur.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Sınırlı sayıda üretilen bu koleksiyon, sadeliğin lüksle buluştuğu 
              benzersiz bir deneyim sunar.
            </p>

            {/* Mini product preview - no price */}
            <div className="flex items-center gap-6 p-4 border border-border/50 bg-background/50">
              <img
                src={design1}
                alt="Signature Tee"
                className="w-20 h-24 object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-display text-lg text-foreground">Signature Tee</p>
                <p className="font-body text-xs text-muted-foreground">100% Premium Pamuk — Özel Baskı</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
