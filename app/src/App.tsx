import { Routes, Route, Outlet } from 'react-router'
import Nav from './sections/Nav'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

function Layout() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}
