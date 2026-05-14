import { useEffect, useRef } from "react"
import { siteContent } from "../data/siteContent"
import logoSrc from "../assets/Noradlogo.png"
import { MessageCircle, Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import type { Transition, Variants } from "framer-motion"

export default function Footer() {
  const { footer, company, contato } = siteContent
  const shouldReduceMotion = useReducedMotion()
  const footerRef = useRef<HTMLElement>(null)

  const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const revealTransition: Transition = { duration: 0.8, ease: premiumEase }

  const containerVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  }

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition,
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const footerElement = footerRef.current

    if (!footerElement) return

    const updateFooterHeight = () => {
      document.documentElement.style.setProperty(
        "--footer-reveal-height",
        `${footerElement.offsetHeight}px`,
      )
    }

    updateFooterHeight()

    const resizeObserver = new ResizeObserver(updateFooterHeight)
    resizeObserver.observe(footerElement)
    window.addEventListener("resize", updateFooterHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateFooterHeight)
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="footer-reveal-panel bg-navy-950 text-navy-300 py-12 md:py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="w-12 h-0.5 bg-gold mb-10"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: premiumEase }}
          style={{ transformOrigin: "left" }}
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <img
              src={logoSrc}
              alt="Norad Capital"
              className="h-8 sm:h-9 md:h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-navy-400 leading-relaxed max-w-xs">
              {company.description}
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xs font-semibold tracking-widest text-navy-200 uppercase">
              Contato
            </h3>
            <motion.div
              className="space-y-3"
              variants={containerVariants}
            >
              <motion.a
                href={`https://wa.me/${contato.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors py-2"
                variants={itemVariants}
              >
                <MessageCircle size={14} />
                {contato.whatsapp.label}
              </motion.a>
              <motion.a
                href={`tel:${contato.phone}`}
                className="flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors py-2"
                variants={itemVariants}
              >
                <Phone size={14} />
                {contato.phone}
              </motion.a>
              <motion.a
                href={`mailto:${contato.email.address}`}
                className="flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors py-2"
                variants={itemVariants}
              >
                <Mail size={14} />
                {contato.email.address}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xs font-semibold tracking-widest text-navy-200 uppercase">
              Escritório
            </h3>
            <motion.div
              className="flex items-start gap-2 text-sm text-navy-400 leading-relaxed"
              variants={itemVariants}
            >
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{contato.office}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-navy-800 pt-8 mt-8 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.p
            className="text-xs text-navy-500 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            {footer.disclaimer}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            variants={itemVariants}
          >
            <p className="text-xs text-navy-500">{footer.rights}</p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-navy-400 hover:text-white transition-colors py-2"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              Voltar ao topo <ArrowUp size={12} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
