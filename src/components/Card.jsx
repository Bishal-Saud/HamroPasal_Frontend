import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function EcommerceCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // // Load initial count from localStorage
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      setCartCount(parseInt(storedCount, 10));
    }

    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        // Make the API call using Axios
        const response = await axios.get("https://fakestoreapi.com/products");
        // Update the state with the fetched data
        setData(response.data);
      } catch (err) {
        // Handle any errors
        setError(err);
      } finally {
        // Set loading to false after the data is fetched
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const handleAddToCart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="flex items-center justify-center flex-wrap gap-5 ">
      {data?.map((item) => (
        <Card className="w-56 h-96" key={item.id}>
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
                  /> // Convert to integer
                )}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
