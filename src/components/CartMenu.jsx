import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function CartMenu() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart count and items from localStorage
    const storedCount = localStorage.getItem("cartCount");
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (storedCount) {
      setCartCount(parseInt(storedCount, 10));
    }
    setCartItems(storedItems);

    // Add an event listener for the custom event
    const handleCartCountUpdated = (event) => {
      setCartCount(event.detail);
      const updatedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(updatedItems);
    };
    window.addEventListener("cartCountUpdated", handleCartCountUpdated);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("cartCountUpdated", handleCartCountUpdated);
    };
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1); // Remove item at the specified index

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    const newCount = cartCount - 1;
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount);

    // Dispatch a custom event to notify the cart count change
    const event = new CustomEvent("cartCountUpdated", { detail: newCount });
    window.dispatchEvent(event);
  };

  return (
    <Menu>
      <MenuHandler>
        <button className="relative">
          <ShoppingCartIcon />
          <span className="absolute bottom-5 right-0 font-semibold text-md">
            {cartCount}
          </span>
        </button>
      </MenuHandler>
      <MenuList className="w-1/3 flex flex-col gap-2">
        {cartItems.map((item, index) => (
          <div className="flex justify-evenly" key={item.id}>
            <div className="mr-2 flex items-center justify-center">
              <XMarkIcon
                className="text-black  h-5 cursor-pointer "
                onClick={() => handleRemoveFromCart(index)}
              />
            </div>
            <img src={item.image} className="h-10" />
            <MenuItem key={index}>
              {item.title.slice(0, 20)} -
              <span className=" mr-5"> Price : {item.price}$</span>
            </MenuItem>

            <Button className="hover:border-none hover:outline-none">
              Checkout
            </Button>
          </div>
        ))}
        {cartItems.length === 0 && <MenuItem>No items in cart</MenuItem>}
      </MenuList>
    </Menu>
  );
}
