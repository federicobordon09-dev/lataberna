import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { links, site } from "@/lib/site";

const faqs = [
  {
    q: "¿Dónde queda La Taberna?",
    a: "En Calle Cnel. Ramón Falcón 146, Lomas de Zamora, provincia de Buenos Aires.",
  },
  {
    q: "¿Las pastas son hechas en casa?",
    a: "Sí. Elaboramos las pastas en el local con sémola de trigo candeal y huevo. También el pan y el helado se preparan acá.",
  },
  {
    q: "¿Cómo reservo una mesa?",
    a: "Podés reservar por teléfono al 4292-5187 o con un clic en el botón “Reservá tu mesa” (CoverManager). Recomendamos reservar: la mesa no espera, se llena.",
  },
  {
    q: "¿Tienen opciones para celíacos?",
    a: "Sí. Nuestra cocina puede preparar platos para celíacos; avisanos al reservar.",
  },
  {
    q: "¿Venden helado para llevar?",
    a: "Sí. Helado artesanal por kilo (1/4, 1/2 y 1 kg), con pedido por teléfono al 4292-5187 / 4292-5297.",
  },
  {
    q: "¿Hacen delivery?",
    a: "Sí, a través de Rappi en Lomas de Zamora (menú reducido de delivery).",
  },
  {
    q: "¿Tienen menú ejecutivo de mediodía?",
    a: "Sí, abrimos los mediodías con menú ejecutivo. Consultá la disponibilidad del día al reservar.",
  },
  {
    q: "¿Reciben cumpleaños y eventos familiares?",
    a: "Sí. Recibimos cumpleaños y eventos familiares. Reservá tu celebración por teléfono o con el botón de reserva.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            align="center"
            title={
              <>
                Antes de <em className="italic text-wine">venir</em>
              </>
            }
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-olive/15 bg-paper-light transition-colors open:border-wine/30"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-olive/25 text-wine transition-transform group-open:rotate-45">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 text-center text-sm text-ink-soft">
            ¿Tenés otra pregunta?{" "}
            <a
              href={`tel:${site.phone.tel}`}
              className="font-medium text-wine hover:underline"
            >
              Llamanos al {site.phone.display}
            </a>{" "}
            o{" "}
            <a
              href={links.reservas}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-wine hover:underline"
            >
              reservá tu mesa online
            </a>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}