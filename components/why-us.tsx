import { ShieldCheck, HeartHandshake, Eye } from "lucide-react"

const REASONS = [
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Somos mujeres acompañando mujeres",
    description:
      "Entendemos lo que sentís porque lo vivimos. No te juzgamos, te escuchamos y te guiamos con empatía real.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Un camino claro para conseguir una pareja",
    description:
      "No improvisamos. Tenés un proceso paso a paso, con acompañamiento real, para que cada semana estés más cerca de encontrar a tu persona.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Tu privacidad es sagrada",
    description:
      "Todo el proceso es confidencial. Nadie sabe que estás en nuestro protocolo a menos que vos lo decidas.",
  },
]

export function WhyUs() {
  return (
    <section id="por-que" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
            {"Por qué nosotras"}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              {"No somos una app de citas. Somos personas que se preocupan por vos."}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/20"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {r.icon}
              </div>
              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
