import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

const items = [
  {
    name: 'Mariana O.',
    role: 'Empresária',
    img: 'https://i.pravatar.cc/72?img=5',
    text: 'Tinha vergonha de sorrir em fotos. Depois das facetas, passei semanas tirando selfie. Parece exagero, mas quem viveu isso entende.',
    treatment: 'Facetas de Porcelana',
    stars: 5,
  },
  {
    name: 'Carlos M.',
    role: 'Engenheiro',
    img: 'https://i.pravatar.cc/72?img=12',
    text: 'Fiz o implante e não senti nada durante o procedimento. Achei que ia ser um pesadelo — foi o tratamento mais tranquilo que já fiz.',
    treatment: 'Implante Dentário',
    stars: 5,
  },
  {
    name: 'Patrícia L.',
    role: 'Advogada',
    img: 'https://i.pravatar.cc/72?img=9',
    text: 'O Invisalign mudou minha relação com o espelho. Discreto, confortável e o resultado ficou exatamente como prometido.',
    treatment: 'Invisalign®',
    stars: 5,
  },
  {
    name: 'Fernando C.',
    role: 'Médico',
    img: 'https://i.pravatar.cc/72?img=15',
    text: 'Como profissional de saúde, sou muito exigente. A biossegurança, os equipamentos e o nível técnico da equipe me surpreenderam.',
    treatment: 'Clareamento + Limpeza',
    stars: 5,
  },
  {
    name: 'Luciana R.',
    role: 'Professora',
    img: 'https://i.pravatar.cc/72?img=20',
    text: 'Procrastinei anos por medo do dentista. Aqui fui recebida com tanta gentileza que hoje venho às limpezas semestrais com prazer.',
    treatment: 'Prevenção & Saúde',
    stars: 5,
  },
  {
    name: 'Ricardo T.',
    role: 'Executivo',
    img: 'https://i.pravatar.cc/72?img=17',
    text: 'O protocolo All-on-4 me devolveu algo que eu não sabia que sentia falta: comer sem pensar. Qualidade de vida no sentido mais literal.',
    treatment: 'Prótese All-on-4',
    stars: 5,
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: .07 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } }

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>O que nossos Pacientes Dizem</h2>
          <p className={styles.sub}>
            Cada relato é de alguém que passou pela nossa cadeira e saiu diferente — não só o sorriso, a confiança também.
          </p>
          <div className={styles.aggregate}>
            <span className={styles.aggScore}>4.9</span>
            <div>
              <div className={styles.aggStars}>★★★★★</div>
              <p className={styles.aggLabel}>Baseado em +500 avaliações no Google</p>
            </div>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {items.map((t, i) => (
            <motion.div key={i} variants={item} className={styles.card}>
              <Quote size={22} className={styles.quoteIcon} />
              <p className={styles.text}>{t.text}</p>
              <span className={styles.treatment}>{t.treatment}</span>
              <div className={styles.foot}>
                <img src={t.img} alt={t.name} className={styles.avatar} />
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
