import { motion } from "framer-motion"
import { useState } from "react"
import { MessageSquare, Mail, Building2, ArrowUpRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Contato() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("sending")

    setTimeout(() => {
      setFormState("sent")
      setTimeout(() => {
        setFormState("idle")
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    }, 1500)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 flex items-center justify-center bg-surface-container-lowest">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-center px-margin-mobile max-w-3xl"
        >
          <span className="font-body text-[11px] leading-4 tracking-[0.15em] font-semibold text-outline mb-4 block uppercase">
            Canal de Atendimento
          </span>
          <h1 className="font-display text-[36px] leading-[40px] tracking-[-0.01em] font-bold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] text-primary mb-6">
            Contato.
          </h1>
          <p className="font-body text-[18px] leading-7 text-on-surface-variant">
            Atendimento exclusivo para investidores. Selecione o canal de sua
            preferência ou preencha o formulário para uma consulta detalhada.
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-32 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Channels */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-10">
              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="group border-b border-outline-variant/30 pb-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="text-outline w-5 h-5" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    WhatsApp
                  </h3>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">
                  Mensagens instantâneas para suporte rápido.
                </p>
                <a
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                  href="#"
                >
                  Iniciar conversa
                </a>
              </motion.div>

              {/* E-mail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="group border-b border-outline-variant/30 pb-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-outline w-5 h-5" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    E-mail
                  </h3>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">
                  Envio de documentos e propostas formais.
                </p>
                <a
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                  href="mailto:contato@norad.com"
                >
                  contato@norad.com
                </a>
              </motion.div>

              {/* Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="group border-b border-outline-variant/30 pb-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="text-outline w-5 h-5" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Sede São Paulo
                  </h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Av. Brigadeiro Faria Lima, 4500
                  <br />
                  Itaim Bibi, SP — CEP 04538-132
                </p>
                <p className="mt-2 text-[10px] font-semibold text-outline-variant uppercase tracking-widest">
                  Apenas com agendamento
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-8"
          >
            <div className="bg-surface-bright p-8 md:p-12 rounded-lg border border-outline-variant/20">
              <h2 className="font-display text-[24px] leading-8 tracking-[-0.01em] font-semibold text-primary mb-10">
                Consulta Privada
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-outline uppercase tracking-widest">
                      Nome Completo
                    </label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2 px-0 text-primary placeholder:text-outline-variant/50 focus:border-primary transition-colors text-sm"
                      placeholder="Nome Sobrenome"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-outline uppercase tracking-widest">
                      E-mail
                    </label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2 px-0 text-primary placeholder:text-outline-variant/50 focus:border-primary transition-colors text-sm"
                      placeholder="exemplo@empresa.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-outline uppercase tracking-widest">
                    Assunto
                  </label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2 px-0 text-primary focus:border-primary transition-colors text-sm appearance-none">
                    <option>Estruturação de Portfólio</option>
                    <option>Crédito Imobiliário</option>
                    <option>Gestão de Ativos</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-outline uppercase tracking-widest">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2 px-0 text-primary placeholder:text-outline-variant/50 focus:border-primary transition-colors text-sm resize-none"
                    placeholder="Como podemos ajudar?"
                    rows={3}
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className={`bg-primary text-on-primary px-12 py-4 rounded-full font-semibold text-sm hover:bg-on-surface-variant transition-all active:scale-[0.99] flex items-center justify-center gap-2 ${
                      formState === "sending" ? "opacity-50" : ""
                    } ${formState === "sent" ? "bg-green-800 hover:bg-green-800" : ""}`}
                  >
                    {formState === "idle" && (
                      <>
                        Enviar Solicitação{" "}
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </>
                    )}
                    {formState === "sending" && "Enviando..."}
                    {formState === "sent" && "Solicitação Enviada"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
