import React from "react";
import { useCart } from "./Cartcontext";

export function Cart() {
  const { cartItems, cartCount } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {cartCount}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} width="50" />
            <p>{item.title}</p>
            <p>{item.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
