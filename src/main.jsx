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

ReactDOM.createRoot(document.getElementById("root")).render(
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
);
