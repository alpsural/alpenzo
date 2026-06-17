import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contact" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] text-primary uppercase mb-4">İletişim</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Bize <span className="text-gradient-gold italic">Ulaşın</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Adınız"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Mesajınız"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="font-body text-xs tracking-[0.3em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Gönder
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1" size={18} />
              <div>
                <p className="font-body text-sm text-foreground">alp@sural.tr</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Genel Bilgi</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1" size={18} />
              <div>
                <p className="font-body text-sm text-foreground">+90 532 229 95 62</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Pazartesi - Cumartesi, 09:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={18} />
              <div>
                <p className="font-body text-sm text-foreground">SULTAN SELİM MAH. ESKİ BÜYÜKDERE CAD. NO: 61 İÇ KAPI NO: 2 KAĞITHANE/ İSTANBUL</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Merkez Ofis</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="text-primary mt-1" size={18} />
              <div>
                <p className="font-body text-sm text-foreground">@alpenzo</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Bizi takip edin</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
