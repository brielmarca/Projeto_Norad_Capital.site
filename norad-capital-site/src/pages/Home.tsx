import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Building2, Home as HomeIcon } from "lucide-react"
import phoneMockup from "../assets/celular-com-site.png"
import { siteContent } from "../data/siteContent"
import HeroLineBackground from "../components/HeroLineBackground"

const WHATSAPP_NUMBER = "5511999999999"

const ease = [0.16, 1, 0.3, 1] as const

const storyItems = [
  { number: "01", title: "O patrimônio.", text: "Cada operação começa com aquilo que você já construiu." },
  { number: "02", title: "A estratégia.", text: "Analisamos seu perfil e o momento certo para a decisão." },
  { number: "03", title: "A estruturação.", text: "Organizamos cada detalhe e direcionamos a instituição ideal." },
  { number: "04", title: "O acompanhamento.", text: "Suporte consultivo da análise à formalização." },
]

const comparisonItems = [
  { label: "Clareza na estruturação", market: 45, norad: 92 },
  { label: "Acompanhamento consultivo", market: 40, norad: 90 },
  { label: "Discrição institucional", market: 50, norad: 88 },
  { label: "Visão patrimonial", market: 38, norad: 94 },
  { label: "Direcionamento adequado", market: 42, norad: 89 },
  { label: "Organização das informações", market: 44, norad: 91 },
]

const solutions = [
  {
    title: "Home Equity",
    description:
      "Crédito com garantia de imóvel para quem busca taxas reduzidas e prazos estendidos para projetos consistentes.",
    path: "/home-equity",
    icon: Building2,
  },
  {
    title: "Crédito Imobiliário",
    description:
      "Soluções para aquisição, construção ou reforma de imóveis, com condições estruturadas sob medida.",
    path: "/credito-imobiliario",
    icon: HomeIcon,
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<"pessoa" | "empresa">("pessoa")
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`
  const { parceiros } = siteContent

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        {/* Line-chart background — visible on all screens */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          <HeroLineBackground variant="growth" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs sm:text-sm md:text-base text-gold font-medium tracking-[0.2em] uppercase"
          >
            Capital estratégico para quem construiu valor.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="hero-title"
          >
            Crédito imobiliário estruturado com inteligência
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base sm:text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto"
          >
            A Norad Capital conecta pessoas e empresas a grandes bancos e
            instituições financeiras por meio de uma intermediação especializada
            em Home Equity e Crédito Imobiliário.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
            >
              Falar com especialista
            </a>
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium px-5 sm:px-6 py-3.5 sm:py-4"
            >
              Conhecer soluções <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STORYTELLING */}
      <section className="py-24 md:py-32 lg:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="text-sm text-gold font-medium tracking-[0.2em] uppercase mb-4">
              Como conduzimos cada operação
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-navy-100 md:-translate-x-px" />

            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {storyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease }}
                  className="relative flex items-start gap-8 md:gap-0"
                >
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>

                  <div className="flex-1 md:text-center md:pl-0 pl-4">
                    <span className="text-xs font-medium text-navy-300 tracking-[0.15em] tabular-nums">
                      {item.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-navy-900 mt-2">
                      {item.title}
                    </h2>
                    <p className="text-base md:text-lg text-navy-400 leading-relaxed mt-3 max-w-sm md:max-w-md mx-auto">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHATSAPP CONTACT */}
      <section className="py-16 md:py-24 lg:py-32 px-6 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="space-y-6"
            >
              <p className="text-sm text-gold font-medium tracking-[0.2em] uppercase">
                Primeiro contato
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900 leading-[1.15]">
                Sua operação começa em uma conversa.
              </h2>
              <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-md">
                Do primeiro contato à estruturação da proposta, a Norad Capital
                combina atendimento digital, visão estratégica e acompanhamento
                consultivo para conduzir operações imobiliárias com clareza.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
                >
                  Falar com especialista
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={phoneMockup}
                alt="Norad Capital no WhatsApp"
                className="w-full max-w-xs md:max-w-sm h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON */}
      <section className="py-16 md:py-24 lg:py-32 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center space-y-4 mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]">
              Uma abordagem mais estratégica para crédito imobiliário.
            </h2>
            <p className="text-base md:text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
              Enquanto o mercado tende a tratar crédito como produto, a Norad
              estrutura cada operação como uma decisão patrimonial.
            </p>
          </motion.div>

          {/* Chart card */}
          <div className="bg-navy-800/50 rounded-2xl border border-white/[0.06] p-6 md:p-10">
            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 md:mb-12">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-5 rounded-sm bg-navy-400/40" />
                <span className="text-xs text-navy-300 tracking-wide">
                  Mercado
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-5 rounded-sm bg-gold" />
                <span className="text-xs text-navy-300 tracking-wide">
                  Estruturação Norad
                </span>
              </div>
            </div>

            {/* Chart — scrollable on mobile */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2">
              <div className="min-w-[540px]">
                {/* Grid lines */}
                <div className="relative">
                  {/* 100% line */}
                  <div className="absolute left-0 right-0 top-0 flex items-center gap-1">
                    <span className="text-[10px] text-navy-500 w-8 text-right tabular-nums">100</span>
                    <div className="flex-1 border-t border-white/[0.04]" />
                  </div>
                  {/* 75% line */}
                  <div className="absolute left-0 right-0 flex items-center gap-1" style={{ top: "25%" }}>
                    <span className="text-[10px] text-navy-500 w-8 text-right tabular-nums">75</span>
                    <div className="flex-1 border-t border-white/[0.04]" />
                  </div>
                  {/* 50% line */}
                  <div className="absolute left-0 right-0 flex items-center gap-1" style={{ top: "50%" }}>
                    <span className="text-[10px] text-navy-500 w-8 text-right tabular-nums">50</span>
                    <div className="flex-1 border-t border-white/[0.04]" />
                  </div>
                  {/* 25% line */}
                  <div className="absolute left-0 right-0 flex items-center gap-1" style={{ top: "75%" }}>
                    <span className="text-[10px] text-navy-500 w-8 text-right tabular-nums">25</span>
                    <div className="flex-1 border-t border-white/[0.04]" />
                  </div>

                  {/* Bar groups */}
                  <div className="relative flex items-end justify-around pt-8 pb-16 pl-10" style={{ height: "280px" }}>
                    {comparisonItems.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease }}
                        className="flex flex-col items-center gap-2"
                      >
                        {/* Bars */}
                        <div className="flex items-end gap-1.5" style={{ height: "240px" }}>
                          {/* Market bar */}
                          <div className="flex flex-col items-center justify-end relative" style={{ width: "28px", height: "100%" }}>
                            <span className="text-[10px] text-navy-400 font-medium tabular-nums mb-1">
                              {item.market}%
                            </span>
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${item.market}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1 + 0.1, ease }}
                              className="w-full rounded-t-sm bg-navy-400/40 absolute bottom-0"
                            />
                          </div>
                          {/* Norad bar */}
                          <div className="flex flex-col items-center justify-end relative" style={{ width: "28px", height: "100%" }}>
                            <span className="text-[10px] text-gold font-medium tabular-nums mb-1">
                              {item.norad}%
                            </span>
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${item.norad}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease }}
                              className="w-full rounded-t-sm bg-gold absolute bottom-0"
                            />
                          </div>
                        </div>
                        {/* Label */}
                        <p className="text-[11px] text-navy-300 text-center leading-tight max-w-[80px] mt-2">
                          {item.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-navy-400 mt-8 md:mt-10 text-center leading-relaxed"
          >
            Índices conceituais para representar a diferença entre uma abordagem
            genérica de mercado e a estruturação consultiva da Norad Capital.
            Não representam estatísticas reais de desempenho.
          </motion.p>
        </div>
      </section>

      {/* 5. SOLUTIONS PREVIEW */}
      <section className="py-16 md:py-24 lg:py-32 px-6 bg-navy-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                >
                  <Link
                    to={item.path}
                    className="group block bg-white border border-navy-100 rounded-2xl p-10 space-y-6 hover:border-navy-200 hover:shadow-sm transition-all duration-500"
                  >
                    <Icon
                      size={24}
                      className="text-navy-300 group-hover:text-navy-500 transition-colors"
                    />
                    <div className="space-y-3">
                      <h3 className="text-2xl font-medium text-navy-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-navy-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-navy-500 group-hover:text-navy-900 transition-colors">
                      Conhecer solução{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. AUDIENCE SEGMENTATION */}
      <section className="py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy-900"
          >
            Para cada perfil, uma abordagem.
          </motion.h2>

          <div className="flex justify-center gap-8 border-b border-navy-100">
            <button
              onClick={() => setActiveTab("pessoa")}
              className={`pb-4 text-sm font-medium tracking-wide transition-colors relative ${
                activeTab === "pessoa"
                  ? "text-navy-900"
                  : "text-navy-300 hover:text-navy-500"
              }`}
            >
              Para Você
              {activeTab === "pessoa" && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy-900"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("empresa")}
              className={`pb-4 text-sm font-medium tracking-wide transition-colors relative ${
                activeTab === "empresa"
                  ? "text-navy-900"
                  : "text-navy-300 hover:text-navy-500"
              }`}
            >
              Para sua Empresa
              {activeTab === "empresa" && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy-900"
                />
              )}
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="space-y-8 pt-4"
          >
            <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto">
              {activeTab === "pessoa"
                ? "Crédito com garantia imobiliária para transformar patrimônio em capital estratégico, com acompanhamento consultivo do início ao fim."
                : "Soluções com garantia imobiliária para empresas que buscam estrutura, liquidez e alternativas de crédito junto a instituições financeiras especializadas."}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium"
              >
                Agendar uma conversa <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. LEGAL TRANSPARENCY */}
      <section className="py-16 px-6 border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-navy-300 leading-relaxed">
            A Norad Capital atua como intermediadora de crédito. A aprovação,
            taxas, prazos, valores e demais condições estão sujeitos à análise
            e aos critérios das instituições financeiras parceiras.
          </p>
        </div>
      </section>

      {/* 8. PARTNERS */}
      <section className="py-16 md:py-24 lg:py-32 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              {parceiros.title}
            </h2>
            <p className="text-lg text-gold font-light tracking-wide">
              {parceiros.subtitle}
            </p>
            <p className="text-navy-300 leading-relaxed max-w-2xl mx-auto">
              {parceiros.text}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {parceiros.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                className="group relative"
              >
                <div className="relative border border-white/20 rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-5 bg-white/[0.07] backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.12] hover:shadow-[0_0_40px_-12px_rgba(201,168,76,0.15)]">
                  <div className="w-full h-36 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-36 max-w-[90%] object-contain opacity-100 grayscale-0 md:opacity-70 md:grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-16 md:py-24 lg:py-32 px-6 border-t border-navy-100">
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
            Inicie sua análise estratégica.
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Converse com um especialista e avalie as possibilidades
            para o seu patrimônio.
          </p>
          <div className="pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
            >
              Iniciar análise estratégica
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
