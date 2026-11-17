

export default function Footer() {
  return (
<footer className="flex flex-col items-center gap-[120px] bg-lemon py-[120px] max-md:gap-16 max-md:py-12">
        <div className="grid w-[70%] max-w-[1200px] grid-cols-2 gap-x-6 px-6 max-md:w-full max-md:grid-cols-1 max-md:gap-5">
          <h2 data-reveal className="max-w-[720px] font-reg text-4xl leading-[44px] tracking-[0.02em] text-ink">People are the center of my design journey.</h2>
          <p data-reveal="150" className="max-w-[620px] text-base font-medium leading-[1.4] text-ink">I'm an advocate for maintaining healthy collaboration and good rapport within and between product teams. Keeping my heart open to learning from others gives my work meaning and keeps my eyes peeled for new perspectives and ideas. After all, products are designed and built with and for people.</p>
        </div>
        <div data-reveal className="flex w-[90%] max-w-[1296px] flex-col items-center gap-10 rounded-[40px] bg-[#1a1a1a] px-20 pt-16 pb-14 text-center text-white max-md:px-8">
          <h2 className="max-w-[1200px] font-xt text-[32px] leading-[48px] text-[#f5f4f6]">Happy to share a cup of coffee over a conversation. Feel free to connect!</h2>
          <p className="leading-[1.4]">Whether you're looking to collaborate, hiring, seeking advice, or simply networking, I'd be happy to get in touch!</p>
          <a href="mailto:uxyasir@gmail.com" className="font-medium underline decoration-[#51565a] underline-offset-[3px]">uxyasir@gmail.com</a>
          <a href="#top" className="text-xs font-semibold text-[#5b73eb] underline">Back to Top ↑</a>
          <p className="text-xs leading-5">Built with ❤️ and React | Portfolio 2026: Yasir Iqbal Khan</p>
        </div>
      </footer>
  )
}
