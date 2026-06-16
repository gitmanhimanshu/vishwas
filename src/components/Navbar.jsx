import { useEffect, useState } from 'react'

const LINKS = [
  ['About', 'about'],
  ['Journey', 'journey'],
  ['Expertise', 'expertise'],
  ['Impact', 'impact'],
  ['Philosophy', 'philosophy'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : 'nav--top'}`}>
      <div className="container nav__inner">
        <a className="nav__logo" onClick={() => go('top')} href="#top">
          Vishwas<span>.</span>
        </a>

        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map(([label, id]) => (
            <a key={id} className="nav__link" onClick={() => go(id)}>
              {label}
            </a>
          ))}
          <button className="btn btn--gold nav__cta" onClick={() => go('contact')}>
            Book a Session
          </button>
        </div>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
