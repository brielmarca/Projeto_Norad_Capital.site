import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import HeroLineBackground from "../components/HeroLineBackground"

const ease = [0.16, 1, 0.3, 1] as const

export default function CreditoImobiliario() {
  const { creditoImobiliario, contato } = siteContent

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <HeroLineBackground variant="realestate" />
      <div className="relative z-10 max-w-4xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-navy-900 leading-[1.2] sm:leading-tight">
            {creditoImobiliario.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-400 leading-relaxed max-w-2xl">
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
