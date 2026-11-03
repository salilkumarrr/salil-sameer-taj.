import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, onAdd, search, setSearch, category, setCategory }) {
  const categories = ['All', 'Classic', 'Traditional', 'Signature', 'Milk sweets']
  return (
    <section id="sweets" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center"><p className="text-xs font-extrabold uppercase tracking-[.25em] text-saffron-500">A little something for everyone</p><h2 className="mt-3 font-display text-4xl font-bold text-wine-900 sm:text-5xl">Our signature sweets</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-500">From much-loved classics to special occasion favourites, find your reason to celebrate.</p><div className="mx-auto mt-5 h-px w-20 bg-saffron-400"/></div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${category === c ? 'bg-wine-900 text-white shadow-md' : 'border border-stone-200 bg-white text-stone-600 hover:border-wine-900 hover:text-wine-900'}`}>{c}</button>)}</div>
        <label className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-3 text-stone-400 focus-within:border-saffron-500"><Search size={16}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Find your favourite..." className="w-full bg-transparent text-sm text-stone-700 outline-none placeholder:text-stone-400 sm:w-52"/><SlidersHorizontal size={15}/></label>
      </div>
      {products.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((p, i) => <ProductCard key={p.id} product={p} index={i} onAdd={onAdd}/>)}</div> : <div className="rounded-2xl border border-dashed border-stone-300 bg-white py-16 text-center"><p className="font-display text-2xl text-wine-900">No sweets found</p><p className="mt-2 text-sm text-stone-500">Try another search or category.</p></div>}
    </section>
  )
}