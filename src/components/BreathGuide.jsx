import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { X } from 'lucide-react'

// Experiência de respiração guiada: inspire (4s) · segure (2s) · solte (6s).
// O círculo cresce e diminui no ritmo, convidando a acompanhar.
const PHASES = [
  { label: 'Inspire', dur: 4, scale: 1 },
  { label: 'Segure', dur: 2, scale: 1 },
  { label: 'Solte', dur: 6, scale: 0.55 },
]

export default function BreathGuide({ onClose }) {
  const [step, setStep] = useState(0)
  const [cycles, setCycles] = useState(0)
  const phase = PHASES[step % PHASES.length]

  useEffect(() => {
    const t = setTimeout(() => {
      setStep((s) => {
        if ((s + 1) % PHASES.length === 0) setCycles((c) => c + 1)
        return s + 1
      })
    }, phase.dur * 1000)
    return () => clearTimeout(t)
  }, [step, phase.dur])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <Motion.div
      className="breath-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-label="Exercício de respiração guiada"
    >
      <button className="breath-close" aria-label="Fechar" onClick={onClose}>
        <X size={20} />
      </button>

      <div className="breath-stage" onClick={(e) => e.stopPropagation()}>
        <Motion.div
          className="breath-orb"
          initial={{ scale: 0.55 }}
          animate={{ scale: phase.scale }}
          transition={{ duration: phase.dur, ease: 'easeInOut' }}
        >
          <Motion.div className="breath-orb-core" />
        </Motion.div>

        <div className="breath-copy">
          <AnimatePresence mode="wait">
            <Motion.span
              key={phase.label + step}
              className="breath-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {phase.label}
            </Motion.span>
          </AnimatePresence>
          <span className="breath-sub">
            {cycles === 0 ? 'Acompanhe o círculo com a sua respiração' : `${cycles} ${cycles === 1 ? 'ciclo completo' : 'ciclos completos'}`}
          </span>
        </div>
      </div>
    </Motion.div>
  )
}
