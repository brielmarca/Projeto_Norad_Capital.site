import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import HeroLineBackground from "../components/HeroLineBackground"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <HeroLineBackground variant="process" />
      <div className="relative z-10 max-w-5xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-4 sm:space-y-6"
        >
          <SectionTitle>{processo.title}</SectionTitle>
          <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl">
            {processo.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-x-16 gap-y-14"
        >
          {processo.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={stepVariants}
              className="space-y-4"
            >
              <span className="block text-6xl font-light text-gold/35 leading-none">
                {step.number}
              </span>
              <h3 className="text-2xl font-medium text-navy-900 tracking-tight">
                {step.title}
              </h3>
              <p className="text-navy-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="text-sm text-navy-400 max-w-xl leading-relaxed"
        >
          {processo.note}
        </motion.p>
      </div>
    </section>
  )
}
