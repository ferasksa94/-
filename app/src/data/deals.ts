export interface Deal {
  id: string
  business: string
  category: 'Bakery' | 'Cafe' | 'Restaurant'
  neighborhood: string
  distanceKm: number
  item: string
  description: string
  originalPrice: number
  discountedPrice: number
  quantityLeft: number
  pickupWindow: string
  emoji: string
}

export const deals: Deal[] = [
  {
    id: 'd1',
    business: 'Al Fanar Bakery',
    category: 'Bakery',
    neighborhood: 'Al Olaya, Riyadh',
    distanceKm: 0.6,
    item: "Surplus Bread & Pastry Bundle",
    description: 'Assorted khubz, croissants, and today\'s pastries — baked this morning, discounted before closing.',
    originalPrice: 40,
    discountedPrice: 15,
    quantityLeft: 6,
    pickupWindow: 'Today, 9:00 PM – 9:30 PM',
    emoji: '🥖',
  },
  {
    id: 'd2',
    business: 'Dallah Sweets',
    category: 'Bakery',
    neighborhood: 'Al Malaz, Riyadh',
    distanceKm: 1.2,
    item: 'Mixed Arabic Sweets Box',
    description: 'Baklava, basbousa, and maamoul — end of day surplus box, freshly made.',
    originalPrice: 60,
    discountedPrice: 24,
    quantityLeft: 3,
    pickupWindow: 'Today, 10:00 PM – 10:30 PM',
    emoji: '🍯',
  },
  {
    id: 'd3',
    business: 'Sabya Bakehouse',
    category: 'Bakery',
    neighborhood: 'Al Muruj, Riyadh',
    distanceKm: 2.1,
    item: 'Sourdough & Bread Loaves',
    description: 'Unsold sourdough and specialty bread loaves from today\'s bake.',
    originalPrice: 35,
    discountedPrice: 12,
    quantityLeft: 8,
    pickupWindow: 'Today, 9:30 PM – 10:00 PM',
    emoji: '🍞',
  },
  {
    id: 'd4',
    business: 'Najd Cafe',
    category: 'Cafe',
    neighborhood: 'Al Olaya, Riyadh',
    distanceKm: 0.9,
    item: "Pastry Surprise Bag",
    description: "Today's unsold pastries and sandwiches — chef's selection.",
    originalPrice: 30,
    discountedPrice: 12,
    quantityLeft: 4,
    pickupWindow: 'Today, 8:30 PM – 9:00 PM',
    emoji: '🥐',
  },
]
