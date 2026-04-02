import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Team.module.css'

const team = [
  {
    name: 'Dra. Beatriz Monteiro',
    role: 'Implantodontia',
    spec: ['Implantes', 'Cirurgia Oral'],
    img: 'https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?w=480&q=80',
    quote: '"Cada implante que coloco devolve não só um dente — devolve confiança."',
  },
  {
    name: 'Dr. Henrique Leal',
    role: 'Ortodontia & Invisalign',
    spec: ['Invisalign®', 'Aparelho Estético'],
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=480&q=80',
    quote: '"Alinhamento perfeito começa com um plano honesto e personalizado."',
  },
  {
    name: 'Dra. Isabela Fonseca',
    role: 'Estética & Facetas',
    spec: ['Facetas', 'Clareamento'],
    img: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=480&q=80',
    quote: '"Design do sorriso é arte que respeita a anatomia de cada paciente."',
  },
  {
    name: 'Dr. André Castilho',
    role: 'Endodontia Microscópica',
    spec: ['Endodontia', 'Microscopia'],
    img: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=480&q=80',
    quote: '"Com microscopia, o tratamento de canal é preciso e quase indolor."',
  },
  {
    name: 'Dra. Renata Borges',
    role: 'Periodontia & Saúde Gengival',
    spec: ['Periodontia', 'Gengivoplastia'],
    img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=480&q=80',
    quote: '"Gengivas saudáveis são a fundação de qualquer sorriso bonito."',
  },
]

export default function Team() {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Swiper) {
      ref.current = new window.Swiper('.teamSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
      })
    }
    return () => ref.current?.destroy?.()
  }, [])

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <div className="section-header">
          <span className="eyebrow">Nossa Equipe</span>
          <h2 className="section-title">Especialistas que se importam com o seu resultado.</h2>
          <p className="section-sub">Formação de alto nível, escuta ativa e técnica que se traduz em sorrisos reais.</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className={styles.swiperWrap}
        >
          <div className="swiper teamSwiper">
            <div className="swiper-wrapper">
              {team.map((d, i) => (
                <div key={i} className="swiper-slide">
                  <div className={styles.card}>
                    <div className={styles.imgWrap}>
                      <img src={d.img} alt={d.name} className={styles.img} />
                    </div>
                    <div className={styles.body}>
                      <div className={styles.tags}>
                        {d.spec.map((s, j) => <span key={j} className={styles.tag}>{s}</span>)}
                      </div>
                      <h3 className={styles.name}>{d.name}</h3>
                      <p className={styles.role}>{d.role}</p>
                      <p className={styles.quote}>{d.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" style={{ marginTop: '1.75rem', position: 'relative' }} />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
