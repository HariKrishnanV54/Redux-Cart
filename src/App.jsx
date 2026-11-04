import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import View from './Pages/View'
import PageNotFound from './Pages/PageNotFound'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import '/bootstrap.min.css'


function App() {

  return (
    <>
  <Header />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<View />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    <Footer/>
   </>
  )
}

export default App
  