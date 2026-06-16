import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

// Scroll-triggered count-up. Animates from 0 → value once when it enters view.
export default function Counter({ value, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const motionVal = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value, duration, motionVal])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
