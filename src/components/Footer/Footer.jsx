import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

const links = {
  Serviços: ['Clareamento', 'Implantes', 'Ortodontia', 'Facetas', 'Próteses', 'Endodontia'],
  Empresa: ['Sobre Nós', 'Nossa Equipe', 'Blog', 'Parceiros', 'Trabalhe Conosco'],
  Pacientes: ['Convênios', 'Financiamento', 'Resultados', 'Depoimentos', 'FAQ'],
}

const socials = [
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
  { icon: <Facebook size={18} />, label: 'Facebook', href: '#' },
  { icon: <Youtube size={18} />, label: 'YouTube', href: '#' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Brand col */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg viewBox="0 0 36 36" fill="none" width="36" height="36">
                <circle cx="18" cy="18" r="18" fill="url(#footerLogoGrad)" />
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V28a2 2 0 01-4 0V13.5C12.8 12.8 12 11.5 12 10z" fill="white" opacity=".9"/>
                <path d="M20 11c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.1-.6 2.1-1.5 2.6V26a1.5 1.5 0 01-3 0V13.6C20.6 13.1 20 12.1 20 11z" fill="white" opacity=".65"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2a9dba"/><stop offset="1" stopColor="#1a7a94"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className={styles.logoTitle}>DentalCare</span>
                <span className={styles.logoSub}>Premium</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Transformando sorrisos e vidas há mais de 15 anos com tecnologia de ponta e atendimento humanizado.
            </p>

            <div className={styles.contacts}>
              <a href="tel:+5511999999999" className={styles.contact}>
                <Phone size={15} />
                (11) 3000-0000
              </a>
              <a href="https://wa.me/5511999999999" className={styles.contact}>
                <Phone size={15} />
                (11) 99999-9999 (WhatsApp)
              </a>
              <a href="mailto:contato@dentalcare.com.br" className={styles.contact}>
                <Mail size={15} />
                contato@dentalcare.com.br
              </a>
              <div className={styles.contact}>
                <MapPin size={15} />
                Av. Paulista, 1000 — Bela Vista, SP
              </div>
              <div className={styles.contact}>
                <Clock size={15} />
                Seg–Sex 8h–20h · Sáb 8h–14h
              </div>
            </div>

            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialBtn}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{group}</h4>
              <ul className={styles.linkList}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.link}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Map placeholder */}
          <div className={styles.mapCol}>
            <h4 className={styles.colTitle}>Como Chegar</h4>
            <div className={styles.mapBox}>
              <iframe
                title="Localização DentalCare"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1951!2d-46.6547!3d-23.5630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7d90ab7bd%3A0x5e7a8e11bc7f3aaa!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr"
                className={styles.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsLink}
            >
              Abrir no Google Maps →
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} DentalCare Premium. Todos os direitos reservados.
          </p>
          <div className={styles.legal}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">LGPD</a>
          </div>
          <p className={styles.cro}>CRO-SP 12345 · CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}
