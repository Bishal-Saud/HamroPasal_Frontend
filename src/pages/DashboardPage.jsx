import React from "react";

import { DashboardHeader } from "../components/Dashboard/DashboardHeader";
import TodaySales from "../components/Dashboard/TodaySales";
import SalesChart from "../components/Dashboard/LineChart";
import BarChart from "../components/Dashboard/BarChart";
import PieChart from "../components/Dashboard/PieChart";
import AllProducts from "../components/Dashboard/AllProducts";

function DashboardPage() {
  return (
    <main className="">
      <DashboardHeader />
      <section className="w-full flex border-2 flex-wrap">
        <TodaySales />
        <div className=" w-full flex flex-wrap gap-5 items-center justify-between">
          <SalesChart />
          <BarChart />
          <PieChart />
        </div>
        <div>
          <AllProducts />
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
