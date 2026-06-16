import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Expertise from './components/Expertise'
import Achievements from './components/Achievements'
import Philosophy from './components/Philosophy'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Expertise />
        <Achievements />
        <Philosophy />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
