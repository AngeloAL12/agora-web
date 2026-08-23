import { motion } from 'framer-motion';
import { MapPin, Shield, Users, Route, Camera, MessageSquare, Calendar, Bell } from 'lucide-react';

const features = [
  {
    image: '/assets/illustration-map.jpg',
    badge: 'NAVEGACION',
    badgeColor: 'bg-elec-blue',
    title: 'Mapa Interactivo 360°',
    description:
      'Explora el campus con vistas panoramicas. Encuentra edificios, aulas, laboratorios y puntos de interes en segundos.',
    icons: [
      { icon: MapPin, label: '12 edificios' },
      { icon: Camera, label: 'Vistas 360°' },
      { icon: Route, label: 'Rutas optimizadas' },
    ],
  },
  {
    image: '/assets/illustration-reports.jpg',
    badge: 'REPORTES',
    badgeColor: 'bg-teal',
    title: 'Buzon de Quejas Digital',
    description:
      'Reporta fallas de infraestructura de forma anonima. Adjunta fotos y sigue el estado de tu reporte en tiempo real.',
    icons: [
      { icon: Shield, label: 'Anonimo' },
      { icon: Camera, label: 'Con evidencia' },
      { icon: MessageSquare, label: 'Seguimiento' },
    ],
  },
  {
    image: '/assets/illustration-clubs.jpg',
    badge: 'COMUNIDAD',
    badgeColor: 'bg-golden',
    title: 'Clubs Sociales',
    description:
      'Crea o unete a clubs por intereses. Robotica, basquet, ajedrez, arte — encuentra tu tribu en el ITM.',
    icons: [
      { icon: Users, label: 'Crea tu club' },
      { icon: Calendar, label: 'Eventos' },
      { icon: Bell, label: 'Notificaciones' },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="funciones" className="bg-navy py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-cyan text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Todo en una app
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Tres funciones,
            <br />
            <span className="text-golden">una solucion</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Agora integra las herramientas que necesitas para vivir mejor tu
            experiencia universitaria.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-golden/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span
                  className={`absolute top-4 left-4 ${feature.badgeColor} text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-md`}
                >
                  {feature.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Icon row */}
                <div className="flex flex-wrap gap-4">
                  {feature.icons.map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <item.icon
                        size={16}
                        className={
                          i === 0
                            ? 'text-elec-blue'
                            : i === 1
                            ? 'text-teal'
                            : 'text-golden'
                        }
                      />
                      <span className="text-white/50 text-xs font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
