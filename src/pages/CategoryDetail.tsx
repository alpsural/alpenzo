import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories, categoryProducts } from "@/data/categories";
import ContinuousCarousel from "@/components/ContinuousCarousel";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === id);
  const products = id ? categoryProducts[id] ?? [] : [];
  const allImages = products.flatMap((p) => p.images);

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
        {/* Continuous carousel */}
        <ContinuousCarousel images={allImages} title={category.name} />

        {/* Products grid — only image + name */}
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
    </div>
  );
};

export default CategoryDetail;
