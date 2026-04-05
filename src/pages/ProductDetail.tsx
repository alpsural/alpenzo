import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Ürün Bulunamadı</h1>
          <button onClick={() => navigate("/")} className="text-primary underline">
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
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
            Geri Dön
          </button>
          <span className="ml-auto font-display text-2xl font-light tracking-[0.3em] text-gradient-gold">
            ALPENZO
          </span>
        </div>
      </motion.div>

      <div className="pt-16">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden bg-card"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">
                Koleksiyon
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="w-16 h-px bg-primary mb-8" />

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                {product.longDescription}
              </p>

              {/* Details */}
              <div className="mb-10">
                <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4">
                  Özellikler
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {product.details.map((detail) => (
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

              {/* Other products */}
              <div>
                <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4">
                  Diğer Parçalar
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {products
                    .filter((p) => p.id !== product.id)
                    .map((p) => (
                      <button
                        key={p.id}
                        onClick={() => navigate(`/product/${p.id}`)}
                        className="flex-shrink-0 group"
                      >
                        <div className="w-20 h-24 overflow-hidden bg-card mb-2">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <p className="font-body text-xs text-muted-foreground group-hover:text-primary transition-colors">
                          {p.name}
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
