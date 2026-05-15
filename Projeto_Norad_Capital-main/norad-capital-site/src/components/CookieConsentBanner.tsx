import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { X } from "lucide-react"

const STORAGE_KEY = "norad-cookie-consent"

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-navy-100 shadow-[0_8px_40px_-12px_rgba(10,22,40,0.12)] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <button
            onClick={() => setVisible(false)}
            className="shrink-0 text-navy-300 hover:text-navy-600 transition-colors -mt-1 -mr-1 p-1"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-navy-600 leading-relaxed">
            A Norad Capital utiliza cookies essenciais para o funcionamento do site e, quando autorizado, cookies de análise para melhorar sua experiência. Você pode aceitar, recusar ou consultar nossa{" "}
            <Link
              to="/privacidade"
              className="text-navy-900 font-medium underline underline-offset-2 hover:text-gold transition-colors"
            >
              Política de Privacidade
            </Link>
            .
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button
              onClick={() => handleChoice("accepted")}
              className="inline-flex items-center justify-center bg-navy-900 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
            >
              Aceitar
            </button>
            <button
              onClick={() => handleChoice("rejected")}
              className="inline-flex items-center justify-center text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium px-6 py-3"
            >
              Recusar opcionais
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
