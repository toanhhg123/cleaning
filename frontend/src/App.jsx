import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Project from "./pages/project";
import Login from "./pages/login";
import { Toaster } from "sonner";
import ServiceDetails from "./pages/service-detail";
import MyOrders from "./pages/my-orders";
import OrderDetails from "./pages/order-details";

const App = () => {
  return (
    <div className="wrapper">
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complaint" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service-detail/:id" element={<ServiceDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/order-detail/:id" element={<OrderDetails />} />
      </Routes>
    </div>
  );
};

export default App;
