import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

const items = [
  {
    name: 'Mariana O.',
    role: 'Empresaria',
    img: 'https://i.pravatar.cc/72?img=5',
    text: 'Tinha vergonha de sorrir em fotos. Depois das facetas, passei semanas tirando selfie. Parece exagero, mas quem viveu isso entende.',
    treatment: 'Facetas de Porcelana',
    stars: 5,
  },
  {
    name: 'Carlos M.',
    role: 'Engenheiro',
    img: 'https://i.pravatar.cc/72?img=12',
    text: 'Fiz o implante e nao senti nada durante o procedimento. Achei que ia ser um pesadelo, mas foi o tratamento mais tranquilo que ja fiz.',
    treatment: 'Implante Dentario',
    stars: 5,
  },
  {
    name: 'Patricia L.',
    role: 'Advogada',
    img: 'https://i.pravatar.cc/72?img=9',
    text: 'O Invisalign mudou minha relacao com o espelho. Discreto, confortavel e o resultado ficou exatamente como prometido.',
    treatment: 'Invisalign',
    stars: 5,
  },
  {
    name: 'Fernando C.',
    role: 'Medico',
    img: 'https://i.pravatar.cc/72?img=15',
    text: 'Como profissional de saude, sou muito exigente. A biosseguranca, os equipamentos e o nivel tecnico da equipe me surpreenderam.',
    treatment: 'Clareamento + Limpeza',
    stars: 5,
  },
  {
    name: 'Luciana R.',
    role: 'Professora',
    img: 'https://i.pravatar.cc/72?img=20',
    text: 'Procrastinei anos por medo do dentista. Aqui fui recebida com tanta gentileza que hoje venho as limpezas semestrais com prazer.',
    treatment: 'Prevencao e Saude',
    stars: 5,
  },
  {
    name: 'Ricardo T.',
    role: 'Executivo',
    img: 'https://i.pravatar.cc/72?img=17',
    text: 'O protocolo All-on-4 me devolveu algo que eu nao sabia que sentia falta: comer sem pensar. Qualidade de vida no sentido mais literal.',
    treatment: 'Protese All-on-4',
    stars: 5,
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>O que nossos Pacientes Dizem</h2>
          <p className={styles.sub}>
            Cada relato e de alguem que passou pela nossa cadeira e saiu diferente. Nao so o sorriso, a confianca tambem.
          </p>
          <div className={styles.aggregate}>
            <span className={styles.aggScore}>4.9</span>
            <div>
              <div className={styles.aggStars}>*****</div>
              <p className={styles.aggLabel}>Baseado em avaliações no Google</p>
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
          {items.map((testimonial, index) => (
            <motion.div key={index} variants={item} className={styles.card}>
              <Quote size={22} className={styles.quoteIcon} />
              <p className={styles.text}>{testimonial.text}</p>
              <span className={styles.treatment}>{testimonial.treatment}</span>
              <div className={styles.foot}>
                <img src={testimonial.img} alt={testimonial.name} className={styles.avatar} />
                <div>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
                <div className={styles.stars}>{'*'.repeat(testimonial.stars)}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
