import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero", route: "/" },
  { label: "Hakkımızda", href: "#about", route: "/" },
  { label: "Signature Collection", href: "/signature", route: "/signature" },
  { label: "Hikâyemiz", href: "#story", route: "/" },
  { label: "İletişim", href: "#contact", route: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (link: typeof navLinks[0]) => {
    setIsOpen(false);

    if (link.route === "/signature") {
      navigate("/signature");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => handleNav(navLinks[0])} className="font-display text-2xl font-light tracking-[0.3em] text-gradient-gold">
          ALPENZO
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="font-body text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className="font-body text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
