import React from "react";
import { EcommerceCard } from "./Card";
import FilterProducts from "./Filter";
import FaqPasal from "./Faq";
import Widget from "./Categories";

function FlashSales() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <EcommerceCard />
      <div className="flex justify-center items-center 2xl:p-10 2xl:px-20 m-5 ">
        <FilterProducts />
      </div>
      <Widget />
      <FaqPasal />
    </div>
  );
}

export default FlashSales;
