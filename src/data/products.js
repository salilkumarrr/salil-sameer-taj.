export const products = [
  {
    id: 'kaju-katli', name: 'Kaju Katli', category: 'Classic',
    description: 'Delicate cashew diamond finished with a touch of silver leaf.',
    price: 350, rating: '4.9', tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1605197583504-2f4f4e7f8b4b?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  },
  {
    id: 'gulab-jamun', name: 'Gulab Jamun', category: 'Traditional',
    description: 'Soft khoya dumplings soaked in fragrant cardamom syrup.',
    price: 220, rating: '4.8', tag: 'Customer favourite',
    image: 'https://images.unsplash.com/photo-1666190092159-6b2b2f7b4a3b?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  },
  {
    id: 'motichoor-ladoo', name: 'Motichoor Ladoo', category: 'Traditional',
    description: 'Tiny golden pearls shaped into a melt-in-the-mouth delight.',
    price: 280, rating: '4.9', tag: 'Festive pick',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  },
  {
    id: 'mysore-pak', name: 'Mysore Pak', category: 'Signature',
    description: 'Rich, buttery gram-flour sweet made for special moments.',
    price: 320, rating: '4.7', tag: '',
    image: 'https://images.unsplash.com/photo-1606471191009-6399c5e6e3f5?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  },
  {
    id: 'rasmalai', name: 'Rasmalai', category: 'Milk sweets',
    description: 'Soft chenna discs resting in chilled saffron milk.',
    price: 260, rating: '4.8', tag: 'Chilled delight',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '4 pcs', multiplier: 1 }, { label: '8 pcs', multiplier: 2 }, { label: '12 pcs', multiplier: 3 }]
  },
  {
    id: 'soan-papdi', name: 'Soan Papdi', category: 'Classic',
    description: 'Flaky, feather-light layers with a delicate nutty finish.',
    price: 180, rating: '4.6', tag: '',
    image: 'https://images.unsplash.com/photo-1605197583504-2f4f4e7f8b4b?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  },
  {
    id: 'milk-peda', name: 'Mathura Peda', category: 'Milk sweets',
    description: 'Slow-cooked milk solids with a warm hint of cardamom.',
    price: 300, rating: '4.8', tag: '',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  },
  {
    id: 'badam-halwa', name: 'Badam Halwa', category: 'Signature',
    description: 'A luxurious almond-rich treat with a slow-cooked finish.',
    price: 400, rating: '4.9', tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85',
    sizes: [{ label: '250 g', multiplier: .25 }, { label: '500 g', multiplier: .5 }, { label: '1 kg', multiplier: 1 }]
  }
]

export const formatPrice = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)