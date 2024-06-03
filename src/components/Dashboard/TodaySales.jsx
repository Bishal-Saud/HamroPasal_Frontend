import React from "react";
import SalesIcon from "../../../public/icons/Icons";

function TodaySales() {
  return (
    <div className="flex flex-col gap-2 border-2 rounded-lg w-3/6 m-5 p-5">
      <div className=" flex justify-between items-center">
        <div>
          <h3 className="font-bold text-xl">Today's Sales</h3>
          <p className=" opacity-50">Sales Summary</p>
        </div>
        <div className="border-2 border-black rounded-md p-1 m-1">
          <button>i Export</button>
        </div>
      </div>

      <div className="flex  w-full">
        <div className="flex flex-col w-full border-2 rounded-xl bg-pink-100 m-2 p-3">
          <SalesIcon className="w-9 h-9 border-2 rounded-full bg-pink-400 text-white p-2" />
          <p className="font-bold ">$1k</p>
          <p className=" opacity-50 text-xs">TotalSales</p>
          <p className="text-[7px] text-light-blue-800">+8% From Yesterday</p>
        </div>
        <div className="flex flex-col w-full border-2 rounded-xl bg-pink-100 m-2 p-3">
          <SalesIcon className="w-9 h-9 border-2 rounded-full bg-pink-400 text-white p-2" />
          <p className="font-bold ">$1k</p>
          <p className=" opacity-50 text-xs">TotalSales</p>
          <p className="text-[7px] text-light-blue-800">+8% From Yesterday</p>
        </div>
        <div className="flex flex-col w-full border-2 rounded-xl bg-pink-100 m-2 p-3">
          <SalesIcon className="w-9 h-9 border-2 rounded-full bg-pink-400 text-white p-2" />
          <p className="font-bold ">$1k</p>
          <p className=" opacity-50 text-xs">TotalSales</p>
          <p className="text-[7px] text-light-blue-800">+8% From Yesterday</p>
        </div>
        <div className="flex flex-col w-full border-2 rounded-xl bg-pink-100 m-2 p-3">
          <SalesIcon className="w-9 h-9 border-2 rounded-full bg-pink-400 text-white p-2" />
          <p className="font-bold ">$1k</p>
          <p className=" opacity-50 text-xs">TotalSales</p>
          <p className="text-[7px] text-light-blue-800">+8% From Yesterday</p>
        </div>
      </div>
    </div>
  );
}
("");
export default TodaySales;
