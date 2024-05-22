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

  if (loading)
    return (
      <div>
        Loading...
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const mensFashionIndex = uniqueCategories.indexOf("men's clothing");

  return (
    <Tabs value={mensFashionIndex} className="">
      <Typography
        variant="h1"
        color="blue"
        textGradient
        className="my-10 text-xl 2xl:text-6xl flex items-center justify-center"
      >
        Choose Your Best
      </Typography>
      <TabsHeader className="flex justify-center items-center  flex-wrap 2xl:flex-nowrap ">
        {uniqueCategories.map((category, index) => (
          <Tab key={index} value={index}>
            {category}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex flex-wrap justify-center items-center">
        {uniqueCategories.map((category, idx) => (
          <TabPanel
            className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-5"
            key={idx}
            value={idx}
          >
            {data
              .filter((item) => item.category === category)
              .map((item, index) => (
                <Card
                  className="w-36 h-60 sm:w-48 sm:h-72 md:w-56 md:h-96"
                  key={index}
                >
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="h-36 sm:h-48 md:h-96"
                  >
                    <img
                      src={item.image}
                      alt="card-image"
                      className="w-full h-full object-contain"
                    />
                  </CardHeader>
                  <CardBody className="p-2 sm:p-4">
                    <div className="mb-1 sm:mb-2 flex items-center justify-between">
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
                      {item?.description.slice(0, 20)}...
                    </Typography>
                    {/* Hide rating on mobile devices */}
                    <div className="hidden sm:flex my-2">
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
                      className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-xs sm:text-sm p-1 2xl:p-5"
                      onClick={() => addToCart(item)}
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
