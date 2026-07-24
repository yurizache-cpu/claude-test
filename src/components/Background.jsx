import { useEffect, useRef } from 'react'

// Fundo ambiente: esferas de luz suaves que derivam lentamente, como uma
// respiração — com paralaxe leve conforme o mouse. Respeita reduced-motion.
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, raf
    const mouse = { x: 0.5, y: 0.5 }
    const target = { x: 0.5, y: 0.5 }
    const ripples = []

    const COLORS = ['107, 155, 134', '196, 117, 91', '212, 202, 187']
    const orbs = Array.from({ length: 7 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 120 + Math.random() * 200,
      depth: 0.25 + Math.random() * 0.75,
      phase: Math.random() * Math.PI * 2,
      driftX: 0.00006 + Math.random() * 0.0001,
      driftY: 0.00004 + Math.random() * 0.00008,
      color: COLORS[i % COLORS.length],
      alpha: 0.05 + Math.random() * 0.06,
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

    // Tocar na página cria círculos que se expandem devagar, como uma
    // pedra caindo num lago parado.
    const onTap = (e) => {
      if (reduced) return
      if (e.target.closest?.('a, button, [role="dialog"]')) return
      ripples.push({ x: e.clientX, y: e.clientY, r: 6, alpha: 0.5 })
      if (ripples.length > 12) ripples.shift()
    }

    let t = 0
    const draw = () => {
      t += 1
      mouse.x += (target.x - mouse.x) * 0.035
      mouse.y += (target.y - mouse.y) * 0.035
      ctx.clearRect(0, 0, width, height)

      for (const o of orbs) {
        if (!reduced) {
          o.x = (o.x + o.driftX + 1) % 1
          o.y = (o.y + o.driftY + 1) % 1
        }
        // "Respiração": o raio cresce e diminui num ciclo lento (~7s)
        const breath = reduced ? 1 : 1 + Math.sin(t * 0.015 + o.phase) * 0.12
        const parX = (mouse.x - 0.5) * -60 * o.depth
        const parY = (mouse.y - 0.5) * -40 * o.depth
        const x = o.x * width + parX
        const y = o.y * height + parY
        const r = o.r * o.depth * breath

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
        grad.addColorStop(0, `rgba(${o.color}, ${o.alpha})`)
        grad.addColorStop(1, `rgba(${o.color}, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        rp.r += 1.6
        rp.alpha *= 0.985
        if (rp.alpha < 0.01) {
          ripples.splice(i, 1)
          continue
        }
        ctx.strokeStyle = `rgba(74, 107, 93, ${rp.alpha})`
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.stroke()
        ctx.strokeStyle = `rgba(74, 107, 93, ${rp.alpha * 0.4})`
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r * 0.62, 0, Math.PI * 2)
        ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onTap, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onTap)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
