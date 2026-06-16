import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from './motion'

const PILLARS = [
  { n: '01', title: 'Conceptual Clarity', desc: 'Build understanding from first principles before formulas — depth over rote learning.' },
  { n: '02', title: 'Problem Solving', desc: 'Train students to think, not just memorise, through layered practice and reasoning.' },
  { n: '03', title: 'Student-First', desc: 'Adapt pace and approach to each learner — no student is left behind.' },
  { n: '04', title: 'Exam Strategy', desc: 'Pair concepts with timing, accuracy and test temperament for real results.' },
]

export default function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="container">
        <motion.div
          className="philo"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.div className="philo__mark" variants={fadeUp}>&ldquo;</motion.div>
          <motion.span className="eyebrow" style={{ justifyContent: 'center' }} variants={fadeUp}>
            Teaching Philosophy
          </motion.span>
          <motion.p className="philo__quote" variants={fadeUp}>
            Mathematics is not about memorising formulas — it is about
            {' '}<em>thinking clearly</em>, reasoning with confidence, and discovering the
            {' '}<em>joy of solving</em>.
          </motion.p>
          <motion.div className="philo__author" variants={fadeUp}>
            <strong>Vishwas Sharma</strong> · IIT-JEE Mathematics Faculty
          </motion.div>
        </motion.div>

        <motion.div
          className="philo__pillars"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PILLARS.map((p) => (
            <motion.div className="philo__pillar" key={p.n} variants={fadeUp}>
              <div className="n">{p.n}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
