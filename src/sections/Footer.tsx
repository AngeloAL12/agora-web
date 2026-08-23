const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Descargar', href: '#descargar' },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/app-icon.jpg"
              alt="Ágora"
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <span className="text-white font-extrabold text-xl block tracking-tight">
                AGORA
              </span>
              <span className="text-white/50 text-xs">
                Tu campus, en tus manos
              </span>
            </div>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Nexora */}
          <div className="text-center md:text-right">
            <span className="text-white/40 text-xs block mb-1">
              Un proyecto de
            </span>
            <a
              href="https://lnk.bio/nexora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden font-bold text-sm hover:underline transition-all"
            >
              NEXORA
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white/40 text-xs">
              &copy; 2026 Agora. Todos los derechos reservados.
            </span>
            <span className="text-white/40 text-xs">
              Hecho con ❤️ para la comunidad ITM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
