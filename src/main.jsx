import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/Cartcontext";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/clerk-react";

// Your Clerk frontend API key
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkFrontendApi) {
  throw new Error(
    "Missing Clerk publishableKey. Please set VITE_CLERK_PUBLISHABLE_KEY in your .env file."
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkFrontendApi}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <CartProvider>
            <App />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </ClerkProvider>
);
