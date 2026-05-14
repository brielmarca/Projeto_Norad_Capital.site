import { siteContent } from "../data/siteContent"
import logoSrc from "../assets/Noradlogo.png"

export default function Footer() {
  const { footer } = siteContent

  return (
    <footer className="bg-navy-950 text-navy-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-12 h-0.5 bg-gold mb-8" />
        <div className="mb-6">
          <img
            src={logoSrc}
            alt="Norad Capital"
            className="h-8 sm:h-9 md:h-10 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="text-sm leading-relaxed space-y-2 max-w-xl">
          <p>{footer.rights}</p>
          <p className="text-navy-400 text-xs">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
