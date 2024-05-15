import React from "react";
import Layout from "../layout";
import CarouselForHomePage from "../components/Carousel";

function Homepage() {
  return (
    <Layout>
      <main className="h-screen mt-10">
        <div className="w-4/5 mx-auto h-4/5">
          <CarouselForHomePage />
        </div>
      </main>
    </Layout>
  );
}

export default Homepage;
