import { siteContent } from "../data/siteContent"
import logoSrc from "../assets/Noradlogo.png"

export default function Footer() {
  const { footer } = siteContent

  return (
    <footer className="bg-navy-900 text-navy-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-12 h-0.5 bg-gold mb-8 rounded-full" />
        <div className="bg-white rounded-xl p-4 inline-block mb-6 shadow-sm">
          <img
            src={logoSrc}
            alt="Norad Capital"
            className="h-10 w-auto"
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
