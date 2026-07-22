import { useId } from 'react'
import { motion } from 'framer-motion'

// Desenha um objeto como pilha de camadas horizontais, evocando as
// camadas de uma impressão 3D. `layers` é a largura relativa (0–1) de
// cada fatia, da base ao topo. Com `printing`, as camadas surgem de
// baixo para cima, como se a peça estivesse sendo impressa.
export default function LayerArt({
  layers,
  color = '#D89A5B',
  width = 230,
  height = 250,
  printing = false,
}) {
  const gradId = useId()
  const n = layers.length
  const gap = Math.max(2, height / (n * 9))
  const slice = (height - gap * (n - 1)) / n

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="1" x2="0.8" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {layers.map((w, i) => {
        const rectW = Math.max(w * width, slice)
        const x = (width - rectW) / 2
        const y = height - (i + 1) * slice - i * gap
        const Rect = printing ? motion.rect : 'rect'
        const extra = printing
          ? {
              initial: { opacity: 0, y: -14 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.35 + i * 0.055, duration: 0.4, ease: 'easeOut' },
            }
          : {}
        return (
          <Rect
            key={i}
            x={x}
            y={y}
            width={rectW}
            height={slice}
            rx={slice / 2}
            fill={`url(#${gradId})`}
            {...extra}
          />
        )
      })}
    </svg>
  )
}
