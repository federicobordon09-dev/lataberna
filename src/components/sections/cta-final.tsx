import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Icon } from "@/components/ui/icon";
import { BrossaMark } from "@/components/brossa-mark";
import { Reveal } from "@/components/ui/reveal";
import { site, links } from "@/lib/site";

export function CtaFinal() {
  return (
    <section
      className="relative overflow-hidden bg-wine py-20 text-paper-light md:py-28"
      style={{ backgroundColor: "#8a1628" }}
    >
      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-block text-paper-light">
            <BrossaMark className="h-24 w-24 opacity-90" />
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-[3.4rem]">
            {site.finalCta}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
            Reservá tu mesa y vení a vivir la cocina italiana de autor, hecha
            en casa, en Lomas de Zamora.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <CtaLink href={links.reservas} external variant="cream" size="lg">
              Reservá ahora
              <Icon name="arrow" className="h-4 w-4" />
            </CtaLink>
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-paper/40 px-7 text-base font-semibold text-paper-light transition-colors hover:bg-paper/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}