import { img } from '../lib/img'
const thumbs = ['k0izEKunIefNqgzLXnTXsFl8p90.jpg', 'C1KHsSPdNPfelnPOXjTLmHTQg.jpg', 'aJGcQztUGN1pJWfJrsqHm9BBslY.jpg', '579XFsgaffadM418cTPOLec6doo.jpg', 'MDD3rJFEZJF8dCZVszC54kGNmM.png']

export default function Testimonials() {
  return (
<section className="flex flex-col items-center gap-16 px-4 pt-20 pb-[120px] max-md:gap-12">
        <h2 data-reveal className="font-xt text-5xl leading-[44px] text-[#212121]">Testimonials</h2>
        <div data-reveal="150" className="relative w-[90%] max-w-[1080px] overflow-hidden rounded-2xl max-md:w-full">
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
  )
}
