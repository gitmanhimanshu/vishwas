import { motion } from 'framer-motion'
import { fadeUp, flip3d, stagger, inView } from './motion'
import Tilt from './Tilt'

const AREAS = [
  { ic: '∫', title: 'IIT-JEE Mathematics', desc: 'Advanced calculus, algebra & coordinate geometry tuned for JEE Main & Advanced.' },
  { ic: 'π', title: 'CBSE Mathematics', desc: 'Board-aligned teaching that builds rock-solid fundamentals and exam scores.' },
  { ic: '√', title: 'NDA Mathematics', desc: 'Focused preparation for defence-aspirant mathematics with speed strategies.' },
  { ic: '◎', title: 'Classroom Management', desc: 'Engaged, disciplined and inclusive classrooms where every student participates.' },
  { ic: '◷', title: 'Study Planning', desc: 'Comprehensive, time-bound study plans mapped to syllabus and student pace.' },
  { ic: '✎', title: 'Assessment Design', desc: 'Mock papers, test series & feedback loops that measure and lift performance.' },
  { ic: '⬡', title: 'Team Leadership', desc: 'Mentoring faculty and coordinating teams for consistent academic delivery.' },
  { ic: '⚙', title: 'Academic Operations', desc: 'Heading centre operations, scheduling and curriculum execution end-to-end.' },
]

export default function Expertise() {
  return (
    <section className="section section--soft" id="expertise">
      <div className="container">
        <div style={{ maxWidth: 620 }}>
          <motion.span className="eyebrow"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Areas of Expertise
          </motion.span>
          <motion.h2 className="section-title"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            Specialised skills built over eight years
          </motion.h2>
          <motion.p className="section-lead"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            From advanced problem-solving to academic leadership — a complete toolkit for
            student success.
          </motion.p>
        </div>

        <motion.div
          className="exp-grid"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {AREAS.map((a) => (
            <Tilt className="exp-card" key={a.title} variants={flip3d} max={14} scale={1.05}>
              <div className="exp-ic tilt-pop">{a.ic}</div>
              <h3 className="tilt-pop-sm">{a.title}</h3>
              <p className="tilt-pop-sm">{a.desc}</p>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
