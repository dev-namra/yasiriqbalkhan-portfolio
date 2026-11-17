const Star = ({ s, className }) => (
  <svg viewBox="0 0 24 24" style={{ width: s, height: s }}
    className={`absolute scale-50 fill-blue opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 ${className}`}>
    <path d="M12.9 3.6 12 1.2l-.9 2.4C9.7 7.4 7.4 9.7 3.6 11.1L1.2 12l2.4.9c3.8 1.4 6.1 3.7 7.5 7.5l.9 2.4.9-2.4c1.4-3.8 3.7-6.1 7.5-7.5l2.4-.9-2.4-.9c-3.8-1.4-6.1-3.7-7.5-7.5Z" />
  </svg>
)

// Pill button: on hover it tilts, shows a second layer behind it and blue sparkles.
export default function GetInTouch() {
  return (
    <a data-reveal="450" href="mailto:ux.yasir@gmail.com" className="group relative inline-block">
      <span className="absolute inset-0 rounded-full bg-[#1a1a1a] ring-1 ring-white/60 transition duration-300 group-hover:translate-y-1.5 group-hover:-rotate-[7deg]" />
      <span className="relative block rounded-full bg-ink px-7 py-4 text-sm font-medium text-white shadow-[0_6px_14px_rgba(0,0,0,.25)] transition duration-300 group-hover:-rotate-[7deg] group-hover:scale-105">Get in Touch</span>
      <Star s={24} className="-bottom-1 -right-3" />
      <Star s={16} className="-top-4 right-8" />
      <Star s={10} className="bottom-1 -left-4" />
      <Star s={6} className="-left-6 top-1" />
      <Star s={8} className="-bottom-5 left-1/2" />
    </a>
  )
}
