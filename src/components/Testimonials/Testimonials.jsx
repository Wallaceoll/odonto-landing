import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Mariana Oliveira',
    role: 'Empresária',
    img: 'https://i.pravatar.cc/80?img=5',
    text: 'Fiz o clareamento a laser e o resultado superou minhas expectativas. Em apenas uma sessão fiquei com o sorriso que sempre quis. A Dra. Camila é incrível e extremamente atenciosa.',
    service: 'Clareamento a Laser',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Professor Universitário',
    img: 'https://i.pravatar.cc/80?img=12',
    text: 'Tinha muito medo de dentista mas a equipe me deixou completamente à vontade. O implante foi realizado sem dor e o acompanhamento pós-cirúrgico foi impecável. Recomendo a todos!',
    service: 'Implante Dentário',
    stars: 5,
  },
  {
    name: 'Patrícia Almeida',
    role: 'Advogada',
    img: 'https://i.pravatar.cc/80?img=9',
    text: 'As facetas de porcelana transformaram meu sorriso e minha autoestima. O Dr. Rodrigo fez um trabalho de design do sorriso extraordinário. Resultados naturais e lindos!',
    service: 'Facetas de Porcelana',
    stars: 5,
  },
  {
    name: 'Fernando Costa',
    role: 'Médico',
    img: 'https://i.pravatar.cc/80?img=15',
    text: 'Como profissional da saúde, fui muito exigente na escolha do consultório. A esterilização, os equipamentos e o nível técnico da equipe são de excelência. Ambiente premium.',
    service: 'Ortodontia',
    stars: 5,
  },
  {
    name: 'Luciana Martins',
    role: 'Designer',
    img: 'https://i.pravatar.cc/80?img=20',
    text: 'O tratamento com Invisalign foi a melhor decisão que tomei. Totalmente discreto, sem dor e o resultado ficou perfeito. O atendimento é muito humanizado e personalizado.',
    service: 'Invisalign',
    stars: 5,
  },
  {
    name: 'Ricardo Souza',
    role: 'Executivo',
    img: 'https://i.pravatar.cc/80?img=17',
    text: 'Realizei a prótese All-on-4 e recuperei minha qualidade de vida completamente. A Dra. Ana Beatriz é uma das melhores implantodontistas do Brasil. Não poderia estar mais satisfeito.',
    service: 'Prótese All-on-4',
    stars: 5,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>O que nossos Pacientes Dizem</h2>
          <p className={styles.subtitle}>
            Mais de 8.000 pacientes transformados. Veja o que eles têm a dizer sobre a experiência.
          </p>
          <div className={styles.aggregate}>
            <span className={styles.aggScore}>4.9</span>
            <div>
              <div className={styles.aggStars}>{'★'.repeat(5)}</div>
              <p className={styles.aggText}>Baseado em +500 avaliações no Google</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={item} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              <Quote size={24} className={styles.quoteIcon} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.serviceTag}>{t.service}</div>
              <div className={styles.footer}>
                <img src={t.img} alt={t.name} className={styles.avatar} />
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
                <div className={styles.stars}>
                  {'★'.repeat(t.stars)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
