// Home page of the portfolio. Images load from the original Framer CDN;
// for a self-contained repo, download them into /public and change `img()`.
const img = (id, w = 800) => `https://framerusercontent.com/images/${id}?width=${w}`

const ticker = ['wfUjkGRNDP1uTRm09AaiV5g5h4.png', 'JyRhtlKtTBSOuzK27fGjDZ8QVAw.png', 'AcPWk0z9ZJxN7rFWF3V68OTHk4.png',
  'EfpAxqZ67CaXLDtRood387eP1L0.png', 'NW9pRTQlCyJ8oADoc9kGjRQ.png', 'u1wKVb0Vn5fHQ7rbkIcu1ixMI.jpg', 'YvsCgs7NQX5SU4OONTNzGBLQ.png',
  'CNRKHbgnkFmqrabWeWpZA8yE.png', 'hZmxgQiG6zPLKQxhhni62YZjVA.png', 'T8SLUeAxuw6S24GdNXhr8t2Go60.png', 'B5lJU7k7dsKr8oa45uGweSErKg.png',
  'XlrKxmhqlHvARObQ8ItlAgETCQI.png', 'd6PBLmQvkSHM6dqUbDANlFejiOI.png', 'NdcpblxxdI3JELb2CMndljIiUb4.png', '4vRsiu269gPdggeP0caymLfI.png']

const work = [
  { bg: '#cf3f1f', top: 80, tag: 'Enterprise SaaS', pill: 'Available on Request', pic: 'TAcPx8MrY307YMLNOpGyMAE0jg.webp',
    title: 'Improving Partner Experience in SAP for Me',
    text: 'SAP for Me is SAP’s central digital platform for customers and partners to access account information, manage products and services, track support cases, and get insights into their SAP solutions, all in one place.' },
  { bg: '#0335b1', top: 100, tag: 'Fintech', href: '#', pic: 'lcXc0qTVVjPjMQ105cfkWEemAsE.jpeg',
    title: 'Redesigning Enterprise Banking for Faster, Safer Corporate Transactions',
    text: 'Digital Transformation of a corporate banking portal to enhance the existing features & builds capability for better customer experience.' },
  { bg: '#0c4130', top: 120, tag: 'Mobile Fintech', href: '#', pic: 'F8bu22ZCZtwx1U6VxFrc8EvOqR4.jpeg',
    title: 'Simplifying Corporate Banking on Mobile',
    text: 'A mobile banking app designed to enhance the corporate banking experience, enabling businesses to access essential banking services and manage transactions on the go.' },
]

const brands = [['sHPJolA8VOjAFfueow6FAOxTQ.svg', 120], ['ywDbVoSuQ06NNJQDHVp15H09j8.jpg', 200], ['NpGZsBd8tV3VPu1z6tJ4XljEGgA.png', 140],
  ['a98MZU7VCsgw5SLgOEC9hwPXJQE.webp', 140], ['eepOQbybKD2uPEkRCOxyyCTnRzs.webp', 90], ['99UKyJjIFGFxn9lSs1bMZ5ouE.png', 120]]

const thumbs = ['k0izEKunIefNqgzLXnTXsFl8p90.jpg', 'C1KHsSPdNPfelnPOXjTLmHTQg.jpg', 'aJGcQztUGN1pJWfJrsqHm9BBslY.jpg', '579XFsgaffadM418cTPOLec6doo.jpg', 'MDD3rJFEZJF8dCZVszC54kGNmM.png']

const Chip = ({ children, className = '' }) => (
  <span className={`absolute max-md:static whitespace-nowrap rounded-lg bg-white px-3.5 py-1.5 font-mono text-sm font-medium tracking-tight text-black/60 shadow-[0_0_0_1px_rgba(0,0,0,.01),0_2px_4px_rgba(0,0,0,.08),0_10px_20px_rgba(0,0,0,.04)] ${className}`}>{children}</span>
)

export default function App() {
  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <nav id="top" className="sticky top-0 z-20 mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 py-10">
        <img src={img('Snhsg7tBFy13JhZhSHsqeCm0Q48.png', 200)} alt="" className="size-12" />
        <div className="flex items-center gap-8">
          <div className="flex rounded-xl bg-[#1a1a1a]/5 p-1 font-medium text-[#1a1a1a] backdrop-blur">
            <a href="#top" className="px-4 py-2 text-sm">Home</a>
            <a href="#about" className="px-4 py-2 text-sm">About</a>
          </div>
          <a href="https://www.linkedin.com/in/yasiriqbalk/" target="_blank" rel="noreferrer" className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white">Linked In</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative -mt-16 flex min-h-[600px] justify-center bg-[linear-gradient(#0000000a_1px,transparent_1px),linear-gradient(90deg,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] px-6 pt-[120px] pb-12 max-md:pt-28">
        <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-6 text-center">
          <p className="font-hand text-2xl text-ink max-md:hidden">Hi, I'm Yasir, a human designer in the age of AI,</p>
          <svg className="absolute left-[16%] top-[58px] w-14 text-blue max-md:hidden" viewBox="0 0 55 54" stroke="currentColor" strokeWidth="5" strokeLinecap="round"><path d="M27 3v48M4 14l46 26M4 40L50 14" /></svg>
          <h1 className="max-w-[900px] font-tall text-[80px] leading-[90px] text-ink max-md:text-5xl max-md:leading-[54px]">Designing experiences for complex digital ecosystems</h1>
          <span className="absolute left-0 top-[170px] -rotate-2 font-hand text-2xl leading-6 text-fire max-lg:hidden">fintech, enterprise<br />&amp; more</span>
          <span className="absolute right-0 top-[205px] rotate-[-6deg] font-hand text-2xl text-blue max-lg:hidden">&amp; brewing specialty coffee</span>
          <p className="font-hand text-2xl text-ink">Currently simplifying partner experiences at SAP via Deloitte Digital</p>
          <a href="mailto:ux.yasir@gmail.com" className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-[0_6px_14px_rgba(0,0,0,.25)] transition hover:-translate-y-0.5">Get in Touch</a>
        </div>
      </header>

      {/* TICKER */}
      <div className="flex h-[220px] items-center overflow-hidden bg-white">
        <div className="flex w-max animate-marquee items-center gap-4">
          {[...ticker, ...ticker].map((id, i) => <img key={i} src={img(id, 700)} alt="" loading="lazy" className="h-[200px] w-auto" />)}
        </div>
      </div>

      {/* SELECTED WORK */}
      <section id="work" className="flex flex-col items-center gap-[60px] px-5 pt-40 pb-[120px] max-md:pt-[120px]">
        <h2 className="font-xt text-5xl leading-[44px] text-ink">Selected Work</h2>
        {work.map((c) => {
          const Tag = c.href ? 'a' : 'div'
          return (
            <Tag key={c.title} href={c.href} style={{ background: c.bg, top: c.top }}
              className="sticky flex w-full max-w-[690px] items-center gap-5 overflow-hidden rounded-[14px] p-10 text-white max-md:flex-col md:h-[400px]">
              <div className="flex flex-1 flex-col items-start gap-4">
                {c.pill && <span className="rounded-2xl bg-[#ff620a] px-4 py-2 text-xs">{c.pill}</span>}
                <h3 className="font-inter text-xl font-bold">{c.title}</h3>
                <p className="font-inter text-base leading-snug">{c.text}</p>
                <span className="rounded bg-[#fafafa] px-2 py-2 text-[10px] font-medium leading-none text-[#1a1a1a]">{c.tag}</span>
              </div>
              <img src={img(c.pic, 800)} alt="" loading="lazy" className="h-full max-md:h-72 w-1/2 max-md:w-full rounded-xl object-cover" />
            </Tag>
          )
        })}
      </section>

      {/* BRANDS */}
      <div className="flex h-20 items-center justify-center gap-10 overflow-hidden max-md:justify-start">
        {brands.map(([id, w]) => <img key={id} src={img(id, 400)} alt="" style={{ width: w }} className="shrink-0" />)}
      </div>

      {/* TESTIMONIALS */}
      <section className="flex flex-col items-center gap-16 px-4 pt-20 pb-[120px] max-md:gap-12">
        <h2 className="font-xt text-5xl leading-[44px] text-[#212121]">Testimonials</h2>
        <div className="relative w-[90%] max-w-[1080px] overflow-hidden rounded-2xl max-md:w-full">
          <img src={img(thumbs[0], 1600)} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(114deg,rgba(0,0,0,.51),transparent_47%)]" />
          <div className="relative mx-auto flex max-w-[660px] flex-col gap-10 px-6 py-14 text-white max-md:max-w-none">
            <p className="text-[13px] uppercase opacity-50">SAP SE</p>
            <p className="text-[22px] font-medium leading-[1.17] tracking-[-0.03em]">Yasir is an excellent designer who understands the problem from the root and tries to solve it with keeping accessibility in mind. He is a team player and have leadership qualities he can co operate with people and get the job done well before time.</p>
            <p className="text-[15px] font-medium tracking-tight opacity-50">— Alexandru Lupa, Product Manager, SAP SE</p>
            <div className="flex gap-2.5">
              {thumbs.map((t, i) => <img key={t} src={img(t, 300)} alt="" className={`aspect-[1.49] w-[124px] rounded object-cover ${i ? 'opacity-20' : ''}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* BEHIND THE PIXELS */}
      <section id="about" className="relative min-h-[900px] bg-forest bg-[repeating-linear-gradient(45deg,#ffffff12_0_1px,transparent_1px_34px),repeating-linear-gradient(-45deg,#ffffff12_0_1px,transparent_1px_34px)] max-md:flex max-md:flex-col max-md:items-center max-md:gap-6 max-md:px-6 max-md:py-16">
        <div className="relative mx-auto h-[900px] w-[1440px] max-w-full max-md:h-auto max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:gap-6">
          <h2 className="absolute left-1/2 top-[14%] -translate-x-1/2 font-xt text-[64px] text-lemon max-md:static max-md:translate-x-0 max-md:text-5xl">Behind the pixels</h2>
          <Chip className="left-[70px] top-[139px]">Born in New Delhi, India</Chip>
          <Chip className="left-[160px] top-[196px]">Graduated as an Architect</Chip>
          <Chip className="left-[89px] top-[262px]">Cat Person</Chip>
          <Chip className="left-[968px] top-[262px]">Father to a beautiful son</Chip>
          <Chip className="left-[1067px] top-[196px]">Coffee enthusiast</Chip>
          <p className="absolute left-[78px] top-[49%] w-[379px] -translate-y-1/2 font-hand text-2xl leading-[1.3] text-[#f1dfdd] max-md:static max-md:w-auto max-md:translate-y-0">When I’m not designing, you’ll probably find me brewing coffee and experimenting with different methods, spending time with my cats, or admiring good architecture.</p>
          <p className="absolute bottom-[183px] left-[120px] w-[374px] text-right font-hand text-2xl leading-[1.3] text-[#e4e1ff] max-md:static max-md:w-auto max-md:text-left">Brewing coffee started as a hobby but somehow became a small obsession. I document some of it on Instagram <strong>@ybrews</strong>.</p>
          <video src="https://framerusercontent.com/assets/dp38NT1zYNaKxv0sGCFZ8IyhM4s.mp4" autoPlay loop muted playsInline className="absolute bottom-[74px] left-1/2 h-[604px] w-[387px] -translate-x-1/2 rounded-2xl object-cover max-md:static max-md:h-auto max-md:w-56 max-md:translate-x-0" />
          <p className="absolute bottom-[131px] left-[968px] w-[369px] font-hand text-2xl leading-[1.3] text-[#cede3f] max-md:static max-md:w-auto">The rest of my time goes to studying religion, being a present father to my son, a caring husband, and trying to be a better human.</p>
          <p className="absolute left-[83%] top-[53%] w-[379px] -translate-x-1/2 -translate-y-1/2 font-hand text-2xl leading-[1.3] text-[#e1f5fe] max-md:static max-md:w-auto max-md:translate-x-0 max-md:translate-y-0">I enjoy noticing the little details, understanding why things work, and appreciating the thought behind them. In many ways, that curiosity finds its way back into my design work, too.</p>
          <p className="absolute bottom-[25px] left-1/2 w-[270px] -translate-x-1/2 font-hand text-2xl text-[#feefdb] max-md:static max-md:translate-x-0">Find me on insta @ybrews</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center gap-[120px] bg-lemon py-[120px] max-md:gap-16 max-md:py-12">
        <div className="grid w-[70%] max-w-[1200px] grid-cols-2 gap-x-6 px-6 max-md:w-full max-md:grid-cols-1 max-md:gap-5">
          <h2 className="max-w-[720px] font-reg text-4xl leading-[44px] tracking-[0.02em] text-ink">People are the center of my design journey.</h2>
          <p className="max-w-[620px] text-base font-medium leading-[1.4] text-ink">I'm an advocate for maintaining healthy collaboration and good rapport within and between product teams. Keeping my heart open to learning from others gives my work meaning and keeps my eyes peeled for new perspectives and ideas. After all, products are designed and built with and for people.</p>
        </div>
        <div className="flex w-[90%] max-w-[1296px] flex-col items-center gap-10 rounded-[40px] bg-[#1a1a1a] px-20 pt-16 pb-14 text-center text-white max-md:px-8">
          <h2 className="max-w-[1200px] font-xt text-[32px] leading-[48px] text-[#f5f4f6]">Happy to share a cup of coffee over a conversation. Feel free to connect!</h2>
          <p className="leading-[1.4]">Whether you're looking to collaborate, hiring, seeking advice, or simply networking, I'd be happy to get in touch!</p>
          <a href="mailto:uxyasir@gmail.com" className="font-medium underline decoration-[#51565a] underline-offset-[3px]">uxyasir@gmail.com</a>
          <a href="#top" className="text-xs font-semibold text-[#5b73eb] underline">Back to Top ↑</a>
          <p className="text-xs leading-5">Built with ❤️ and React | Portfolio 2026: Yasir Iqbal Khan</p>
        </div>
      </footer>
    </div>
  )
}
