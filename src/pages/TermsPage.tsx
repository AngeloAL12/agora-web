import {
  Apple,
  Bot,
  CircleAlert,
  FileCheck2,
  Flag,
  Gavel,
  KeyRound,
  Scale,
  ShieldCheck,
  Trash2,
  UserRoundCheck,
} from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import LegalFooter from '@/components/LegalFooter';
import LegalHeader from '@/components/LegalHeader';

const LAST_UPDATED = '23 de agosto de 2026';

const sections = [
  { id: 'aceptacion', label: 'Aceptación y alcance' },
  { id: 'cuenta', label: 'Cuenta y acceso' },
  { id: 'uso', label: 'Uso permitido' },
  { id: 'contenido', label: 'Tu contenido' },
  { id: 'moderacion', label: 'Moderación' },
  { id: 'reportes', label: 'Reportes y asistente' },
  { id: 'licencia', label: 'Propiedad y licencia' },
  { id: 'servicio', label: 'Disponibilidad' },
  { id: 'terminacion', label: 'Terminación' },
  { id: 'legal', label: 'Condiciones legales' },
];

const prohibitedUses = [
  'Acosar, amenazar, discriminar, suplantar o divulgar datos personales de otras personas.',
  'Publicar contenido sexual explícito, violento, ilegal, fraudulento o que infrinja derechos de terceros.',
  'Enviar spam, automatizar interacciones, manipular métricas o interferir con la seguridad del servicio.',
  'Usar reportes, mensajes o clubes para acusaciones falsas, emergencias simuladas o actividades ilícitas.',
  'Intentar acceder a cuentas, datos, funciones administrativas, código o infraestructura sin autorización.',
  'Copiar, revender, sublicenciar o explotar comercialmente Ágora fuera de lo permitido por la ley.',
];

function TermsSection({
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
    <section
      id={id}
      className="scroll-mt-28 border-t border-slate-200 py-10 first:border-t-0 first:pt-0"
    >
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

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Términos de uso | Ágora';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <LegalHeader />

      <main>
        <section className="relative overflow-hidden bg-navy px-5 pb-20 pt-16 text-white sm:pb-24 sm:pt-20">
          <div className="absolute left-[8%] top-12 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute left-[11%] top-20 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 right-[8%] h-72 w-72 rounded-full bg-golden/10 blur-3xl" />
          <div className="relative mx-auto max-w-[960px] text-center">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden text-navy shadow-[0_18px_50px_rgba(245,158,11,0.25)]">
              <FileCheck2 size={27} strokeWidth={2.2} />
            </div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-golden">
              Reglas claras para una comunidad útil
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
              Términos de uso
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Estos términos establecen las reglas para acceder y participar en
              Ágora, incluyendo reportes, clubes, mensajes y el asistente.
            </p>
            <p className="mt-7 text-xs font-medium text-white/40">
              Vigentes desde: {LAST_UPDATED}
            </p>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-10 lg:py-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,29,66,0.06)]">
              <p className="px-3 pb-3 pt-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                En esta página
              </p>
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-navy"
                >
                  <span className="w-4 text-[9px] font-extrabold text-slate-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.label}
                </a>
              ))}
            </div>
          </aside>

          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-5 py-9 shadow-[0_22px_70px_rgba(15,29,66,0.07)] sm:px-10 sm:py-12 lg:px-14">
            <div className="mb-12 grid gap-3 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, title: 'Sé respetuoso', text: 'Cuida a las personas y a la comunidad.' },
                { icon: Flag, title: 'Reporta', text: 'Ayúdanos a detectar contenido dañino.' },
                { icon: UserRoundCheck, title: 'Sé responsable', text: 'Publica información legítima y propia.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Icon size={19} className="text-blue-700" />
                  <h2 className="mt-3 text-sm font-extrabold text-navy">{title}</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <TermsSection id="aceptacion" number="01" title="Aceptación y alcance">
              <p>
                Estos Términos de uso constituyen un acuerdo entre tú y{' '}
                <strong className="font-semibold text-slate-800">NEXORA</strong>,
                equipo responsable de Ágora. Al crear una cuenta, iniciar sesión o
                utilizar el servicio, confirmas que leíste y aceptas estos términos
                y nuestra{' '}
                <Link
                  to="/privacidad"
                  className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4"
                >
                  Política de privacidad
                </Link>.
              </p>
              <p>
                Si no estás de acuerdo, no debes utilizar Ágora. Algunas funciones
                pueden mostrar avisos o reglas adicionales; esas condiciones también
                aplican cuando utilizas la función correspondiente.
              </p>
            </TermsSection>

            <TermsSection id="cuenta" number="02" title="Cuenta, elegibilidad y acceso">
              <p>
                Ágora está destinada principalmente a la comunidad autorizada del
                Instituto Tecnológico de Mexicali. Debes utilizar una cuenta
                institucional válida, proporcionar información veraz y mantener el
                control de tu dispositivo y sesión.
              </p>
              <div className="flex gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
                <KeyRound size={22} className="mt-0.5 shrink-0" />
                <p className="text-sm leading-6">
                  No compartas códigos de acceso ni permitas que otra persona use tu
                  cuenta. Avísanos de inmediato en{' '}
                  <a className="font-extrabold underline" href="mailto:support@ag0ra.pro?subject=Seguridad%20de%20cuenta%20Agora">
                    support@ag0ra.pro
                  </a>{' '}
                  si sospechas de un acceso no autorizado.
                </p>
              </div>
              <p>
                Eres responsable de la actividad realizada desde tu cuenta, salvo
                cuando resulte de una falla atribuible al servicio o de circunstancias
                que la legislación aplicable disponga de otra manera.
              </p>
            </TermsSection>

            <TermsSection id="uso" number="03" title="Uso permitido y conductas prohibidas">
              <p>
                Puedes utilizar Ágora para orientarte en el campus, enviar reportes y
                sugerencias, participar en clubes y comunicarte con la comunidad de
                acuerdo con la finalidad de cada función.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {prohibitedUses.map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-rose-50 p-3.5 text-sm leading-6 text-rose-950">
                    <CircleAlert size={16} className="mt-1 shrink-0 text-rose-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </TermsSection>

            <TermsSection id="contenido" number="04" title="Contenido que compartes">
              <p>
                Conservas los derechos que tengas sobre tus textos, imágenes y demás
                contenido. Al publicarlo o enviarlo, declaras que tienes autorización
                para usarlo y que no vulnera derechos, privacidad ni seguridad de
                otras personas.
              </p>
              <p>
                Otorgas a NEXORA una licencia no exclusiva, gratuita y limitada a
                operar Ágora para alojar, reproducir, adaptar técnicamente, mostrar y
                distribuir ese contenido dentro del servicio. Esta licencia existe
                únicamente para prestar, proteger y mejorar las funciones donde
                decidiste compartirlo, y termina cuando el contenido se elimina,
                salvo copias técnicas temporales o registros que deban conservarse
                por seguridad u obligación legal.
              </p>
              <p>
                Tú eres responsable de tu contenido. No publiques credenciales,
                expedientes, identificaciones, conversaciones privadas ni información
                sensible propia o de terceros si no es estrictamente necesaria y no
                cuentas con autorización.
              </p>
            </TermsSection>

            <TermsSection id="moderacion" number="05" title="Moderación, denuncias y medidas">
              <p>
                Podemos revisar contenido denunciado, limitar su visibilidad,
                retirarlo y tomar medidas sobre cuentas cuando exista una infracción
                a estos términos, a las normas de comunidad, a la ley o un riesgo para
                personas o para el servicio.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { title: 'Denunciar', text: 'Usa la bandera disponible junto al contenido.' },
                  { title: 'Bloquear', text: 'Evita nuevas interacciones con usuarios abusivos.' },
                  { title: 'Apelar', text: 'Escríbenos si consideras incorrecta una medida.' },
                ].map(({ title, text }) => (
                  <div key={title} className="rounded-2xl bg-navy p-4 text-white">
                    <h3 className="text-sm font-extrabold text-golden">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/65">{text}</p>
                  </div>
                ))}
              </div>
              <p>
                Las medidas pueden incluir advertencias, retiro de contenido,
                restricciones temporales o suspensión. En situaciones urgentes de
                seguridad podremos actuar antes de notificarte. Las apelaciones se
                reciben mediante la página de{' '}
                <Link to="/soporte" className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4">
                  soporte
                </Link>.
              </p>
            </TermsSection>

            <TermsSection id="reportes" number="06" title="Reportes del campus y asistente">
              <div className="space-y-3">
                <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
                  <Flag size={22} className="mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-extrabold">Reportes y sugerencias</h3>
                    <p className="mt-1 text-sm leading-6">
                      Envía información honesta y suficientemente clara. Su recepción
                      no garantiza un plazo o resultado específico y no reemplaza los
                      procedimientos oficiales del Instituto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950">
                  <Bot size={22} className="mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-extrabold">Asistente de IA</h3>
                    <p className="mt-1 text-sm leading-6">
                      Sus respuestas pueden ser incompletas o incorrectas. Verifica la
                      información importante con fuentes oficiales y no lo uses para
                      decisiones médicas, legales, financieras o de seguridad.
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-slate-800">
                Ágora no es un servicio de emergencias ni una autoridad. Ante un
                riesgo inmediato, contacta a los servicios de emergencia o a las
                autoridades correspondientes.
              </p>
            </TermsSection>

            <TermsSection id="licencia" number="07" title="Propiedad intelectual y licencia de la app">
              <p>
                Ágora, su diseño, software, identidad visual y materiales propios
                pertenecen a NEXORA o a sus respectivos licenciantes. Te otorgamos un
                permiso personal, limitado, revocable, no exclusivo y no transferible
                para utilizar el servicio conforme a estos términos.
              </p>
              <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <Apple size={23} className="mt-0.5 shrink-0 text-slate-800" />
                <p className="text-sm leading-6">
                  Si descargas Ágora desde App Store, también aplica la{' '}
                  <a
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-extrabold text-blue-700 underline decoration-blue-200 underline-offset-4"
                  >
                    licencia estándar de Apple
                  </a>{' '}
                  o la EULA que se publique en App Store Connect. Esa licencia regula
                  el uso de la aplicación distribuida; estos términos regulan la
                  cuenta, el contenido y los servicios de Ágora.
                </p>
              </div>
            </TermsSection>

            <TermsSection id="servicio" number="08" title="Servicios externos, cambios y disponibilidad">
              <p>
                Algunas funciones dependen de servicios externos, conexión a internet,
                proveedores de identidad, notificaciones y disponibilidad de la
                infraestructura. Sus propios términos pueden aplicar cuando interactúas
                directamente con ellos.
              </p>
              <p>
                Podemos corregir, actualizar, suspender o retirar funciones para
                mejorar el servicio, atender seguridad, cumplir requisitos o responder
                a cambios institucionales. Procuraremos informar con anticipación
                cuando un cambio importante afecte de manera material el uso habitual.
              </p>
              <p>
                Ágora se proporciona “según disponibilidad”. No garantizamos que sea
                ininterrumpida o libre de errores, pero esto no limita garantías o
                derechos irrenunciables que te correspondan conforme a la ley.
              </p>
            </TermsSection>

            <TermsSection id="terminacion" number="09" title="Suspensión y eliminación de la cuenta">
              <p>
                Puedes dejar de usar Ágora en cualquier momento y eliminar tu cuenta
                desde <strong className="font-semibold text-slate-800">Perfil → Preferencias → Eliminar cuenta</strong>.
                La eliminación cierra tu sesión y elimina o anonimiza los datos y el
                contenido personal conforme a nuestra Política de privacidad.
              </p>
              <div className="flex gap-4 rounded-2xl bg-rose-50 p-5 text-rose-950">
                <Trash2 size={22} className="mt-0.5 shrink-0" />
                <p className="text-sm leading-6">
                  Ciertos reportes o registros administrativos pueden conservarse de
                  forma anonimizada cuando sean necesarios para seguimiento, seguridad,
                  auditoría u obligaciones legales.
                </p>
              </div>
              <p>
                Podemos suspender o terminar el acceso por infracciones graves o
                reiteradas, riesgos de seguridad, fraude o exigencia legal. Cuando sea
                razonable, te indicaremos el motivo y una vía de apelación.
              </p>
            </TermsSection>

            <TermsSection id="legal" number="10" title="Responsabilidad, cambios y ley aplicable">
              <p>
                En la máxima medida permitida por la ley, NEXORA no será responsable
                por daños indirectos derivados de interrupciones, decisiones basadas
                en contenido de terceros o uso indebido del servicio. Nada de lo aquí
                previsto excluye responsabilidad que legalmente no pueda limitarse.
              </p>
              <p>
                Estos términos se interpretan conforme a las leyes aplicables de
                México, sin privarte de derechos obligatorios que correspondan a tu
                lugar de residencia. Antes de iniciar una controversia, puedes
                contactarnos para intentar resolverla de buena fe.
              </p>
              <p>
                Podemos actualizar estos términos. Si el cambio es material,
                procuraremos avisarlo en la app o mediante un canal disponible. La
                fecha publicada al inicio identifica la versión vigente.
              </p>
              <div className="flex gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <Scale size={22} className="mt-0.5 shrink-0" />
                <p className="text-sm leading-6">
                  Preguntas legales, apelaciones o avisos relacionados con estos
                  términos: <a className="font-extrabold underline" href="mailto:support@ag0ra.pro?subject=Terminos%20de%20Agora">support@ag0ra.pro</a>.
                </p>
              </div>
              <p className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-500">
                <Gavel size={17} className="mt-0.5 shrink-0" />
                Si alguna disposición no puede aplicarse, las demás continuarán
                vigentes. La falta de ejercicio inmediato de un derecho no implica
                renuncia a ese derecho.
              </p>
            </TermsSection>
          </article>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
