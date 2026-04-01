import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Testimonials from './components/Testimonials/Testimonials'
import Convenios from './components/Convenios/Convenios'
import Footer from './components/Footer/Footer'
import FloatingCTA from './components/FloatingCTA/FloatingCTA'
import BookingModal from './components/BookingModal/BookingModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header onBooking={openModal} />
      <main>
        <Hero onBooking={openModal} />
        <Services onBooking={openModal} />
        <Team />
        <Testimonials />
        <Convenios onBooking={openModal} />
      </main>
      <Footer />
      <FloatingCTA onBooking={openModal} />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
