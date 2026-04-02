import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Team.module.css'
import helenaDuartePhoto from '../../assets/team-photos/helena-duarte.jpg'
import rafaelMartinsPhoto from '../../assets/team-photos/rafael-martins.jpg'
import camilaNogueiraPhoto from '../../assets/team-photos/camila-nogueira.jpg'
import lucasFerrazPhoto from '../../assets/team-photos/lucas-ferraz.jpg'
import marinaAlbuquerquePhoto from '../../assets/team-photos/marina-albuquerque.jpg'

const team = [
  {
    name: 'Dra. Helena Duarte',
    role: 'Implantodontia',
    spec: ['Implantes', 'Cirurgia Oral'],
    img: helenaDuartePhoto,
    quote: 'Cada implante que realizo devolve nao so um dente, mas tambem confianca.',
  },
  {
    name: 'Dr. Rafael Martins',
    role: 'Ortodontia e Invisalign',
    spec: ['Invisalign', 'Aparelho Estetico'],
    img: rafaelMartinsPhoto,
    quote: 'Alinhamento perfeito comeca com um plano honesto e personalizado.',
  },
  {
    name: 'Dra. Camila Nogueira',
    role: 'Estetica e Facetas',
    spec: ['Facetas', 'Clareamento'],
    img: camilaNogueiraPhoto,
    quote: 'Design do sorriso e arte que respeita a anatomia de cada paciente.',
  },
  {
    name: 'Dr. Lucas Ferraz',
    role: 'Endodontia Microscopica',
    spec: ['Endodontia', 'Microscopia'],
    img: lucasFerrazPhoto,
    quote: 'Com microscopia, o tratamento de canal e preciso e quase indolor.',
  },
  {
    name: 'Dra. Marina Albuquerque',
    role: 'Periodontia e Saude Gengival',
    spec: ['Periodontia', 'Gengivoplastia'],
    img: marinaAlbuquerquePhoto,
    quote: 'Gengivas saudaveis sao a fundacao de qualquer sorriso bonito.',
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
          <p className="section-sub">Formacao de alto nivel, escuta ativa e tecnica que se traduz em sorrisos reais.</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.swiperWrap}
        >
          <div className="swiper teamSwiper">
            <div className="swiper-wrapper">
              {team.map((dentist, index) => (
                <div key={index} className="swiper-slide">
                  <div className={styles.card}>
                    <div className={styles.imgWrap}>
                      <img src={dentist.img} alt={dentist.name} className={styles.img} />
                    </div>
                    <div className={styles.body}>
                      <div className={styles.tags}>
                        {dentist.spec.map((specialty, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>{specialty}</span>
                        ))}
                      </div>
                      <h3 className={styles.name}>{dentist.name}</h3>
                      <p className={styles.role}>{dentist.role}</p>
                      <p className={styles.quote}>{dentist.quote}</p>
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
