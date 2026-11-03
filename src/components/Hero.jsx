import { ArrowDown, Leaf, PackageCheck, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero-pattern relative overflow-hidden bg-wine-950 text-white">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-saffron-400/20"/>
      <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-saffron-400/20"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_.95fr] md:py-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-saffron-400/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-saffron-300"><Leaf size={14}/> Crafted with love, shared with joy</div>
          <p className="mb-4 font-display text-lg italic text-saffron-300">Every celebration deserves a little sweetness.</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Tradition in<br/><span className="text-saffron-300">every bite.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/70">Discover timeless Indian mithai, thoughtfully prepared and beautifully packed for the moments that matter.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#sweets" className="inline-flex items-center gap-2 rounded-full bg-saffron-400 px-7 py-3.5 text-sm font-extrabold text-wine-950 shadow-lg transition hover:-translate-y-1 hover:bg-saffron-300">Explore our sweets <ArrowDown size={16}/></a><a href="#story" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Our story</a></div>
          <div className="mt-12 flex flex-wrap gap-7 border-t border-white/15 pt-7 text-xs text-white/65"><span className="flex items-center gap-2"><Heart size={15} className="text-saffron-300"/> Made with care</span><span className="flex items-center gap-2"><PackageCheck size={15} className="text-saffron-300"/> Packed with love</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-5 rotate-6 rounded-[2rem] border border-saffron-300/50"/>
          <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1605197583504-2f4f4e7f8b4b?auto=format&fit=crop&w=1200&q=90" alt="An assortment of traditional Indian sweets" className="h-[340px] w-full object-cover sm:h-[440px]" onError={e => { e.currentTarget.src='https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85' }}/>
            <div className="absolute inset-0 bg-gradient-to-t from-wine-950/65 via-transparent to-transparent"/>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-saffron-300">The Anand collection</p><p className="mt-1 font-display text-2xl">A box full of happiness</p></div><span className="grid h-12 w-12 place-items-center rounded-full bg-saffron-400 text-2xl text-wine-950">✦</span></div>
          </div>
          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-saffron-300/30 bg-cream-50 px-5 py-4 text-wine-900 shadow-xl"><p className="font-display text-2xl font-bold">Since day one</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-stone-500">Celebrating sweet moments</p></div>
        </div>
      </div>
    </section>
  )
}