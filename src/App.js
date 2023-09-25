import {Route, Routes} from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import {CartProvider} from 'react-use-cart'
import PageNotFound from './Pages/PageNotFound'


function App() {
  return (
    <div>
    <CartProvider>
      <Routes>
      <Route exact path="/" element={ <Home/>} />
      <Route path="/about" element={ <About /> }/>
      <Route path="/contact" element={ <Contact /> }/>
      <Route path="/menu" element={ <Menu /> }/>
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
   </CartProvider>
    </div>
  );
}

export default App;
