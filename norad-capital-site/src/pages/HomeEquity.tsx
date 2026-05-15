import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import HeroLineBackground from "../components/HeroLineBackground"

const ease = [0.16, 1, 0.3, 1] as const

const WHATSAPP_NUMBER = "5511999999999"

export default function HomeEquity() {
  const { homeEquity } = siteContent
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Home Equity.")}`

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <HeroLineBackground variant="equity" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs sm:text-sm md:text-base text-gold font-medium tracking-[0.2em] uppercase"
          >
            {homeEquity.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-navy-900 leading-[1.2] sm:leading-[1.15] md:leading-[1.05] lg:leading-[0.95]"
          >
            {homeEquity.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base sm:text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto"
          >
            {homeEquity.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2"
          >
            <WhatsAppButton
              number={WHATSAPP_NUMBER}
              message="Olá! Gostaria de saber mais sobre Home Equity."
              label={homeEquity.cta}
            />
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium px-6 py-4"
            >
              Conhecer soluções <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EDUCATIONAL SECTIONS */}
      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {homeEquity.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="space-y-4"
              >
                <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 md:py-24 px-6 bg-navy-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-navy-900">
            Avalie as possibilidades para o seu patrimônio.
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Converse com um especialista e entenda como o Home Equity pode ser
            utilizado de forma estratégica no seu caso.
          </p>
          <div className="pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
            >
              Iniciar análise estratégica
            </a>
          </div>
        </motion.div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-16 px-6 border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-navy-300 leading-relaxed">
            {homeEquity.disclaimer}
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 lg:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <p className="text-sm text-gold font-medium tracking-[0.15em] uppercase">
            Norad Capital
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy-900">
            Agende uma conversa.
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Atendimento personalizado e acompanhamento consultivo em cada etapa
            da operação.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              number={WHATSAPP_NUMBER}
              message="Olá! Gostaria de agendar uma conversa sobre Home Equity."
              label={homeEquity.cta}
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}
