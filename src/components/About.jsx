import Chip from './Chip'

export default function About() {
  return (
<section id="about" className="relative min-h-[900px] bg-forest bg-[repeating-linear-gradient(45deg,#ffffff12_0_1px,transparent_1px_34px),repeating-linear-gradient(-45deg,#ffffff12_0_1px,transparent_1px_34px)] max-md:flex max-md:flex-col max-md:items-center max-md:gap-6 max-md:px-6 max-md:py-16">
        <div className="relative mx-auto h-[900px] w-[1440px] max-w-full max-md:h-auto max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:gap-6">
          <h2 data-reveal className="absolute left-1/2 top-[14%] -translate-x-1/2 font-xt text-[64px] text-lemon max-md:static max-md:translate-x-0 max-md:text-5xl">Behind the pixels</h2>
          <Chip className="left-[70px] top-[139px]">Born in New Delhi, India</Chip>
          <Chip className="left-[160px] top-[196px]">Graduated as an Architect</Chip>
          <Chip className="left-[89px] top-[262px]">Cat Person</Chip>
          <Chip className="left-[968px] top-[262px]">Father to a beautiful son</Chip>
          <Chip className="left-[1067px] top-[196px]">Coffee enthusiast</Chip>
          <p data-reveal="200" className="absolute left-[78px] top-[49%] w-[379px] -translate-y-1/2 font-hand text-2xl leading-[1.3] text-[#f1dfdd] max-md:static max-md:w-auto max-md:translate-y-0">When I’m not designing, you’ll probably find me brewing coffee and experimenting with different methods, spending time with my cats, or admiring good architecture.</p>
          <p data-reveal="200" className="absolute bottom-[183px] left-[120px] w-[374px] text-right font-hand text-2xl leading-[1.3] text-[#e4e1ff] max-md:static max-md:w-auto max-md:text-left">Brewing coffee started as a hobby but somehow became a small obsession. I document some of it on Instagram <strong>@ybrews</strong>.</p>
          <video data-reveal="100" src="https://framerusercontent.com/assets/dp38NT1zYNaKxv0sGCFZ8IyhM4s.mp4" autoPlay loop muted playsInline className="absolute bottom-[74px] left-1/2 h-[604px] w-[387px] -translate-x-1/2 rounded-2xl object-cover max-md:static max-md:h-auto max-md:w-56 max-md:translate-x-0" />
          <p data-reveal="200" className="absolute bottom-[131px] left-[968px] w-[369px] font-hand text-2xl leading-[1.3] text-[#cede3f] max-md:static max-md:w-auto">The rest of my time goes to studying religion, being a present father to my son, a caring husband, and trying to be a better human.</p>
          <p data-reveal="200" className="absolute left-[83%] top-[53%] w-[379px] -translate-x-1/2 -translate-y-1/2 font-hand text-2xl leading-[1.3] text-[#e1f5fe] max-md:static max-md:w-auto max-md:translate-x-0 max-md:translate-y-0">I enjoy noticing the little details, understanding why things work, and appreciating the thought behind them. In many ways, that curiosity finds its way back into my design work, too.</p>
          <p data-reveal="200" className="absolute bottom-[25px] left-1/2 w-[270px] -translate-x-1/2 font-hand text-2xl text-[#feefdb] max-md:static max-md:translate-x-0">Find me on insta @ybrews</p>
        </div>
      </section>
  )
}
