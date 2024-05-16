import React, { useEffect, useState } from "react";
import Layout from "../layout";
import CarouselForHomePage from "../components/Carousel";
import FlashSales from "../components/FlashSales";
import { Typography } from "@material-tailwind/react";

function Homepage() {
  const getTimeRemaining = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0); // set to next 24 hours
    return tomorrow - now; // return difference in milliseconds
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeRemaining(remaining);
      if (remaining <= 0) {
        setTimeRemaining(24 * 60 * 60 * 1000); // reset to 24 hours in milliseconds
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <main className="h-full mt-10">
        <div className="w-4/5 mx-auto h-4/5">
          <CarouselForHomePage />
        </div>
        {/* Products  */}
        <div className="products mt-10">
          <Typography variant="h1" color="blue" textGradient className="ml-20">
            Flash Sale: {formatTime(timeRemaining)}
          </Typography>
          <div className="flex items-center justify-center gap-5">
            <FlashSales />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Homepage;
