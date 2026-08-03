import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Landing Page' },
  { to: '/app', label: 'Customer App' },
  { to: '/restaurant', label: 'Restaurant Dashboard' },
]

export default function NavBar() {
  const location = useLocation()
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🥖</span>
          <span className="font-semibold text-neutral-900 dark:text-neutral-50">Baqiya</span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            prototype
          </span>
        </div>
        <nav className="flex gap-1 rounded-full bg-neutral-100 p-1 text-sm dark:bg-neutral-900">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                location.pathname === link.to
                  ? 'bg-white text-neutral-900 shadow dark:bg-neutral-800 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
