import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import { Mail, Phone, MapPin } from "lucide-react"
import HeroLineBackground from "../components/HeroLineBackground"

const ease = [0.16, 1, 0.3, 1] as const

export default function Contato() {
  const { contato } = siteContent

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-24 pb-16">
      <HeroLineBackground />
      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy-900 leading-tight">
            {contato.title}
          </h1>
          <p className="text-xl md:text-2xl text-navy-400 leading-relaxed max-w-2xl">
            {contato.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <WhatsAppButton
                number={contato.whatsapp.number}
                message={contato.whatsapp.message}
                label={contato.whatsapp.label}
              />

              <a
                href={`tel:${contato.phone}`}
                className="flex items-center gap-3 text-navy-400 hover:text-navy-900 transition-colors"
              >
                <Phone size={20} />
                <span>{contato.phone}</span>
              </a>

              <a
                href={`mailto:${contato.email.address}`}
                className="flex items-center gap-3 text-navy-400 hover:text-navy-900 transition-colors"
              >
                <Mail size={20} />
                <span>{contato.email.address}</span>
              </a>

              <div className="flex items-start gap-3 text-navy-400">
                <MapPin size={20} className="shrink-0 mt-0.5" />
                <span>{contato.office}</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder={contato.form.nameLabel}
              className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder={contato.form.emailLabel}
              className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm"
            />
            <input
              type="tel"
              placeholder={contato.form.phoneLabel}
              className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm"
            />
            <textarea
              rows={4}
              placeholder={contato.form.messageLabel}
              className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
            >
              {contato.form.submitLabel}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
