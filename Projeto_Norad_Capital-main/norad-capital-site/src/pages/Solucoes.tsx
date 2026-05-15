import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import HeroLineBackground from "../components/HeroLineBackground"
import { ArrowRight, MessageCircle } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const whatsappUrl = `https://wa.me/${siteContent.contato.whatsapp.number}?text=${encodeURIComponent(siteContent.contato.whatsapp.message)}`

export default function Solucoes() {
  const { solucoes } = siteContent

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col px-6 pt-24 pb-24">
      <HeroLineBackground />

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-6"
        >
          <SectionTitle>{solucoes.title}</SectionTitle>
          <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl">
            {solucoes.subtitle}
          </p>
        </motion.div>

        {/* Audience Segmentation */}
        <div className="space-y-20">
          {/* Para Você */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-10"
          >
            <div className="space-y-3">
              <span className="text-xs font-medium uppercase tracking-widest text-gold-dark">
                Pessoa Física
              </span>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-navy-900">
                {solucoes.introSection.title}
              </h3>
              <p className="text-navy-400 leading-relaxed max-w-xl">
                {solucoes.introSection.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solucoes.introSection.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease }}
                >
                  <Link
                    to={item.path}
                    className="group block border border-navy-100 rounded-3xl p-10 space-y-5 hover:border-navy-200 hover:shadow-sm transition-all duration-500"
                  >
                    <h4 className="text-2xl font-medium text-navy-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-navy-400 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark group-hover:text-gold transition-colors">
                      {item.cta} <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-navy-100" />

          {/* Para sua Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-10"
          >
            <div className="space-y-3">
              <span className="text-xs font-medium uppercase tracking-widest text-gold-dark">
                Pessoa Jurídica
              </span>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-navy-900">
                {solucoes.businessSection.title}
              </h3>
              <p className="text-navy-400 leading-relaxed max-w-xl">
                {solucoes.businessSection.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solucoes.businessSection.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease }}
                >
                  <Link
                    to={item.path}
                    className="group block border border-navy-100 rounded-3xl p-10 space-y-5 hover:border-navy-200 hover:shadow-sm transition-all duration-500"
                  >
                    <h4 className="text-2xl font-medium text-navy-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-navy-400 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark group-hover:text-gold transition-colors">
                      {item.cta} <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="border border-navy-100 rounded-3xl p-12 md:p-16 text-center space-y-6 bg-navy-50"
        >
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-navy-900">
            {solucoes.ctaSection.title}
          </h3>
          <p className="text-navy-400 leading-relaxed max-w-lg mx-auto">
            {solucoes.ctaSection.description}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy-900 text-white rounded-full text-base font-medium hover:bg-navy-800 transition-colors duration-300"
          >
            <MessageCircle size={20} />
            {solucoes.ctaSection.cta}
          </a>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-xs text-navy-300 leading-relaxed max-w-2xl mx-auto text-center pt-8"
        >
          A Norad Capital atua como intermediadora de crédito. A aprovação, taxas, prazos, valores e demais condições estão sujeitos à análise e aos critérios das instituições financeiras parceiras.
        </motion.p>
      </div>
    </section>
  )
}
