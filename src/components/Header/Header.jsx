import { useState, useEffect } from 'react'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import styles from './Header.module.css'

export default function Header({ onBooking }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Equipe', href: '#team' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Contato', href: '#footer' },
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="18" cy="18" r="18" fill="url(#logoGrad)" />
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V28a2 2 0 01-4 0V13.5C12.8 12.8 12 11.5 12 10z" fill="white" opacity=".9"/>
                <path d="M20 11c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.1-.6 2.1-1.5 2.6V26a1.5 1.5 0 01-3 0V13.6C20.6 13.1 20 12.1 20 11z" fill="white" opacity=".65"/>
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2a9dba"/>
                    <stop offset="1" stopColor="#1a7a94"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>DentalCare</span>
              <span className={styles.logoSub}>Premium</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className={styles.navItem}>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className={styles.right}>
            <a href="tel:+5511999999999" className={styles.phone}>
              <Phone size={16} />
              <span>(11) 3000-0000</span>
            </a>
            <button onClick={onBooking} className={styles.ctaBtn}>
              <Calendar size={16} />
              Agendar Consulta
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burger} aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className={styles.mobileNavItem}>
                {item.label}
              </button>
            ))}
            <button onClick={() => { setIsMenuOpen(false); onBooking() }} className={styles.mobileCTA}>
              <Calendar size={18} />
              Agendar Consulta
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
