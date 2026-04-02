import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero({ onBooking }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.noise} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Text ── */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [.22, 1, .36, 1] }}
          >
            <span className="eyebrow">✦ Odontologia de Alta Performance</span>

            <h1 className={styles.h1}>
              Você merece um sorriso que<br />
              <em className={styles.em}>fala por você.</em>
            </h1>

            <p className={styles.lead}>
              Tratamentos estéticos e restauradores com tecnologia de ponta, em um ambiente pensado para que você se sinta cuidado — da recepção à última consulta.
            </p>

            <div className={styles.actions}>
              <motion.button
                onClick={onBooking}
                className={`${styles.mainCta} btn-primary`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: .97 }}
              >
                <Calendar size={18} /> Quero Agendar Agora
              </motion.button>
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

          {/* ── Image ── */}
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

              {/* Floating pill */}
              <motion.div
                className={styles.pill}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .7 }}
              >
                <div className={styles.pillDot} />
                <span>Próximo horário disponível — hoje</span>
              </motion.div>

              {/* Rating chip */}
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
