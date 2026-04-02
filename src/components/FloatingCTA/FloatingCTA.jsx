import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA({ onBooking }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: .8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: .8, y: 12 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          onClick={onBooking}
          className={styles.btn}
          aria-label="Agendar consulta"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: .95 }}
        >
          <CalendarCheck size={22} />
          <motion.span
            className={styles.ring}
            animate={{ scale: [1, 1.55, 1], opacity: [.5, 0, .5] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.5 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
