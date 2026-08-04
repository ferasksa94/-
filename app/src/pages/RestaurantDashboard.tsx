import { useState } from 'react'

interface Listing {
  id: string
  item: string
  quantity: number
  originalPrice: number
  discountedPrice: number
  pickupWindow: string
  status: 'Active' | 'Sold out'
}

const initialListings: Listing[] = [
  { id: 'l1', item: 'Bread & Pastry Bundle', quantity: 6, originalPrice: 40, discountedPrice: 15, pickupWindow: '9:00 – 9:30 PM', status: 'Active' },
  { id: 'l2', item: 'Sourdough Loaves', quantity: 0, originalPrice: 35, discountedPrice: 12, pickupWindow: '8:00 – 8:30 PM', status: 'Sold out' },
]

export default function RestaurantDashboard() {
  const [listings, setListings] = useState<Listing[]>(initialListings)
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(5)
  const [originalPrice, setOriginalPrice] = useState(30)
  const [discountPct, setDiscountPct] = useState(60)
  const [pickupWindow, setPickupWindow] = useState('9:00 – 9:30 PM')

  const discountedPrice = Math.round(originalPrice * (1 - discountPct / 100))
  const soldToday = 12
  const revenueRecovered = 348
  const commission = Math.round(revenueRecovered * 0.12)

  function addListing() {
    if (!item.trim()) return
    setListings((prev) => [
      { id: crypto.randomUUID(), item, quantity, originalPrice, discountedPrice, pickupWindow, status: 'Active' },
      ...prev,
    ])
    setItem('')
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">Al Fanar Bakery · Al Olaya, Riyadh</p>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Restaurant Dashboard — Prototype</h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          List today's surplus in under a minute. Locked-rate founding partner: 12% commission for 3 years.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Items sold today" value={String(soldToday)} />
        <StatCard label="Revenue recovered today" value={`${revenueRecovered} SAR`} />
        <StatCard label="Platform commission (12%, locked)" value={`${commission} SAR`} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* New listing form */}
        <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
          <h2 className="font-semibold text-neutral-900 dark:text-white">List surplus food</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <label className="block text-neutral-500 dark:text-neutral-400">Item name</label>
              <input
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="e.g. Croissants & Danish bundle"
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-500 dark:text-neutral-400">Quantity</label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label className="block text-neutral-500 dark:text-neutral-400">Original price (SAR)</label>
                <input
                  type="number"
                  min={1}
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-neutral-500 dark:text-neutral-400">
                Discount: {discountPct}% → customer pays {discountedPrice} SAR
              </label>
              <input
                type="range"
                min={30}
                max={80}
                value={discountPct}
                onChange={(e) => setDiscountPct(Number(e.target.value))}
                className="mt-2 w-full accent-amber-600"
              />
              <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                💡 AI suggested discount: 60% (based on 2 hrs to close &amp; similar-item sell-through)
              </p>
            </div>
            <div>
              <label className="block text-neutral-500 dark:text-neutral-400">Pickup window</label>
              <input
                value={pickupWindow}
                onChange={(e) => setPickupWindow(e.target.value)}
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
              />
            </div>
            <button
              onClick={addListing}
              className="w-full rounded-full bg-amber-600 py-2.5 font-semibold text-white shadow hover:bg-amber-700 transition"
            >
              Publish listing
            </button>
          </div>
        </div>

        {/* Current listings */}
        <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
          <h2 className="font-semibold text-neutral-900 dark:text-white">Today's listings</h2>
          <div className="mt-4 space-y-3">
            {listings.map((l) => (
              <div
                key={l.id}
                className="flex items-center justify-between rounded-xl bg-neutral-50 p-3 text-sm dark:bg-neutral-900"
              >
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">{l.item}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {l.quantity} left · {l.pickupWindow}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-400 line-through">{l.originalPrice} SAR</p>
                  <p className="font-semibold text-amber-600 dark:text-amber-400">{l.discountedPrice} SAR</p>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      l.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                        : 'bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
                    }`}
                  >
                    {l.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{value}</p>
    </div>
  )
}
