import { useEffect, useRef } from 'react'

// Fundo ambiente: "camadas de impressão" flutuando lentamente para cima,
// com paralaxe suave conforme o mouse se move. Respeita reduced-motion.
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, raf
    const mouse = { x: 0.5, y: 0.5 }
    const target = { x: 0.5, y: 0.5 }

    const COLORS = ['#d89a5b', '#b06a2f', '#e6dac4']
    const bars = Array.from({ length: 30 }, () => ({
      x: Math.random(),
      y: Math.random(),
      w: 44 + Math.random() * 110,
      h: 5 + Math.random() * 4,
      depth: 0.25 + Math.random() * 0.75,
      speed: 0.05 + Math.random() * 0.16,
      sway: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0.04 + Math.random() * 0.09,
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e) => {
      target.x = e.clientX / width
      target.y = e.clientY / height
    }

    let t = 0
    const draw = () => {
      t += 1
      mouse.x += (target.x - mouse.x) * 0.04
      mouse.y += (target.y - mouse.y) * 0.04
      ctx.clearRect(0, 0, width, height)

      for (const b of bars) {
        if (!reduced) {
          b.y -= (b.speed * b.depth) / height
          if (b.y < -0.06) {
            b.y = 1.06
            b.x = Math.random()
          }
        }
        const swayX = reduced ? 0 : Math.sin(t * 0.008 + b.sway) * 14 * b.depth
        const parX = (mouse.x - 0.5) * -46 * b.depth
        const parY = (mouse.y - 0.5) * -30 * b.depth
        const x = b.x * width + swayX + parX - b.w / 2
        const y = b.y * height + parY
        ctx.globalAlpha = b.alpha
        ctx.fillStyle = b.color
        ctx.beginPath()
        ctx.roundRect(x, y, b.w * b.depth, b.h * b.depth, b.h)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
