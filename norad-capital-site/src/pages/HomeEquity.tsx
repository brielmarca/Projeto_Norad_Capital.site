import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import HeroLineBackground from "../components/HeroLineBackground"
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
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <HeroLineBackground variant="equity" goldOpacity={0.05} navyOpacity={0.025} />

        <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 2 }}>
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] bg-cover bg-right-center bg-no-repeat"
            style={{ backgroundImage: `url(${casaImg})`, opacity: 0.18 }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            zIndex: 3,
            background:
              "linear-gradient(90deg, #ffffff 0%, #ffffff 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.15) 75%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto lg:mx-0 lg:ml-8 xl:ml-16 text-center lg:text-left space-y-6 sm:space-y-8 md:space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs sm:text-sm md:text-base text-gold font-medium tracking-[0.2em] uppercase"
          >
            {homeEquity.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-navy-900 leading-[1.2] sm:leading-[1.15] md:leading-[1.05] lg:leading-[0.95]"
          >
            {homeEquity.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base sm:text-lg md:text-xl text-navy-400 leading-relaxed lg:max-w-xl"
          >
            {homeEquity.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2"
          >
            <WhatsAppButton
              number={WHATSAPP_NUMBER}
              message="Olá! Gostaria de saber mais sobre Home Equity."
              label={homeEquity.cta}
            />
            <Link
              to="/processo"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium px-6 py-4"
            >
              Entender o processo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* O QUE É HOME EQUITY */}
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

      {/* PARA QUEM FAZ SENTIDO */}
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

      {/* POSSIBILIDADES PARA O CAPITAL */}
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

      {/* COMO A NORAD CONDUZ A OPERAÇÃO */}
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

      {/* TRANSPARÊNCIA */}
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

      {/* FAQ */}
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

      {/* DISCLAIMER */}
      <section className="py-16 px-6 border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-navy-300 leading-relaxed">
            {homeEquity.disclaimer}
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
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
