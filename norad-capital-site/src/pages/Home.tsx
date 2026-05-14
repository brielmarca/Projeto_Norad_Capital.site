import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Building2, Home as HomeIcon } from "lucide-react"
import { siteContent } from "../data/siteContent"
import HeroLineBackground from "../components/HeroLineBackground"

const WHATSAPP_NUMBER = "5511999999999"

const ease = [0.16, 1, 0.3, 1] as const

const storyItems = [
  { title: "O patrimônio.", text: "A base para novas possibilidades." },
  { title: "A estratégia.", text: "Cada operação começa com clareza." },
  { title: "A estruturação.", text: "Informação, análise e direcionamento especializado." },
  { title: "O acompanhamento.", text: "Presença consultiva em cada etapa." },
]

const solutions = [
  {
    title: "Home Equity",
    description:
      "Crédito com garantia imobiliária para transformar patrimônio em liquidez estratégica.",
    path: "/home-equity",
    icon: Building2,
  },
  {
    title: "Crédito Imobiliário",
    description:
      "Estruturação e assessoria para aquisição e financiamento imobiliário.",
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
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
        <HeroLineBackground />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-navy-900 leading-[0.95]"
          >
            Crédito Estruturado com Inteligência
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto"
          >
            Intermediação especializada em Home Equity e Crédito Imobiliário
            para quem busca soluções de crédito com clareza e estrutura.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
            >
              Falar com especialista
            </a>
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors text-sm font-medium px-6 py-4"
            >
              Conhecer soluções <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="text-sm text-navy-300 tracking-wide"
          >
            Capital estratégico para quem construiu valor.
          </motion.p>
        </div>
      </section>

      {/* 2. STORYTELLING */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-32">
          {storyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-center space-y-3"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-xl mx-auto">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SOLUTIONS PREVIEW */}
      <section className="py-32 px-6 bg-navy-50">
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
                      Saber mais{" "}
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

      {/* 4. AUDIENCE SEGMENTATION */}
      <section className="py-32 px-6">
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
            className="pt-4"
          >
            <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto">
              {activeTab === "pessoa"
                ? "Crédito com garantia imobiliária para transformar patrimônio em capital estratégico, com acompanhamento consultivo do início ao fim."
                : "Soluções com garantia imobiliária para empresas que buscam estrutura, liquidez e alternativas de crédito junto a instituições financeiras especializadas."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. LEGAL TRANSPARENCY */}
      <section className="py-16 px-6 border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-navy-300 leading-relaxed">
            A Norad Capital atua como intermediadora de crédito. A aprovação,
            taxas, prazos, valores e demais condições estão sujeitos à análise
            e aos critérios das instituições financeiras parceiras.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-32 px-6 bg-navy-900">
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
                <div className="relative border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-5 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-12px_rgba(201,168,76,0.15)]">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-20 max-w-[80%] object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white/90">
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

      {/* 7. FINAL CTA */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
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
              Falar com especialista
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
