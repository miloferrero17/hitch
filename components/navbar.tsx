"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const WA_LINK = "https://wa.me/1234567890?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20Protocolo%20Hitch"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-[var(--font-heading)] text-2xl font-bold italic text-primary">
            Hitch
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {"Cómo funciona"}
          </a>
          <a href="#inversion" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {"Inversión"}
          </a>
          <a href="#por-que" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {"Por qué nosotras"}
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {"Conversemos"}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#como-funciona" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              {"Cómo funciona"}
            </a>
            <a href="#inversion" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              {"Inversión"}
            </a>
            <a href="#por-que" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              {"Por qué nosotras"}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {"Conversemos"}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
