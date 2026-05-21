import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Solucoes() {
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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Office Interior"
            src="/comeco.png"
            className="w-full h-full object-cover opacity-60 scale-105 animate-[zoom-in_3000ms_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full">
          <div className="max-w-4xl pt-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[12px] leading-[16px] tracking-[0.2em] uppercase text-white/70 mb-8 backdrop-blur-md animate-[fade-in_0.7s_ease-out,slide-in-from-bottom-2_0.7s_ease-out]">
              Portfólio de Soluções
            </span>
            <h1 className="font-display text-[48px] md:text-[80px] leading-[1.1] text-white mb-8 animate-[fade-in_1s_ease-out,slide-in-from-bottom-4_1s_ease-out] text-balance">
              Engenharia de Capital para{" "}
              <span className="font-extralight italic">Ultra High Net Worth</span>.
            </h1>
            <p className="font-body text-[18px] leading-[28px] text-white/60 max-w-2xl animate-[fade-in_1s_ease-out_0.2s_both,slide-in-from-bottom-6_1s_ease-out_0.2s_both] text-balance">
              Arquitetamos soluções de crédito estruturadas com o mais alto rigor técnico e discrição, desenhadas para preservar e expandir grandes patrimônios através de inteligência financeira de ponta.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-32 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Home Equity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-32 items-center reveal-element">
            <div className="lg:col-span-7 rounded-lg overflow-hidden h-[500px] md:h-[700px] relative group">
              <img
                alt="Luxury Contract"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSSsIqaQgIxLQzPyoiDXX9canB-3-idoV9F4PhUmT2QX2dpqB9KDPsC7-gcL8PsYUvLOXevykZxtHi7VqoIp3tCcZdstNovTVzNVV9ZZ-p2FA0diVEm5Qerm3S8Giwb0LE9ToI0Wd0UB7pu5IEhLoRlhoQExBB0j_qEtw4xZbZ3WAf3gxPyovat6sSsj7JG_f65JCu0wbwyCHJyVwg4gtrWh9NRUmNPw5dJeU-TSoaReid1xnYMApmT7o4-B8dD2EWxDJqvAJBuq8"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="lg:col-span-5 lg:pl-16">
              <span className="text-[12px] leading-[16px] tracking-[0.1em] font-semibold uppercase text-secondary mb-6 block">
                Garantia Imobiliária
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-primary mb-8 leading-tight">
                Home Equity <br />
                <span className="font-light text-on-surface-variant">Private Selection</span>
              </h2>
              <p className="text-[18px] leading-[28px] text-on-surface-variant mb-12 leading-relaxed">
                Acesse liquidez imediata utilizando seu patrimônio imobiliário de alto padrão. Estruturamos operações com taxas institucionais e carência personalizada, permitindo a manutenção de seus ativos enquanto viabiliza novas oportunidades.
              </p>
              <Link
                to="/home-equity"
                className="inline-flex items-center gap-3 group/link font-semibold text-primary border-b border-primary/20 pb-2 hover:border-primary transition-all"
              >
                Solicitar Análise de Viabilidade
                <span className="text-xl group-hover/link:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Bento Grid for Secondary Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Real Estate Credit */}
            <div className="group relative overflow-hidden rounded-lg bg-primary-container p-12 md:p-16 text-on-primary min-h-[600px] flex flex-col justify-between reveal-element">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Crédito Imobiliário"
                  src="/credito-imobiliario.png"
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-container/80 via-transparent to-primary-container"></div>
              </div>
              <div className="relative z-10">
                <span className="text-[12px] leading-[16px] tracking-[0.1em] font-semibold uppercase text-primary-fixed/60 mb-6 block">
                  Expansão
                </span>
                <h3 className="text-4xl font-display mb-8">
                  Crédito Imobiliário <span className="font-light opacity-60">Premium</span>
                </h3>
                <p className="text-[18px] leading-[28px] text-primary-fixed/70 max-w-md">
                  Financiamento sob medida para aquisições residenciais e comerciais de luxo. Processos desburocratizados e acompanhamento jurídico integral para garantir a segurança da sua próxima grande aquisição.
                </p>
              </div>
              <div className="relative z-10 pt-12">
                <Link
                  to="/credito-imobiliario"
                  className="inline-flex items-center gap-2 font-semibold text-white group-hover:gap-4 transition-all"
                >
                  Conhecer Condições
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* Structured Credit */}
            <div className="bg-white/70 backdrop-blur-[24px] border border-outline-variant/10 rounded-lg p-12 md:p-16 flex flex-col justify-between group hover:bg-white transition-colors duration-500 reveal-element">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-[10px] font-bold uppercase tracking-widest text-primary mb-8">
                  Operações Complexas
                </span>
                <h3 className="text-4xl font-display mb-8 text-primary">Crédito Estruturado</h3>
                <p className="text-[18px] leading-[28px] text-on-surface-variant leading-relaxed opacity-80 mb-10">
                  Engenharia financeira para demandas que fogem ao padrão de mercado. Desenvolvemos estruturas híbridas, mezaninos e securitização para projetos corporativos e investimentos de grande escala.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-[16px] leading-[24px] text-on-surface-variant">
                    <span className="text-primary text-sm">✓</span>
                    Alavancagem de Investimentos
                  </li>
                  <li className="flex items-center gap-3 text-[16px] leading-[24px] text-on-surface-variant">
                    <span className="text-primary text-sm">✓</span>
                    Reestruturação de Passivos
                  </li>
                </ul>
              </div>
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 font-semibold text-primary group-hover:gap-5 transition-all"
              >
                Falar com Consultor Sênior
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Capital de Giro Section */}
          <div className="mt-gutter bg-white/70 backdrop-blur-[24px] border border-outline-variant/10 rounded-lg p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 reveal-element">
            <div className="md:w-1/2">
              <span className="text-[12px] leading-[16px] tracking-[0.1em] font-semibold uppercase text-secondary mb-6 block">
                Corporativo
              </span>
              <h3 className="text-4xl font-display mb-8 text-primary">
                Capital de Giro <span className="font-light italic text-on-surface-variant">Corporate</span>
              </h3>
              <p className="text-[18px] leading-[28px] text-on-surface-variant leading-relaxed opacity-80 mb-8">
                Fôlego financeiro estratégico para sua empresa. Soluções ágeis com taxas competitivas para otimizar o fluxo de caixa e sustentar o crescimento sustentável do seu negócio no longo prazo.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 md:border-l border-outline-variant/10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex flex-col gap-2">
                  <span className="text-secondary text-2xl">💼</span>
                  <span className="font-bold text-primary">Limites Flexíveis</span>
                  <span className="text-[16px] leading-[24px] text-on-surface-variant text-sm">
                    Ajustados conforme a necessidade sazonal do seu caixa.
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-secondary text-2xl">⏱</span>
                  <span className="font-bold text-primary">Carência Sob Medida</span>
                  <span className="text-[16px] leading-[24px] text-on-surface-variant text-sm">
                    Períodos de carência desenhados para o ROI do seu projeto.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-container to-primary text-on-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <h3 className="font-display text-4xl md:text-5xl mb-12 max-w-3xl mx-auto leading-tight">
            Pronto para elevar sua estratégia patrimonial a um novo patamar?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/contato"
              className="bg-surface text-primary px-12 py-5 rounded-full font-body text-[18px] font-bold hover:bg-primary-fixed transition-all active:scale-95 w-full md:w-auto block text-center"
            >
              Agendar Consultoria Privada
            </Link>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-fixed/80 font-body text-[18px] hover:text-white transition-colors"
            >
              Falar com um Especialista via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
