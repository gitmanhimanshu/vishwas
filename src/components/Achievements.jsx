import { motion } from 'framer-motion'
import { fadeUp, flip3d, stagger, inView } from './motion'
import Counter from './Counter'
import Tilt from './Tilt'

const STATS = [
  { value: 8, suffix: '+', label: 'Years of Teaching Experience' },
  { value: 5, suffix: '', label: 'Premier Institutes Served' },
  { value: 500, suffix: '+', label: 'Online Lessons Recorded' },
  { value: 10000, suffix: '+', label: 'Students Mentored' },
]

export default function Achievements() {
  return (
    <section className="section section--dark" id="impact">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <motion.span className="eyebrow" style={{ justifyContent: 'center' }}
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Achievements &amp; Impact
          </motion.span>
          <motion.h2 className="section-title"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Numbers that reflect a lasting impact
          </motion.h2>
        </div>

        <motion.div
          className="ach-grid"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((s) => (
            <Tilt className="ach-card" key={s.label} variants={flip3d} max={12} scale={1.05} glare={false}>
              <div className="ach-num tilt-pop">
                <Counter value={s.value} />
                <span className="suffix">{s.suffix}</span>
              </div>
              <div className="ach-label tilt-pop-sm">{s.label}</div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
