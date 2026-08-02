import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import CustomerApp from './pages/CustomerApp'
import RestaurantDashboard from './pages/RestaurantDashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<CustomerApp />} />
        <Route path="/restaurant" element={<RestaurantDashboard />} />
      </Routes>
    </div>
  )
}
