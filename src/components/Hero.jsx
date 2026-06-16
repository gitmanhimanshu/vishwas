import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger } from './motion'

const STATS = [
  { num: '8', gold: '+', label: 'Years of Teaching Excellence' },
  { num: 'IIT', gold: '', label: 'JEE Mathematics Faculty' },
  { num: 'Head', gold: '', label: 'Academic Leadership Role' },
  { num: '500', gold: '+', label: 'Recorded Online Lessons' },
]

// Floating background math symbols with individual depths.
const SYMBOLS = [
  { ch: '∑', size: 130, top: '12%', left: '6%', dur: 9, depth: 26, gold: false },
  { ch: 'π', size: 90, top: '68%', left: '10%', dur: 11, depth: 16, gold: true },
  { ch: '∫', size: 160, top: '20%', left: '82%', dur: 12, depth: 34, gold: false },
  { ch: '√', size: 80, top: '74%', left: '74%', dur: 8, depth: 20, gold: true },
  { ch: '∞', size: 110, top: '46%', left: '46%', dur: 13, depth: 12, gold: false },
  { ch: 'θ', size: 70, top: '8%', left: '54%', dur: 10, depth: 18, gold: false },
]

// One floating symbol — owns its own parallax transforms (hooks live here,
// not inside a .map(), to respect the rules of hooks).
function HeroSymbol({ s, i, sx, sy }) {
  const x = useTransform(sx, [-0.5, 0.5], [-s.depth, s.depth])
  const y = useTransform(sy, [-0.5, 0.5], [-s.depth, s.depth])
  return (
    <motion.span
      className={`hero__symbol ${s.gold ? 'hero__symbol--gold' : ''}`}
      style={{ top: s.top, left: s.left, fontSize: s.size, x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, translateY: [0, -16, 0] }}
      transition={{
        opacity: { delay: 0.4 + i * 0.1, duration: 1 },
        scale: { delay: 0.4 + i * 0.1, duration: 1 },
        translateY: { duration: s.dur, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {s.ch}
    </motion.span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 90])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  // Mouse-tracked 3D tilt for the portrait + parallax for symbols.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spring = { stiffness: 150, damping: 20, mass: 0.5 }
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), spring)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), spring)
  const sx = useSpring(mx, spring)
  const sy = useSpring(my, spring)

  const onMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="hero" id="top" ref={ref} onMouseMove={onMouse} onMouseLeave={onLeave}>
      <div className="hero__bg-grid" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      {/* Floating 3D math symbols */}
      <div className="hero__symbols">
        {SYMBOLS.map((s, i) => (
          <HeroSymbol key={i} s={s} i={i} sx={sx} sy={sy} />
        ))}
      </div>

      <div className="container hero__inner">
        <motion.div variants={stagger(0.13)} initial="hidden" animate="show" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div className="hero__badge" variants={fadeUp}>
            <span className="dot" /> Available for Mentorship &amp; Consulting
          </motion.div>

          <motion.h1 className="hero__title" variants={fadeUp}>
            Shaping Future Engineers Through <span className="accent">Mathematics</span>
          </motion.h1>

          <motion.p className="hero__sub" variants={fadeUp}>
            <strong>IIT-JEE Mathematics Faculty</strong> · Academic Leader · 8+ Years of
            Teaching Excellence. Helping ambitious students master concepts, solve with
            confidence, and crack India's toughest examinations.
          </motion.p>

          <motion.div className="hero__cta" variants={fadeUp}>
            <motion.button
              className="btn btn--gold"
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Session →
            </motion.button>
            <motion.a
              className="btn btn--ghost"
              href="/Vishwas-Sharma-CV.pdf"
              download
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div className="hero__stats" variants={fadeUp}>
            {STATS.map((s) => (
              <motion.div className="hero__stat" key={s.label} whileHover={{ y: -5 }}>
                <div className="num">
                  {s.num}
                  <span className="gold">{s.gold}</span>
                </div>
                <div className="label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
        >
          <div className="hero__ring" />
          <motion.div className="hero__frame" style={{ y: yImg }}>
            <motion.img src="/vishwas.png" alt="Vishwas Sharma — IIT-JEE Mathematics Faculty" style={{ scale: scaleImg }} />
            <span className="hero__shine" />
          </motion.div>

          <motion.div
            className="hero__float hero__float--top"
            style={{ translateZ: 60 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.7 },
              x: { delay: 0.8, duration: 0.7 },
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div className="ic">∑</div>
            <div>
              <div className="ti">IIT-JEE</div>
              <div className="su">Mathematics Expert</div>
            </div>
          </motion.div>

          <motion.div
            className="hero__float hero__float--bottom"
            style={{ translateZ: 80 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.7 },
              x: { delay: 1, duration: 0.7 },
              y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div className="ic">★</div>
            <div>
              <div className="ti">Academic Head</div>
              <div className="su">Rohini Centre</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        <div className="mouse" />
        Scroll
      </div>
    </header>
  )
}
