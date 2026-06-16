import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from './motion'

const ROLES = [
  {
    date: 'Feb 2025 — Present',
    org: 'Equal Sign Institute',
    role: 'IIT-JEE Mathematics Faculty · Academic Head',
    place: 'New Delhi',
    points: [
      'Academic Head of the Rohini Centre, leading mathematics operations.',
      'Senior Mathematics Faculty for JEE, CBSE & NDA programmes.',
      'Teaching IIT-JEE batches across multiple branches with subject mastery.',
    ],
  },
  {
    date: 'Feb 2020 — 2025',
    org: 'Takshila Institute',
    role: 'IIT-JEE Mathematics Faculty',
    place: 'Janakpuri & Rohini, New Delhi',
    points: [
      'Taught IIT-JEE classes across two Delhi centres.',
      'Built comprehensive study plans and practice question sets.',
      'Conducted regular assessments and doubt-clearing sessions.',
    ],
  },
  {
    date: 'Apr 2021 — 2025',
    org: 'Takshila Institute',
    role: 'Project Head — School Integrated Program (SIP)',
    place: 'New Delhi',
    points: [
      'Created and scheduled classes for effective content delivery.',
      'Led and mentored a team of teachers in a collaborative environment.',
      'Recorded 500+ online lessons and coordinated full test series.',
    ],
  },
  {
    date: 'Apr 2019 — Jan 2020',
    org: 'V5 Institute',
    role: 'Senior Mathematics Faculty',
    place: 'Meerut, Uttar Pradesh',
    points: [
      'Delivered senior-level mathematics instruction for competitive aspirants.',
    ],
  },
  {
    date: 'Apr 2018 — Mar 2019',
    org: 'Sarthak Institute',
    role: 'Faculty of Mathematics',
    place: 'Meerut, Uttar Pradesh',
    points: [
      'Began teaching career, building strong conceptual foundations for students.',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="section" id="journey">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.span className="eyebrow" style={{ justifyContent: 'center' }}
          variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
          Career Journey
        </motion.span>
        <motion.h2 className="section-title"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
          A decade of teaching, mentoring &amp; leading
        </motion.h2>
      </div>

      <motion.div
        className="timeline"
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {ROLES.map((r) => (
          <motion.div className="tl-item" key={r.date} variants={fadeUp}>
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-date">{r.date}</span>
              <h3>{r.org}</h3>
              <div className="tl-role">{r.role}</div>
              <div className="tl-place">{r.place}</div>
              <ul>
                {r.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
