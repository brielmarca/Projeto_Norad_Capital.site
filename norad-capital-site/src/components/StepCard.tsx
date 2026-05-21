import { motion } from "framer-motion"
import type { Transition, Variants } from "framer-motion"

interface StepCardProps {
  number: string
  title: string
  description: string
  index: number
}

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const revealTransition: Transition = {
  duration: 0.7,
  ease: premiumEase,
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...revealTransition,
      delay: i * 0.12,
    },
  }),
}

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: premiumEase,
      delay: 0.2,
    },
  },
}

export default function StepCard({ number, title, description, index }: StepCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="group relative space-y-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-navy-100/60 hover:border-gold/30 hover:bg-white/80 transition-all duration-300"
      whileHover={{ y: -4 }}
      role="article"
      aria-label={`Etapa ${number}: ${title}`}
    >
      <motion.span
        variants={numberVariants}
        className="block text-5xl md:text-6xl font-light text-gold/30 leading-none group-hover:text-gold/40 transition-colors duration-300"
        aria-hidden="true"
      >
        {number}
      </motion.span>

      <h3 className="text-xl md:text-2xl font-medium text-navy-900 tracking-tight">
        {title}
      </h3>

      <p className="text-navy-400 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
