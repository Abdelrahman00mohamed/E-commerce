import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Jewelery from './components/Jewelery';
import Cart from './components/Cart';
import Productdetails from './components/Productdetails';
import ProductProviderr from "./stor";

function App() {
  return (
    <ProductProviderr>
    <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="men" element={<Men/>}/>
  <Route path="women" element={<Women/>}/>
  <Route path="jewelery" element={<Jewelery/>}/>
  <Route path="cart" element={<Cart/>}/>
  <Route path="productdetails" element={<Productdetails/>}/>
  <Route path="home/productdetails" element={<Productdetails/>}/>
  <Route path="men/productdetails" element={<Productdetails/>}/>
  <Route path="women/productdetails" element={<Productdetails/>}/>
  <Route path="jewelery/productdetails" element={<Productdetails/>}/>
</Routes>
    </ProductProviderr>
  );
}

export default App;
