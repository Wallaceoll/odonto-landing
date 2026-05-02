import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: 'CL',
    title: 'Clareamento Dental',
    desc: 'Tecnologia LED de última geração. Em uma única sessão, seu sorriso pode ser até 8 tons mais luminoso sem sensibilidade.',
    tag: 'Mais buscado',
    accent: 'var(--c-primary)',
  },
  {
    icon: 'IM',
    title: 'Implante Dentário',
    desc: 'Planejamento 3D cirúrgico, implantes de titânio biocompatível e resultado que imita perfeitamente o dente natural.',
    tag: 'Alta precisão',
    accent: 'var(--c-primary-dark)',
  },
  {
    icon: 'IN',
    title: 'Invisalign',
    desc: 'Alinhadores invisíveis personalizados digitalmente. Corrija o posicionamento dos seus dentes de forma discreta e confortável.',
    tag: 'Sem aparelho',
    accent: '#17A589',
  },
  {
    icon: 'FP',
    title: 'Facetas de Porcelana',
    desc: 'Lâminas cerâmicas ultrafinas moldadas para o formato ideal do seu rosto. O caminho mais direto para um sorriso de impacto.',
    tag: 'Design do sorriso',
    accent: 'var(--c-gold)',
  },
  {
    icon: 'PR',
    title: 'Próteses e Reabilitação',
    desc: 'Protocolos All-on-4 e All-on-6 para quem perdeu dentes. Recupere função mastigatória e confiança em um único planejamento.',
    tag: 'Reabilitação total',
    accent: 'var(--c-primary)',
  },
  {
    icon: 'PS',
    title: 'Prevenção e Saúde',
    desc: 'Limpeza profissional, raio-X digital e avaliação periodontal. Porque cuidar do sorriso começa antes do problema aparecer.',
    tag: 'Essencial',
    accent: '#17A589',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services({ onBooking }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className="section-header">
          <span className="eyebrow">Tratamentos</span>
          <h2 className="section-title">Cada detalhe do seu sorriso tem solução aqui.</h2>
          <p className="section-sub">Do estético ao funcional, temos o especialista certo e a tecnologia para cada caso.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -5 }}
              className={styles.card}
              style={{ '--accent': service.accent }}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <span className={styles.cardTag}>{service.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <button onClick={onBooking} className={styles.cardBtn}>
                Agendar <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
