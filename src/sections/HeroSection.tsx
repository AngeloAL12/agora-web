import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const phoneVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(27,42,91,0.88) 0%, rgba(27,42,91,0.5) 60%, rgba(27,42,91,0.7) 100%)',
        }}
      />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-elec-blue/30 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-golden/20 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-12 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block text-golden text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Para la comunidad ITM
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              Tu campus,
              <br />
              <span className="text-golden">en tus manos</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              La app oficial que te ayuda a navegar el campus, reportar
              incidencias y conectar con tu comunidad estudiantil.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#descargar"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-golden text-navy font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Download size={20} />
                Descargar App
              </a>
              <a
                href="#funciones"
                className="inline-flex items-center justify-center h-14 px-8 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-navy transition-all duration-300"
              >
                Ver funciones
                <ChevronDown size={18} className="ml-1" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[
                  'https://i.pravatar.cc/150?img=11',
                  'https://i.pravatar.cc/150?img=5',
                  'https://i.pravatar.cc/150?img=9',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">
                +500 bufalos ya se unieron
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end items-center"
          >
            {/* Background phone (smaller, rotated) */}
            <div
              className="absolute right-4 lg:right-8 top-8 w-[200px] h-[400px] phone-frame animate-float-slow opacity-60"
              style={{ zIndex: 1 }}
            >
              <div className="phone-screen">
                <img src="/assets/screen-map.jpg" alt="Mapa Ágora" />
              </div>
            </div>

            {/* Main phone */}
            <div
              className="relative w-[260px] sm:w-[280px] h-[530px] sm:h-[570px] phone-frame animate-float"
              style={{ zIndex: 2 }}
            >
              <div className="phone-screen">
                <img
                  src="/assets/screen-welcome.jpg"
                  alt="Pantalla de bienvenida de Ágora"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
