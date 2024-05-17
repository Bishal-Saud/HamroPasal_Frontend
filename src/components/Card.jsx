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
      <div>
        Loading...
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="flex items-center justify-center flex-wrap gap-5">
        {data.map((item, index) => (
          <Card className="w-56 h-96" key={index}>
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={item.image}
                alt="card-image"
                className=" w-full h-full object-contain"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-sm">
                  {item.title.slice(0, 20)}..
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {item.price}$
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-xs"
              >
                {item.description.slice(0, 50)}...
              </Typography>
              <div className="flex my-3">
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
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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
