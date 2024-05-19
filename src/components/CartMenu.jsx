import React, { useState } from "react";
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
  Badge,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/Cartcontext"; // Adjust the import path as necessary

export default function CartMenu() {
  const { cartItems, cartCount, removeFromCart } = useCart();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

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
      removeFromCart(itemToRemove);
      closeDialog();
    }
  };

  const handleCheckoutClick = () => {
    navigate(`/checkout/:id`);
  };

  return (
    <>
      <Menu>
        <MenuHandler>
          <button className="relative">
            <ShoppingCartIcon />
            <Badge className="relative top-[-25px] " content={cartCount}>
              {""}
            </Badge>
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
              <img src={item.image} className="h-10" alt={item.title} />
              <MenuItem>
                {item.title.slice(0, 20)} -
                <span className="mr-5"> Price : {item.price}$</span>
              </MenuItem>
              <Button
                className="hover:border-none hover:outline-none md:h-10"
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
