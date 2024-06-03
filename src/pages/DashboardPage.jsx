import React from "react";

import { DashboardHeader } from "../components/Dashboard/DashboardHeader";
import TodaySales from "../components/Dashboard/TodaySales";
import SalesChart from "../components/Dashboard/Chart";

function DashboardPage() {
  return (
    <main>
      <DashboardHeader />
      <section className="w-full flex border-2">
        <TodaySales />
        <SalesChart />
      </section>
    </main>
  );
}

export default DashboardPage;
