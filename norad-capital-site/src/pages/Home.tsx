import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import { ShieldCheck, ArrowRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Home() {
  const { home, contato } = siteContent

  return (
    <>
      <section
        id="intro"
        className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16"
      >
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

      <section className="py-32 px-6 bg-navy-50">
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

      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto space-y-6 text-center"
        >
          <ShieldCheck
            size={40}
            className="text-gold mx-auto"
          />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-navy-900">
            {home.transparencia.title}
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            {home.transparencia.text}
          </p>
        </motion.div>
      </section>
    </>
  )
}
