import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  number: string
  message: string
  label: string
  inverted?: boolean
}

export default function WhatsAppButton({
  number,
  message,
  label,
  inverted,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

  if (inverted) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gold text-navy-950 px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-light transition-all duration-300"
      >
        <MessageCircle size={20} />
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
    >
      <MessageCircle size={20} />
      {label}
    </a>
  )
}
