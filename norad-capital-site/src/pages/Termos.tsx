{/* Conteúdo base para revisão jurídica. Validar com advogado antes da publicação final. */}
import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

export default function Termos() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs sm:text-sm md:text-base text-gold font-medium tracking-[0.2em] uppercase"
          >
            Norad Capital
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy-900 leading-[1.15]"
          >
            Termos de Uso
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base sm:text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto"
          >
            Última atualização: maio de 2025. Ao acessar e utilizar o site da Norad Capital, você concorda com os termos descritos abaixo.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              1. Finalidade do site
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                O site da Norad Capital tem caráter institucional e informativo. Seu objetivo é apresentar os serviços de intermediação de crédito, esclarecer o funcionamento das operações e oferecer canais de contato para interessados em Home Equity e Crédito Imobiliário.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              2. Atuação como intermediadora
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                A Norad Capital atua como intermediadora de crédito, conectando clientes a grandes bancos e instituições financeiras especializadas em crédito imobiliário. A Norad Capital não é uma instituição financeira e não concede crédito diretamente.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              3. Aprovação e condições
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                A aprovação, taxas, prazos, valores e demais condições de qualquer operação de crédito estão sujeitos exclusivamente à análise e aos critérios das instituições financeiras parceiras. A Norad Capital não garante aprovação, taxas ou condições específicas.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              4. Responsabilidade do usuário
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                O usuário se compromete a fornecer informações verdadeiras, completas e atualizadas ao entrar em contato com a Norad Capital. A prestação de informações falsas ou incompletas pode comprometer a análise e a viabilidade da operação.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              5. Propriedade intelectual
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                Todo o conteúdo presente no site da Norad Capital, incluindo textos, imagens, logotipos, layout e design, é de propriedade exclusiva da Norad Capital ou de seus licenciadores. É vedada a reprodução, distribuição ou utilização de qualquer material sem autorização prévia e expressa.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              6. Limitação de responsabilidade
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                A Norad Capital não se responsabiliza por danos diretos ou indiretos decorrentes do uso do site, de informações nele contidas ou de operações realizadas junto a instituições financeiras parceiras. As informações apresentadas têm caráter institucional e não constituem oferta, promessa ou garantia de crédito.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              7. Links externos
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                O site pode conter links para websites de terceiros. A Norad Capital não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos. O acesso a esses links é feito por conta e risco do usuário.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy-900">
              8. Contato
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                Para dúvidas ou esclarecimentos sobre estes termos, entre em contato:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-navy-600">E-mail:</strong> contato@noradcapital.com.br</li>
                <li><strong className="text-navy-600">WhatsApp:</strong> disponível no site</li>
                <li><strong className="text-navy-600">Endereço:</strong> São Paulo, SP</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-4 pt-4 border-t border-navy-100"
          >
            <p className="text-sm text-navy-300 leading-relaxed">
              Estes termos podem ser atualizados a qualquer momento. A versão mais recente estará sempre disponível nesta página. O uso continuado do site após alterações constitui aceitação dos novos termos.
            </p>
          </motion.section>
        </div>
      </section>
    </>
  )
}
