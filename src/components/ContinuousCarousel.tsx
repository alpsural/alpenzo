import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ContinuousCarouselProps {
  images: string[];
  title?: string;
  speed?: number; // pixels per second
}

const ContinuousCarousel = ({ images, title, speed = 40 }: ContinuousCarouselProps) => {
  if (images.length === 0) return null;

  // Duplicate images enough times to fill the strip
  const strip = [...images, ...images, ...images];
  const totalWidth = strip.length * 400; // approx width per image
  const singleSetWidth = images.length * 400;
  const duration = singleSetWidth / speed;

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-card">
      <motion.div
        className="flex h-full"
        animate={{ x: [0, -singleSetWidth] }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ width: totalWidth }}
      >
        {strip.map((img, i) => (
          <div
            key={i}
            className="h-full flex-shrink-0"
            style={{ width: 400 }}
          >
            <img
              src={img}
              alt={`carousel ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      {/* Title overlay */}
      {title && (
        <div className="absolute inset-0 flex items-end justify-start p-8 bg-gradient-to-t from-background/70 to-transparent pointer-events-none">
          <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ContinuousCarousel;
