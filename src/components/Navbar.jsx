import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['Home', '#home'], ['Our sweets', '#sweets'], ['Our story', '#story']]
  return (
    <header className="sticky top-0 z-40 border-b border-wine-900/10 bg-cream-50/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Anand Sweets home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-wine-900 text-saffron-300 shadow-md"><Sparkles size={21}/></span>
          <span><span className="block font-display text-xl font-bold leading-tight text-wine-900">Anand Sweets</span><span className="text-[9px] font-bold uppercase tracking-[.25em] text-saffron-500">A taste of tradition</span></span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-stone-600 transition hover:text-wine-800">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onCartClick} className="relative flex items-center gap-2 rounded-full bg-wine-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-wine-800" aria-label={`Open cart, ${cartCount} items`}>
            <ShoppingBag size={17}/><span className="hidden sm:inline">My cart</span><span className="grid h-5 min-w-5 place-items-center rounded-full bg-saffron-400 px-1 text-[11px] font-extrabold text-wine-950">{cartCount}</span>
          </button>
          <button className="rounded-lg p-2 text-wine-900 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {menuOpen && <nav className="grid gap-1 border-t border-wine-900/10 bg-cream-50 px-5 py-3 md:hidden">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-wine-900 hover:bg-cream-200">{label}</a>)}</nav>}
    </header>
  )
}