import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import beyazTisort from "@/assets/signature/beyaz-tisort.png";
import beyazTisortDetay from "@/assets/signature/beyaz-tisort-detay.jpg";
import beyazTisortFlat from "@/assets/signature/beyaz-tisort-flat.jpg";

import siyahTisort from "@/assets/signature/siyah-tisort.png";
import siyahTisortDetay from "@/assets/signature/siyah-tisort-detay.jpg";
import siyahTisortFlat from "@/assets/signature/siyah-tisort-flat.jpg";

import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import siyahPolo from "@/assets/signature/siyah-polo.jpeg";
import beyazPolo from "@/assets/signature/beyaz-polo.png";

interface SignatureProduct {
  name: string;
  images: string[];
}

const signatureProducts: SignatureProduct[] = [
  {
    name: "Essential Tee — White",
    images: [beyazTisort, beyazTisortDetay, beyazTisortFlat],
  },
  {
    name: "Essential Tee — Black",
    images: [siyahTisort, siyahTisortDetay, siyahTisortFlat],
  },
  {
    name: "Summit Hoodie — Black",
    images: [siyahHoodie],
  },
  {
    name: "Summit Hoodie — White",
    images: [beyazHoodie],
  },
  {
    name: "Polo Yaka — Black",
    images: [siyahPolo],
  },
  {
    name: "Polo Yaka — White",
    images: [beyazPolo],
  },
];

const ProductCard = ({ product, index }: { product: SignatureProduct; index: number }) => {
  const [current, setCurrent] = useState(0);
  const hasMultiple = product.images.length > 1;

  const prev = () => setCurrent((c) => (c === 0 ? product.images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === product.images.length - 1 ? 0 : c + 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-card mb-4">
        <img
          src={product.images[current]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-4" : "bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <h3 className="font-display text-lg text-foreground">{product.name}</h3>
    </motion.div>
  );
};

const SignatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="signature" className="py-32 bg-secondary overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">Özel Seri</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Signature <span className="text-gradient-gold italic">Collection</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
          <p className="font-body text-base text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Alpenzo Signature Collection, markanın en öz tasarım felsefesini yansıtan seçkin bir seridir.
            Sınırlı sayıda üretilen bu koleksiyon, sadeliğin lüksle buluştuğu benzersiz bir deneyim sunar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureProducts.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
