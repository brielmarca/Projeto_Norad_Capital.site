import { Link, useLocation } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import logoSrc from "../assets/Noradlogo.png"

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { nav } = siteContent

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <img
            src={logoSrc}
            alt="Norad Capital"
            className="h-8 sm:h-9 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors duration-200 ${
                pathname === item.path
                  ? "text-navy-900 font-medium"
                  : "text-navy-400 hover:text-navy-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-navy-900 p-3"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white/95 backdrop-blur-lg border-b border-navy-100 px-6 pb-8 pt-4 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-base transition-colors ${
                pathname === item.path
                  ? "text-navy-900 font-medium"
                  : "text-navy-400 hover:text-navy-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
