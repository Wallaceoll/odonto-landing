import { motion } from 'framer-motion'
import { Calendar, Star, Shield, ArrowRight, ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'

const stats = [
  { num: '+8.000', label: 'Pacientes Atendidos' },
  { num: '15+', label: 'Anos de Experiência' },
  { num: '98%', label: 'Satisfação' },
  { num: '12', label: 'Especialidades' },
]

const badges = [
  { icon: <Shield size={14} />, text: 'Certificado CRO-SP' },
  { icon: <Star size={14} />, text: 'Nota 5.0 no Google' },
]

export default function Hero({ onBooking }) {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={styles.textCol}
          >
            <div className={styles.badgesRow}>
              {badges.map((b, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={styles.badge}
                >
                  {b.icon}
                  {b.text}
                </motion.span>
              ))}
            </div>

            <h1 className={styles.title}>
              Sorrisos que{' '}
              <span className={styles.titleAccent}>Transformam</span>{' '}
              Vidas
            </h1>

            <p className={styles.subtitle}>
              Odontologia premium com tecnologia de última geração. Do clareamento ao implante,
              cuidamos do seu sorriso com a atenção e excelência que você merece.
            </p>

            <div className={styles.actions}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onBooking}
                className={styles.primaryBtn}
              >
                <Calendar size={20} />
                Agendar Consulta Gratuita
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className={styles.secondaryBtn}
              >
                Ver Serviços
              </motion.button>
            </div>

            {/* Trustmarks */}
            <div className={styles.trust}>
              <div className={styles.trustAvatars}>
                {['https://i.pravatar.cc/40?img=1','https://i.pravatar.cc/40?img=2','https://i.pravatar.cc/40?img=3'].map((src, i) => (
                  <img key={i} src={src} alt="" className={styles.trustAvatar} style={{ zIndex: 3 - i, marginLeft: i > 0 ? '-10px' : 0 }} />
                ))}
              </div>
              <div className={styles.trustText}>
                <div className={styles.stars}>{'★'.repeat(5)}</div>
                <p>+500 avaliações 5 estrelas</p>
              </div>
            </div>
          </motion.div>

          {/* Right image block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={styles.imageCol}
          >
            <div className={styles.imageWrap}>
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80"
                alt="Consultório odontológico moderno"
                className={styles.heroImg}
              />
              <div className={styles.imgOverlay} />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={styles.floatingCard}
              >
                <div className={styles.floatingIcon}>✓</div>
                <div>
                  <p className={styles.floatingTitle}>Próxima disponibilidade</p>
                  <p className={styles.floatingText}>Hoje às 14h · Clareamento</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.ratingBadge}
              >
                <span className={styles.ratingNum}>5.0</span>
                <span className={styles.ratingStars}>★★★★★</span>
                <span className={styles.ratingLabel}>Google</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.statsBar}
        >
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className={styles.scrollIndicator}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
