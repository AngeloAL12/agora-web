import { motion } from 'framer-motion';
import { Download, Quote } from 'lucide-react';

const quotes = [
  {
    text: 'Por fin puedo encontrar el Edificio G sin dar 3 vueltas al campus. La vista 360 es lo mejor.',
    author: 'Estudiante de 3er semestre',
  },
  {
    text: 'Reporte una lampara fundida y en 2 dias ya estaba arreglada. Nunca pense que me escucharian.',
    author: 'Estudiante de 5to semestre',
  },
  {
    text: 'Cree el club de ajedrez y ya somos 15. La app hizo que fuera super facil organizarnos.',
    author: 'Estudiante de 7mo semestre',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="descargar"
      className="py-20 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #CCFBF1 0%, #DBEAFE 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Impacto validado
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Lo que los estudiantes
            <br />
            dicen de Agora
          </h2>
        </motion.div>

        {/* Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <Quote size={24} className="text-golden mb-4" />
              <p className="text-slate-700 text-base leading-relaxed italic mb-6">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="text-slate-500 text-sm font-medium">— {quote.author}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-3xl p-10 md:p-14 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Listo para unirte a la manada?
          </h3>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Descarga Agora hoy y descubre una nueva forma de vivir tu campus.
          </p>
          <a
            href="#descargar"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 bg-golden text-navy font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <Download size={20} />
            Descargar Ahora
          </a>

          {/* App icon display */}
          <div className="mt-10 flex justify-center">
            <img
              src="/assets/app-icon.jpg"
              alt="Icono de Ágora"
              className="w-16 h-16 rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
