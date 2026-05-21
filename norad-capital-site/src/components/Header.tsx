import { Link, useLocation } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { nav, company } = siteContent

  const filteredNav = nav.filter(
    (item) =>
      item.path !== "/home-equity" && item.path !== "/credito-imobiliario"
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        <Link to="/" className="shrink-0">
          <img
            src={company.logoUrl}
            alt="Norad Capital"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-base">
          {filteredNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors hover:opacity-80 ${
                pathname === item.path
                  ? "text-primary font-semibold border-b border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contato"
            className="bg-primary text-on-primary text-base px-8 py-3 rounded-full hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Seja Cliente
          </Link>
        </div>

        <button
          className="md:hidden text-primary p-2 shrink-0"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-outline-variant/20 px-6 pb-8 pt-4 flex flex-col gap-5">
          {filteredNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-base transition-colors ${
                pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="bg-primary text-on-primary text-base px-8 py-3 rounded-full hover:opacity-90 transition-all text-center mt-2"
          >
            Seja Cliente
          </Link>
        </nav>
      )}
    </header>
  )
}
