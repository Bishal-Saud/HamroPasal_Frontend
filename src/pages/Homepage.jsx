// Homepage.js
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import CarouselForHomePage from "../components/Carousel";
import FlashSales from "../components/FlashSales";
import { Typography, Button } from "@material-tailwind/react";
import Popup from "../components/PopUp";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Homepage() {
  const { isSignedIn } = useUser();
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
  const [popupOpen, setPopupOpen] = useState(false);

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

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <Layout>
      <main className="h-full mt-10">
        <div className="w-4/5 mx-auto h-4/5">
          <CarouselForHomePage />
        </div>
        {/* Products  */}
        <div className="products mt-10">
          <div className="flex items-center">
            <Typography
              variant="h1"
              color="blue"
              textGradient
              className="ml-20 2xl:text-6xl xl:text-4xl text-sm md:text-xl"
            >
              Flash Sale: {formatTime(timeRemaining)}
            </Typography>
            <Button color="blue" className="ml-4" onClick={togglePopup}>
              Add Product
            </Button>
            <span className="mx-3 opacity-50">
              Add products here or go to the{" "}
              {isSignedIn ? (
                <Link className="underline" to="/dashboard">
                  Dashboard
                </Link>
              ) : (
                <Link className="underline" to="/sign-in">
                  Dashboard
                </Link>
              )}{" "}
              for more details
            </span>
          </div>

          <Popup open={popupOpen} onClose={togglePopup} />
          <div className="flex items-center justify-center gap-5 mt-5">
            <FlashSales />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Homepage;
