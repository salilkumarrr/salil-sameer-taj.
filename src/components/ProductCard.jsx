import { useState } from 'react'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '../data/products'

export default function ProductCard({ product, onAdd, index }) {
  const [size, setSize] = useState(product.sizes[1])
  const price = Math.round(product.price * size.multiplier)
  return (
    <article className="product-card group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative overflow-hidden bg-cream-200">
        <img src={product.image} alt={product.name} loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" onError={e => { e.currentTarget.src='https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80' }}/>
        {product.tag && <span className="absolute left-4 top-4 rounded-full bg-wine-900 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-saffron-300">{product.tag}</span>}
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-stone-700 shadow"><Star size={12} className="fill-saffron-400 text-saffron-500"/>{product.rating}</span>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-2"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-saffron-500">{product.category}</span><span className="text-xs text-stone-400">#{String(index + 1).padStart(2, '0')}</span></div>
        <h3 className="font-display text-xl font-bold text-wine-900">{product.name}</h3>
        <p className="mt-2 min-h-[42px] text-sm leading-6 text-stone-500">{product.description}</p>
        <div className="mt-5 flex items-center justify-between"><label htmlFor={`size-${product.id}`} className="text-xs font-bold text-stone-600">Choose size</label><select id={`size-${product.id}`} value={size.label} onChange={e => setSize(product.sizes.find(s => s.label === e.target.value))} className="rounded-lg border border-stone-200 bg-cream-50 px-3 py-2 text-xs font-bold text-wine-900 outline-none focus:border-saffron-500">{product.sizes.map(s => <option key={s.label} value={s.label}>{s.label}</option>)}</select></div>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4"><div><p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">Price</p><p className="font-display text-2xl font-bold text-wine-900">{formatPrice(price)}</p></div><button onClick={() => onAdd(product, size, price)} className="inline-flex items-center gap-2 rounded-full bg-wine-900 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-wine-800 active:scale-95"><ShoppingBag size={15}/> Add</button></div>
      </div>
    </article>
  )
}