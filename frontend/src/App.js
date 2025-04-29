import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import polo_banner from "./../src/assets/banner_mens.png";
import tshirts_banner from "./../src/assets/banner_women.png";
import formalshirts_banner from "./../src/assets/banner_kids.png";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";
import SearchResults from "./pages/SearchResults";
import FAQ from "./pages/FAQ";
import ShippingReturns from "./pages/ShippingReturns";
import ContactUs from "./pages/ContactUs";
import AdminMessages from "./components/Admin/AdminMessages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/polo"
            element={<ShopCategory banner={polo_banner} category="polo" />}
          />
          <Route
            path="/tshirts"
            element={<ShopCategory banner={tshirts_banner} category="tshirts" />}
          />
          <Route
            path="/formalshirts"
            element={<ShopCategory banner={formalshirts_banner} category="formalshirts" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/order" element={<PlaceOrder/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
          <Route path="/search" element={<SearchResults/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/shipping-returns" element={<ShippingReturns/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/admin/messages" element={<AdminMessages/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
