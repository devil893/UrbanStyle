import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import AddProduct from "./components/AddProduct/AddProduct";
import ListProduct from "./components/ListProduct/ListProduct";
import ListOrder from "./components/ListOrder/ListOrder";
import ManageCoupons from "./components/ManageCoupons/ManageCoupons";
import ReviewManagement from "./components/ReviewManagement/ReviewManagement";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <ToastContainer />
        <Navbar />
        <Routes>
          {/* Public route - Login */}
          <Route path="/" element={<Login />} />

          {/* Protected admin routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
            <Route path="/listorder" element={<ListOrder />} />
            <Route path="/managecoupons" element={<ManageCoupons />} />
            <Route path="/reviews" element={<ReviewManagement />} />
          </Route>

          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
