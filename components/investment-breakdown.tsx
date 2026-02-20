import { Repeat, CalendarCheck, Sparkles, Trophy } from "lucide-react"

const ITEMS = [
  {
    icon: <Repeat className="h-5 w-5" />,
    name: "Sesiones semanales",
    price: "$35 USD",
    frequency: "por sesión",
    description:
      "Nos juntamos cada semana para hablar de cómo vas, ajustar lo que haga falta y prepararte para lo que viene.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    name: "Por cada cita confirmada",
    price: "$48 USD",
    frequency: "por encuentro",
    description:
      "Solo se cobra cuando te presentamos a alguien que ya pasó por nuestro proceso de selección.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    name: "Cuando hay conexión real",
    price: "$100 USD",
    frequency: "por segunda cita",
    description:
      "Si después del primer encuentro quieren volver a verse, es señal de que algo lindo está naciendo.",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    name: "Cuando encontrás a tu persona",
    price: "$500 USD",
    frequency: "pago único",
    description:
      "El momento que estábamos esperando. Solo se cobra cuando el proceso llega a buen puerto.",
  },
]

export function InvestmentBreakdown() {
  return (
    <section id="inversion" className="bg-secondary px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
            {"Inversión"}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">{"Pagás por avances reales, no por promesas."}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Cada paso tiene un valor justo y transparente. No hay paquetes cerrados ni letras chicas."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-foreground">
                {item.name}
              </h3>

              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="font-[var(--font-heading)] text-2xl font-bold text-primary">
                  {item.price}
                </span>
                <span className="text-sm text-muted-foreground">{item.frequency}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
