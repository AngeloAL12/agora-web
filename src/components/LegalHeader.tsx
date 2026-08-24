import { ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router';

const legalLinks = [
  { label: 'Privacidad', to: '/privacidad' },
  { label: 'Términos', to: '/terminos' },
  { label: 'Soporte', to: '/soporte' },
];

function getLegalIndex(pathname: string): number {
  if (pathname === '/terminos') return 1;
  if (pathname === '/soporte') return 2;
  return 0;
}

export default function LegalHeader() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const activeIndex = getLegalIndex(location.pathname);
  const previousPath = (location.state as { fromLegalPath?: string } | null)
    ?.fromLegalPath;
  const previousIndex = previousPath ? getLegalIndex(previousPath) : activeIndex;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f9fc]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between px-5 md:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3 text-navy transition-colors"
          aria-label="Volver al inicio de Ágora"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[14px] shadow-sm ring-1 ring-navy/10 transition-transform group-hover:-rotate-3">
            <img
              src="/assets/icons/agora-icon.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-extrabold leading-none tracking-[0.08em]">
              AGORA
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Centro de ayuda
            </span>
          </span>
        </Link>

        <nav
          className="relative grid grid-cols-3 rounded-full border border-slate-200 bg-white p-1 shadow-sm"
          aria-label="Páginas legales"
        >
          <motion.span
            aria-hidden="true"
            className="absolute bottom-1 left-1 top-1 w-[calc((100%-8px)/3)] rounded-full bg-navy shadow-[0_4px_12px_rgba(27,42,91,0.2)]"
            initial={{ x: `${previousIndex * 100}%` }}
            animate={{ x: `${activeIndex * 100}%` }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 430, damping: 34, mass: 0.78 }
            }
          />
          {legalLinks.map((link, index) => {
            const isActive = index === activeIndex;
            const wasActive = index === previousIndex;

            return (
              <Link
                key={link.to}
                to={link.to}
                state={{ fromLegalPath: location.pathname }}
                aria-current={isActive ? 'page' : undefined}
                className="relative z-10 min-w-[66px] rounded-full px-2 py-2 text-center text-[11px] font-bold sm:min-w-[86px] sm:px-3 sm:text-xs"
              >
                <motion.span
                  initial={{ color: wasActive ? '#ffffff' : '#64748b' }}
                  animate={{ color: isActive ? '#ffffff' : '#64748b' }}
                  transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  className={isActive ? '' : 'hover:text-navy'}
                >
                  {link.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        <Link
          to="/"
          className="hidden items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-navy md:flex"
        >
          <ArrowLeft size={16} />
          Volver al sitio
        </Link>
      </div>
    </header>
  );
}
