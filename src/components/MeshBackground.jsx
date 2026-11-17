import { useEffect, useRef } from 'react'

const GAP = 76, R = 190

// Dot grid whose lines appear and bend toward the cursor, with a blue cursor dot.
export default function MeshBackground() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d'), host = c.parentElement
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const m = { x: -999, y: -999, sx: -999, sy: -999, on: false }
    const dpr = window.devicePixelRatio || 1
    let w, h, raf
    const size = () => { w = host.clientWidth; h = host.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0) }
    const move = (e) => {
      const r = host.getBoundingClientRect()
      m.x = e.clientX - r.left; m.y = e.clientY - r.top
      m.on = m.x >= 0 && m.y >= 0 && m.x <= w && m.y <= h
      if (m.sx < -900) { m.sx = m.x; m.sy = m.y }
    }
    const pt = (i, j) => {
      const x = i * GAP, y = j * GAP, dx = m.sx - x, dy = m.sy - y, d = Math.hypot(dx, dy)
      const f = m.on && d < R ? (1 - d / R) ** 2 : 0
      return [x + dx * f * 0.3, y + dy * f * 0.3, f]
    }
    const draw = () => {
      m.sx += (m.x - m.sx) * 0.15; m.sy += (m.y - m.sy) * 0.15
      ctx.clearRect(0, 0, w, h)
      const cols = Math.ceil(w / GAP) + 1, rows = Math.ceil(h / GAP) + 1, P = []
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) P.push(pt(i, j))
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const a = P[j * cols + i]
        for (const [ni, nj] of [[i + 1, j], [i, j + 1]]) {
          if (ni >= cols || nj >= rows) continue
          const b = P[nj * cols + ni], f = Math.max(a[2], b[2])
          if (f < 0.02) continue
          ctx.strokeStyle = `rgba(0,0,0,${f * 0.22})`
          ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke()
        }
        ctx.fillStyle = `rgba(0,0,0,${0.08 + a[2] * 0.3})`
        ctx.beginPath(); ctx.arc(a[0], a[1], 1.6, 0, 7); ctx.fill()
      }
      if (m.on) { ctx.fillStyle = '#336bcc'; ctx.beginPath(); ctx.arc(m.sx, m.sy, 9, 0, 7); ctx.fill() }
      if (!still) raf = requestAnimationFrame(draw)
    }
    size(); draw()
    window.addEventListener('resize', size)
    if (!still) window.addEventListener('mousemove', move)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); window.removeEventListener('mousemove', move) }
  }, [])
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 size-full" />
}
