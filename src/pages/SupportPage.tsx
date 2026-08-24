import {
  ArrowUpRight,
  BellOff,
  Bot,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Flag,
  KeyRound,
  LifeBuoy,
  MapPin,
  MessageCircleMore,
  ShieldAlert,
  Smartphone,
  Trash2,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import LegalFooter from '@/components/LegalFooter';
import LegalHeader from '@/components/LegalHeader';

const SUPPORT_EMAIL = 'support@ag0ra.pro';
const SUPPORT_EMAIL_URL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Soporte Agora')}`;
const SUPPORT_URL = 'https://lnk.bio/nexora';
const INSTAGRAM_URL = 'https://www.instagram.com/agora.nexo/';

const faqs = [
  {
    icon: KeyRound,
    question: 'No puedo iniciar sesión',
    answer:
      'Verifica que uses tu cuenta institucional autorizada (@itmexicali.edu.mx o @mexicali.tecnm.mx), que tengas conexión y que la fecha y hora del dispositivo sean correctas. Si el problema continúa, envíanos una captura sin mostrar códigos ni contraseñas.',
  },
  {
    icon: MapPin,
    question: 'El mapa no muestra mi ubicación',
    answer:
      'Activa el permiso de ubicación para Ágora en los ajustes del dispositivo y vuelve a abrir el mapa. La ubicación funciona en primer plano y está pensada para orientarte dentro del campus; el mapa puede consultarse aunque no otorgues el permiso.',
  },
  {
    icon: BellOff,
    question: 'No recibo notificaciones',
    answer:
      'Revisa que estén activadas en Perfil → Preferencias y también en los ajustes de notificaciones del teléfono. El modo ahorro de batería o enfoque puede retrasarlas.',
  },
  {
    icon: Flag,
    question: 'Quiero denunciar contenido o a un usuario',
    answer:
      'Usa la opción Denunciar junto a la publicación, comentario o mensaje. También puedes bloquear al usuario. El equipo de moderación recibe la denuncia y el autor no ve quién la realizó.',
  },
  {
    icon: Trash2,
    question: '¿Cómo elimino mi cuenta?',
    answer:
      'En la app abre Perfil → Preferencias → Eliminar cuenta y confirma la acción. Se elimina o anonimiza la información personal asociada. La eliminación es permanente y cerrará tu sesión.',
  },
  {
    icon: Bot,
    question: 'La respuesta del asistente no fue correcta',
    answer:
      'El asistente puede equivocarse. Contrasta información importante con fuentes oficiales del Instituto y no compartas datos sensibles. Si detectas una respuesta peligrosa o inapropiada, repórtala mediante soporte.',
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Soporte | Ágora';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <LegalHeader />

      <main>
        <section className="relative overflow-hidden bg-navy px-5 pb-24 pt-16 text-white sm:pb-28 sm:pt-20">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-golden/15 blur-3xl" />
          <div className="relative mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-golden ring-1 ring-white/15">
              <LifeBuoy size={28} />
            </div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-golden">
              Ayuda y soporte
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
              Estamos para ayudarte.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Encuentra soluciones rápidas o escríbenos si tienes un problema
              con tu cuenta, privacidad, seguridad o alguna función de Ágora.
            </p>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-12 grid w-full max-w-[1080px] gap-4 px-5 sm:grid-cols-3 lg:px-10">
          {[
            { icon: MessageCircleMore, label: 'Correo de soporte', value: SUPPORT_EMAIL, href: SUPPORT_EMAIL_URL },
            { icon: Smartphone, label: 'Comunidad', value: '@agora.nexo', href: INSTAGRAM_URL },
            { icon: CircleCheck, label: 'Respuesta estimada', value: '24 a 48 horas hábiles' },
          ].map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,29,66,0.09)] transition-transform hover:-translate-y-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-blue-50 text-blue-700">
                  <Icon size={21} />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">{label}</p>
                  <p className="mt-1 text-sm font-extrabold leading-5 text-navy">{value}</p>
                </div>
                {href && <ArrowUpRight size={15} className="ml-auto shrink-0 text-slate-300" />}
              </div>
            );

            return href ? (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </section>

        <section className="mx-auto grid w-full max-w-[1080px] gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-10">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700">Soluciones rápidas</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Preguntas frecuentes</h2>
            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map(({ icon: Icon, question, answer }, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${isOpen ? 'bg-navy text-golden' : 'bg-white text-blue-700 shadow-sm ring-1 ring-slate-200'}`}>
                        <Icon size={19} />
                      </span>
                      <span className="flex-1 text-sm font-extrabold text-navy sm:text-base">{question}</span>
                      <ChevronDown size={18} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-14 pr-5 text-sm leading-6 text-slate-600 sm:pl-14">{answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[24px] bg-navy p-6 text-white shadow-[0_20px_60px_rgba(15,29,66,0.16)]">
              <CircleAlert size={22} className="text-golden" />
              <h2 className="mt-5 font-serif text-2xl font-semibold">¿Aún necesitas ayuda?</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Cuéntanos qué ocurrió, en qué pantalla estabas y qué dispositivo
                utilizas. Si puedes, adjunta una captura sin datos sensibles.
              </p>
              <a
                href={SUPPORT_EMAIL_URL}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-golden px-5 text-sm font-extrabold text-navy transition-transform hover:scale-[1.02]"
              >
                Contactar soporte
                <ArrowUpRight size={16} />
              </a>
              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-center text-xs font-bold text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
              >
                Ver canales oficiales de NEXORA
              </a>
            </div>

            <div className="rounded-[24px] border border-rose-200 bg-rose-50 p-6">
              <ShieldAlert size={22} className="text-rose-700" />
              <h2 className="mt-4 text-sm font-extrabold text-rose-950">Seguridad y contenido</h2>
              <p className="mt-2 text-xs leading-5 text-rose-900/70">
                Incluye el club, fecha y una descripción clara. No envíes
                contraseñas, códigos de acceso ni documentos personales.
              </p>
            </div>

            <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-700">Importante</p>
              <p className="mt-2 text-xs leading-5 text-amber-950/75">
                Ágora no es un servicio de emergencias. Ante un riesgo inmediato,
                comunícate con las autoridades o servicios de emergencia.
              </p>
            </div>
          </aside>
        </section>
      </main>

      <LegalFooter />
    </div>
  );
}
