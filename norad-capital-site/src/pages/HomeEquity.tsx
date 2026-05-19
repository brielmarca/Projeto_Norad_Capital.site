import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import casaImg from "../assets/CASA.png"

const ease = [0.16, 1, 0.3, 1] as const

const WHATSAPP_NUMBER = "5511999999999"

const faq = [
  {
    question: "Posso continuar usando meu imóvel durante a operação?",
    answer: "Sim. O imóvel permanece em seu nome e pode continuar sendo utilizado normalmente. A garantia é registrada em cartório, sem transferência de propriedade.",
  },
  {
    question: "Quais tipos de imóvel podem ser usados como garantia?",
    answer: "Imóveis residenciais, comerciais e terrenos com registro regular podem ser considerados. A viabilidade depende da avaliação da instituição financeira.",
  },
  {
    question: "Quanto tempo leva o processo de estruturação?",
    answer: "O prazo varia conforme a complexidade da operação, a documentação disponível e os critérios da instituição financeira. Acompanhamos cada etapa para garantir agilidade e clareza.",
  },
  {
    question: "A Norad Capital é uma instituição financeira?",
    answer: "Não. A Norad Capital atua como intermediadora de crédito, conectando clientes a grandes bancos e instituições financeiras especializadas em crédito imobiliário.",
  },
  {
    question: "Quais são os custos envolvidos?",
    answer: "Os custos dependem da instituição financeira e podem incluir taxas de avaliação, registro e análise de crédito. Todas as informações são apresentadas com transparência antes da formalização.",
  },
]

export default function HomeEquity() {
  const { homeEquity } = siteContent
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <section className="relative overflow-hidden bg-navy-50">

        <div className="relative mx-auto grid min-h-[92vh] max-w-[1440px] grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="relative z-10 max-w-[540px] py-24"
          >
            <span className="mb-6 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-dark">
              {homeEquity.subtitle}
            </span>

            <h1 className="hero-title">
              {homeEquity.title}
            </h1>

            <p className="mt-8 text-sm leading-relaxed text-navy-500 max-w-[540px]">
              {homeEquity.intro}
            </p>

            <div className="mt-12 flex items-center gap-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Home Equity.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full bg-navy-900
                  px-8 py-5
                  text-[16px] font-medium text-white
                  shadow-[0_14px_40px_rgba(6,18,40,0.16)]
                  transition-all duration-300
                  hover:-translate-y-[2px]
                  hover:shadow-[0_20px_55px_rgba(6,18,40,0.22)]
                "
              >
                Falar com especialista
              </a>

              <Link
                to="/processo"
                className="
                  flex items-center gap-3
                  text-sm font-medium text-navy-600
                  transition-all duration-300
                  hover:gap-4
                "
              >
                Entender o processo <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-end overflow-visible">
            <div className="relative overflow-hidden rounded-[32px] bg-navy-50">
              <img
                src={casaImg}
                alt="Home Equity"
                className="w-full object-contain opacity-90 mix-blend-darken saturate-[0.9] contrast-[0.97]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">01</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              O que é Home Equity
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              {homeEquity.sections[0].text}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-6 bg-navy-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">02</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Para quem faz sentido
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              {homeEquity.sections[1].text}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">03</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Possibilidades para o capital
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              O capital acessado por meio do Home Equity pode ser direcionado para diversas finalidades: expansão de negócios, reestruturação patrimonial, investimentos de longo prazo, planejamento sucessório ou projetos pessoais. Sem restrições de uso — com liberdade e clareza.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-6 bg-navy-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">04</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Como a Norad conduz a operação
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              {homeEquity.sections[2].text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="space-y-4 pt-12 md:pt-16"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">05</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Acompanhamento consultivo
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              {homeEquity.sections[3].text}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-6"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">06</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Transparência em cada etapa
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              As informações apresentadas neste site têm caráter institucional e informativo. A contratação de qualquer operação depende de análise de crédito, documentação, avaliação da garantia e aprovação da instituição financeira responsável.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-6 bg-navy-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4 mb-16 md:mb-20"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">07</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Perguntas frequentes
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-navy-100">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-base md:text-lg font-light text-navy-900 pr-8">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-navy-300 shrink-0 transition-transform duration-300"
                    style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "200px" : "0px", opacity: openIndex === i ? 1 : 0 }}
                >
                  <p className="pb-6 text-base text-navy-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-navy-300 leading-relaxed">
            {homeEquity.disclaimer}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <p className="text-sm text-gold font-medium tracking-[0.15em] uppercase">
            Norad Capital
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy-900">
            Agende uma conversa.
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Atendimento personalizado e acompanhamento consultivo em cada etapa
            da operação.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              number={WHATSAPP_NUMBER}
              message="Olá! Gostaria de agendar uma conversa sobre Home Equity."
              label={homeEquity.cta}
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}
