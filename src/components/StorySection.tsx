import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mountainsStory from "@/assets/mountains-story.jpg";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="relative" ref={ref}>
      {/* Background */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={mountainsStory}
          alt="Alp Dağları"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center px-6 max-w-3xl"
          >
            <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-6">Hikayemiz</p>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              Sadelikten Doğan<br />
              <span className="text-gradient-gold italic">Zirve</span>
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <p className="font-body text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Alpenzo, adını "Alp" dağlarının asırlık sağlamlığından ve "Enzo"nun modern ritminden alarak,
              gelenek ile yeniliğin kesişiminde doğdu. Bizim için stil; gösterişten değil, sadelikten doğan özgüvendir.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-secondary py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Kalite",
                desc: "Her parçamız, en kaliteli kumaşlardan özenle üretilir. Uzun ömürlü, dayanıklı ve doğaya saygılı materyaller kullanıyoruz.",
              },
              {
                title: "Tasarım",
                desc: "Net, rahat, güçlü. Gereksiz hiçbir detay yok. Sadece doğru dokular, doğru hatlar ve zamansız estetik.",
              },
              {
                title: "Vizyon",
                desc: "Giyen herkes için fark edilmeyen ama hissedilen bir ayrıcalık yaratıyoruz. Lüks, sadeliğin derinliğinde.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display text-2xl text-gradient-gold mb-4 italic">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
