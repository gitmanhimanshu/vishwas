const LINKS = [
  ['About', 'about'],
  ['Journey', 'journey'],
  ['Expertise', 'expertise'],
  ['Impact', 'impact'],
  ['Contact', 'contact'],
]

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">Vishwas Sharma<span>.</span></div>
          <nav className="footer__nav">
            {LINKS.map(([label, id]) => (
              <a key={id} onClick={() => go(id)} style={{ cursor: 'pointer' }}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          © 2026 Vishwas Sharma · IIT-JEE Mathematics Faculty &amp; Academic Leader · New Delhi, India
        </div>
      </div>
    </footer>
  )
}
