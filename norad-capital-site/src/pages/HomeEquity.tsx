import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function HomeEquity() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-12")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".reveal-element")
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-12", "transition-all", "duration-[1000ms]", "ease-out")
      revealObserver.observe(el)
    })

    return () => revealObserver.disconnect()
  }, [])

  return (
    <main className="smooth-scroll">
      {/* Hero Section */}
      <header className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTHPRuwbn7_VApWI0t6DPFkcH9R0z4kvLWnQjy9OWVyW9EBW221kKc2wAGUYqgBI8KSrO2GTQJ5i1rUNhlfx--Mc3TRDSch90OSZ4IrvDZfoxjCs6Y6eUdm4r5mS9uHk8DFb5eOwl_8ut7Rl4xWxfpAl4Gaw6mQcOd2_fBNLgg6X5Z3CAag03H5zhHGrhHllkIs5UbRKwvXoWACMyHcgP1bMZwunlJgLNqKK1iUtbMOjEqbYGYDjbYmekbdrUKwydtxkYAo0MN9EQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block px-4 py-1.5 mb-6 bg-secondary-fixed-dim/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[12px] leading-[16px] font-semibold uppercase tracking-[0.2em]">
            SELEÇÃO PRIVADA
          </span>
          <h1 className="font-display text-[40px] md:text-[64px] leading-[1.1] text-white mb-8 max-w-4xl mx-auto leading-tight" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
            Transforme seu Patrimônio em Capital Estratégico
          </h1>
          <p className="text-[18px] leading-[28px] text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            O Home Equity da Norad Capital oferece liquidez imediata com as melhores taxas do mercado, preservando sua liberdade financeira.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contato"
              className="bg-white text-primary px-10 py-5 rounded-full text-[12px] leading-[16px] font-semibold uppercase tracking-widest shadow-xl hover:bg-surface-container-low transition-all"
            >
              Solicitar Análise de Viabilidade
            </Link>
            <Link
              to="/solucoes"
              className="text-white border border-white/30 backdrop-blur-sm px-10 py-5 rounded-full text-[12px] leading-[16px] font-semibold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Nossas Taxas <span>→</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="text-white text-3xl">↓</span>
        </div>
      </header>

      {/* Wealth Snapshot / Stats Section */}
      <section className="relative z-20 -mt-20 px-margin-mobile">
        <div className="max-w-container-max mx-auto">
          <div className="bg-white/80 backdrop-blur-[20px] p-12 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-12 border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] reveal-element">
            <div className="flex flex-col gap-2">
              <span className="text-on-surface-variant text-[12px] leading-[16px] font-semibold uppercase tracking-wider">Taxas Iniciais</span>
              <span className="font-display text-[48px] text-primary">0.85%<small className="text-[20px] ml-1">+ IPCA</small></span>
              <p className="text-on-surface-variant text-[16px] leading-[24px]">Condições institucionais exclusivas.</p>
            </div>
            <div className="flex flex-col gap-2 border-y md:border-y-0 md:border-x border-outline-variant/30 py-8 md:py-0 md:px-12">
              <span className="text-on-surface-variant text-[12px] leading-[16px] font-semibold uppercase tracking-wider">Prazo Máximo</span>
              <span className="font-display text-[48px] text-primary">240<small className="text-[20px] ml-1">meses</small></span>
              <p className="text-on-surface-variant text-[16px] leading-[24px]">Flexibilidade para o seu fluxo de caixa.</p>
            </div>
            <div className="flex flex-col gap-2 md:pl-4">
              <span className="text-on-surface-variant text-[12px] leading-[16px] font-semibold uppercase tracking-wider">LTV (VALOR DO EMPRÉSTIMO)</span>
              <span className="font-display text-[48px] text-primary">60%<small className="text-[20px] ml-1">do valor</small></span>
              <p className="text-on-surface-variant text-[16px] leading-[24px]">Máxima eficiência sobre o ativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Liquidez e Precisão Section */}
      <section className="py-40 bg-surface-bright overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative reveal-element">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
              <img
                alt="Precision"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLjuHcdzeOKcR9EUkmtQFFCBSd0x_YoiI8yBBKMAkc89rE_Irqk6_X9pS0NuJYz-6XHbKSLTxpGpP95kfIrgGM9Yik9fBYaYxIcmXXQkhmsM3fNt1D_RHpbX5KI-iYqN_D9_fnDqaF3Uh9mXXSrzYzt3ypNR4eaGx-aXFTv_hytKd6zXfWexG92Q8n4r-RDyzuOQ1yPohBzilxcvfjeXde7Kf-3Efq9ZGf--_3TK21gS3UOXRjxkLvjroJZPnTx4Qz9uhqyU4RQA"
                className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-[20px] p-8 rounded-lg border border-white/40 shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-fixed-dim rounded-full flex items-center justify-center text-on-secondary-fixed">
                    <span>✓</span>
                  </div>
                  <div>
                    <h4 className="text-[20px] leading-none mb-1 text-primary">Aprovação Rápida</h4>
                    <p className="text-on-surface-variant text-[16px] leading-[24px]">Análise técnica em 48h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 reveal-element">
              <span className="text-secondary text-[12px] leading-[16px] font-semibold uppercase tracking-[0.2em]">Exclusividade</span>
              <h2 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-primary">Liquidez e Precisão para o seu Próximo Salto</h2>
              <p className="text-[18px] leading-[28px] text-on-surface-variant leading-relaxed">
                Entendemos que tempo é o ativo mais valioso para o investidor institucional. Nosso processo de Home Equity é desenhado para oferecer a precisão de um relógio suíço e a liquidez necessária para oportunidades imediatas.
              </p>
              <ul className="flex flex-col gap-6 mt-4">
                <li className="flex items-start gap-4">
                  <span className="text-secondary mt-1 text-2xl">🏦</span>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Taxas Institucionais</h5>
                    <p className="text-on-surface-variant">Acesso a taxas diferenciadas praticadas apenas no mercado de capitais.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-secondary mt-1 text-2xl">📅</span>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Termos Flexíveis</h5>
                    <p className="text-on-surface-variant">Carência e amortização customizadas de acordo com o seu perfil de renda.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-secondary mt-1 text-2xl">🤝</span>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Assessoria Dedicada</h5>
                    <p className="text-on-surface-variant">Um Advisor exclusivo para estruturar a operação ponta-a-ponta.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-40 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20 reveal-element">
            <h2 className="text-[32px] leading-[40px] mb-4 text-primary">Inteligência Imobiliária</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Soluções sob medida para proprietários de imóveis de alto padrão.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-gutter h-auto md:h-[600px]">
            <div className="md:col-span-3 bg-surface-container-low p-10 rounded-lg flex flex-col justify-end group hover:bg-primary-container hover:text-white transition-all duration-500 cursor-pointer reveal-element">
              <span className="text-4xl mb-6 text-secondary group-hover:text-secondary-fixed-dim">🏢</span>
              <h3 className="text-[24px] leading-[32px] mb-2">Soluções Corporativas</h3>
              <p className="opacity-70">Estruturação de crédito para expansão de holdings e galpões logísticos.</p>
            </div>
            <div className="md:col-span-3 bg-surface-container-low p-10 rounded-lg flex flex-col justify-end group hover:bg-primary-container hover:text-white transition-all duration-500 cursor-pointer reveal-element">
              <span className="text-4xl mb-6 text-secondary group-hover:text-secondary-fixed-dim">🏡</span>
              <h3 className="text-[24px] leading-[32px] mb-2">Soluções Residenciais</h3>
              <p className="opacity-70">Aporte de capital utilizando sua residência como garantia estratégica.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container-low p-10 rounded-lg flex flex-col justify-end group hover:bg-primary-container hover:text-white transition-all duration-500 cursor-pointer reveal-element">
              <span className="text-4xl mb-6 text-secondary group-hover:text-secondary-fixed-dim">⚖️</span>
              <h3 className="text-[20px] leading-[28px] mb-2">Planejamento Sucessório</h3>
              <p className="opacity-70 text-sm">Crédito para equalização de quinhões hereditários.</p>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-10 rounded-lg flex flex-col justify-end group hover:bg-primary-container hover:text-white transition-all duration-500 cursor-pointer overflow-hidden relative reveal-element">
              <div className="relative z-10">
                <h3 className="text-[24px] leading-[32px] mb-2">Capital de Giro</h3>
                <p className="opacity-70">Capital de giro para empresas com garantia imobiliária dos sócios.</p>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-[180px]">🏛</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
