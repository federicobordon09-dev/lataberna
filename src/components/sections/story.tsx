import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, type IconName } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

const highlights: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "mansion",
    title: "Una casona con historia",
    text: "Casa reciclada de principios de siglo, con vigas de madera, entrepiso y salón amplio.",
  },
  {
    icon: "wheat",
    title: "Todo hecho en el local",
    text: "Pastas con sémola y huevo, pan, helados: hasta el helado se elabora en la casa.",
  },
  {
    icon: "leaf",
    title: "Opción para celíacos",
    text: "Nuestra cocina puede preparar platos aptos para celíacos. Avisanos al reservar.",
  },
  {
    icon: "mansion",
    title: "Parte del grupo Los W",
    text: "Más de 20 años de trayectoria junto a Il Quotidiano, Sottovoce, Fervor y El Burladero.",
  },
];

export function Story() {
  return (
    <section id="historia" className="scroll-mt-24 py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              eyebrow="Nuestra historia"
              title={
                <>
                  Un clásico de Lomas,
                  <br />
                  <em className="italic text-wine">barrio</em> con alma
                </>
              }
            />
            <figure className="mt-8 overflow-hidden rounded-3xl border border-olive/15 bg-paper-deep">
              <div className="grid h-64 place-items-center bg-[radial-gradient(circle_at_center,rgba(155,27,48,0.12),transparent_70%)]">
                <Icon name="mansion" className="h-16 w-16 text-wine/70" />
              </div>
              <figcaption className="flex items-start gap-2 border-t border-olive/10 bg-paper/60 px-5 py-4 text-xs leading-relaxed text-ink-soft">
                <Icon name="sparkle" className="mt-0.5 h-3.5 w-3.5 flex-none text-mustard" />
                <span>
                  Vista del salón de la casona: vigas, entrepiso y ambiente.
                  Las fotografías reales de la casa se integran al confirmar
                  el proyecto.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p className="first-line:font-display first-line:font-medium first-line:text-[1.35em] first-line:text-wine">
                La Nación ya la reseñaba en el año 2000 como
                &ldquo;especialidades europeas en una casa reciclada de
                Lomas&rdquo;. Veinte años después, La Taberna sigue siendo un
                punto de encuentro de la familia Waissman: una casona con vigas
                de madera donde la cocina italiana de autor se elabora, en
                serio, in situ.
              </p>
              <p>
                Del chef Alejo Waissman a la heladería propia, todo nace en este
                local del sur del conurbano. Una mesa de pareja, un cumpleaños
                de los chicos o el almuerzo de domingo de la familia: hay un
                lugar para cada ocasión, con la atención cálida de quien recibe
                en su casa — copa de bienvenida adentro, y un lemoncello al
                despedirse.
              </p>
              <p className="text-ink-soft">
                Formamos parte del grupo gastronómico Los W, junto a Il
                Quotidiano, Sottovoce, Fervor y El Burladero: más de 20 años de
                oficio, respaldo y un mismo estándar de cocina.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-olive/15 bg-olive/10 sm:grid-cols-2">
              {highlights.map((h) => (
                <li
                  key={h.title}
                  className="flex gap-4 bg-paper-light p-5"
                >
                  <Icon
                    name={h.icon}
                    className="h-6 w-6 flex-none text-wine"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {h.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}