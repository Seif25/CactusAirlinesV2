"use client";

import Image from "next/image";
import FlightSearch from "./components/flight-search";
import Hero from "./components/display/hero";
import UpcomingFlight from "./components/display/upcoming-flight";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-10 lg:p-16 w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 h-[330px] px-5 lg:px-0">
        {/* Hero */}
        <div className="w-fit">
          <Hero />
        </div>
        <div className="flex items-center justify-end w-fit lg:w-[80%]">
          <UpcomingFlight />
        </div>
      </div>
      {/* Flight Search */}
      <div className="mt-40 lg:mt-0">
        <FlightSearch />
      </div>
    </div>
  );
}
