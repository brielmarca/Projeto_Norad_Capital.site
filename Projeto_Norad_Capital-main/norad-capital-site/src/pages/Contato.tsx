import { motion } from "framer-motion"
import { siteContent } from "../data/siteContent"
import WhatsAppButton from "../components/WhatsAppButton"
import { Mail, Phone, MapPin } from "lucide-react"
import HeroLineBackground from "../components/HeroLineBackground"
import SectionTitle from "../components/SectionTitle"

const ease = [0.16, 1, 0.3, 1] as const

export default function Contato() {
  const { contato } = siteContent

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-24 pb-24">
      <HeroLineBackground />
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="space-y-6"
        >
          <SectionTitle>{contato.title}</SectionTitle>
          <p className="text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl">
            {contato.description}
          </p>
          <p className="text-base text-navy-300 leading-relaxed max-w-xl">
            {contato.intro}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-6">
              <WhatsAppButton
                number={contato.whatsapp.number}
                message={contato.whatsapp.message}
                label={contato.whatsapp.label}
              />

              <div className="space-y-5 pt-4">
                <a
                  href={`tel:${contato.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 text-navy-400 hover:text-navy-900 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full border border-navy-100 flex items-center justify-center group-hover:border-navy-200 transition-colors">
                    <Phone size={18} />
                  </span>
                  <span className="text-sm">{contato.phone}</span>
                </a>

                <a
                  href={`mailto:${contato.email.address}`}
                  className="flex items-center gap-4 text-navy-400 hover:text-navy-900 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full border border-navy-100 flex items-center justify-center group-hover:border-navy-200 transition-colors">
                    <Mail size={18} />
                  </span>
                  <span className="text-sm">{contato.email.address}</span>
                </a>

                <div className="flex items-start gap-4 text-navy-400">
                  <span className="w-10 h-10 rounded-full border border-navy-100 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-navy-900">
                      {contato.office.city}
                    </p>
                    <p className="text-sm">{contato.office.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="lg:col-span-3"
          >
            <div className="border border-navy-100 rounded-3xl p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-navy-900 tracking-tight">
                  {contato.form.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                  {contato.form.description}
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder={contato.form.nameLabel}
                    className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm"
                  />
                  <input
                    type="tel"
                    placeholder={contato.form.phoneLabel}
                    className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder={contato.form.emailLabel}
                  className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm"
                />
                <textarea
                  rows={4}
                  placeholder={contato.form.messageLabel}
                  className="w-full px-5 py-4 rounded-2xl border border-navy-100 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-navy-300 transition-colors text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-800 transition-all duration-300"
                >
                  {contato.form.submitLabel}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="text-xs text-navy-300 leading-relaxed max-w-2xl mx-auto text-center pt-8 border-t border-navy-100"
        >
          {contato.disclaimer}
        </motion.p>
      </div>
    </section>
  )
}
