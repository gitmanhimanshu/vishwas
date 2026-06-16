import { motion } from 'framer-motion'
import { fadeUp, flip3d, stagger, inView } from './motion'
import Tilt from './Tilt'

// Elegant placeholders — ready to be replaced with real student reviews.
const REVIEWS = [
  {
    text: 'Sir explains every concept from the root. Mathematics finally started making sense to me, and my JEE scores improved dramatically.',
    name: 'Student Review',
    meta: 'IIT-JEE Aspirant',
    av: 'A',
  },
  {
    text: 'The study plans and regular mock tests kept me on track. His doubt-clearing sessions are the reason I stayed confident through preparation.',
    name: 'Student Review',
    meta: 'CBSE Class XII',
    av: 'R',
  },
  {
    text: 'A teacher who genuinely cares. Vishwas Sir blends discipline with patience and makes even the hardest topics approachable.',
    name: 'Parent Review',
    meta: 'Guardian',
    av: 'P',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--soft" id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
          <motion.span className="eyebrow" style={{ justifyContent: 'center' }}
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Testimonials
          </motion.span>
          <motion.h2 className="section-title"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Trusted by students &amp; families
          </motion.h2>
        </div>

        <motion.div
          className="test-grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {REVIEWS.map((r, i) => (
            <Tilt className="test-card" key={i} variants={flip3d} max={9} scale={1.035}>
              <div className="test-stars tilt-pop-sm">★★★★★</div>
              <p className="tilt-pop-sm">{r.text}</p>
              <div className="test-who tilt-pop-sm">
                <div className="test-av">{r.av}</div>
                <div>
                  <div className="nm">{r.name}</div>
                  <div className="mt">{r.meta}</div>
                </div>
              </div>
            </Tilt>
          ))}
        </motion.div>

        <motion.p className="test-note"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
          ✦ Are you a former student? Share your experience — your review will appear here.
        </motion.p>
      </div>
    </section>
  )
}
