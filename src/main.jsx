import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route } from 'react-router';
import './index.css'
// import App from './App.jsx'
import Login from './Components/Login/login.jsx';
import Products from './Components/Products/products.jsx';
import Cart from './Components/Cart/cart.jsx';



const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/products" element={<Products />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
  </BrowserRouter>
  )
