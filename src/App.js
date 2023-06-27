import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mens from "./components/Mens";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Womens from "./components/Women's";
import All_Products from "./components/All_Products";
import About from "./components/About";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Add_Proucts from "./components/Add_Products";
import Order from "./components/Order";
import Buynow from "./components/Buynow";
import Product_details from "./components/Product_details";
import Cart from "./components/Cart";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/all_products" element={<All_Products />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product_details" element={<Product_details />} />
        <Route path="/product_details/:id" element={<Product_details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/add_products" element={<Add_Proucts />} />
          <Route path="/admin/add_products/:id" element={<Add_Proucts />} />
          <Route path="/admin/order" element={<Order />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
