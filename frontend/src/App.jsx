import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Feedback from "./pages/Feedback";
import Project from "./pages/project";
import Login from "./pages/login";
import { Toaster } from "sonner";
import ServiceDetails from "./pages/service-detail";
import MyOrders from "./pages/my-orders";
import OrderDetails from "./pages/order-details";
import OrderPage from "./pages/orders";
import MyWorksPage from "./pages/my-works";
import Profile from "./pages/profile";
import Wallet from "./pages/wallet";
import PaymentReturn from "./pages/payment-return";
import Contact from "./pages/contact";
import Register from "./pages/register";
import ChangePassword from "./pages/change-password";

const App = () => {
  return (
    <div className="wrapper">
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complaint" element={<Feedback />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/service-detail/:id" element={<ServiceDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/my-works" element={<MyWorksPage />} />
        <Route path="/order-detail/:id" element={<OrderDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/payment-return" element={<PaymentReturn />} />
      </Routes>
    </div>
  );
};

export default App;
