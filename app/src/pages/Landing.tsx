import { Link } from 'react-router-dom'

const stats = [
  { value: '4M tons', label: 'Food wasted in Saudi Arabia every year' },
  { value: 'SR40B', label: 'Value of that wasted food, annually' },
  { value: '132,383', label: 'Restaurants, cafés & bakeries in the Kingdom' },
]

const steps = [
  {
    title: 'Businesses list surplus',
    body: 'Bakeries and cafés list today\'s unsold bread, pastries, and food in under 2 minutes, at a discount.',
    emoji: '📋',
  },
  {
    title: 'Nearby customers get notified',
    body: 'People close by see fresh, discounted surplus on the map and reserve what they want.',
    emoji: '📍',
  },
  {
    title: 'Collect and enjoy',
    body: 'Pay in-app, show a QR code at pickup, and take home quality food at up to 70% off.',
    emoji: '🛍️',
  },
]

export default function Landing() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
              Launching in Riyadh, starting with bakeries
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              Save great food.
              <br />
              <span className="text-amber-600 dark:text-amber-400">Save money. Save the planet.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-neutral-600 dark:text-neutral-400">
              Waffir connects bakeries, cafés, and restaurants with surplus food near
              its expiry time to customers nearby — at up to 70% off. Less waste for
              businesses, better prices for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/app"
                className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow hover:bg-amber-700 transition"
              >
                Browse deals near you
              </Link>
              <Link
                to="/restaurant"
                className="rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-800 hover:bg-neutral-50 transition dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
              >
                List your surplus food
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-amber-100 to-emerald-100 p-8 text-center shadow-inner dark:from-amber-900/30 dark:to-emerald-900/20">
              <div className="text-7xl">🥖🥐🍞</div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                Today's surplus bread &amp; pastries — up to 70% off, from bakeries
                near you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">{s.value}</div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
          How Waffir works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
              <div className="text-3xl">{step.emoji}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                Step {i + 1}
              </div>
              <h3 className="mt-1 font-semibold text-neutral-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For restaurants */}
      <section className="bg-neutral-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">For bakeries &amp; restaurants</h2>
              <p className="mt-3 max-w-lg text-neutral-300">
                Recover revenue on food that would otherwise be thrown away.
                Sign up during launch and lock a low, guaranteed 12% commission
                for 3 years — it never goes up.
              </p>
              <Link
                to="/restaurant"
                className="mt-6 inline-block rounded-full bg-amber-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-amber-400 transition"
              >
                List your business
              </Link>
            </div>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex gap-2"><span>✅</span> List surplus in under 2 minutes, no POS required</li>
              <li className="flex gap-2"><span>✅</span> 12% commission, locked for 3 years — no rate hikes</li>
              <li className="flex gap-2"><span>✅</span> Reach nearby customers actively looking for deals</li>
              <li className="flex gap-2"><span>✅</span> Track revenue recovered and waste reduced</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
        Waffir — provisional working name, pending brand naming in the blueprint's branding section.
      </footer>
    </div>
  )
}
