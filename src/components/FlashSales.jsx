import React from "react";
import { EcommerceCard } from "./Card";
import FilterProducts from "./Filter";
import FaqPasal from "./Faq";

function FlashSales() {
  return (
    <div className="flex flex-col ">
      <EcommerceCard />
      <div className="2xl:p-10 2xl:px-20 m-5 ">
        <FilterProducts />
      </div>
      <FaqPasal />
    </div>
  );
}

export default FlashSales;
