import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
  CardFooter,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { useCart } from "./Cartcontext";

export default function FilterProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart(); // Use the custom hook to access the cart context

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

  if (loading)
    return (
      <div>
        Loading...
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  // Extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // Find the index of the "Men's Fashion" category
  const mensFashionIndex = uniqueCategories.indexOf("men's clothing");

  return (
    <Tabs value={mensFashionIndex}>
      {" "}
      <Typography variant="h1" color="blue" textGradient className="my-10">
        Choose Your Best
      </Typography>
      {/* Set the value to the index of "Men's Fashion" */}
      <TabsHeader>
        {uniqueCategories.map((category, index) => (
          <Tab key={index} value={index}>
            {category}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex">
        {uniqueCategories.map((category, idx) => (
          <TabPanel
            className="flex items-center flex-nowrap gap-5 "
            key={idx}
            value={idx}
          >
            {data
              .filter((item) => item.category === category)
              .map((item, index) => (
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
                      <Typography
                        color="blue-gray"
                        className="font-medium text-sm"
                      >
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
                      {item?.description.slice(0, 50)}...
                    </Typography>
                    <div className="flex my-3">
                      <span className="font-semibold">Rating: </span>
                      {typeof item?.rating?.rate === "number" &&
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
                      fullWidth={true}
                      className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      onClick={() => addToCart(item)} // Use the addToCart function from the context
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
