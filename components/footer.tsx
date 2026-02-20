export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-baseline gap-2">
          <span className="font-[var(--font-heading)] text-xl font-bold italic text-primary">
            Hitch
          </span>
          <span className="text-sm text-muted-foreground">{"Tu camino hacia el amor"}</span>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Protocolo Hitch. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
