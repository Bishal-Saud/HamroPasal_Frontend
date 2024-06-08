import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";

import CheckoutPage from "./pages/CheckoutPage";
import CartMenu from "./components/CartMenu";

import CheckoutForm from "./pages/Checkout.Form";
import ContactUs from "./pages/Contact";
import DashboardPage from "./pages/DashboardPage";
import {
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/checkout/:id" element={<CheckoutPage />} />
      <Route path="/checkout/:id/buynow" element={<CheckoutForm />} />
      <Route path="/" component={<CartMenu />} />
      <Route
        path="/dashboard"
        element={
          <SignedIn>
            <DashboardPage />
          </SignedIn>
        }
      />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />}></Route>
    </Routes>
  );
}

export default App;
