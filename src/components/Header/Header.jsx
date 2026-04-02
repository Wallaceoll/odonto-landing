import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import styles from './Header.module.css'

export default function Header({ onBooking }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const nav = [
    { label: 'Tratamentos', href: '#services' },
    { label: 'Equipe', href: '#team' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Contato', href: '#footer' },
  ]

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.logo}>
            <svg viewBox="0 0 38 38" fill="none" width="36" height="36">
              <circle cx="19" cy="19" r="19" fill="var(--c-primary)"/>
              <path d="M13 11c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V29a2 2 0 01-4 0V14.5C13.8 13.8 13 12.5 13 11z" fill="white" opacity=".9"/>
              <path d="M21 12c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.1-.6 2.1-1.5 2.6V27a1.5 1.5 0 01-3 0V14.6C21.6 14.1 21 13.1 21 12z" fill="white" opacity=".55"/>
            </svg>
            <div>
              <span className={styles.logoTitle}>DentalCare</span>
              <span className={styles.logoSub}>Premium</span>
            </div>
          </a>

          <nav className={styles.nav}>
            {nav.map(n => (
              <button key={n.href} onClick={() => go(n.href)} className={styles.navItem}>{n.label}</button>
            ))}
          </nav>

          <div className={styles.right}>
            <a href="tel:+5511999999999" className={styles.phone}><Phone size={15} /> (11) 3000-0000</a>
            <button onClick={onBooking} className={`${styles.ctaBtn} btn-primary`} style={{ padding: '.6rem 1.2rem', fontSize: '.85rem' }}>
              Agendar Consulta
            </button>
            <button onClick={() => setOpen(!open)} className={styles.burger} aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className={styles.mobileNav}>
            {nav.map(n => (
              <button key={n.href} onClick={() => go(n.href)} className={styles.mobileNavItem}>{n.label}</button>
            ))}
            <button onClick={() => { setOpen(false); onBooking() }} className={`${styles.mobileCTA} btn-primary`}>
              Agendar Consulta
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
