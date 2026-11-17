import { img } from '../lib/img'
const brands = [['sHPJolA8VOjAFfueow6FAOxTQ.svg', 120], ['ywDbVoSuQ06NNJQDHVp15H09j8.jpg', 200], ['NpGZsBd8tV3VPu1z6tJ4XljEGgA.png', 140],
  ['a98MZU7VCsgw5SLgOEC9hwPXJQE.webp', 140], ['eepOQbybKD2uPEkRCOxyyCTnRzs.webp', 90], ['99UKyJjIFGFxn9lSs1bMZ5ouE.png', 120]]

export default function Brands() {
  return (
<div className="flex h-20 items-center overflow-hidden"><div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
        {[...brands, ...brands].map(([id, w], i) => <img key={i} src={img(id, 400)} alt="" style={{ width: w }} className="shrink-0" />)}</div>
      </div>
  )
}
