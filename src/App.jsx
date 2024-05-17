import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Switch } from "@material-tailwind/react";
import CheckoutPage from "./pages/CheckoutPage";
import CartMenu from "./components/CartMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />

      <Route path="/checkout/:id" element={<CheckoutPage />} />
      <Route path="/" component={<CartMenu />} />
    </Routes>
  );
}

export default App;
