import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import styles from './Convenios.module.css'

const convenios = [
  { name: 'Unimed', color: '#00a650' },
  { name: 'Bradesco Saúde', color: '#cc0000' },
  { name: 'SulAmérica', color: '#003087' },
  { name: 'Amil', color: '#e4002b' },
  { name: 'Porto Seguro', color: '#004b8d' },
  { name: 'Prevent Senior', color: '#00698c' },
  { name: 'Golden Cross', color: '#c8960c' },
  { name: 'Odontoprev', color: '#0080c6' },
]

const benefits = [
  'Sem taxa de adesão ou mensalidade extra',
  'Atendimento de emergência incluído',
  'Procedimentos estéticos com desconto especial',
  'Consulta de avaliação sempre gratuita',
  'Parcelamento em até 18x sem juros',
  'Programa fidelidade com benefícios exclusivos',
]

export default function Convenios({ onBooking }) {
  return (
    <section id="convenios" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Convênios & Formas de Pagamento</span>
          <h2 className={styles.title}>Aceitamos os Principais Planos Odontológicos</h2>
          <p className={styles.subtitle}>
            Trabalhamos com os maiores convênios do país para facilitar o acesso ao cuidado que você merece.
          </p>
        </motion.div>

        {/* Logos grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.logosGrid}
        >
          {convenios.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -3 }}
              className={styles.logoCard}
            >
              <div className={styles.logoCircle} style={{ background: c.color + '15', borderColor: c.color + '30' }}>
                <span className={styles.logoInitial} style={{ color: c.color }}>{c.name[0]}</span>
              </div>
              <span className={styles.logoName}>{c.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits + CTA split */}
        <div className={styles.split}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={styles.benefitsCol}
          >
            <h3 className={styles.benefitsTitle}>Por que Escolher a DentalCare?</h3>
            <ul className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>
                  <CheckCircle size={18} className={styles.checkIcon} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={styles.ctaCard}
          >
            <div className={styles.ctaCardInner}>
              <span className={styles.ctaEmoji}>🦷</span>
              <h3 className={styles.ctaTitle}>Primeira Consulta Gratuita</h3>
              <p className={styles.ctaText}>
                Venha conhecer nosso consultório e receba uma avaliação completa sem nenhum custo. Sem compromisso.
              </p>
              <div className={styles.ctaHighlights}>
                {['Raio-X Panorâmico', 'Avaliação Clínica', 'Plano de Tratamento'].map((h, i) => (
                  <span key={i} className={styles.ctaHighlight}>✓ {h}</span>
                ))}
              </div>
              <button onClick={onBooking} className={styles.ctaBtn}>
                Agendar Avaliação Gratuita
                <ArrowRight size={18} />
              </button>
              <p className={styles.ctaNote}>Sem fila de espera · Resposta em até 1h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
