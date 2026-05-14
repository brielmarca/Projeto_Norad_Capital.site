import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import SectionTitle from "../components/SectionTitle"
import { MapPin, Building, ShieldCheck, UserCheck, BarChart2 } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const features = [
  {
    Icon: ShieldCheck,
    title: "Ética e transparência",
    desc: "Transparência em cada etapa do processo.",
  },
  {
    Icon: UserCheck,
    title: "Atendimento personalizado",
    desc: "Soluções feitas sob medida para cada perfil.",
  },
  {
    Icon: BarChart2,
    title: "Experiência no mercado",
    desc: "Profissionais com sólida vivência no mercado financeiro.",
  },
]

export default function Sobre() {
  const { sobre, company } = siteContent

  return (
    <>
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #F5F7FA 0%, #EEF2F7 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="relative max-w-[1200px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-20 items-center"
        >
          {/* Diamond SVG */}
          <svg
            className="absolute right-10 -top-10 w-[220px] h-[320px] pointer-events-none z-0 opacity-50"
            viewBox="0 0 220 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="110,0 220,110 110,320 0,110" fill="#E3C98B" opacity="0.35" />
            <polygon points="110,20 200,115 110,295 20,115" fill="none" stroke="#C9A44C" strokeWidth="1" opacity="0.45" />
            <polygon points="110,55 170,115 110,265 50,115" fill="#C9A44C" opacity="0.15" />
            <line x1="110" y1="0" x2="110" y2="320" stroke="#C9A44C" strokeWidth="0.8" opacity="0.25" />
            <line x1="0" y1="110" x2="220" y2="110" stroke="#C9A44C" strokeWidth="0.8" opacity="0.25" />
            <line x1="0" y1="110" x2="110" y2="320" stroke="#C9A44C" strokeWidth="0.6" opacity="0.2" />
            <line x1="220" y1="110" x2="110" y2="320" stroke="#C9A44C" strokeWidth="0.6" opacity="0.2" />
          </svg>

          {/* Left column */}
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-5">
              {company.tagline}
            </p>

            <h1 className="text-[56px] font-extrabold leading-[1.05] tracking-tight text-navy-900 mb-9">
              Norad<br />Capital
            </h1>

            <div className="w-12 h-0.5 bg-gold rounded-full mb-8" />

            <div className="flex flex-col gap-[18px]">
              {sobre.paragraphs.map((text, i) => (
                <p key={i} className="text-[15px] leading-[1.78] text-navy-400 m-0">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative z-10">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_32px_rgba(13,35,64,0.10)]">
              {features.map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[18px] px-7 py-6"
                  style={{ borderBottom: i < features.length - 1 ? "1px solid #F5F7FA" : "none" }}
                >
                  <div className="w-[50px] h-[50px] rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-gold" strokeWidth={1.6} />
                  </div>

                  <div className="pt-[2px]">
                    <p className="text-[15px] font-bold text-navy-900 mb-[5px]">
                      {title}
                    </p>
                    <p className="text-[13.5px] leading-[1.6] text-navy-400 m-0">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <div className="flex items-start gap-5">
            <MapPin size={36} className="text-gold shrink-0 mt-1" />
            <div>
              <h2
                className="text-[42px] font-bold leading-[1.1] tracking-[-1px] text-navy-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {sobre.presence.title}
              </h2>
              <div className="w-10 h-[3px] bg-gold rounded-full mt-5" />
            </div>
          </div>
          <div className="space-y-5 text-base md:text-lg text-navy-400 leading-[1.8] max-w-3xl">
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
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="flex items-start gap-6">
            <Building size={44} className="text-gold shrink-0 mt-1.5" />
            <div>
              <h2
                className="text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-navy-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {sobre.office.city}
              </h2>
              <div className="w-12 h-0.5 bg-gold rounded-full mt-6" />
            </div>
          </div>
          <p className="text-base md:text-lg text-navy-400 leading-[1.8] max-w-3xl">
            {sobre.office.description}
          </p>
        </motion.div>
      </section>
    </>
  )
}
