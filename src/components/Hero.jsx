import MeshBackground from './MeshBackground'
import GetInTouch from './GetInTouch'

export default function Hero() {
  return (
    <header className="relative flex min-h-[600px] justify-center overflow-hidden bg-[linear-gradient(#0000000a_1px,transparent_1px),linear-gradient(90deg,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] px-6 pt-[120px] pb-12 max-md:pt-28">
      <MeshBackground />
      <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-6 text-center">
        <p data-reveal="0" className="font-hand text-2xl text-ink max-md:hidden">Hi, I'm Yasir, a human designer in the age of AI,</p>
        <svg className="absolute left-[16%] top-[58px] w-14 animate-[spin_10s_linear_infinite] text-blue motion-reduce:animate-none max-md:hidden" viewBox="0 0 55 54" stroke="currentColor" strokeWidth="5" strokeLinecap="round"><path d="M27 3v48M4 14l46 26M4 40L50 14" /></svg>
        <h1 data-reveal="150" className="max-w-[900px] font-tall text-[80px] leading-[90px] text-ink max-md:text-5xl max-md:leading-[54px]">Designing experiences for complex digital ecosystems</h1>
        <span className="absolute left-0 top-[170px] -rotate-2 font-hand text-2xl leading-6 text-fire max-lg:hidden">fintech, enterprise<br />&amp; more</span>
        <span className="absolute right-0 top-[205px] rotate-[-6deg] font-hand text-2xl text-blue max-lg:hidden">&amp; brewing specialty coffee</span>
        <p data-reveal="300" className="font-hand text-2xl text-ink">Currently simplifying partner experiences at SAP via Deloitte Digital</p>
        <GetInTouch />
      </div>
    </header>
  )
}
