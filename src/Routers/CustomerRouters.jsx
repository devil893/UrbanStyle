import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import ProductsCategory from "../customer/components/Product/ProductsCategory";

const CustomerRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          
          {/* Product Routes */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/:category" element={<ProductsCategory />} />
          <Route path="/products/:category/:subcategory" element={<ProductsCategory />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          
          {/* Other Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderDetails />} />
          
          {/* Additional Routes from Navigation */}
          <Route path="/brands/:brand" element={<Product brandView={true} />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/stores" element={<div>Stores Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/register" element={<div>Register Page</div>} />
          <Route path="/search" element={<div>Search Page</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;