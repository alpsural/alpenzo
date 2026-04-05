import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import productTshirt from "@/assets/product-tshirt.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productSweatshirt from "@/assets/product-sweatshirt.jpg";

const products = [
  {
    name: "Essential Tee",
    description: "Premium pamuklu, yalın tasarım",
    price: "₺890",
    image: productTshirt,
  },
  {
    name: "Summit Hoodie",
    description: "Dağların gücünü taşıyan konfor",
    price: "₺1.490",
    image: productHoodie,
  },
  {
    name: "Peak Sweatshirt",
    description: "Zamansız zarafet, üstün kalite",
    price: "₺1.290",
    image: productSweatshirt,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
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
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full font-body text-xs tracking-[0.3em] uppercase border border-primary text-primary py-3 hover:bg-primary hover:text-primary-foreground transition-all">
                    İncele
                  </button>
                </div>
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{product.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-2">{product.description}</p>
              <p className="font-display text-lg text-gradient-gold">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
