import React from "react";
import SalesIcon, {
  ExportIcon,
  NewCustomersIcon,
  ProductOrderIcon,
  ProductSoldIcon,
} from "../../../public/icons/Icons";

const Sales = ({ price, priceIndex, txt }) => {
  return (
    <div className="flex flex-col w-full border-2 rounded-xl bg-pink-100 m-2 p-3">
      <SalesIcon className="w-9 h-9 border-2 rounded-full bg-pink-400 text-white p-2" />
      <p className="font-bold ">${price}k</p>
      <p className=" opacity-50 text-xs">{txt}</p>
      <p className="text-[10px] text-light-blue-800">
        +{priceIndex}% From Yesterday
      </p>
    </div>
  );
};

const TotalOrders = ({ NoOfOrders, index, txt }) => {
  return (
    <div className="flex flex-col w-full border-2 rounded-xl bg-orange-100 m-2 p-3">
      <ProductOrderIcon className="w-9 h-9 border-2 rounded-full bg-orange-400 text-white p-2" />
      <p className="font-bold ">{NoOfOrders}</p>
      <p className=" opacity-50 text-xs">{txt}</p>
      <p className="text-[10px] text-light-blue-800">
        +{index}% From Yesterday
      </p>
    </div>
  );
};

const ProductSold = ({ sold, index, txt }) => {
  return (
    <div className="flex flex-col w-full border-2 rounded-xl bg-green-100 m-2 p-3">
      <ProductSoldIcon className="w-9 h-9 border-2 rounded-full bg-green-400 text-white p-2" />
      <p className="font-bold ">{sold}</p>
      <p className=" opacity-50 text-xs">{txt}</p>
      <p className="text-[10px] text-light-blue-800">
        +{index}% From Yesterday
      </p>
    </div>
  );
};
const NewCustomers = ({ customers, index, txt }) => {
  return (
    <div className="flex flex-col w-full border-2 rounded-xl bg-purple-100 m-2 p-3">
      <NewCustomersIcon className="w-9 h-9 border-2 rounded-full bg-purple-400 text-white p-2" />
      <p className="font-bold ">{customers}</p>
      <p className=" opacity-50 text-xs">{txt}</p>
      <p className="text-[10px] text-light-blue-800">
        +{index}% From Yesterday
      </p>
    </div>
  );
};

function TodaySales() {
  return (
    <div className="flex flex-col gap-2 border-2 rounded-lg w-full m-5 p-5 ">
      <div className=" flex justify-between items-center">
        <div>
          <h3 className="font-bold text-xl">Today's Sales</h3>
          <p className=" opacity-50">Sales Summary</p>
        </div>
        <div className=" p-1 m-1">
          <button className="flex">
            <ExportIcon className="h-5" /> Export
          </button>
        </div>
      </div>

      <div className="flex  w-full flex-wrap md:flex-nowrap xl:flex-nowrap">
        <Sales price={1} priceIndex={8} txt="Total Sales" />
        <TotalOrders NoOfOrders={500} index={5} txt="Total Orders" />
        <ProductSold sold={400} index={1.5} txt="Product Sold" />
        <NewCustomers customers={40} index={5} txt="New Customers" />
      </div>
    </div>
  );
}
("");
export default TodaySales;
