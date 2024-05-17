import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartMenu() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (storedCount) {
      setCartCount(parseInt(storedCount, 10));
    }
    setCartItems(storedItems);

    const handleCartCountUpdated = (event) => {
      setCartCount(event.detail);
      const updatedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(updatedItems);
    };
    window.addEventListener("cartCountUpdated", handleCartCountUpdated);

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

    const event = new CustomEvent("cartCountUpdated", { detail: newCount });
    window.dispatchEvent(event);

    closeDialog();
  };

  const handleCheckoutClick = () => {
    const cartId = "unique-cart-id";
    navigate(`/checkout/${cartId}`);
  };

  const openDialog = (index) => {
    setItemToRemove(index);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setItemToRemove(null);
  };

  const confirmRemoveFromCart = () => {
    if (itemToRemove !== null) {
      handleRemoveFromCart(itemToRemove);
    }
  };

  return (
    <>
      <Menu>
        <MenuHandler>
          <button className="relative">
            <ShoppingCartIcon />
            <span className="absolute bottom-5 right-0 font-semibold text-md">
              {cartCount}
            </span>
          </button>
        </MenuHandler>
        <MenuList className="2xl:w-1/3 flex flex-col gap-2 xl:w-1/3 md:w-1/3 w-full sm:w-full">
          {cartItems.map((item, index) => (
            <div className="flex justify-evenly object-cover" key={index}>
              <div className="mr-2 flex items-center justify-center">
                <XMarkIcon
                  className="text-black h-5 cursor-pointer"
                  onClick={() => openDialog(index)}
                />
              </div>
              <img src={item.image} className="h-10 " alt={item.title} />
              <MenuItem key={index}>
                {item.title.slice(0, 20)} -
                <span className="mr-5"> Price : {item.price}$</span>
              </MenuItem>
              <Button
                className="hover:border-none hover:outline-none md:h-10 "
                onClick={handleCheckoutClick}
              >
                Checkout
              </Button>
            </div>
          ))}
          {cartItems.length === 0 && <MenuItem>No items in cart</MenuItem>}
        </MenuList>
      </Menu>

      <Dialog open={dialogOpen} handler={closeDialog}>
        <DialogHeader>Remove Item</DialogHeader>
        <DialogBody>
          Are you sure you want to remove this item from the cart?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={confirmRemoveFromCart}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
