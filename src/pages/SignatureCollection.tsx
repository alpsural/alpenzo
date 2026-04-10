import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import signatureLogo from "@/assets/signature-logo.png";
import { signatureProducts } from "@/data/signatureProducts";

const categories = ["Tümü", "Tişört", "Hoodie", "Polo"];

const SignatureCollection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered =
    activeCategory === "Tümü"
      ? signatureProducts
      : signatureProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-body text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            <ArrowLeft size={18} />
            Ana Sayfa
          </button>
          <span className="ml-auto font-display text-2xl font-light tracking-[0.3em] text-gradient-gold">
            ALPENZO
          </span>
        </div>
      </motion.div>

      {/* Hero banner */}
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative py-24 md:py-32 bg-secondary flex flex-col items-center justify-center text-center px-6"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={signatureLogo}
            alt="Alpenzo Signature Collection"
            className="w-64 md:w-80 mb-8 object-contain"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-sm text-muted-foreground max-w-lg leading-relaxed"
          >
            Sınırlı sayıda üretilen bu koleksiyon, sadeliğin lüksle buluştuğu benzersiz bir deneyim sunar.
          </motion.p>
        </motion.div>

        {/* Category filter */}
        <div className="container mx-auto px-6 py-8 flex justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-[0.3em] uppercase pb-2 border-b-2 transition-all ${
                activeCategory === cat
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid — Zara inspired */}
        <div className="container mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/signature/${product.id}`)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-card">
                  <img
                    src={product.coverImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-all duration-500" />
                </div>
                <div className="py-3 px-1">
                  <h3 className="font-body text-sm text-foreground">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureCollection;
