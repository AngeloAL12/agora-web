import { Link } from 'react-router';

export default function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10 text-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-between gap-5 px-5 text-center md:flex-row md:px-10 md:text-left">
        <div>
          <p className="text-sm font-extrabold tracking-[0.08em]">AGORA</p>
          <p className="mt-1 text-xs text-white/45">
            Tu campus, en tus manos.
          </p>
        </div>
        <div className="flex items-center gap-5 text-xs font-semibold text-white/60">
          <Link to="/privacidad" className="transition-colors hover:text-white">
            Privacidad
          </Link>
          <Link to="/terminos" className="transition-colors hover:text-white">
            Términos
          </Link>
          <Link to="/soporte" className="transition-colors hover:text-white">
            Soporte
          </Link>
          <a
            href="https://lnk.bio/nexora"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            NEXORA
          </a>
        </div>
        <p className="text-xs text-white/35">
          &copy; 2026 Agora. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
