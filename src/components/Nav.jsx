import { useEffect, useState } from 'react'
import { img } from '../lib/img'

// One centered container that shrinks from full width to a pill, so both sides
// move toward the middle together instead of jumping between layouts.
export default function Nav() {
  const [pill, setPill] = useState(false)
  useEffect(() => {
    const on = () => setPill(window.scrollY > 80)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const a = 'relative px-4 py-2 text-sm font-medium'
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center">
      <nav style={{ maxWidth: pill ? 320 : 1200 }}
        className={`pointer-events-auto flex w-full items-center justify-between transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${pill
          ? 'mt-3 rounded-2xl bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur-md'
          : 'mt-0 rounded-none bg-white/0 px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0)] backdrop-blur-0'}`}>
        <img src={img('Snhsg7tBFy13JhZhSHsqeCm0Q48.png', 200)} alt="" className={`transition-all duration-500 ${pill ? 'size-10' : 'size-12'}`} />
        <div className={`flex items-center transition-all duration-500 ${pill ? 'gap-1' : 'gap-8'}`}>
          <div className={`flex rounded-xl p-0.5 transition-colors duration-500 ${pill ? 'bg-[#1a1a1a] text-white' : 'bg-transparent text-[#1a1a1a]'}`}>
            <a href="#top" className={a}>Home<i className="absolute bottom-0.5 left-1/2 size-[3px] -translate-x-1/2 rounded-full bg-current" /></a>
            <a href="#about" className={a}>About</a>
          </div>
          <a href="https://www.linkedin.com/in/yasiriqbalk/" target="_blank" rel="noreferrer"
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-500 ${pill ? 'bg-white text-[#1a1a1a]' : 'bg-[#1a1a1a] text-white'}`}>Linked In</a>
        </div>
      </nav>
    </div>
  )
}
