import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    emoji: '✨',
    title: 'Clareamento Dental',
    desc: 'Técnica laser de última geração para um sorriso até 8 tons mais branco em uma única sessão. Seguro, rápido e duradouro.',
    tag: 'Mais Procurado',
    tagColor: '#2a9dba',
    time: '1 sessão',
  },
  {
    emoji: '🦷',
    title: 'Implante Dentário',
    desc: 'Implantes de titânio com tecnologia 3D para planejamento preciso. Resultado idêntico ao dente natural com durabilidade vitalícia.',
    tag: 'Alta Precisão',
    tagColor: '#1a7a94',
    time: '2–4 meses',
  },
  {
    emoji: '📐',
    title: 'Ortodontia',
    desc: 'Alinhadores invisíveis (Invisalign) e aparelhos estéticos para correção do posicionamento dental com máximo conforto.',
    tag: 'Discreto',
    tagColor: '#0d3d52',
    time: '12–24 meses',
  },
  {
    emoji: '💎',
    title: 'Facetas de Porcelana',
    desc: 'Laminados ultrafinos de porcelana que transformam completamente o formato e a cor dos dentes. Design do sorriso personalizado.',
    tag: 'Transformação Total',
    tagColor: '#c8a96e',
    time: '2 sessões',
  },
  {
    emoji: '🛡️',
    title: 'Prevenção & Limpeza',
    desc: 'Profilaxia profissional com ultrassom e jato de bicarbonato. Detecção precoce de cáries e periodontia para saúde em dia.',
    tag: 'Essencial',
    tagColor: '#34c98c',
    time: '1 hora',
  },
  {
    emoji: '🌟',
    title: 'Próteses Totais',
    desc: 'Próteses sobre implante (protocolo all-on-4 e all-on-6) e próteses removíveis de alta estética para reabilitação completa.',
    tag: 'Reabilitação',
    tagColor: '#7ec8d8',
    time: 'Personalizado',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services({ onBooking }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Nossos Serviços</span>
          <h2 className={styles.title}>Cuidado Completo para o seu Sorriso</h2>
          <p className={styles.subtitle}>
            Tecnologia de ponta aliada à expertise dos melhores especialistas para cada necessidade do seu sorriso.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={item} className={styles.card} whileHover={{ y: -6 }}>
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{s.emoji}</span>
                <span className={styles.tag} style={{ background: s.tagColor + '20', color: s.tagColor, borderColor: s.tagColor + '40' }}>
                  {s.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.time}>⏱ {s.time}</span>
                <button onClick={onBooking} className={styles.cardBtn}>
                  Agendar <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.cta}
        >
          <p>Não encontrou o tratamento que procura?</p>
          <button onClick={onBooking} className={styles.ctaBtn}>
            Consulta de Avaliação Gratuita
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
