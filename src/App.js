import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoutes";

// User Pages
import Home from "./pages/user/Home";
import ProductDetails from "./pages/user/ProductDetails";
import Cart from "./pages/user/Cart";
import Login from "./pages/user/Login";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Productss";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import SignUp from './pages/user/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= USER ================= 
        */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

        </Route>

        {/* ================= ADMIN ================= */}
        <Route
          // element={<ProtectedRoute allowedRoles={["admin"]} />}
        >
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/products/add" element={<AddProduct />} />
            <Route
              path="/admin/products/edit/:id"
              element={<EditProduct />}
            />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;