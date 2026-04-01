import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA({ onBooking }) {
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    // Auto-hide label after 4s
    const timer = setTimeout(() => setLabel(false), 4000)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={styles.wrapper}
        >
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className={styles.label}
              >
                Agendar Consulta Grátis
              </motion.span>
            )}
          </AnimatePresence>
          <motion.button
            onClick={onBooking}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.btn}
            aria-label="Agendar consulta"
            onMouseEnter={() => setLabel(true)}
            onMouseLeave={() => setLabel(false)}
          >
            <MessageCircle size={24} fill="white" />
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className={styles.pulse}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
