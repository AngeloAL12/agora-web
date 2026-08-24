import {
  Bell,
  Bot,
  Camera,
  ChevronRight,
  Database,
  Fingerprint,
  Globe2,
  KeyRound,
  LocateFixed,
  MessageSquareText,
  ShieldCheck,
  Trash2,
  UserRound,
} from 'lucide-react';
import { useEffect } from 'react';
import LegalFooter from '@/components/LegalFooter';
import LegalHeader from '@/components/LegalHeader';

const LAST_UPDATED = '23 de agosto de 2026';

const sections = [
  { id: 'responsable', label: 'Responsable y alcance' },
  { id: 'datos', label: 'Datos que tratamos' },
  { id: 'usos', label: 'Cómo los usamos' },
  { id: 'terceros', label: 'Servicios externos' },
  { id: 'permisos', label: 'Permisos del dispositivo' },
  { id: 'conservacion', label: 'Conservación y eliminación' },
  { id: 'derechos', label: 'Tus opciones y derechos' },
  { id: 'seguridad', label: 'Seguridad y contacto' },
];

const dataCards = [
  {
    icon: UserRound,
    title: 'Cuenta y perfil',
    text: 'Nombre, correo institucional, identificador de cuenta, carrera y foto de perfil opcional.',
    tone: 'bg-blue-50 text-blue-700',
  },
  {
    icon: MessageSquareText,
    title: 'Actividad y contenido',
    text: 'Reportes, sugerencias, evidencias, publicaciones, comentarios, mensajes, reacciones y denuncias de contenido.',
    tone: 'bg-amber-50 text-amber-700',
  },
  {
    icon: LocateFixed,
    title: 'Ubicación en primer plano',
    text: 'La posición aproximada o precisa mientras usas el mapa, solo si autorizas el permiso. No se almacena en tu perfil.',
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Bell,
    title: 'Dispositivo y sesión',
    text: 'Tokens de sesión y de notificaciones push, además de datos técnicos necesarios para operar y proteger el servicio.',
    tone: 'bg-cyan-50 text-cyan-700',
  },
  {
    icon: Bot,
    title: 'Asistente de IA',
    text: 'Tu consulta, contexto reciente de la conversación y datos básicos de cuenta cuando decides usar el asistente.',
    tone: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Globe2,
    title: 'Sitio web',
    text: 'El proveedor de alojamiento puede procesar datos técnicos de conexión, como dirección IP y agente de usuario.',
    tone: 'bg-slate-100 text-slate-700',
  },
];

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 py-10 first:border-t-0 first:pt-0">
      <div className="mb-5 flex items-start gap-4">
        <span className="mt-1 font-serif text-sm font-semibold italic text-golden">
          {number}
        </span>
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 pl-8 text-[15px] leading-7 text-slate-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Política de privacidad | Ágora';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <LegalHeader />

      <main>
        <section className="relative overflow-hidden bg-navy px-5 pb-20 pt-16 text-white sm:pb-24 sm:pt-20">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-[12%] h-px w-3/4 bg-gradient-to-r from-transparent via-golden/60 to-transparent" />
          <div className="relative mx-auto max-w-[960px] text-center">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden text-navy shadow-[0_18px_50px_rgba(245,158,11,0.25)]">
              <ShieldCheck size={28} strokeWidth={2.2} />
            </div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-golden">
              Tu información, con claridad
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
              Política de privacidad
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Esta política explica qué información utiliza Ágora, para qué la
              necesita y las decisiones que siempre conservas sobre tus datos.
            </p>
            <p className="mt-7 text-xs font-medium text-white/40">
              Última actualización: {LAST_UPDATED}
            </p>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-10 lg:py-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,29,66,0.06)]">
              <p className="px-3 pb-3 pt-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                En esta página
              </p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-navy"
                >
                  {section.label}
                  <ChevronRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </aside>

          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-5 py-9 shadow-[0_22px_70px_rgba(15,29,66,0.07)] sm:px-10 sm:py-12 lg:px-14">
            <div className="mb-12 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-sm leading-6 text-amber-950">
              <strong className="font-extrabold">Resumen corto:</strong> usamos
              los datos necesarios para autenticarte, ofrecer las funciones de
              campus, mantener segura la comunidad y atender tus solicitudes.
              No vendemos tus datos ni los usamos para publicidad o rastreo entre
              apps.
            </div>

            <PolicySection id="responsable" number="01" title="Responsable y alcance">
              <p>
                <strong className="font-semibold text-slate-800">NEXORA</strong>,
                equipo responsable de Ágora, trata la información descrita en esta
                política para operar la aplicación móvil Ágora y este sitio web.
                Ágora está dirigida a la comunidad del Instituto Tecnológico de
                Mexicali y requiere una cuenta institucional para sus funciones
                principales.
              </p>
              <p>
                Esta política aplica a la app, sus servicios asociados y las
                comunicaciones de soporte. No sustituye las políticas propias de
                Google, Microsoft, Apple u otros servicios que decidas utilizar.
              </p>
            </PolicySection>

            <PolicySection id="datos" number="02" title="Datos que tratamos">
              <div className="grid gap-3 sm:grid-cols-2">
                {dataCards.map(({ icon: Icon, title, text, tone }) => (
                  <div key={title} className="rounded-2xl border border-slate-200 p-4">
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${tone}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-extrabold text-navy">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
              <p>
                Parte de esta información la proporcionas tú; otra parte proviene
                del proveedor de inicio de sesión que eliges o se genera al usar
                funciones como notificaciones, reportes y clubes.
              </p>
            </PolicySection>

            <PolicySection id="usos" number="03" title="Cómo usamos la información">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  'Verificar que perteneces a la comunidad institucional y mantener tu sesión.',
                  'Mostrar tu perfil, carrera, clubes y actividad dentro de Ágora.',
                  'Recibir, canalizar y dar seguimiento a reportes y sugerencias del campus.',
                  'Permitir publicaciones, comentarios, mensajes y eventos de clubes.',
                  'Enviar avisos sobre reportes, solicitudes y actividad relevante.',
                  'Prevenir abuso, moderar contenido, atender denuncias y proteger el servicio.',
                  'Responder consultas del asistente de IA cuando decides utilizarlo.',
                  'Diagnosticar fallas y cumplir obligaciones legales aplicables.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-slate-50 p-3.5 text-sm leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-golden" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection id="terceros" number="04" title="Servicios externos y transferencias">
              <p>
                No vendemos información personal. Compartimos solo lo necesario
                con proveedores que ayudan a prestar el servicio, bajo sus propias
                obligaciones de seguridad y confidencialidad:
              </p>
              <ul className="space-y-2">
                <li><strong className="text-slate-800">Google y Microsoft:</strong> autenticación con cuenta institucional.</li>
                <li><strong className="text-slate-800">Apple y Expo:</strong> entrega de notificaciones push y servicios de la app.</li>
                <li><strong className="text-slate-800">Cloudflare:</strong> infraestructura y almacenamiento de imágenes y evidencias.</li>
                <li><strong className="text-slate-800">Servicios de automatización e IA:</strong> procesamiento de consultas enviadas voluntariamente al asistente.</li>
              </ul>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 text-sm text-violet-950">
                <strong>Antes de usar el asistente:</strong> evita incluir
                contraseñas, códigos, datos financieros, información médica u
                otros datos sensibles. El asistente puede cometer errores y no
                reemplaza los canales oficiales del Instituto.
              </div>
              <p>
                También podemos revelar información cuando sea razonablemente
                necesario para cumplir la ley, proteger a una persona, investigar
                abuso o defender la seguridad e integridad de Ágora.
              </p>
            </PolicySection>

            <PolicySection id="permisos" number="05" title="Permisos del dispositivo">
              <div className="space-y-3">
                {[
                  { icon: LocateFixed, title: 'Ubicación', text: 'Se solicita al abrir la función de mapa para mostrar tu posición dentro del campus. Se usa en primer plano y puedes seguir consultando el mapa sin compartirla.' },
                  { icon: Camera, title: 'Cámara y fototeca', text: 'Se solicitan solo cuando eliges tomar o adjuntar imágenes a reportes, publicaciones, clubes o tu perfil.' },
                  { icon: Bell, title: 'Notificaciones', text: 'Se solicitan para avisarte sobre cambios y actividad relevante. Puedes desactivarlas en Ágora o en los ajustes del dispositivo.' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-navy">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection id="conservacion" number="06" title="Conservación y eliminación">
              <p>
                Conservamos los datos de cuenta y contenido mientras tu cuenta esté
                activa y durante el tiempo necesario para operar las funciones que
                utilizas. Los tokens de sesión se renuevan o invalidan al cerrar
                sesión y los mensajes del asistente se mantienen de forma temporal
                en la sesión de la app.
              </p>
              <div className="flex gap-4 rounded-2xl bg-rose-50 p-5 text-rose-950">
                <Trash2 size={22} className="mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-extrabold">Eliminación de cuenta</h3>
                  <p className="mt-1 text-sm leading-6">
                    Puedes eliminarla directamente en Ágora desde
                    <strong> Perfil → Preferencias → Eliminar cuenta</strong>.
                    Se eliminan o anonimizan tus datos personales, sesiones y
                    contenido social. Ciertos reportes y registros administrativos
                    pueden conservarse anonimizados cuando sean necesarios para su
                    seguimiento, seguridad, auditoría u obligaciones legales.
                  </p>
                </div>
              </div>
            </PolicySection>

            <PolicySection id="derechos" number="07" title="Tus opciones y derechos">
              <p>
                Puedes consultar o actualizar tu nombre, carrera y foto desde tu
                perfil; revocar ubicación, cámara, fotos y notificaciones desde los
                ajustes del dispositivo; borrar el historial visible del asistente;
                y eliminar tu cuenta desde la app.
              </p>
              <p>
                También puedes solicitar acceso, corrección, oposición o información
                sobre el tratamiento de tus datos mediante la página de{' '}
                <a href="/soporte" className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4">
                  soporte de Ágora
                </a>. Podremos pedirte verificar tu identidad antes de atender una
                solicitud relacionada con una cuenta.
              </p>
            </PolicySection>

            <PolicySection id="seguridad" number="08" title="Seguridad, cambios y contacto">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { icon: KeyRound, text: 'Acceso mediante identidad institucional y sesiones protegidas.' },
                  { icon: Database, text: 'Evidencias de reportes en almacenamiento privado.' },
                  { icon: Fingerprint, text: 'Acceso limitado según función y rol dentro del servicio.' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="rounded-2xl bg-navy p-4 text-white">
                    <Icon size={19} className="mb-3 text-golden" />
                    <p className="text-xs leading-5 text-white/70">{text}</p>
                  </div>
                ))}
              </div>
              <p>
                Ningún sistema es completamente infalible, pero aplicamos medidas
                razonables para reducir accesos, alteraciones o divulgaciones no
                autorizadas. Podemos actualizar esta política cuando cambien las
                funciones o requisitos aplicables; publicaremos aquí la fecha de la
                versión vigente.
              </p>
              <p>
                Para dudas de privacidad o seguridad, utiliza nuestros{' '}
                <a
                  href="mailto:support@ag0ra.pro?subject=Privacidad%20Agora"
                  className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4"
                >
                  support@ag0ra.pro
                </a>{' '}
                e indica en el asunto “Privacidad Ágora”.
              </p>
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-500">
                Ágora no es un canal de emergencias. Si existe un riesgo inmediato
                para ti o para otra persona, contacta a las autoridades o servicios
                de emergencia correspondientes.
              </p>
            </PolicySection>
          </article>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
