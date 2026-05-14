import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import { ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Home() {
  const { home, contato, parceiros } = siteContent

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-navy-900 leading-[0.95]"
          >
            {home.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto"
          >
            {home.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="pt-4"
          >
            <WhatsAppButton
              number={contato.whatsapp.number}
              message={contato.whatsapp.message}
              label={home.cta}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-navy-900/50 font-light italic tracking-wide">
            {home.phrase}
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-navy-50">
        <div className="max-w-5xl mx-auto space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900 leading-tight"
          >
            {home.narrative.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {home.narrative.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="space-y-3"
              >
                <p className="text-sm font-medium text-gold-dark tracking-widest uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-medium text-navy-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-navy-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy-900 leading-tight"
          >
            {home.solucoes.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {home.solucoes.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                <Link
                  to={item.path}
                  className="group block border border-navy-100 rounded-3xl p-10 space-y-4 hover:border-navy-200 hover:shadow-sm transition-all duration-500"
                >
                  <h3 className="text-2xl font-medium text-navy-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark group-hover:text-gold transition-colors">
                    Saber mais <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-navy-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto space-y-6 text-center"
        >
          <ShieldCheck size={40} className="text-gold mx-auto" />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-navy-900">
            {home.transparencia.title}
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            {home.transparencia.text}
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              {parceiros.title}
            </h2>
            <p className="text-lg text-gold font-light tracking-wide">
              {parceiros.subtitle}
            </p>
            <p className="text-navy-300 leading-relaxed max-w-2xl mx-auto">
              {parceiros.text}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {parceiros.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                className="group relative"
              >
                <div className="relative border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-5 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-12px_rgba(201,168,76,0.15)]">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-20 max-w-[80%] object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white/90">
                      {item.name}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-navy-900">
            Vamos conversar?
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Agende uma conversa e descubra a solução ideal para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              number={contato.whatsapp.number}
              message={contato.whatsapp.message}
              label={home.finalCta}
            />
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium"
            >
              Outros canais de contato <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
