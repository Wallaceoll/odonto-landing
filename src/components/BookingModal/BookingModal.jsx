import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, User, Phone, Mail, ChevronDown, CheckCircle } from 'lucide-react'
import styles from './BookingModal.module.css'

const services = [
  'Consulta de Avaliação (Gratuita)',
  'Clareamento Dental',
  'Implante Dentário',
  'Ortodontia / Invisalign',
  'Facetas de Porcelana',
  'Limpeza e Profilaxia',
  'Prótese Dentária',
  'Outro',
]

const times = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00']

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1) // 1 = form, 2 = success
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', date: '', time: '', message: ''
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStep(1)
      setForm({ name: '', phone: '', email: '', service: '', date: '', time: '', message: '' })
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setStep(2)
  }

  // Min date = today
  const today = new Date().toISOString().split('T')[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={styles.backdrop}
          />
          <div className={styles.wrapper}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-label="Agendar consulta"
            >
              {/* Header */}
              <div className={styles.modalHeader}>
                <div>
                  <h2 className={styles.modalTitle}>
                    {step === 1 ? 'Agendar Consulta' : 'Agendamento Confirmado!'}
                  </h2>
                  <p className={styles.modalSub}>
                    {step === 1 ? 'Preencha os dados e nossa equipe confirmará em até 1 hora.' : 'Você receberá a confirmação por WhatsApp.'}
                  </p>
                </div>
                <button onClick={onClose} className={styles.closeBtn} aria-label="Fechar">
                  <X size={20} />
                </button>
              </div>

              {/* Step 1: Form */}
              {step === 1 && (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        <User size={14} /> Nome Completo *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        <Phone size={14} /> WhatsApp *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        <Mail size={14} /> E-mail
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        <ChevronDown size={14} /> Serviço Desejado *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={styles.select}
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        <Calendar size={14} /> Data Preferencial *
                      </label>
                      <input
                        name="date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={handleChange}
                        required
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        <Clock size={14} /> Horário Preferencial *
                      </label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className={styles.select}
                      >
                        <option value="">Selecione um horário</option>
                        {times.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Mensagem (opcional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="Descreva brevemente sua necessidade ou dúvida..."
                      rows={3}
                    />
                  </div>

                  <div className={styles.formFooter}>
                    <p className={styles.disclaimer}>
                      🔒 Seus dados estão protegidos. Não fazemos spam.
                    </p>
                    <button type="submit" disabled={loading} className={styles.submitBtn}>
                      {loading ? (
                        <span className={styles.spinner} />
                      ) : (
                        <>
                          <Calendar size={18} />
                          Confirmar Agendamento
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Step 2: Success */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.success}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <CheckCircle size={72} className={styles.successIcon} />
                  </motion.div>
                  <h3 className={styles.successTitle}>Solicitação Recebida!</h3>
                  <p className={styles.successText}>
                    Recebemos seu pedido de agendamento. Nossa equipe entrará em contato via WhatsApp em até <strong>1 hora</strong> para confirmar o horário.
                  </p>
                  <div className={styles.successDetails}>
                    <div className={styles.detailRow}>
                      <span>Serviço:</span>
                      <strong>{form.service}</strong>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Data:</span>
                      <strong>{form.date && new Date(form.date + 'T12:00:00').toLocaleDateString('pt-BR')}</strong>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Horário:</span>
                      <strong>{form.time}</strong>
                    </div>
                  </div>
                  <button onClick={onClose} className={styles.successBtn}>
                    Fechar
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
