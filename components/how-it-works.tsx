import { UserRound, Search, CalendarHeart, Sparkles } from "lucide-react"

const STEPS = [
  {
    icon: <UserRound className="h-6 w-6" />,
    title: "Te conocemos a fondo",
    description:
      "Empezamos con una conversación para entender quién sos, qué buscás y qué es importante para vos en una pareja. Sin formularios fríos, una charla real.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Te ayudamos a dar lo mejor de vos",
    description:
      "Trabajamos juntas para que te presentes al mundo tal como sos, con seguridad y claridad. Te ayudamos a brillar.",
  },
  {
    icon: <CalendarHeart className="h-6 w-6" />,
    title: "Te ayudamos a que encuentres a tu pareja estable",
    description:
      "Cuando encontramos a alguien que vale la pena, organizamos todo. Vos solo tenés que llegar y ser vos misma.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Te acompañamos en el proceso",
    description:
      "Después de cada encuentro, hablamos. Te damos apoyo, ajustamos lo que haga falta y seguimos hasta que encuentres a tu persona.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
            {"Nuestro proceso"}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              {"Simple, cercano y pensado para vos."}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"No creemos en fórmulas mágicas. Creemos en escucharte, entenderte y ponerte frente a la persona correcta."}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/20"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {step.icon}
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="font-[var(--font-heading)] text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
