import { useState } from 'react'
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react'

const initial = { name: '', mobile: '', address: '', pincode: '', city: '' }
export default function CheckoutForm({ onBack, onSubmit }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const update = e => {
    const { name, value } = e.target
    const clean = name === 'mobile' || name === 'pincode' ? value.replace(/\D/g, '').slice(0, name === 'mobile' ? 10 : 6) : value
    setForm(prev => ({ ...prev, [name]: clean }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }
  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^\d{10}$/.test(form.mobile)) next.mobile = 'Enter a valid 10-digit mobile number.'
    if (!form.address.trim() || form.address.trim().length < 8) next.address = 'Please enter a complete delivery address.'
    if (!/^\d{6}$/.test(form.pincode)) next.pincode = 'Pincode must contain exactly 6 digits.'
    if (!form.city.trim()) next.city = 'Please enter your city.'
    setErrors(next)
    return Object.keys(next).length === 0
  }
  const submit = e => { e.preventDefault(); if (validate()) onSubmit(form) }
  const fields = [
    { name: 'name', label: 'Full name', placeholder: 'Enter your full name', type: 'text', wide: true },
    { name: 'mobile', label: 'Mobile number', placeholder: '10-digit mobile number', type: 'tel' },
    { name: 'city', label: 'City', placeholder: 'Your city', type: 'text' },
    { name: 'address', label: 'Delivery address', placeholder: 'House no., street, area, landmark', type: 'textarea', wide: true },
    { name: 'pincode', label: 'Pincode', placeholder: '6-digit pincode', type: 'text' }
  ]
  return <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
    <button onClick={onBack} className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-wine-800 hover:text-saffron-500"><ArrowLeft size={16}/> Back to shopping</button>
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft sm:p-10">
      <div className="mb-8"><p className="text-xs font-extrabold uppercase tracking-[.22em] text-saffron-500">Almost there</p><h2 className="mt-2 font-display text-4xl font-bold text-wine-900">Delivery details</h2><p className="mt-2 text-sm text-stone-500">Where should we send your box of happiness?</p></div>
      <form onSubmit={submit} noValidate><div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">{fields.map(field => <div key={field.name} className={field.wide ? 'sm:col-span-2' : ''}><label htmlFor={field.name} className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-stone-600">{field.label}<span className="text-red-500"> *</span></label>{field.type === 'textarea' ? <textarea id={field.name} name={field.name} rows="3" value={form[field.name]} onChange={update} placeholder={field.placeholder} className={`w-full resize-y rounded-xl border bg-cream-50 px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-400/20 ${errors[field.name] ? 'border-red-400' : 'border-stone-200'}`}/> : <input id={field.name} name={field.name} type={field.type} inputMode={field.name === 'mobile' || field.name === 'pincode' ? 'numeric' : undefined} value={form[field.name]} onChange={update} placeholder={field.placeholder} className={`w-full rounded-xl border bg-cream-50 px-4 py-3.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-400/20 ${errors[field.name] ? 'border-red-400' : 'border-stone-200'}`}/>}{errors[field.name] && <p className="mt-1.5 text-xs font-medium text-red-600">{errors[field.name]}</p>}</div>)}</div><div className="mt-7 flex items-center gap-2 rounded-xl bg-cream-100 p-4 text-xs leading-5 text-stone-600"><ShieldCheck size={18} className="shrink-0 text-wine-800"/> This is a demo checkout. No payment will be collected and no real delivery will be arranged.</div><button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-wine-900 py-4 text-sm font-extrabold text-white transition hover:bg-wine-800">Confirm demo order <ArrowRight size={17}/></button></form>
    </div>
  </section>
}