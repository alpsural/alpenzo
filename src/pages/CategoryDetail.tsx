import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { categories, categoryProducts } from "@/data/categories";
import ContinuousCarousel from "@/components/ContinuousCarousel";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const category = categories.find((c) => c.id === id);
  const products = id ? categoryProducts[id] ?? [] : [];
  const allImages = products.flatMap((p) => p.images);

  const activeProduct = products.find((p) => p.id === selectedProduct);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Kategori bulunamadı.</p>
      </div>
    );
  }

  const openProduct = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentImage(0);
  };

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
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
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

      <div className="pt-16">
        <ContinuousCarousel images={allImages} title={category.name} />

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openProduct(product.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-card mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-sm text-foreground">{product.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Product detail modal */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8">
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex items-center gap-2 font-body text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase mb-8"
              >
                <X size={18} />
                Kapat
              </button>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
                {/* Image with carousel */}
                <div className="relative aspect-[3/4] overflow-hidden bg-card">
                  <img
                    src={activeProduct.images[currentImage]}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {activeProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImage((c) => (c === 0 ? activeProduct.images.length - 1 : c - 1))}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-2 rounded-full hover:bg-background/90 transition-colors"
                      >
                        <ChevronLeft size={20} className="text-foreground" />
                      </button>
                      <button
                        onClick={() => setCurrentImage((c) => (c === activeProduct.images.length - 1 ? 0 : c + 1))}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-2 rounded-full hover:bg-background/90 transition-colors"
                      >
                        <ChevronRight size={20} className="text-foreground" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {activeProduct.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === currentImage ? "bg-primary w-5" : "bg-foreground/40"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="lg:sticky lg:top-8">
                  <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">
                    {category.name}
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4 leading-tight">
                    {activeProduct.name}
                  </h2>
                  <div className="w-16 h-px bg-primary mb-8" />
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                    Premium kalite kumaş ve özenli işçilikle üretilmiştir. Alpenzo'nun tasarım felsefesini yansıtan bu parça, hem şıklığı hem konforu bir arada sunar.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {["Premium Kumaş", "Özel Kalıp", "Nakış Detay", "Sınırlı Üretim"].map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 p-4 border border-border/50 bg-secondary/50"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="font-body text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDetail;
