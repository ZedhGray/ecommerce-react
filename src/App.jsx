import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import ProductIdPages from './pages/ProductIdPages'
import RegisterPage from './pages/RegisterPage'
import Header from './components/shared/Header'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import { getCartThunk } from './store/slices/cart.slice'
import PurchasesPage from './pages/PurchasesPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIdPages />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
