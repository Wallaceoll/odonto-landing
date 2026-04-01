import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Star } from 'lucide-react'
import styles from './Team.module.css'

const dentists = [
  {
    name: 'Dra. Ana Beatriz Costa',
    role: 'Implantodontista & Diretora Clínica',
    cro: 'CRO-SP 45.231',
    rating: 5.0,
    reviews: 342,
    spec: ['Implantes', 'Cirurgia Oral'],
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    bio: 'Especialista em implantodontia pela USP com mais de 15 anos de experiência e mais de 3.000 implantes realizados.',
  },
  {
    name: 'Dr. Rodrigo Mendes',
    role: 'Ortodontista',
    cro: 'CRO-SP 38.901',
    rating: 5.0,
    reviews: 218,
    spec: ['Invisalign', 'Aparelho Estético'],
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Certificado Invisalign Diamond Provider. Especialista em ortodontia pela UNICAMP com foco em tratamentos discretos.',
  },
  {
    name: 'Dra. Camila Ferreira',
    role: 'Dentística & Facetas',
    cro: 'CRO-SP 52.744',
    rating: 5.0,
    reviews: 189,
    spec: ['Facetas', 'Clareamento'],
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Especialista em estética dental pelo ILAPEO. Referência em design do sorriso e facetas de porcelana ultrafinas.',
  },
  {
    name: 'Dr. Felipe Araujo',
    role: 'Endodontista',
    cro: 'CRO-SP 41.567',
    rating: 4.9,
    reviews: 156,
    spec: ['Endodontia', 'Microscopia'],
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    bio: 'Especialista em endodontia microscópica com técnica de tratamento de canal sem dor e alta taxa de sucesso.',
  },
  {
    name: 'Dra. Juliana Santos',
    role: 'Periodontista',
    cro: 'CRO-SP 49.132',
    rating: 5.0,
    reviews: 127,
    spec: ['Periodontia', 'Gengivoplastia'],
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: 'Especialista em saúde gengival e cirurgias plásticas periodontais para complementar o design do sorriso.',
  },
]

export default function Team() {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Swiper) {
      swiperRef.current = new window.Swiper('.teamSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: true,
        grabCursor: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      })
    }
    return () => { swiperRef.current?.destroy?.() }
  }, [])

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Nossa Equipe</span>
          <h2 className={styles.title}>Especialistas Dedicados ao seu Sorriso</h2>
          <p className={styles.subtitle}>
            Profissionais com formação nas melhores universidades e cursos de especialização nacionais e internacionais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.swiperWrap}
        >
          <div className="swiper teamSwiper">
            <div className="swiper-wrapper">
              {dentists.map((d, i) => (
                <div key={i} className="swiper-slide">
                  <div className={styles.card}>
                    <div className={styles.imgWrap}>
                      <img src={d.img} alt={d.name} className={styles.img} />
                      <div className={styles.imgOverlay} />
                      <div className={styles.socials}>
                        <a href="#" className={styles.socialBtn} aria-label="LinkedIn"><Linkedin size={16} /></a>
                        <a href="#" className={styles.socialBtn} aria-label="Instagram"><Instagram size={16} /></a>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.tags}>
                        {d.spec.map((s, j) => (
                          <span key={j} className={styles.specTag}>{s}</span>
                        ))}
                      </div>
                      <h3 className={styles.name}>{d.name}</h3>
                      <p className={styles.role}>{d.role}</p>
                      <p className={styles.cro}>{d.cro}</p>
                      <p className={styles.bio}>{d.bio}</p>
                      <div className={styles.rating}>
                        <div className={styles.stars}>
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} size={14} fill={j < Math.floor(d.rating) ? '#f59e0b' : 'none'} color="#f59e0b" />
                          ))}
                        </div>
                        <span className={styles.ratingNum}>{d.rating}</span>
                        <span className={styles.ratingCount}>({d.reviews} avaliações)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" style={{ marginTop: '2rem', position: 'relative' }} />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
