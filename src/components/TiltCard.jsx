import { useRef } from 'react'
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion'

// Cartão com inclinação 3D que segue o ponteiro e brilho que acompanha
// o toque. Volta suavemente ao repouso quando o ponteiro sai.
export default function TiltCard({ children, className, ...props }) {
  const ref = useRef(null)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 })

  const onPointerMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 9)
    rotateX.set((0.5 - py) * 7)
    ref.current.style.setProperty('--px', `${px * 100}%`)
    ref.current.style.setProperty('--py', `${py * 100}%`)
  }

  const onPointerLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <Motion.a
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="card-sheen" aria-hidden="true" />
      {children}
    </Motion.a>
  )
}
