import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Layout from "../layout";
const CheckoutPage = () => {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const fetchCartItems = () => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  };
  useEffect(() => {
    fetchCartItems();

    const handleCartCountUpdated = () => {
      fetchCartItems();
    };

    window.addEventListener("cartCountUpdated", handleCartCountUpdated);

    return () => {
      window.removeEventListener("cartCountUpdated", handleCartCountUpdated);
    };
  }, []);
  return (
    <Layout>
      {cartItems.length === 0 ? (
        <div className="py-16 px-8 h-screen flex items-center justify-center">
          <Typography className="text-center" variant="h5">
            Please add items to checkout
          </Typography>
        </div>
      ) : (
        cartItems?.map((item) => (
          <section className="py-16 px-8" key={id}>
            <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
              <img src={item.image} alt={item.title} className="h-[36rem]" />
              <div>
                <Typography className="mb-4" variant="h3">
                  {item.title}
                </Typography>
                <Typography variant="h5">$1,490</Typography>
                <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
                  {item.description}
                </Typography>
                <div className="my-8 flex items-center gap-2">
                  <Rating value={4} className="text-amber-500" />
                  <Typography className="!text-sm font-bold !text-gray-700">
                    {item.rating.rate} (100 reviews)
                  </Typography>
                </div>
                <Typography color="blue-gray" variant="h6">
                  Color
                </Typography>
                <div className="my-8 mt-3 flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
                  <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
                  <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
                </div>
                <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
                  <Button color="gray" className="w-52">
                    Checkout
                  </Button>
                  <IconButton color="gray" variant="text" className="shrink-0">
                    <HeartIcon className="h-6 w-6" />
                  </IconButton>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </Layout>
  );
};

export default CheckoutPage;
