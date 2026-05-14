import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"

const ease = [0.16, 1, 0.3, 1] as const

export default function CreditoImobiliario() {
  const { creditoImobiliario, contato } = siteContent

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy-900 leading-tight">
            {creditoImobiliario.title}
          </h1>
          <p className="text-xl md:text-2xl text-navy-400 leading-relaxed max-w-2xl">
            {creditoImobiliario.intro}
          </p>
        </motion.div>

        <div className="space-y-14">
          {creditoImobiliario.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-medium text-navy-900 tracking-tight">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-3xl">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
          className="space-y-6 pt-4"
        >
          <WhatsAppButton
            number={contato.whatsapp.number}
            message={contato.whatsapp.message}
            label={creditoImobiliario.cta}
          />
          <p className="text-sm text-navy-400 max-w-xl leading-relaxed">
            {creditoImobiliario.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
