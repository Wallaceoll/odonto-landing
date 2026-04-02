import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react'
import styles from './BookingModal.module.css'

const treatments = [
  'Avaliação Gratuita (Primeiro passo)',
  'Clareamento Dental',
  'Implante Dentário',
  'Invisalign® / Ortodontia',
  'Facetas de Porcelana',
  'Prótese Dentária',
  'Limpeza & Prevenção',
  'Outro',
]

const times = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00']

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: '', date: '', time: '' })

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) { setStep(1); setForm({ name: '', phone: '', email: '', treatment: '', date: '', time: '' }) }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const today = new Date().toISOString().split('T')[0]

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setStep(2)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className={styles.wrap}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 24, scale: .97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: .97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog" aria-modal="true"
            >
              <div className={styles.head}>
                <div className={styles.headText}>
                  <h2 className={styles.headTitle}>
                    {step === 1 ? 'Agendar Consulta' : 'Solicitação Enviada'}
                  </h2>
                  <p className={styles.headSub}>
                    {step === 1
                      ? 'Nossa equipe confirmará via WhatsApp em até 1 hora.'
                      : 'Você receberá a confirmação em breve.'}
                  </p>
                </div>
                <button onClick={onClose} className={styles.closeBtn} aria-label="Fechar">
                  <X size={18} />
                </button>
              </div>

              {step === 1 && (
                <form onSubmit={submit} className={styles.form}>
                  <div className={styles.grid2}>
                    <div className={styles.field}>
                      <label className={styles.label}><User size={13} /> Nome *</label>
                      <input name="name" value={form.name} onChange={set} required className={styles.input} placeholder="Seu nome completo" />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}><Phone size={13} /> WhatsApp *</label>
                      <input name="phone" value={form.phone} onChange={set} required className={styles.input} placeholder="(11) 99999-9999" />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}><Mail size={13} /> E-mail</label>
                    <input name="email" type="email" value={form.email} onChange={set} className={styles.input} placeholder="seu@email.com" />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Tratamento desejado *</label>
                    <select name="treatment" value={form.treatment} onChange={set} required className={styles.select}>
                      <option value="">Selecione um tratamento</option>
                      {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.field}>
                      <label className={styles.label}><Calendar size={13} /> Data preferencial *</label>
                      <input name="date" type="date" min={today} value={form.date} onChange={set} required className={styles.input} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}><Clock size={13} /> Horário *</label>
                      <select name="time" value={form.time} onChange={set} required className={styles.select}>
                        <option value="">Selecione</option>
                        {times.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formFoot}>
                    <span className={styles.privacy}>🔒 Seus dados não são compartilhados</span>
                    <button type="submit" disabled={loading} className={`btn-primary ${styles.submitBtn}`}>
                      {loading
                        ? <span className={styles.spinner} />
                        : 'Confirmar Agendamento'}
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <motion.div
                  className={styles.success}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: .1 }}
                  >
                    <CheckCircle size={64} className={styles.successIcon} />
                  </motion.div>
                  <h3 className={styles.successTitle}>Perfeito, {form.name.split(' ')[0]}!</h3>
                  <p className={styles.successText}>
                    Recebemos seu pedido. Nossa equipe entrará em contato pelo WhatsApp <strong>{form.phone}</strong> para confirmar o horário.
                  </p>
                  <div className={styles.summary}>
                    {[
                      ['Tratamento', form.treatment],
                      ['Data', form.date && new Date(form.date + 'T12:00:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })],
                      ['Horário', form.time],
                    ].map(([k, v]) => (
                      <div key={k} className={styles.summaryRow}>
                        <span>{k}</span>
                        <strong>{v}</strong>
                      </div>
                    ))}
                  </div>
                  <button onClick={onClose} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
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
