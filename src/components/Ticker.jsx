import { img } from '../lib/img'
const ticker = ['wfUjkGRNDP1uTRm09AaiV5g5h4.png', 'JyRhtlKtTBSOuzK27fGjDZ8QVAw.png', 'AcPWk0z9ZJxN7rFWF3V68OTHk4.png',
  'EfpAxqZ67CaXLDtRood387eP1L0.png', 'NW9pRTQlCyJ8oADoc9kGjRQ.png', 'u1wKVb0Vn5fHQ7rbkIcu1ixMI.jpg', 'YvsCgs7NQX5SU4OONTNzGBLQ.png',
  'CNRKHbgnkFmqrabWeWpZA8yE.png', 'hZmxgQiG6zPLKQxhhni62YZjVA.png', 'T8SLUeAxuw6S24GdNXhr8t2Go60.png', 'B5lJU7k7dsKr8oa45uGweSErKg.png',
  'XlrKxmhqlHvARObQ8ItlAgETCQI.png', 'd6PBLmQvkSHM6dqUbDANlFejiOI.png', 'NdcpblxxdI3JELb2CMndljIiUb4.png', '4vRsiu269gPdggeP0caymLfI.png']

export default function Ticker() {
  return (
<div className="flex h-[220px] items-center overflow-hidden bg-white">
        <div className="flex w-max animate-marquee items-center gap-4 pr-4 hover:[animation-play-state:paused]">
          {[...ticker, ...ticker].map((id, i) => <img key={i} src={img(id, 700)} alt="" loading="lazy" className="h-[200px] w-auto" />)}
        </div>
      </div>
  )
}
