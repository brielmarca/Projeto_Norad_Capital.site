import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function CreditoImobiliario() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".reveal-element")
    elements.forEach((el) => {
      el.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10")
      revealObserver.observe(el)
    })

    return () => revealObserver.disconnect()
  }, [])

  return (
    <main style={{ scrollBehavior: "smooth" }}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Real Estate Agreements"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl5Yet5Xf1DxdYoNPh4BG_9oXIU9UpN18RjC8kVgTPtTiPsifl2HSJoAoL-7_mvakRajkGDjPcgKEJaT7SL1wEXveBrikJ5wYOH8BDWxARHliog6gHtm7SgUF7UwIAqjbLMWmDbbDYoL1LfrpVpP6LRNaO9gl60018oH1Tpk_wIqSOwaHyKAnECqrvkVUoAYMp19mp1S19p3Y9tSndCpF9F3eKAheqBFMwOfRZ0_aXDJWn4dCM5rinFYp1Y2A3aun_B6RgE2Kg0zk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(3, 3, 4, 0.4), rgba(3, 3, 4, 0.7))" }}></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop">
          <div className="max-w-3xl">
            <span className="text-secondary-container text-[12px] leading-[16px] font-semibold tracking-widest mb-6 block uppercase">
              PRIVATE REAL ESTATE CREDIT
            </span>
            <h1 className="font-display text-[64px] leading-[72px] text-white mb-6 leading-tight">
              Aquisições que Definem Legados
            </h1>
            <p className="text-[18px] leading-[28px] text-surface-container-highest mb-12 max-w-2xl">
              Crédito Imobiliário estruturado para quem exige o extraordinário em cada metro quadrado. Soluções de alta gama para o mercado premium.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/contato"
                className="bg-white text-primary px-8 py-4 rounded-full text-[12px] leading-[16px] font-semibold uppercase hover:bg-surface-container-low transition-all"
              >
                Consultar Viabilidade
              </Link>
              <Link
                to="/solucoes"
                className="text-white flex items-center gap-2 group text-[12px] leading-[16px] font-semibold uppercase"
              >
                Nossas Condições
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-12 bg-surface-container-low rounded-lg border border-outline-variant/30 flex flex-col items-center text-center reveal-element" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
              <span className="text-4xl text-on-secondary-container mb-6">🏦</span>
              <h3 className="text-[32px] leading-[40px] text-primary mb-2">Taxas Institucionais</h3>
              <p className="text-on-surface-variant text-[16px] leading-[24px]">Condições exclusivas de mercado para financiamentos de alto valor.</p>
            </div>
            <div className="p-12 bg-surface-container-low rounded-lg border border-outline-variant/30 flex flex-col items-center text-center reveal-element" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
              <span className="text-4xl text-on-secondary-container mb-6">📅</span>
              <h3 className="text-[32px] leading-[40px] text-primary mb-2">Prazos Flexíveis</h3>
              <p className="text-on-surface-variant text-[16px] leading-[24px]">Estruturas de amortização desenhadas para o seu fluxo de caixa.</p>
            </div>
            <div className="p-12 bg-surface-container-low rounded-lg border border-outline-variant/30 flex flex-col items-center text-center reveal-element" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
              <span className="text-4xl text-on-secondary-container mb-6">🛡️</span>
              <h3 className="text-[32px] leading-[40px] text-primary mb-2">Atendimento Private</h3>
              <p className="text-on-surface-variant text-[16px] leading-[24px]">Disponibilidade total e suporte técnico especializado em real estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-40 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative reveal-element">
              <div className="rounded-lg overflow-hidden" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
                  <img
                    alt="Corporate Skyscraper"
                    src="/predio.png"
                    className="w-full h-[600px] object-cover"
                  />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-[20px] p-8 rounded-lg border border-white/20 max-w-xs" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
                <h4 className="text-[32px] leading-[40px] text-primary text-xl mb-2">Expansão Patrimonial</h4>
                <p className="text-on-surface-variant text-sm">Alavancagem inteligente para diversificação de portfólio imobiliário.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 reveal-element">
              <span className="text-on-secondary-container text-[12px] leading-[16px] font-semibold uppercase tracking-widest mb-6 block">
                STRATEGIC GROWTH
              </span>
              <h2 className="text-[40px] leading-[44px] md:text-[32px] md:leading-[40px] text-primary mb-8 leading-tight">
                Consultoria Técnica e Estruturação de Capital
              </h2>
              <p className="text-[18px] leading-[28px] text-on-surface-variant mb-8">
                Na Norad Capital, não oferecemos apenas crédito. Atuamos como seus parceiros estratégicos na análise de viabilidade e estruturação financeira de grandes aquisições.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <span className="text-on-secondary-container">✓</span>
                  <span className="text-[16px] leading-[24px]">Análise técnica de ativos comerciais e residenciais premium.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-on-secondary-container">✓</span>
                  <span className="text-[16px] leading-[24px]">Estruturação de garantias cross-collateralization.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-on-secondary-container">✓</span>
                  <span className="text-[16px] leading-[24px]">Processos de Due Diligence ágeis e discretos.</span>
                </li>
              </ul>
              <Link
                to="/contato"
                className="border border-primary text-primary px-8 py-4 rounded-full text-[12px] leading-[16px] font-semibold uppercase hover:bg-primary hover:text-white transition-all inline-block"
              >
                Falar com um Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-20 reveal-element">
            <h2 className="text-[32px] leading-[40px] text-primary mb-4">O Caminho para a Conquista</h2>
            <p className="text-on-surface-variant text-[16px] leading-[24px] max-w-2xl mx-auto">
              Um processo desenhado para a alta gestão, onde a eficiência encontra a sofisticação em cada etapa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex flex-col items-center group reveal-element">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container transition-all" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
                <span className="text-primary-container group-hover:text-white font-bold">01</span>
              </div>
              <h4 className="text-[32px] leading-[40px] text-lg text-primary mb-2">Onboarding</h4>
              <p className="text-center text-sm text-on-surface-variant">Análise inicial personalizada do perfil e objetivos.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center group reveal-element">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container transition-all" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
                <span className="text-primary-container group-hover:text-white font-bold">02</span>
              </div>
              <h4 className="text-[32px] leading-[40px] text-lg text-primary mb-2">Estruturação</h4>
              <p className="text-center text-sm text-on-surface-variant">Desenho da proposta financeira sob medida.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center group reveal-element">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container transition-all" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
                <span className="text-primary-container group-hover:text-white font-bold">03</span>
              </div>
              <h4 className="text-[32px] leading-[40px] text-lg text-primary mb-2">Validação</h4>
              <p className="text-center text-sm text-on-surface-variant">Comitê de crédito e avaliação técnica rápida.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center group reveal-element">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container transition-all" style={{ boxShadow: "0 10px 60px -10px rgba(0, 0, 0, 0.1)" }}>
                <span className="text-primary-container group-hover:text-white font-bold">04</span>
              </div>
              <h4 className="text-[32px] leading-[40px] text-lg text-primary mb-2">Liquidação</h4>
              <p className="text-center text-sm text-on-surface-variant">Liberação dos recursos com segurança jurídica.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
