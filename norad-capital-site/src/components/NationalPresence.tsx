import { MapPin, Globe } from "lucide-react"

const cards = [
  { icon: MapPin, location: "São Paulo", label: "Escritório institucional" },
  { icon: Globe, location: "Brasil", label: "Atuação nacional" },
]

export default function NationalPresence() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto">
      {cards.map((card, i) => {
        const Icon = card.icon
        return (
          <div
            key={i}
            className="flex flex-col items-center gap-3 border border-navy-200/30 rounded-2xl py-10 px-6 bg-white/50"
          >
            <Icon size={20} className="text-navy-300" />
            <div className="text-center space-y-1">
              <p className="text-sm font-medium text-navy-900 tracking-tight">
                {card.location}
              </p>
              <p className="text-xs text-navy-400">
                {card.label}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
