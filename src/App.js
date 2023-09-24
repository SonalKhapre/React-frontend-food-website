import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import {CartProvider} from 'react-use-cart'


function App() {
  return (
    <div>
    <CartProvider>
   <BrowserRouter basename='/frontend-project-restaurant'>
    <Routes>
      <Route exact path="/" element={ <Home/>} />
      <Route path="/about" element={ <About /> }/>
      <Route path="/contact" element={ <Contact /> }/>
      <Route path="/menu" element={ <Menu /> }/>
      <Route path="/cart" element={<Cart />} />
     </Routes>
   </BrowserRouter>
   </CartProvider>
    </div>
  );
}

export default App;
