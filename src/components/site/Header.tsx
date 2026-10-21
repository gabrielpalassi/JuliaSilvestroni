import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, contactUrl, site } from "@/content/site";
import { cn } from "@/lib/utils";

const headerNav = nav.filter(({ href }) => href !== "#contato");

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <a
          href="#inicio"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <img
            src="/brand/logo-completa.svg"
            alt={site.name}
            width={364}
            height={132}
            className="h-12 w-auto max-w-[calc(100vw-7rem)] md:h-14"
          />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {headerNav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar consulta
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>
        <button
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t bg-background px-6 pb-8 pt-4 lg:hidden animate-in fade-in slide-in-from-top-2"
        >
          {headerNav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b py-4 font-display text-2xl"
            >
              {n.label}
            </a>
          ))}
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar consulta
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>
      )}
    </header>
  );
}
