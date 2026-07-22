import { motion as Motion } from 'framer-motion'

// Anima o conteúdo suavemente quando ele entra na tela.
export default function Reveal({ children, delay = 0, className }) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </Motion.div>
  )
}
