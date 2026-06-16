import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from './motion'

const EMAIL = 'sharmaviswas020@gmail.com'
const PHONE = '9759387636'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const subject = encodeURIComponent(`Session enquiry from ${f.get('name') || 'Website'}`)
    const body = encodeURIComponent(
      `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\n\n${f.get('message')}`
    )
    // Opens the visitor's mail client pre-filled — no backend required.
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section section--dark" id="contact">
      <div className="container">
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <motion.span className="eyebrow"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Get In Touch
          </motion.span>
          <motion.h2 className="section-title"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Let's build your path to success
          </motion.h2>
          <motion.p className="section-lead"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Book a one-on-one session, ask about mentorship, or invite me to consult for your
            institute. I usually respond within a day.
          </motion.p>
        </div>

        <motion.div
          className="contact__grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="contact__card" variants={fadeUp}>
            <div className="contact__rows">
              <a className="contact__row" href={`mailto:${EMAIL}`}>
                <div className="ic">✉</div>
                <div>
                  <div className="lb">Email</div>
                  <div className="vl">{EMAIL}</div>
                </div>
              </a>
              <a className="contact__row" href={`tel:+91${PHONE}`}>
                <div className="ic">☎</div>
                <div>
                  <div className="lb">Phone</div>
                  <div className="vl">+91 {PHONE}</div>
                </div>
              </a>
              <div className="contact__row">
                <div className="ic">⌖</div>
                <div>
                  <div className="lb">Location</div>
                  <div className="vl">New Delhi, India</div>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <a href={`https://wa.me/91${PHONE}`} target="_blank" rel="noreferrer" title="WhatsApp">WA</a>
              <a href={`mailto:${EMAIL}`} title="Email">@</a>
              <a href="#" title="LinkedIn">in</a>
              <a href="/Vishwas-Sharma-CV.pdf" download title="Resume">CV</a>
            </div>
          </motion.div>

          <motion.form className="contact__card" variants={fadeUp} onSubmit={onSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Your Name</label>
                <input name="name" placeholder="Full name" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input name="email" type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="field">
              <label>Phone</label>
              <input name="phone" placeholder="Mobile number" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" placeholder="Tell me about the student, goals, and what you need…" required />
            </div>
            <button className="btn btn--gold" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
              {sent ? 'Opening your mail app…' : 'Send Message →'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
