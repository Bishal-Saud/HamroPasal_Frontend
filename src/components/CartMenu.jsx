import { ShoppingCartIcon } from "@heroicons/react/16/solid";
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

  useEffect(() => {
    // Load cart count from localStorage
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      setCartCount(parseInt(storedCount, 10));
    }
  }, []);

  return (
    <Menu>
      <MenuHandler>
        <button className="relative">
          {" "}
          <ShoppingCartIcon />
          <span className="absolute bottom-5 right-0 font-semibold text-md">
            {cartCount}
          </span>
        </button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
