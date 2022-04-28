import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Private,
  Checkout,
  AuthWrapper,
} from "./pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <Private>
                <Checkout />
              </Private>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
