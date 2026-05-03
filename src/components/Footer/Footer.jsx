import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'
import styles from './Footer.module.css'

const links = {
  Tratamentos: ['Clareamento', 'Implantes', 'Invisalign', 'Facetas', 'Próteses', 'Prevenção'],
  Clínica: ['Sobre Nós', 'Nossa Equipe', 'Convênios', 'FAQ'],
}

export default function Footer() {
  const yr = new Date().getFullYear()

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <svg viewBox="0 0 38 38" fill="none" width="34" height="34">
                <circle cx="19" cy="19" r="19" fill="var(--c-primary)"/>
                <path d="M13 11c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V29a2 2 0 01-4 0V14.5C13.8 13.8 13 12.5 13 11z" fill="white" opacity=".9"/>
                <path d="M21 12c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.1-.6 2.1-1.5 2.6V27a1.5 1.5 0 01-3 0V14.6C21.6 14.1 21 13.1 21 12z" fill="white" opacity=".55"/>
              </svg>
              <div>
                <span className={styles.logoTitle}>DentalCare</span>
                <span className={styles.logoSub}>Premium</span>
              </div>
            </div>
            
            <p className={styles.tagline}>
              Odontologia de alta performance que valoriza seu tempo e transforma sorrisos com precisão e transparência.
            </p>

            <div className={styles.contacts}>
              {[
                { icon: <Phone size={14}/>, val: '(11) 3000-0000', href: 'tel:+551130000000' },
                { icon: <Phone size={14}/>, val: 'WhatsApp: (11) 99999-9999', href: 'https://wa.me/5511999999999' },
                { icon: <Mail size={14}/>, val: 'contato@dentalcare.com.br', href: 'mailto:contato@dentalcare.com.br' },
                { icon: <MapPin size={14}/>, val: 'Av. Paulista, 1000 - Bela Vista, SP' },
                { icon: <Clock size={14}/>, val: 'Seg-Sex 8h-20h | Sáb 8h-14h' },
              ].map((contact, index) => (
                contact.href
                  ? <a key={index} href={contact.href} className={styles.contact}>{contact.icon}{contact.val}</a>
                  : <span key={index} className={styles.contact}>{contact.icon}{contact.val}</span>
              ))}
            </div>

            <div className={styles.socials}>
              {[
                { icon: <Instagram size={17}/>, href: '#', label: 'Instagram' },
                { icon: <Facebook size={17}/>, href: '#', label: 'Facebook' },
                { icon: <Youtube size={17}/>, href: '#', label: 'YouTube' },
              ].map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className={styles.social}>{social.icon}</a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className={styles.col}>
              <h4 className={styles.colTitle}>{group}</h4>
              <ul className={styles.colList}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.colLink}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.mapCol}>
            <h4 className={styles.colTitle}>Como Chegar</h4>
            <div className={styles.mapWrap}>
              <iframe
                title="Mapa DentalCare"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1951!2d-46.6547!3d-23.5630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7d90ab7bd%3A0x5e7a8e11bc7f3aaa!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr"
                className={styles.map}
                loading="lazy"
              />
            </div>
            <a 
              href="https://goo.gl/maps/example" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapsLink}
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            (C) {yr} DentalCare Premium | Todos os direitos reservados a{' '}
            <a 
              href="https://kodantech-cjcz.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.devLink}
            >
              KodanTech
            </a>
          </p>
          <div className={styles.legal}>
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  )
}