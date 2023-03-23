import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
import Navbar from "./components/Navbar";

import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import ProtectedRoute from '../src/pages/ProtectedRoute'
import Basket from "./pages/Basket/Basket";
import Error404 from "./pages/Error404"
import Admin from "./pages/Admin";
import Home from "./pages/Admin/Home";
import Orders from "./pages/Admin/Orders";
import Product from "./pages/Admin/Product";
import ProductDetail from "./pages/Admin/ProductDetail";
import NewProduct from "./pages/Admin/Product/NewProduct"; 

function App() {
  return (
    <Router>
    <div>

      <Navbar/>     

      <div id="content">
      <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/product/:product_id" element={<ProductDetails/>}></Route>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/basket" element={<Basket />}/>
      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path="/admin/home" element={<Home/>}/>
      <Route path="/admin/orders" element={<Orders/>}/>
      <Route path="/admin/product" element={<Product/>}/>
      <Route path="/admin/product/:product_id" element={<ProductDetail/>}/>
      <Route path="/admin/product/new" element={<NewProduct/>}/>
      <Route path="*" element={<Error404 />}/>
      </Routes>
      </div>
    </div>
  </Router>
);
}






export default App;
