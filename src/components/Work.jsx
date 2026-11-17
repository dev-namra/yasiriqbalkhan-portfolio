import { img } from '../lib/img'
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

export default function Work() {
  return (
<section id="work" className="flex flex-col items-center gap-[60px] px-5 pt-40 pb-[120px] max-md:pt-[120px]">
        <h2 data-reveal className="font-xt text-5xl leading-[44px] text-ink">Selected Work</h2>
        {work.map((c) => {
          const Tag = c.href ? 'a' : 'div'
          return (
            <Tag key={c.title} href={c.href} style={{ background: c.bg, top: c.top }}
              className="sticky flex w-full max-w-[690px] items-center gap-5 overflow-hidden rounded-[14px] p-10 transition-transform duration-300 hover:-translate-y-1 text-white max-md:flex-col md:h-[400px]">
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
  )
}
