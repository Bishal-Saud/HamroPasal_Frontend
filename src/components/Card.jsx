import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { useCart } from "./Cartcontext";

export function EcommerceCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setCurrentItem(item);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setCurrentItem(null);
  };

  if (loading)
    return (
      <div className="flex flex-col items-center">
        Loading...
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-4 p-4 place-items-center">
        {data.map((item, index) => (
          <Card className="w-30 sm:w-48 md:w-56 h-auto" key={index}>
            <CardHeader
              shadow={false}
              floated={false}
              className="h-20 sm:h-48 md:h-56"
            >
              <img
                src={item.image}
                alt="card-image"
                className=" w-full h-full 2xl:w-full 2xl:h-full object-contain"
              />
            </CardHeader>
            <CardBody className="p-2 sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <Typography
                  color="blue-gray"
                  className="font-medium text-xs sm:text-sm"
                >
                  {item.title.slice(0, 20)}..
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-xs sm:text-sm"
                >
                  {item.price}$
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-xs"
              >
                {item.description.slice(0, 0)}...
              </Typography>
              <div className="hidden sm:flex my-2">
                <span className="font-semibold">Rating: </span>
                {typeof item.rating?.rate === "number" &&
                  item.rating.rate >= 0 &&
                  item.rating.rate <= 5 && (
                    <Rating
                      className="text-md"
                      value={Math.floor(item.rating.rate)}
                    />
                  )}
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-xs sm:text-sm p-1 2xl:p-5"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <Dialog open={dialogOpen} handler={closeDialog}>
        <DialogHeader>Item Added to Cart</DialogHeader>
        <DialogBody>
          {currentItem ? (
            <div key={currentItem.id}>
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="h-24 mx-auto"
              />
              <Typography variant="h6" className="mt-4">
                {currentItem.title}
              </Typography>
              <Typography className="mt-2">
                Price: {currentItem.price}$
              </Typography>
            </div>
          ) : (
            <div>No item selected</div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="blue" onClick={closeDialog}>
            Continue Shopping
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
