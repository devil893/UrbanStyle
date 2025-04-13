import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const CustomerRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ScrollToTop /> {/* Scrolls to top on route change */}
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
