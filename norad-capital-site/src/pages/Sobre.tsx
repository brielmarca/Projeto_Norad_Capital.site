import { motion } from "framer-motion"
import { Shield, Users, Lightbulb } from "lucide-react"
import { siteContent } from "../data/siteContent"
import HeroLineBackground from "../components/HeroLineBackground"
import executivo from "../assets/executivo.png"

const ease = [0.16, 1, 0.3, 1] as const

const features = [
  { icon: Shield, label: "Transparência Total" },
  { icon: Users, label: "Atendimento Personalizado" },
  { icon: Lightbulb, label: "Soluções Inteligentes" },
]

export default function Sobre() {
  const { sobre } = siteContent

  return (
    <>
      <section className="relative overflow-hidden min-h-screen bg-navy-50 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <HeroLineBackground variant="institutional" />

        <div className="absolute inset-y-0 right-0 w-[48%] lg:w-[45%] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-[2px] z-0" />
          
          <img
            src={executivo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center object-top"
            style={{
              opacity: 0.68,
              filter: "brightness(1.05) contrast(1.1) saturate(1.05)",
              maskImage: "linear-gradient(to left, transparent 0%, black 30%)",
              WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 30%)",
            }}
          />
          
          <div className="absolute inset-0 bg-navy-50/35 z-10" />
        </div>

        <div className="relative z-40 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="space-y-8 lg:space-y-10"
            >
              <div className="space-y-3">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold/80">
                  Assessoria em Crédito Estruturado
                </p>

                <div className="space-y-4">
                  <h1 className="hero-title">
                    {sobre.title}
                  </h1>
                  <div className="w-16 h-[2px] bg-gold/60" />
                </div>
              </div>

              <div className="space-y-5 text-base md:text-lg text-navy-500 leading-relaxed max-w-xl">
                {sobre.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="pt-4"
              >
                <div className="flex items-center gap-8 lg:gap-12">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <feature.icon size={18} className="text-gold/70 shrink-0" strokeWidth={1.5} />
                      <span className="text-xs font-medium tracking-wide text-navy-600 uppercase">
                        {feature.label}
                      </span>
                      {i < features.length - 1 && (
                        <div className="w-px h-4 bg-navy-200/50 ml-8" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <div className="hidden lg:block" />
          </div>
        </div>
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
