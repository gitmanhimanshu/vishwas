// Shared Framer Motion variants for consistent, premium reveals.

export const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = (gap = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// 3D flip-up reveal — cards rotate forward out of the page as they enter view.
// Parent container needs CSS perspective for the depth to read.
export const flip3d = {
  hidden: { opacity: 0, rotateX: 24, y: 46 },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

// Shared viewport config so reveals trigger once, slightly before fully in view.
export const inView = { once: true, amount: 0.25 }
