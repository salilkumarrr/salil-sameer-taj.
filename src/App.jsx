import { useEffect, useMemo, useState } from 'react'
import { products } from './data/products'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import CheckoutForm from './components/CheckoutForm'
import OrderSummary from './components/OrderSummary'
import Footer from './components/Footer'
import { Check, X } from 'lucide-react'

const CART_KEY = 'anand-sweets-cart-v1'
const LAST_ORDER_KEY = 'anand-sweets-last-order-v1'

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export default function App() {
  const [cart, setCart] = useState(() => readStorage(CART_KEY, []))
  const [cartOpen, setCartOpen] = useState(false)
  const [view, setView] = useState('store')
  const [order, setOrder] = useState(null)
  const [toast, setToast] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)) } catch { /* Storage may be unavailable in private mode. */ }
  }, [cart])

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart])
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart])
  const visibleProducts = useMemo(() => products.filter(p => {
    const matchesCategory = category === 'All' || p.category === category
    const matchesSearch = `${p.name} ${p.description}`.toLowerCase().includes(search.toLowerCase().trim())
    return matchesCategory && matchesSearch
  }), [category, search])

  const notify = message => {
    setToast(message)
    window.clearTimeout(window.__anandToastTimer)
    window.__anandToastTimer = window.setTimeout(() => setToast(''), 2400)
  }

  const addToCart = (product, size, price) => {
    const key = `${product.id}-${size.label}`
    setCart(current => {
      const found = current.find(item => item.key === key)
      if (found) return current.map(item => item.key === key ? { ...item, quantity: item.quantity + 1 } : item)
      return [...current, { key, id: product.id, name: product.name, image: product.image, size: size.label, price, quantity: 1 }]
    })
    notify(`${product.name} added to your basket`)
  }

  const changeQuantity = (key, delta) => setCart(current => current.map(item =>
    item.key === key ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
  ))
  const removeItem = key => setCart(current => current.filter(item => item.key !== key))

  const startCheckout = () => {
    setCartOpen(false)
    setView('checkout')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const placeOrder = customer => {
    const newOrder = {
      id: `AS${Date.now().toString().slice(-8)}`,
      items: cart.map(item => ({ ...item })),
      total,
      customer,
      createdAt: new Date().toISOString()
    }
    setOrder(newOrder)
    try {
      localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(newOrder))
      localStorage.removeItem(CART_KEY)
    } catch { /* Keep the in-memory confirmation working if storage is unavailable. */ }
    setCart([])
    setView('confirmation')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const continueShopping = () => {
    setOrder(null)
    setView('store')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <div className="min-h-screen bg-cream-50">
    <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)}/>
    {view === 'store' && <>
      <Hero/>
      <div className="border-b border-saffron-400/20 bg-cream-100"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-5 text-center sm:grid-cols-3 sm:px-6 lg:px-8"><p className="text-xs font-bold text-wine-900">✦ Carefully selected ingredients</p><p className="text-xs font-bold text-wine-900">✦ Timeless Indian recipes</p><p className="text-xs font-bold text-wine-900">✦ Beautifully packed with care</p></div></div>
      <ProductGrid products={visibleProducts} onAdd={addToCart} search={search} setSearch={setSearch} category={category} setCategory={setCategory}/>
    </>}
    {view === 'checkout' && <CheckoutForm onBack={() => setView('store')} onSubmit={placeOrder}/>}
    {view === 'confirmation' && <OrderSummary order={order} onContinue={continueShopping}/>}
    {view === 'store' && <Footer/>}
    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onChangeQty={changeQuantity} onRemove={removeItem} total={total} onCheckout={startCheckout}/>
    {toast && <div role="status" className="fixed bottom-5 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full bg-wine-950 px-5 py-3 text-sm font-semibold text-white shadow-2xl"><span className="grid h-6 w-6 place-items-center rounded-full bg-saffron-400 text-wine-950"><Check size={14}/></span>{toast}<button onClick={() => setToast('')} aria-label="Dismiss notification"><X size={15}/></button></div>}
  </div>
}