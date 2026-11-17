const Chip = ({ children, className = '' }) => (
  <span data-reveal style={{ animationDelay: `${(String(children).length % 5) * -0.9}s` }} className={`animate-[bob_5s_ease-in-out_infinite] absolute max-md:static whitespace-nowrap rounded-lg bg-white px-3.5 py-1.5 font-mono text-sm font-medium tracking-tight text-black/60 shadow-[0_0_0_1px_rgba(0,0,0,.01),0_2px_4px_rgba(0,0,0,.08),0_10px_20px_rgba(0,0,0,.04)] ${className}`}>{children}</span>
)

export default Chip
