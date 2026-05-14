import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import HeroLineBackground from "../components/HeroLineBackground"
import { ArrowRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Solucoes() {
  const { solucoes } = siteContent

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-24 pb-16">
      <HeroLineBackground />
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
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

        <div className="grid md:grid-cols-2 gap-8">
          {solucoes.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
            >
              <Link
                to={item.path}
                className="group block border border-navy-100 rounded-3xl p-12 space-y-6 hover:border-navy-200 hover:shadow-sm transition-all duration-500"
              >
                <h3 className="text-3xl font-medium text-navy-900 tracking-tight">
                  {item.title}
                </h3>
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
      </div>
    </section>
  )
}
