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
import Checkout from './pages/user/Checkout';

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Productss";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import SignUp from './pages/user/SignUp';
import ProfileCard from './components/Profile';
import { ShoppContextProvider } from './context/Context';
import TermsConditions from './pages/user/TermsConditions';
import ResetPassword from './pages/user/ResetPassword';
import ForgotPassword from './pages/user/ForgotPassword';
import Orders from './pages/admin/Orders';
import OrdersView from './pages/admin/OrdersView';
import OrdersUser from './pages/user/OrdersUser';
import Settings from './pages/user/Settings';

function App() {
  return (
    <ShoppContextProvider>
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
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/orders-user" element={<OrdersUser />} />
          <Route path="/settings" element={<Settings />} />


          <Route
  path="/reset-password/:token"
  element={<ResetPassword />}
/>
          <Route path="/forgot-password" element={<ForgotPassword />} />


        </Route>

        {/* ================= ADMIN ================= */}
        <Route
          element={<ProtectedRoute allowedRoles={["ADMIN"]} />}
        >
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/profile" element={<ProfileCard />} />
          <Route path="/admin/orders" element={<Orders />} />

            <Route path="/admin/products/add" element={<AddProduct />} />
            <Route path="/admin/orders/ordersView/:orderId" element={<OrdersView />} />

            <Route
              path="/admin/products/edit/:id"
              element={<EditProduct />}
            />
          </Route>
            {/* <Route path="/admin/notification" element={<Dashboard />} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
    </ShoppContextProvider>
  );
}

export default App;