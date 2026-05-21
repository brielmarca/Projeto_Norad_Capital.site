import { siteContent } from "../data/siteContent"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Transition, Variants } from "framer-motion"

export default function Footer() {
  const { footer, company } = siteContent

  const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const revealTransition: Transition = { duration: 0.8, ease: premiumEase }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition,
    },
  }

  return (
    <footer className="bg-surface w-full py-20 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          className="col-span-1 md:col-span-1"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={company.logoUrl}
            alt="Norad Capital"
            className="h-8 mb-6"
          />
          <p className="text-base text-on-surface-variant leading-relaxed">
            {company.footerTagline}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-base font-semibold text-primary">Soluções</h4>
          <motion.a
            href="/home-equity"
            className="text-on-surface-variant hover:text-primary transition-colors"
            variants={itemVariants}
          >
            Home Equity
          </motion.a>
          <motion.a
            href="/credito-imobiliario"
            className="text-on-surface-variant hover:text-primary transition-colors"
            variants={itemVariants}
          >
            Crédito Estruturado
          </motion.a>
          <motion.a
            href="/contato"
            className="text-on-surface-variant hover:text-primary transition-colors"
            variants={itemVariants}
          >
            Capital de Giro
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-base font-semibold text-primary">Institucional</h4>
          <motion.a
            href="/sobre"
            className="text-on-surface-variant hover:text-primary transition-colors"
            variants={itemVariants}
          >
            Sobre Nós
          </motion.a>
          <motion.a
            href="/contato"
            className="text-on-surface-variant hover:text-primary transition-colors"
            variants={itemVariants}
          >
            Trabalhe Conosco
          </motion.a>
          <motion.a
            href="/contato"
            className="text-on-surface-variant hover:text-primary transition-colors"
            variants={itemVariants}
          >
            Compliance
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-base font-semibold text-primary">Legal</h4>
          <Link
            to="/privacidade"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Privacidade
          </Link>
          <Link
            to="/termos"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Termos de Uso
          </Link>
          <Link
            to="/contato"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Ouvidoria
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-20 pt-8 border-t border-outline-variant/10 text-center md:text-left">
        <span className="text-base text-on-surface-variant text-sm">
          {footer.rights}
        </span>
      </div>
    </footer>
  )
}
