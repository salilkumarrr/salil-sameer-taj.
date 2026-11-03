import { CheckCircle2, PackageCheck, ArrowRight } from 'lucide-react'
import { formatPrice } from '../data/products'

export default function OrderSummary({ order, onContinue }) {
  if (!order) return null
  return <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
      <div className="bg-wine-900 px-6 py-10 text-center text-white sm:px-10"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-saffron-400 text-wine-950"><CheckCircle2 size={34}/></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.22em] text-saffron-300">Order confirmed</p><h2 className="mt-2 font-display text-4xl font-bold">Your sweets are on the way!</h2><p className="mt-3 text-sm text-white/70">Your demo order has been placed successfully.</p><div className="mt-6 inline-block rounded-full border border-white/20 px-4 py-2 text-xs font-bold tracking-wider">ORDER ID · {order.id}</div></div>
      <div className="p-6 sm:p-10"><div className="flex items-center gap-3 border-b border-stone-100 pb-5"><PackageCheck className="text-saffron-500"/><div><h3 className="font-display text-xl font-bold text-wine-900">Order summary</h3><p className="text-xs text-stone-500">A little happiness, packed for you</p></div></div>
        <div className="my-6 space-y-4">{order.items.map(item => <div key={item.key} className="flex items-center justify-between gap-4"><div><p className="font-bold text-wine-900">{item.name}</p><p className="mt-1 text-xs text-stone-500">{item.size} · Qty {item.quantity} · {formatPrice(item.price)} each</p></div><p className="shrink-0 font-bold text-wine-900">{formatPrice(item.price * item.quantity)}</p></div>)}</div>
        <div className="flex justify-between border-t border-stone-200 pt-5 font-display text-xl font-bold text-wine-900"><span>Total amount</span><span>{formatPrice(order.total)}</span></div>
        <div className="mt-8 rounded-2xl bg-cream-100 p-5"><h4 className="font-display text-lg font-bold text-wine-900">Delivery details</h4><div className="mt-3 grid gap-3 text-sm sm:grid-cols-2"><div><p className="text-xs text-stone-400">Customer</p><p className="mt-1 font-semibold text-stone-700">{order.customer.name}</p></div><div><p className="text-xs text-stone-400">Mobile</p><p className="mt-1 font-semibold text-stone-700">{order.customer.mobile}</p></div><div className="sm:col-span-2"><p className="text-xs text-stone-400">Address</p><p className="mt-1 font-semibold leading-6 text-stone-700">{order.customer.address}, {order.customer.city} – {order.customer.pincode}</p></div></div></div>
        <p className="mt-5 text-center text-xs leading-5 text-stone-400">Educational demo only. No actual purchase, payment or delivery will take place.</p><button onClick={onContinue} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-wine-900 py-4 text-sm font-extrabold text-white hover:bg-wine-800">Continue exploring <ArrowRight size={17}/></button>
      </div>
    </div>
  </section>
}