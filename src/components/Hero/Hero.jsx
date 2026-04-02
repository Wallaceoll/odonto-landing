import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero({ onBooking }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.noise} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.grid}>

          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [.22, 1, .36, 1] }}
          >
            <span className="eyebrow">✦ Odontologia de Alta Performance</span>

            <h1 className={styles.h1}>
              O sorriso que você sempre<br />
              <em className={styles.em}>quis ter está aqui.</em>
            </h1>

            <p className={styles.lead}>
              Cuide do seu sorriso em um ambiente moderno, com especialistas que realmente ouvem você — e tecnologia que entrega resultados visíveis desde a primeira consulta.
            </p>

            <div className={styles.actions}>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                Ver Tratamentos <ArrowRight size={16} />
              </button>
            </div>

            <div className={styles.trust}>
              <div className={styles.avatars}>
                {[11,12,13].map((n, i) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/40?img=${n}`}
                    alt=""
                    className={styles.avatar}
                    style={{ marginLeft: i ? '-10px' : 0, zIndex: 3 - i }}
                  />
                ))}
              </div>
              <p className={styles.trustLabel}>
                <strong>+500 pacientes</strong> avaliaram com 5 estrelas
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.imgCol}
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9, delay: .15, ease: [.22, 1, .36, 1] }}
          >
            <div className={styles.imgWrap}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=85"
                alt="Consultório premium DentalCare"
                className={styles.heroImg}
              />
              <div className={styles.imgVignette} />

              <motion.div
                className={styles.pill}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .7 }}
              >
                <div className={styles.pillDot} />
                <span>Próximo horário disponível — hoje</span>
              </motion.div>

              <motion.div
                className={styles.ratingChip}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .85 }}
              >
                <span className={styles.ratingScore}>5.0</span>
                <span className={styles.ratingStars}>★★★★★</span>
                <span className={styles.ratingSrc}>Google</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.scroll}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  )
}
