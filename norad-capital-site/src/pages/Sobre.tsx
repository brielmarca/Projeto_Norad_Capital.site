import { motion } from "framer-motion"
import { Shield, BarChart3, Handshake, MapPin, Network, Verified, UserSearch, Lightbulb } from "lucide-react"
import { useNavigate } from "react-router-dom"
import executivo from "../assets/executivo.png"
import predio from "../assets/predio.png"

const ease = [0.16, 1, 0.3, 1] as const

const features = [
  { icon: Verified, label: "Transparência", value: "Total" },
  { icon: UserSearch, label: "Atendimento", value: "Personalizado" },
  { icon: Lightbulb, label: "Soluções", value: "Inteligentes" },
]

const values = [
  {
    icon: Shield,
    title: "Ética e Discrição",
    description: "Protegemos a identidade e os objetivos de nossos clientes em cada etapa do processo de estruturação.",
  },
  {
    icon: BarChart3,
    title: "Análise Criteriosa",
    description: "Cada operação é tratada como única, passando por filtros técnicos rigorosos para garantir viabilidade e segurança.",
  },
  {
    icon: Handshake,
    title: "Presença Nacional",
    description: "Com sede em São Paulo, oferecemos suporte presencial e digital em todo o território nacional.",
  },
]

export default function Sobre() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-container-lowest min-h-[90vh] flex items-center">
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center py-20">
          <motion.div
            className="z-10 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <span className="font-body text-[12px] leading-4 tracking-[0.1em] font-semibold text-secondary-fixed-dim uppercase tracking-widest mb-6 block">
              Assessoria em Crédito Estruturado
            </span>
            <h1 className="font-display text-[40px] sm:text-[64px] leading-[44px] sm:leading-[72px] tracking-[-0.01em] sm:tracking-[-0.02em] font-bold mb-8 text-primary max-w-xl">
              Norad Capital
            </h1>
            <div className="space-y-6 text-on-surface-variant max-w-xl">
              <p className="font-body text-[18px] leading-7">
                A Norad Capital nasceu para oferecer uma nova experiência em crédito. Com análise criteriosa e atendimento personalizado, estruturamos soluções que realmente fazem sentido para cada perfil.
              </p>
              <p className="font-body text-[18px] leading-7">
                Nossa equipe reúne profissionais com sólida experiência no mercado financeiro. Atuamos com ética, discrição e total transparência — do primeiro contato à finalização do contrato.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease }}
                >
                  <feature.icon className="text-secondary w-8 h-8" strokeWidth={1.5} />
                  <div>
                    <p className="font-body text-[12px] leading-4 tracking-[0.1em] font-semibold uppercase text-on-surface-variant">
                      {feature.label}
                    </p>
                    <p className="font-body text-[16px] leading-6 font-semibold">{feature.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          >
            <div className="relative rounded-xl overflow-hidden transition-transform hover:scale-[1.01] duration-700" style={{ background: "#ffffff" }}>
              <img
                alt="Liderança Norad Capital"
                src={executivo}
                className="w-full h-full object-cover"
                style={{
                  maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                }}
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, #ffffff 100%)" }} />
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
          <motion.div
            className="text-center mb-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="font-display text-[32px] leading-10 tracking-[-0.01em] font-semibold text-primary mb-6">
              Valores que guiam nossa excelência
            </h2>
            <p className="font-body text-[18px] leading-7 text-on-surface-variant">
              Acreditamos que proximidade e clareza são a base de uma relação de confiança duradoura no mercado financeiro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-surface-container-lowest p-10 rounded-lg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all hover:translate-y-[-8px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
              >
                <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center mb-8">
                  <value.icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[32px] leading-10 tracking-[-0.01em] font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-[16px] leading-6 text-on-surface-variant">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National Presence Section */}
      <section className="relative bg-primary py-40 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="font-body text-[12px] leading-4 tracking-[0.1em] font-semibold text-secondary-fixed uppercase tracking-widest mb-6 block">
                Infraestrutura Corporativa
              </span>
              <h2 className="font-display text-[40px] sm:text-[64px] leading-[44px] sm:leading-[72px] tracking-[-0.01em] sm:tracking-[-0.02em] font-bold text-white mb-8">
                Hub Estratégico em São Paulo
              </h2>
              <p className="font-body text-[18px] leading-7 text-surface-variant mb-10">
                Nosso escritório em São Paulo é o centro nervoso de nossas operações nacionais. Localizado no coração do mercado financeiro, combinamos tecnologia de ponta com um ambiente acolhedor para reuniões estratégicas.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="text-secondary-fixed w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Atendimento Nacional</h4>
                    <p className="text-surface-variant/70">Suporte completo para clientes de todos os estados brasileiros.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Network className="text-secondary-fixed w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ecossistema Financeiro</h4>
                    <p className="text-surface-variant/70">Conexão direta com os principais players e fundos de investimento.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 p-4">
                <div className="aspect-video bg-surface-container-highest rounded-lg overflow-hidden relative">
                  <img
                    src={predio}
                    alt="Escritório São Paulo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur px-8 py-4 rounded-full flex items-center gap-3 shadow-xl">
                      <span className="w-3 h-3 bg-secondary-fixed rounded-full animate-pulse" />
                      <span className="font-body text-[12px] leading-4 tracking-[0.1em] font-semibold text-primary uppercase">
                        São Paulo Office
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-fixed/10 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 C 20 80, 50 120, 100 100" fill="transparent" stroke="white" strokeWidth="0.1" />
            <path d="M0 0 C 30 20, 60 -10, 100 0" fill="transparent" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop text-center">
          <motion.div
            className="max-w-3xl mx-auto backdrop-blur-xl bg-white/80 border border-white/20 p-16 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="font-display text-[32px] sm:text-[64px] leading-[40px] sm:leading-[72px] tracking-[-0.01em] sm:tracking-[-0.02em] font-bold mb-8 text-primary">
              Pronto para estruturar sua próxima grande etapa?
            </h2>
            <p className="font-body text-[18px] leading-7 text-on-surface-variant mb-12">
              Nossos especialistas estão prontos para analisar seu caso com a exclusividade que ele merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="bg-primary text-on-primary px-12 py-5 rounded-full font-semibold hover:scale-[1.02] transition-transform active:scale-[0.98]"
                onClick={() => navigate("/contato")}
              >
                Agendar Consultoria
              </button>
              <button
                className="border border-outline px-12 py-5 rounded-full font-semibold hover:bg-surface-variant transition-colors active:scale-[0.98]"
                onClick={() => navigate("/solucoes")}
              >
                Ver Soluções
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
