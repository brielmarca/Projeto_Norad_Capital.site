import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import { ChevronDown } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function FaqSection() {
  const { faq } = siteContent
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 bg-navy-50">
      <div className="max-w-3xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center space-y-4"
        >
          <SectionTitle>{faq.title}</SectionTitle>
          <p className="text-lg text-navy-400 leading-relaxed max-w-xl mx-auto">
            {faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              className="border border-navy-100 rounded-2xl bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-navy-50/50 transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-navy-900 tracking-tight pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-navy-300 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <p className="text-navy-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-xs text-navy-300 leading-relaxed text-center pt-8"
        >
          {faq.disclaimer}
        </motion.p>
      </div>
    </section>
  )
}
