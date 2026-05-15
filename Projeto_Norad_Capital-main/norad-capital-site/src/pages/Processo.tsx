import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import HeroLineBackground from "../components/HeroLineBackground"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const ease = [0.16, 1, 0.3, 1] as const

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export default function Processo() {
  const { processo } = siteContent

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-24 pb-24">
      <HeroLineBackground />
      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-6"
        >
          <SectionTitle>{processo.title}</SectionTitle>
          <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl">
            {processo.subtitle}
          </p>
          <p className="text-base text-navy-300 leading-relaxed max-w-2xl">
            {processo.intro}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {processo.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex gap-8 md:gap-12"
            >
              <span className="block text-5xl md:text-6xl font-light text-gold/30 leading-none shrink-0 w-16 md:w-20 text-right">
                {step.number}
              </span>
              <div className="space-y-3 pt-2">
                <h3 className="text-xl md:text-2xl font-medium text-navy-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-navy-400 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="border-t border-navy-100 pt-8"
        >
          <p className="text-sm text-navy-300 max-w-xl leading-relaxed">
            {processo.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
