import Nav from './components/Nav.jsx'
import Hero, { Marquee } from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Process, { CustomBanner } from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact, { Footer } from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <Process />
        <CustomBanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
