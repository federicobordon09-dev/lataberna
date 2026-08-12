import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const googleSearch =
  "https://www.google.com/maps/search/La+Taberna+Ramon+Falcon+146+Lomas+de+Zamora";

export function Reviews() {
  return (
    <section id="resenas" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reseñas"
            align="center"
            title={
              <>
                Lo que dicen los que <em className="italic text-wine">ya vinieron</em>
              </>
            }
            intro="La mesa no espera, se llena. Estas son algunas de las experiencias que nos cuentan nuestros comensales."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            <div className="flex items-center gap-3">
              <span className="flex text-mustard">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </span>
              <span className="text-sm text-ink-soft">
                {site.ratings.tripadvisor.value}/5 · TripAdvisor
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex text-mustard">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </span>
              <span className="text-sm text-ink-soft">
                {site.ratings.google.value}/5 en Google
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.source + i}
              delay={i * 90}
              className="flex flex-col justify-between rounded-3xl border border-olive/15 bg-paper-light p-7 md:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex text-mustard">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Icon key={si} name="star" className="h-3.5 w-3.5" />
                    ))}
                  </span>
                  <Icon name="quote" className="h-6 w-6 text-wine/30" />
                </div>
                <blockquote className="mt-5 text-[0.95rem] leading-relaxed text-ink">
                  {review.quote}
                </blockquote>
              </div>
              <footer className="mt-6 border-t hairline pt-4">
                {review.highlight ? (
                  <p className="text-xs font-medium uppercase tracking-wider text-wine">
                    {review.highlight}
                  </p>
                ) : null}
                <p className="mt-1 text-xs text-ink-soft">
                  Reseñas verificadas en {review.source}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-10 text-center text-sm text-ink-soft">
            <span className="font-medium text-wine">#2 de 152</span> restaurantes
            en Lomas de Zamora · TripAdvisor ·{" "}
            <a
              href={googleSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wine/40 underline-offset-4 hover:text-wine"
            >
              Dejá tu reseña en Google
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}