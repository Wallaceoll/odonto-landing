import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: 'CL',
    title: 'Clareamento Dental',
    desc: 'Tecnologia LED de ultima geracao. Em uma unica sessao, seu sorriso pode ser ate 8 tons mais luminoso sem sensibilidade.',
    tag: 'Mais Buscado',
    accent: 'var(--c-primary)',
  },
  {
    icon: 'IM',
    title: 'Implante Dentario',
    desc: 'Planejamento 3D cirurgico, implantes de titanio biocompativel e resultado que imita perfeitamente o dente natural.',
    tag: 'Alta Precisao',
    accent: 'var(--c-primary-dark)',
  },
  {
    icon: 'IN',
    title: 'Invisalign',
    desc: 'Alinhadores invisiveis personalizados digitalmente. Corrija o posicionamento dos seus dentes de forma discreta e confortavel.',
    tag: 'Sem Aparelho',
    accent: '#17A589',
  },
  {
    icon: 'FP',
    title: 'Facetas de Porcelana',
    desc: 'Laminas ceramicas ultrafinas moldadas para o formato ideal do seu rosto. O caminho mais direto para um sorriso de impacto.',
    tag: 'Design do Sorriso',
    accent: 'var(--c-gold)',
  },
  {
    icon: 'PR',
    title: 'Proteses e Reabilitacao',
    desc: 'Protocolos All-on-4 e All-on-6 para quem perdeu dentes. Recupere funcao mastigatoria e confianca em um unico planejamento.',
    tag: 'Reabilitacao Total',
    accent: 'var(--c-primary)',
  },
  {
    icon: 'PS',
    title: 'Prevencao e Saude',
    desc: 'Limpeza profissional, raio-X digital e avaliacao periodontal. Porque cuidar do sorriso comeca antes do problema aparecer.',
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
          <h2 className="section-title">Cada detalhe do seu sorriso tem solucao aqui.</h2>
          <p className="section-sub">Do estetico ao funcional, temos o especialista certo e a tecnologia para cada caso.</p>
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
            <strong>Nao sabe por onde comecar?</strong>
            <span>Nossa primeira avaliacao e gratuita e sem compromisso.</span>
          </div>
          <button onClick={onBooking} className="btn-primary">
            Agendar Avaliacao Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  )
}
