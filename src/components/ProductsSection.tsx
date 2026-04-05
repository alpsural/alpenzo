import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="products" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">Koleksiyon</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Seçkin <span className="text-gradient-gold italic">Parçalar</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-500" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{product.name}</h3>
              <p className="font-body text-sm text-muted-foreground">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
