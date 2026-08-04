import { useState } from 'react'
import PhoneFrame from '../components/PhoneFrame'
import { deals, type Deal } from '../data/deals'

type Screen = 'browse' | 'detail' | 'checkout' | 'confirmation'

export default function CustomerApp() {
  const [screen, setScreen] = useState<Screen>('browse')
  const [selected, setSelected] = useState<Deal | null>(null)
  const [qty, setQty] = useState(1)

  function openDeal(deal: Deal) {
    setSelected(deal)
    setQty(1)
    setScreen('detail')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Customer App — Prototype</h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          A clickable preview of the core flow: browse nearby surplus → view a deal → reserve &amp; pay → pickup.
        </p>
      </div>
      <PhoneFrame>
        {screen === 'browse' && <BrowseScreen onSelect={openDeal} />}
        {screen === 'detail' && selected && (
          <DetailScreen
            deal={selected}
            qty={qty}
            setQty={setQty}
            onBack={() => setScreen('browse')}
            onReserve={() => setScreen('checkout')}
          />
        )}
        {screen === 'checkout' && selected && (
          <CheckoutScreen
            deal={selected}
            qty={qty}
            onBack={() => setScreen('detail')}
            onPay={() => setScreen('confirmation')}
          />
        )}
        {screen === 'confirmation' && selected && (
          <ConfirmationScreen deal={selected} onDone={() => setScreen('browse')} />
        )}
      </PhoneFrame>
    </div>
  )
}

function BrowseScreen({ onSelect }: { onSelect: (d: Deal) => void }) {
  return (
    <div className="px-4 pb-8">
      <div className="pt-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">📍 Al Olaya, Riyadh</p>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Surplus near you</h2>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 text-sm">
        {['All', 'Bakery', 'Cafe', 'Restaurant'].map((c, i) => (
          <span
            key={c}
            className={`shrink-0 rounded-full px-3 py-1 font-medium ${
              i === 0
                ? 'bg-amber-600 text-white'
                : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300'
            }`}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-4 space-y-3">
        {deals.map((deal) => {
          const pct = Math.round(100 - (deal.discountedPrice / deal.originalPrice) * 100)
          return (
            <button
              key={deal.id}
              onClick={() => onSelect(deal)}
              className="w-full rounded-2xl border border-neutral-200 bg-white p-3 text-left shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-3xl dark:bg-amber-900/20">
                  {deal.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate font-semibold text-neutral-900 dark:text-white">{deal.business}</p>
                    <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      -{pct}%
                    </span>
                  </div>
                  <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">{deal.item}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
                    <span>{deal.distanceKm} km away</span>
                    <span>·</span>
                    <span>{deal.quantityLeft} left</span>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-neutral-400 line-through">{deal.originalPrice} SAR</p>
                  <p className="font-bold text-amber-600 dark:text-amber-400">{deal.discountedPrice} SAR</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DetailScreen({
  deal,
  qty,
  setQty,
  onBack,
  onReserve,
}: {
  deal: Deal
  qty: number
  setQty: (n: number) => void
  onBack: () => void
  onReserve: () => void
}) {
  return (
    <div className="pb-8">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 text-7xl dark:from-amber-900/30 dark:to-amber-900/10">
        {deal.emoji}
      </div>
      <div className="px-4">
        <button onClick={onBack} className="mt-3 text-sm text-neutral-500 hover:underline">
          ← Back
        </button>
        <h2 className="mt-2 text-xl font-bold text-neutral-900 dark:text-white">{deal.item}</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{deal.business} · {deal.neighborhood}</p>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{deal.description}</p>

        <div className="mt-4 rounded-xl bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
          <div className="flex justify-between"><span className="text-neutral-500">Pickup window</span><span className="font-medium">{deal.pickupWindow}</span></div>
          <div className="mt-1 flex justify-between"><span className="text-neutral-500">Available</span><span className="font-medium">{deal.quantityLeft} left</span></div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium text-neutral-700 dark:text-neutral-200">Quantity</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="h-8 w-8 rounded-full bg-neutral-100 font-bold dark:bg-neutral-800"
            >
              −
            </button>
            <span className="w-4 text-center">{qty}</span>
            <button
              onClick={() => setQty(Math.min(deal.quantityLeft, qty + 1))}
              className="h-8 w-8 rounded-full bg-neutral-100 font-bold dark:bg-neutral-800"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={onReserve}
          className="mt-5 w-full rounded-full bg-amber-600 py-3 font-semibold text-white shadow hover:bg-amber-700 transition"
        >
          Reserve for {deal.discountedPrice * qty} SAR
        </button>
      </div>
    </div>
  )
}

function CheckoutScreen({
  deal,
  qty,
  onBack,
  onPay,
}: {
  deal: Deal
  qty: number
  onBack: () => void
  onPay: () => void
}) {
  const total = deal.discountedPrice * qty
  return (
    <div className="px-4 pb-8 pt-3">
      <button onClick={onBack} className="text-sm text-neutral-500 hover:underline">
        ← Back
      </button>
      <h2 className="mt-2 text-xl font-bold text-neutral-900 dark:text-white">Confirm &amp; Pay</h2>

      <div className="mt-4 rounded-xl border border-neutral-200 p-3 text-sm dark:border-neutral-800">
        <div className="flex justify-between"><span className="text-neutral-500">{deal.item} × {qty}</span><span>{total} SAR</span></div>
        <div className="mt-1 flex justify-between text-neutral-500"><span>Service fee</span><span>0 SAR</span></div>
        <div className="mt-2 flex justify-between border-t border-dashed border-neutral-200 pt-2 font-bold dark:border-neutral-700">
          <span>Total</span><span>{total} SAR</span>
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-neutral-700 dark:text-neutral-200">Payment method</p>
      <div className="mt-2 space-y-2 text-sm">
        {['Apple Pay', 'mada', 'STC Pay'].map((m, i) => (
          <label
            key={m}
            className="flex items-center justify-between rounded-xl border border-neutral-200 p-3 dark:border-neutral-800"
          >
            <span>{m}</span>
            <input type="radio" name="pay" defaultChecked={i === 0} />
          </label>
        ))}
      </div>

      <button
        onClick={onPay}
        className="mt-5 w-full rounded-full bg-amber-600 py-3 font-semibold text-white shadow hover:bg-amber-700 transition"
      >
        Pay {total} SAR
      </button>
    </div>
  )
}

function ConfirmationScreen({ deal, onDone }: { deal: Deal; onDone: () => void }) {
  return (
    <div className="flex flex-col items-center px-6 pb-8 pt-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl dark:bg-emerald-900/40">
        ✅
      </div>
      <h2 className="mt-4 text-xl font-bold text-neutral-900 dark:text-white">Order confirmed!</h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        Show this code at {deal.business} during {deal.pickupWindow}.
      </p>
      <div className="mt-5 flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 text-5xl dark:border-neutral-700">
        ▦
      </div>
      <p className="mt-2 text-xs text-neutral-400">QR code placeholder — #BQY-{deal.id.toUpperCase()}</p>
      <button
        onClick={onDone}
        className="mt-6 w-full rounded-full bg-neutral-900 py-3 font-semibold text-white dark:bg-white dark:text-neutral-900"
      >
        Back to browsing
      </button>
    </div>
  )
}
