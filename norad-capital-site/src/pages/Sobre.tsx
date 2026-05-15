import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import HeroLineBackground from "../components/HeroLineBackground"

const ease = [0.16, 1, 0.3, 1] as const

export default function Sobre() {
  const { sobre } = siteContent

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <HeroLineBackground variant="institutional" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8 md:space-y-10"
        >
          <SectionTitle>{sobre.title}</SectionTitle>
          <div className="space-y-5 text-base md:text-lg text-navy-400 leading-relaxed">
            {sobre.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-6 bg-navy-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                {sobre.presence.title}
              </h2>
              <p className="text-lg text-navy-300 leading-relaxed max-w-xl">
                {sobre.presence.text}
              </p>
            </div>

            <div className="lg:col-span-2 space-y-0">
              {sobre.presence.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease }}
                  className="border-t border-white/10 py-8"
                >
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {point.label === "Escritório em São Paulo" ? (
                      <>
                        Escritório em{" "}
                        <span className="text-gold">São Paulo</span>
                      </>
                    ) : (
                      point.label
                    )}
                  </h3>
                  <p className="text-sm text-navy-300 mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
