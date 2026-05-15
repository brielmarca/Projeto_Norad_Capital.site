import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import HeroLineBackground from "../components/HeroLineBackground"
import { MapPin, Building } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Sobre() {
  const { sobre } = siteContent

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-24 pb-16">
        <HeroLineBackground />

        {/* Premium architectural glass tower — right side, luxury institutional composition */}
        <div className="absolute inset-y-0 right-0 w-[45%] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-[1]" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.18] md:opacity-[0.22] lg:opacity-[0.28]"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, transparent 10%, black 50%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 10%, black 50%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative z-10 max-w-3xl mx-auto space-y-10"
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
