import { motion } from 'framer-motion';
import { MapPin, AlertTriangle, Users } from 'lucide-react';

const problems = [
  { icon: MapPin, text: 'Orientacion confusa en el campus' },
  { icon: AlertTriangle, text: 'Sin canal para reportar fallas' },
  { icon: Users, text: 'Dificil encontrar actividades estudiantiles' },
];

export default function ProblemSection() {
  return (
    <section className="bg-offwhite py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              El problema
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Te has perdido
              <br />
              buscando un aula?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              El campus del ITM tiene 12 edificios en 35 hectareas. Muchos
              estudiantes pierden hasta 20 minutos encontrando sus clases, y 79%
              no sabe donde reportar fallas.
            </p>

            <div className="flex flex-col gap-4">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-teal" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Phone */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating badge top */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 left-4 lg:left-8 z-10 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-2"
            >
              <span className="text-slate-900 font-semibold text-sm">
                Me perdi otra vez!
              </span>
              <span className="text-lg">😰</span>
            </motion.div>

            {/* Phone */}
            <div className="w-[260px] sm:w-[300px] h-[530px] sm:h-[610px] phone-frame">
              <div className="phone-screen">
                <img src="/assets/screen-map.jpg" alt="Mapa interactivo de Ágora" />
              </div>
            </div>

            {/* Floating badge bottom */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 right-4 lg:right-8 z-10 bg-white rounded-xl shadow-lg px-5 py-3"
            >
              <span className="text-slate-900 font-semibold text-sm">
                Donde reporto esto?
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
