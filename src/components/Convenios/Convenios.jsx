import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import styles from './Convenios.module.css'

const plans = [
  { name: 'Unimed', abbr: 'U', color: '#00a650' },
  { name: 'Bradesco', abbr: 'B', color: '#cc0000' },
  { name: 'SulAmérica', abbr: 'S', color: '#003087' },
  { name: 'Amil', abbr: 'A', color: '#e4002b' },
  { name: 'Porto Seguro', abbr: 'P', color: '#004b8d' },
  { name: 'Prevent Senior', abbr: 'PS', color: '#00698c' },
  { name: 'Golden Cross', abbr: 'G', color: '#c8960c' },
  { name: 'OdontoPrev', abbr: 'O', color: '#0080c6' },
]

const perks = [
  'Primeira consulta sempre gratuita',
  'Parcelamento em até 18x sem juros',
  'Atendimento de urgência incluso',
  'Orçamento detalhado, sem surpresas',
]

export default function Convenios({ onBooking }) {
  return (
    <section id="convenios" className={styles.section}>
      <div className={styles.container}>
        <div className="section-header">
          <span className="eyebrow">Convênios e Pagamento</span>
          <h2 className="section-title">Seu plano provavelmente é aceito aqui.</h2>
          <p className="section-sub">Trabalhamos com os principais convênios e oferecemos condições flexíveis para quem não tem plano.</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.logos}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.03 }}
              className={styles.logoCard}
            >
              <div className={styles.logoIcon} style={{ background: plan.color + '18', borderColor: plan.color + '35' }}>
                <span style={{ color: plan.color }}>{plan.abbr}</span>
              </div>
              <span className={styles.logoName}>{plan.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.split}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className={styles.perksCol}
          >
            <h3 className={styles.perksTitle}>Facilitamos cada etapa do seu cuidado.</h3>
            <ul className={styles.perksList}>
              {perks.map((perk, index) => (
                <li key={index} className={styles.perk}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className={styles.ctaBox}
          >
            <span className={styles.ctaEyebrow}>Sem compromisso</span>
            <h3 className={styles.ctaTitle}>Avaliação gratuita, completa e sem pressa.</h3>
            <p className={styles.ctaText}>
              Venha conhecer o consultório. Fazemos raio-X panorâmico, avaliação clínica e apresentamos um plano personalizado, de graça.
            </p>
            <button onClick={onBooking} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              Agendar Avaliação Gratuita
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}