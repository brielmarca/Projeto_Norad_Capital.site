import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import { MapPin, Building } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Sobre() {
  const { sobre } = siteContent

  return (
    <>
      <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto space-y-10"
        >
          <SectionTitle>{sobre.title}</SectionTitle>
          <div className="space-y-5 text-base md:text-lg text-navy-400 leading-relaxed">
            {sobre.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-navy-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="flex items-center gap-4">
            <MapPin size={32} className="text-gold shrink-0" />
            <SectionTitle>{sobre.presence.title}</SectionTitle>
          </div>
          <div className="space-y-5 text-base md:text-lg text-navy-400 leading-relaxed">
            {sobre.presence.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="flex items-center gap-4">
            <Building size={32} className="text-gold shrink-0" />
            <SectionTitle>{sobre.office.city}</SectionTitle>
          </div>
          <p className="text-base md:text-lg text-navy-400 leading-relaxed">
            {sobre.office.description}
          </p>
        </motion.div>
      </section>
    </>
  )
}
