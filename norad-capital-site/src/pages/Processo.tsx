import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import { Link } from "react-router-dom"

const ease = [0.16, 1, 0.3, 1] as const

export default function Processo() {
  const { processo } = siteContent

  return (
    <main className="bg-surface text-on-surface">
      <section className="pt-48 pb-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-outline-variant bg-surface-container-low text-secondary text-xs font-semibold tracking-widest uppercase"
        >
          Estratégia & Execução
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary max-w-4xl mx-auto leading-tight"
        >
          {processo.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-8 text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          {processo.subtitle}
        </motion.p>
      </section>

      <section className="pb-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32 md:space-y-40">
            {processo.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease }}
                viewport={{ once: true, margin: "-80px" }}
                className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex flex-col space-y-6">
                      <span className="font-display text-6xl md:text-7xl font-bold text-secondary-fixed-dim/40 group-hover:text-secondary-fixed-dim transition-colors duration-500 leading-none">
                        {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-[0_40px_60px_-10px_rgba(0,0,0,0.05)]">
                      <img
                        src={step.image}
                        alt={`Etapa ${step.number}: ${step.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-[4/3] shadow-[0_40px_60px_-10px_rgba(0,0,0,0.05)]">
                      <img
                        src={step.image}
                        alt={`Etapa ${step.number}: ${step.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>

                    <div className="order-1 md:order-2 flex flex-col space-y-6 md:pl-16">
                      <span className="font-display text-6xl md:text-7xl font-bold text-secondary-fixed-dim/40 group-hover:text-secondary-fixed-dim transition-colors duration-500 leading-none">
                        {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-bright mb-12"
          >
            {processo.cta.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/contato"
              className="bg-surface-bright text-primary px-12 py-5 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-xl"
            >
              {processo.cta.primary}
            </Link>
            <a
              href={`https://wa.me/${siteContent.contato.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-outline-variant/30 text-surface-bright px-12 py-5 rounded-full text-base md:text-lg hover:bg-surface-bright/10 transition-all"
            >
              {processo.cta.secondary}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="mt-12 text-on-primary-container text-sm"
          >
            {processo.cta.footer}
          </motion.p>
        </div>
      </section>
    </main>
  )
}
