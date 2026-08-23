import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Descargar', href: '#descargar' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto w-full px-5 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/assets/app-icon.jpg"
            alt="Ágora"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <span className="text-white font-inter font-extrabold text-lg tracking-tight">
            AGORA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#descargar"
          className="hidden md:inline-flex items-center justify-center h-11 px-6 bg-golden text-navy font-semibold text-sm rounded-full hover:scale-105 hover:brightness-110 transition-all duration-300"
        >
          Descargar App
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[72px] left-0 right-0 bg-navy/98 backdrop-blur-xl md:hidden border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#descargar"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center h-12 px-6 bg-golden text-navy font-semibold text-sm rounded-full mt-2"
              >
                Descargar App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
