{/* Conteúdo base para revisão jurídica. Validar com advogado antes da publicação final. */}
import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

export default function Privacidade() {
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
            Política de Privacidade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base sm:text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto"
          >
            Última atualização: maio de 2025. Esta política descreve como a Norad Capital coleta, utiliza e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
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
              1. Dados que podemos coletar
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                A Norad Capital pode coletar as seguintes categorias de dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-navy-600">Dados fornecidos diretamente:</strong> nome, e-mail, telefone, mensagem e demais informações enviadas por meio de formulários de contato, WhatsApp, e-mail ou atendimento presencial.</li>
                <li><strong className="text-navy-600">Dados de navegação:</strong> endereço IP, tipo de navegador, dispositivo, páginas visitadas, tempo de permanência e dados de cookies, coletados automaticamente durante a navegação no site.</li>
                <li><strong className="text-navy-600">Dados relacionados à operação:</strong> informações necessárias para a intermediação de crédito, como dados patrimoniais, informações sobre o imóvel e documentação solicitada durante o processo.</li>
              </ul>
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
              2. Finalidade do uso dos dados
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>Os dados pessoais são utilizados para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a solicitações de contato e prestar atendimento consultivo.</li>
                <li>Estruturar e intermediar operações de crédito junto a instituições financeiras especializadas.</li>
                <li>Melhorar a experiência de navegação no site.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
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
              3. Compartilhamento de dados
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                A Norad Capital pode compartilhar dados pessoais com instituições financeiras parceiras exclusivamente quando necessário para a intermediação da operação de crédito solicitada pelo cliente. Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins de marketing sem o consentimento do titular.
              </p>
              <p>
                O compartilhamento é limitado ao estritamente necessário para a análise e formalização da operação junto à instituição financeira responsável.
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
              4. Direitos do titular
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>Em conformidade com a LGPD, o titular dos dados pessoais pode exercer os seguintes direitos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento de dados.</li>
                <li>Acesso aos dados pessoais armazenados.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitação de anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                <li>Revogação do consentimento a qualquer momento.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato pelo e-mail <strong className="text-navy-600">contato@noradcapital.com.br</strong> ou pelo WhatsApp disponível no site.
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
              5. Cookies e análise de dados
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                O site da Norad Capital pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar o uso do site e otimizar conteúdos.
              </p>
              <p>
                Caso ferramentas de análise ou marketing sejam implementadas no futuro, esta política será atualizada para incluir informações detalhadas sobre os cookies utilizados e as opções de controle disponíveis ao usuário.
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
              6. Retenção de dados
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                Os dados pessoais serão mantidos pelo período necessário para cumprir as finalidades descritas nesta política, respeitando os prazos legais aplicáveis. Após o término do tratamento, os dados serão eliminados ou anonimizados, salvo quando a retenção for exigida por lei.
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
              7. Segurança
            </h2>
            <div className="space-y-3 text-base md:text-lg text-navy-400 leading-relaxed">
              <p>
                A Norad Capital adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda, alteração ou divulgação. Essas medidas incluem controles de acesso, criptografia quando aplicável e políticas internas de tratamento de dados.
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
                Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais, entre em contato:
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
              Esta política pode ser atualizada a qualquer momento para refletir mudanças nas práticas de tratamento de dados ou em requisitos legais. A versão mais recente estará sempre disponível nesta página.
            </p>
          </motion.section>
        </div>
      </section>
    </>
  )
}
