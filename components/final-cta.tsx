import { ArrowRight, MessageCircle } from "lucide-react"

const WA_LINK = "https://wa.me/1234567890?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20Protocolo%20Hitch"

export function FinalCta() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16">
          {/* Soft decorative circle */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/5" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary-foreground/5" />

          <div className="relative text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <MessageCircle className="h-7 w-7 text-primary-foreground" />
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">
                {"El primer paso es una conversación."}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              {"Escribinos por WhatsApp y contanos un poco sobre vos. Sin compromiso, sin presión. Simplemente hablemos."}
            </p>

            <div className="mt-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-semibold text-primary transition-all hover:opacity-90 hover:shadow-md"
              >
                {"Escribinos por WhatsApp"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/50">
              {"Respondemos en menos de 24 hs. Cupos limitados."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
