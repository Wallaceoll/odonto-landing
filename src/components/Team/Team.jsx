import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Team.module.css'

// Royalty-free Unsplash images — varied, realistic
const team = [
  {
    name: 'Dra. Ana Lima',
    role: 'Implantodontia',
    spec: ['Implantes', 'Cirurgia Oral'],
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&q=80',
    quote: '"Cada implante que coloco devolve não só um dente — devolve confiança."',
  },
  {
    name: 'Dr. Rafael Torres',
    role: 'Ortodontia & Invisalign',
    spec: ['Invisalign®', 'Aparelho Estético'],
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=480&q=80',
    quote: '"Alinhamento perfeito começa com um plano personalizado."',
  },
  {
    name: 'Dra. Camila Rios',
    role: 'Estética & Facetas',
    spec: ['Facetas', 'Clareamento'],
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=480&q=80',
    quote: '"Design do sorriso é arte que respeita a anatomia de cada paciente."',
  },
  {
    name: 'Dr. Marcos Neto',
    role: 'Endodontia Microscópica',
    spec: ['Endodontia', 'Microscopia'],
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=480&q=80',
    quote: '"Com microscopia, tratamento de canal é preciso e praticamente indolor."',
  },
  {
    name: 'Dra. Paula Vieira',
    role: 'Periodontia & Saúde Gengival',
    spec: ['Periodontia', 'Gengivoplastia'],
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=480&q=80',
    quote: '"Gengivas saudáveis são a base de qualquer sorriso bonito."',
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
