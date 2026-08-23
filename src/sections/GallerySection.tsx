import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// @ts-expect-error Swiper exposes this stylesheet to Vite without TS declarations.
import 'swiper/css';
// @ts-expect-error Swiper exposes this stylesheet to Vite without TS declarations.
import 'swiper/css/pagination';

const screenshots = [
  {
    src: '/assets/images/screenshots/screen-welcome.png',
    label: 'Bienvenida',
  },
  {
    src: '/assets/images/screenshots/screen-map.png',
    label: 'Mapa Interactivo',
  },
  {
    src: '/assets/images/screenshots/screen-reports.png',
    label: 'Reportes',
  },
  {
    src: '/assets/images/screenshots/screen-clubs.png',
    label: 'Clubs',
  },
  {
    src: '/assets/images/screenshots/screen-chatbot.png',
    label: 'Asistente IA',
  },
  {
    src: '/assets/images/screenshots/screen-profile.png',
    label: 'Perfil',
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-offwhite py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-golden text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Conoce Agora
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            La app en accion
          </h2>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 2.3, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="agora-swiper pb-14"
          >
            {screenshots.map((screen, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className="w-[220px] sm:w-[250px] h-auto transition-transform duration-500"
                  />
                  <span className="text-slate-500 text-sm font-medium">
                    {screen.label}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .agora-swiper .swiper-pagination {
          bottom: 0;
        }
        .agora-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #CBD5E1;
          opacity: 1;
          transition: all 0.3s;
        }
        .agora-swiper .swiper-pagination-bullet-active {
          background: #F59E0B;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
