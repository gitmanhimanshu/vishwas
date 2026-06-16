import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Reusable 3D tilt wrapper. Tracks the cursor over the element and rotates it
 * in 3D space with a springy feel. Forwards Framer Motion props (variants,
 * whileInView, etc.) so it composes with scroll-reveal animations.
 *
 * Add className "tilt-pop" to any child to make it float forward (translateZ).
 */
export default function Tilt({
  children,
  className = '',
  max = 11,
  scale = 1.03,
  glare = true,
  ...motionProps
}) {
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const spring = { stiffness: 220, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring)

  // Position of the glare highlight follows the cursor.
  const glareX = useTransform(px, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(py, [-0.5, 0.5], ['0%', '100%'])
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
    glareOpacity.set(0.18)
  }

  const handleLeave = () => {
    px.set(0)
    py.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      className={`tilt ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      {...motionProps}
    >
      {children}
      {glare && (
        <motion.span
          className="tilt__glare"
          style={{
            opacity: glareOpacity,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.9), transparent 55%)`
            ),
          }}
        />
      )}
    </motion.div>
  )
}
