import { motion } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    icon: '✦',
    title: 'Clareamento Dental',
    desc: 'Tecnologia LED de última geração. Em uma única sessão, seu sorriso pode ser até 8 tons mais luminoso — sem sensibilidade.',
    tag: 'Mais Buscado',
    accent: 'var(--c-primary)',
  },
  {
    icon: '◈',
    title: 'Implante Dentário',
    desc: 'Planejamento 3D cirúrgico, implantes de titânio biocompatível e resultado que imita perfeitamente o dente natural.',
    tag: 'Alta Precisão',
    accent: 'var(--c-primary-dark)',
  },
  {
    icon: '◎',
    title: 'Invisalign®',
    desc: 'Alinhadores invisíveis personalizados digitalmente. Corrija o posicionamento dos seus dentes de forma discreta e confortável.',
    tag: 'Sem Aparelho',
    accent: '#17A589',
  },
  {
    icon: '◇',
    title: 'Facetas de Porcelana',
    desc: 'Lâminas cerâmicas ultrafinas moldadas para o formato ideal do seu rosto. O caminho mais direto para um sorriso de impacto.',
    tag: 'Design do Sorriso',
    accent: 'var(--c-gold)',
  },
  {
    icon: '○',
    title: 'Próteses & Reabilitação',
    desc: 'Protocolos All-on-4 e All-on-6 para quem perdeu dentes. Recupere função mastigatória e confiança em um único planejamento.',
    tag: 'Reabilitação Total',
    accent: 'var(--c-primary)',
  },
  {
    icon: '◉',
    title: 'Prevenção & Saúde',
    desc: 'Limpeza profissional, raio-X digital e avaliação periodontal. Porque cuidar do sorriso começa antes do problema aparecer.',
    tag: 'Essencial',
    accent: '#17A589',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: .09 } } }
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: .55, ease: [.22, 1, .36, 1] } },
}

export default function Services({ onBooking }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className="section-header">
          <span className="eyebrow">Tratamentos</span>
          <h2 className="section-title">Cada detalhe do seu sorriso tem solução aqui.</h2>
          <p className="section-sub">Do estético ao funcional — temos o especialista certo e a tecnologia para cada caso.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -5 }}
              className={styles.card}
              style={{ '--accent': s.accent }}
            >
              <div className={styles.cardIcon}>{s.icon}</div>
              <span className={styles.cardTag}>{s.tag}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className={styles.bottom}
        >
          <div className={styles.bottomText}>
            <strong>Não sabe por onde começar?</strong>
            <span>Nossa primeira avaliação é gratuita e sem compromisso.</span>
          </div>
          <button onClick={onBooking} className="btn-primary">
            Agendar Avaliação Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  )
}
