import { ArrowRight, Heart } from "lucide-react"

const WA_LINK = "https://wa.me/1234567890?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20Protocolo%20Hitch"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36">
      {/* Soft organic background shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Warm badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
          <Heart className="h-4 w-4 text-primary" fill="currentColor" />
          <span className="text-sm font-medium text-primary">
            {"Te acompañamos en este camino"}
          </span>
        </div>

        <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight text-foreground md:text-6xl md:leading-[1.15]">
          <span className="text-balance">
            {"Encontrar a tu persona no tiene por qué ser tan difícil."}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"Somos un equipo de mujeres que te ayuda a encontrar pareja de forma organizada, humana y con cariño. Sin apps, sin frustraciones. En "}
          <span className="font-semibold text-primary">{"6 meses"}</span>
          {" te presentamos a personas que realmente valen la pena."}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            {"Quiero saber más"}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            {"Cómo funciona"}
          </a>
        </div>
      </div>
    </section>
  )
}
