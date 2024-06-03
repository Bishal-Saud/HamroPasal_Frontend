import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";

import CheckoutPage from "./pages/CheckoutPage";
import CartMenu from "./components/CartMenu";

import CheckoutForm from "./pages/Checkout.Form";
import ContactUs from "./pages/Contact";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/checkout/:id" element={<CheckoutPage />} />
      <Route path="/checkout/:id/buynow" element={<CheckoutForm />} />
      <Route path="/" component={<CartMenu />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
