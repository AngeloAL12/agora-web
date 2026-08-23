import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
}

const stats: StatItem[] = [
  { value: 88.4, suffix: '%', decimals: 1, label: 'de estudiantes quieren la app' },
  { value: 79.1, suffix: '%', decimals: 1, label: 'tienen problemas de orientacion' },
  { value: 85.7, suffix: '%', decimals: 1, label: 'interes en actividades' },
  { value: 6500, suffix: '+', decimals: 0, label: 'estudiantes activos' },
];

function AnimatedCounter({ value, suffix, decimals, inView }: { value: number; suffix: string; decimals: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const duration = 2500;

  useEffect(() => {
    if (!inView) return;
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(eased * value);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, value]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-golden py-12 md:py-14">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-none mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  inView={inView}
                />
              </div>
              <p className="text-navy/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
