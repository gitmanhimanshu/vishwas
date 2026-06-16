import { motion } from 'framer-motion'
import { fadeUp, scaleIn, stagger, inView } from './motion'
import Tilt from './Tilt'

const PILLS = [
  'In-Depth Subject Knowledge',
  'Problem Solving',
  'Study Plan Design',
  'Team Leadership',
  'Assessment & Feedback',
  'Innovative Teaching',
]

export default function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container about__grid">
        <motion.div
          className="about__visual scene"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <Tilt className="about__img" max={10} scale={1.02}>
            <img src="/vishwas.png" alt="Vishwas Sharma" />
          </Tilt>
          <div className="about__exp">
            <div className="big">8+</div>
            <div className="small">Years of<br />Excellence</div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.span className="eyebrow" variants={fadeUp}>About Me</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            A Mathematics educator devoted to clarity, confidence &amp; results.
          </motion.h2>

          <motion.p className="about__lead" variants={fadeUp}>
            "I believe every student can excel at Mathematics when concepts are taught with
            clarity, patience, and genuine care."
          </motion.p>

          <motion.div className="about__body" variants={fadeUp}>
            <p>
              I am <strong>Vishwas Sharma</strong>, an experienced Mathematics faculty with
              over eight years of teaching across India's leading coaching institutions. I bring
              a deep understanding of mathematical concepts together with a real passion for
              helping students unlock their potential.
            </p>
            <p>
              My career reflects a strong work ethic, dedication, and a commitment to fostering
              productive learning environments. I specialise in classroom management,
              comprehensive study-plan design, and crafting mock tests that sharpen student
              performance — currently serving as <strong>Academic Head of the Rohini Centre</strong>
              {' '}and Senior Faculty for JEE, CBSE &amp; NDA Mathematics.
            </p>
          </motion.div>

          <motion.div className="about__pills" variants={fadeUp}>
            {PILLS.map((p) => (
              <span className="pill" key={p}>{p}</span>
            ))}
          </motion.div>

          <motion.div className="about__sign" variants={fadeUp}>
            <div>
              <div className="name">Vishwas Sharma</div>
              <div className="role">M.Sc Mathematics · B.Ed · New Delhi</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
