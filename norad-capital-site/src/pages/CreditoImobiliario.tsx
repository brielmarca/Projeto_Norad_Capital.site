import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import WhatsAppButton from "../components/WhatsAppButton"
import HeroLineBackground from "../components/HeroLineBackground"
import aptImg from "../assets/apartamentos.png"

const ease = [0.16, 1, 0.3, 1] as const

const WHATSAPP_NUMBER = "5511999999999"

const paths = [
  {
    title: "Aquisição de imóveis",
    text: "Para quem busca comprar ou financiar um imóvel com orientação especializada.",
  },
  {
    title: "Financiamento imobiliário",
    text: "Para estruturar operações junto a instituições financeiras especializadas.",
  },
  {
    title: "Estruturação patrimonial",
    text: "Para operações imobiliárias que exigem análise, clareza e acompanhamento consultivo.",
  },
]

const audiences = [
  "Pessoas físicas em aquisição de imóvel",
  "Famílias em planejamento patrimonial",
  "Empresários com operações imobiliárias",
  "Empresas com ativos ou projetos imobiliários",
]

const pillars = [
  "Análise consultiva",
  "Organização das informações",
  "Direcionamento institucional",
  "Acompanhamento da operação",
]

const steps = [
  { number: "01", title: "Conversa inicial" },
  { number: "02", title: "Entendimento do objetivo" },
  { number: "03", title: "Organização das informações" },
  { number: "04", title: "Encaminhamento institucional" },
  { number: "05", title: "Acompanhamento até a formalização" },
]

const faq = [
  {
    question: "A Norad Capital é um banco?",
    answer: "Não. A Norad Capital é uma fintech brasileira especializada na intermediação de Crédito Imobiliário e Home Equity. Conectamos clientes a grandes bancos e instituições financeiras especializadas.",
  },
  {
    question: "O Crédito Imobiliário é aprovado pela Norad?",
    answer: "Não. A Norad Capital atua como intermediadora. A aprovação, taxas, prazos e condições são definidos exclusivamente pela instituição financeira responsável pela operação.",
  },
  {
    question: "Quem define taxas e condições?",
    answer: "As taxas, prazos, valores e demais condições são determinados pela instituição financeira parceira, com base na análise de crédito, documentação e avaliação do imóvel.",
  },
  {
    question: "A Norad atende todo o Brasil?",
    answer: "Sim. A Norad Capital atua em todo o território nacional, com atendimento online e presencial, e escritório em São Paulo.",
  },
  {
    question: "Pessoas jurídicas podem buscar crédito imobiliário?",
    answer: "Sim. Tanto pessoas físicas quanto jurídicas podem buscar soluções de crédito imobiliário por meio da Norad Capital, dependendo do perfil e do objetivo da operação.",
  },
  {
    question: "O atendimento começa pelo WhatsApp?",
    answer: "Sim. O primeiro contato pode ser feito pelo WhatsApp, onde realizamos uma conversa inicial para entender seu perfil e direcionar os próximos passos.",
  },
]

export default function CreditoImobiliario() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-20 bg-[#F5F5F7]">
        <HeroLineBackground variant="realestate" goldOpacity={0.05} navyOpacity={0.025} />

        {/* Premium visual frame — right side, desktop only */}
        <div className="absolute right-4 sm:right-6 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 hidden lg:block" style={{ zIndex: 2, width: '42%' }}>
          <div className="relative overflow-hidden rounded-[28px] border border-navy-100/60 bg-white/80 shadow-[0_8px_40px_-12px_rgba(10,22,40,0.08)]" style={{ paddingBottom: '65%' }}>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${aptImg})`, opacity: 0.7 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(245,245,247,0.5) 100%)' }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto lg:mx-0 lg:ml-8 xl:ml-16 text-center lg:text-left space-y-6 sm:space-y-8 md:space-y-10 lg:max-w-[52%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs sm:text-sm md:text-base text-gold font-medium tracking-[0.2em] uppercase"
          >
            Crédito imobiliário estruturado
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="hero-title"
          >
            Crédito Imobiliário estruturado para decisões patrimoniais.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base sm:text-lg md:text-xl text-navy-400 leading-relaxed lg:max-w-xl"
          >
            A Norad Capital auxilia pessoas e empresas na estruturação de operações imobiliárias, conectando objetivos patrimoniais a instituições financeiras especializadas com clareza e acompanhamento consultivo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="pt-1 sm:pt-2"
          >
            <WhatsAppButton
              number={WHATSAPP_NUMBER}
              message="Olá! Gostaria de saber mais sobre Crédito Imobiliário."
              label="Falar com especialista"
            />
          </motion.div>
        </div>
      </section>

      {/* O QUE É CRÉDITO IMOBILIÁRIO */}
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
              O que é Crédito Imobiliário?
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              Crédito Imobiliário é uma solução voltada à aquisição, financiamento ou estruturação de operações relacionadas a imóveis. A Norad Capital atua como intermediadora, organizando informações relevantes e acompanhando o cliente durante as etapas da operação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CAMINHOS */}
      <section className="py-24 md:py-32 lg:py-40 px-6 bg-navy-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center space-y-4 mb-16 md:mb-20"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">02</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Caminhos para estruturar sua operação imobiliária.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {paths.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <div className="bg-white border border-navy-100 rounded-2xl p-8 space-y-4 h-full">
                  <span className="text-xs font-medium text-gold tracking-[0.15em] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-light tracking-tight text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-base text-navy-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM FAZ SENTIDO */}
      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4 mb-12 md:mb-16"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">03</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Para quem faz sentido?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div className="flex items-start gap-4 p-6 border border-navy-100 rounded-xl">
                  <span className="text-xs font-medium text-gold tracking-[0.15em] tabular-nums mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-navy-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NORAD VALUE */}
      <section className="py-24 md:py-32 lg:py-40 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-6 mb-16 md:mb-20"
          >
            <span className="text-xs font-medium text-navy-400 tracking-[0.15em] tabular-nums">04</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white">
              Mais do que financiar. Estruturar.
            </h2>
            <p className="text-base md:text-lg text-navy-300 leading-relaxed max-w-2xl">
              A Norad Capital entende o objetivo da operação, organiza informações relevantes e acompanha cada etapa junto às instituições financeiras, sempre com discrição, clareza e visão estratégica.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div className="border border-white/10 rounded-xl p-6 space-y-3">
                  <span className="text-xs font-medium text-gold tracking-[0.15em] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-navy-200 font-medium tracking-tight">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4 mb-16 md:mb-20"
          >
            <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">05</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900">
              Como a Norad conduz o processo
            </h2>
          </motion.div>

          <div className="space-y-0">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="flex items-center gap-6 py-6 border-b border-navy-100"
              >
                <span className="text-xs font-medium text-gold tracking-[0.15em] tabular-nums w-8">
                  {item.number}
                </span>
                <h3 className="text-lg md:text-xl font-light tracking-tight text-navy-900">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARÊNCIA */}
      <section className="py-24 md:py-32 lg:py-40 px-6 bg-navy-50">
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
              Transparência em cada etapa.
            </h2>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl">
              A Norad Capital atua como intermediadora de crédito. A aprovação, taxas, prazos, valores e demais condições estão sujeitos à análise e aos critérios das instituições financeiras parceiras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40 px-6">
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
            A Norad Capital atua como intermediadora de crédito. A aprovação, taxas, prazos, valores e demais condições estão sujeitos à análise e aos critérios das instituições financeiras parceiras.
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900 leading-[1.15]">
            Estruture sua operação imobiliária com clareza.
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Fale com um especialista da Norad Capital e entenda quais caminhos podem fazer sentido para sua necessidade.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              number={WHATSAPP_NUMBER}
              message="Olá! Gostaria de agendar uma conversa sobre Crédito Imobiliário."
              label="Agendar uma conversa"
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}
