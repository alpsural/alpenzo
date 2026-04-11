import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { categories, categoryProducts } from "@/data/categories";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === id);
  const products = id ? categoryProducts[id] ?? [] : [];

  // Collect all images for the auto-carousel
  const allImages = products.flatMap((p) => p.images);

  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (allImages.length <= 1) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Kategori bulunamadı.</p>
      </div>
    );
  }

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

      <div className="pt-16">
        {/* Auto-sliding carousel */}
        {allImages.length > 0 && (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-card">
            {allImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`${category.name} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: i === carouselIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              />
            ))}
            {/* Carousel controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() => setCarouselIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm p-2 rounded-full hover:bg-background/80 transition-colors"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>
                <button
                  onClick={() => setCarouselIndex((prev) => (prev + 1) % allImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm p-2 rounded-full hover:bg-background/80 transition-colors"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === carouselIndex ? "bg-primary w-5" : "bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            {/* Category title overlay */}
            <div className="absolute inset-0 flex items-end justify-start p-8 bg-gradient-to-t from-background/70 to-transparent">
              <div>
                <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">
                  {category.name}
                </h1>
                <p className="font-body text-sm text-muted-foreground mt-2">{category.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-all duration-500" />
                </div>
                <h3 className="font-display text-lg text-foreground">{product.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
