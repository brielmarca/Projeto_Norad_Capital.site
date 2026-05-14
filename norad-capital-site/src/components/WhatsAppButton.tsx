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

  const base = "inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"

  if (inverted) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-gold text-navy-900 hover:bg-gold-light shadow-sm hover:shadow-md`}
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
      className={`${base} bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  )
}
