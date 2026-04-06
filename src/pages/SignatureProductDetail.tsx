import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { signatureProducts } from "@/data/signatureProducts";

const SignatureProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = signatureProducts.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Ürün Bulunamadı</h1>
          <button onClick={() => navigate("/signature")} className="text-primary underline">
            Signature Collection'a Dön
          </button>
        </div>
      </div>
    );
  }

  const hasMultiple = product.images.length > 1;
  const prev = () => setCurrentImage((c) => (c === 0 ? product.images.length - 1 : c - 1));
  const next = () => setCurrentImage((c) => (c === product.images.length - 1 ? 0 : c + 1));

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
            onClick={() => navigate("/signature")}
            className="flex items-center gap-2 font-body text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            <ArrowLeft size={18} />
            Signature Collection
          </button>
          <span className="ml-auto font-display text-2xl font-light tracking-[0.3em] text-gradient-gold">
            ALPENZO
          </span>
        </div>
      </motion.div>

      <div className="pt-16">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image carousel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden bg-card"
            >
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {hasMultiple && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-2 rounded-full hover:bg-background/90 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-2 rounded-full hover:bg-background/90 transition-colors"
                  >
                    <ChevronRight size={20} className="text-foreground" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, i) => (
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
              {/* Thumbnail strip */}
              {hasMultiple && (
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-12 h-14 overflow-hidden border-2 transition-all ${
                        i === currentImage ? "border-primary" : "border-transparent opacity-60"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">
                Signature Collection
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4 leading-tight">
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

              {/* Other signature products */}
              <div>
                <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4">
                  Diğer Parçalar
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {signatureProducts
                    .filter((p) => p.id !== product.id)
                    .slice(0, 4)
                    .map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          navigate(`/signature/${p.id}`);
                          setCurrentImage(0);
                        }}
                        className="flex-shrink-0 group"
                      >
                        <div className="w-20 h-24 overflow-hidden bg-card mb-2">
                          <img
                            src={p.images[0]}
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

export default SignatureProductDetail;
