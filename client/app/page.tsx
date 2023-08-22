"use client";

import Image from "next/image";

import { MdFlightClass } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaPlane } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Select from "./components/select";
import { useState } from "react";
import moment from "moment";
import DatePicker from "./components/date-picker";
import Countries from "./static/countries";
import Autocomplete from "./components/input/autocomplete";
import PersonSelect from "./components/input/person-select";


export default function Home() {
  const [trip, setTrip] = useState("Round-trip");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [flightClass, setFlightClass] = useState("Economy");

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [from, setFrom] = useState("Egypt");
  const [to, setTo] = useState("");

  const onChange = (dates: (Date | null)[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex flex-col gap-20 py-10 lg:p-16">
      {/* Hero */}
      <div className="flex flex-col lg:flex-row items-center gap-10 h-[330px]">
        <div className="flex flex-col justify-center h-full">
          <div className="absolute p-5">
            <h1 className="text-6xl font-extrabold w-64 text-[#005B48]">
              PLANNING A TRIP?
            </h1>
            <p className="font-light w-[350px] text-[#FFEACE] pb-5">
              Get ready to fly with Cactus Airlines. <br /> A world of comfort
              and luxury awaits you.
            </p>
            <button className="bg-[#005B48] rounded-md w-28 h-10 text-white transition ease-in-out duration-150 hover:scale-110">
              Book Now
            </button>
          </div>
          <div className="relative -z-10 top-[20%]">
            <Image
              src={"/gradient.jpg"}
              alt="plane"
              width={500}
              height={500}
              loading="lazy"
              className="object-fill rounded-b-md"
            />
          </div>
        </div>
      </div>
      {/* Flight Search */}
      <div className="p-5 lg:p-0 lg:pb-20">
        <div
          id="browse"
          className="bg-[#FFEACE] shadow-sm shadow-[#534439] w-full h-auto rounded-md p-5"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-5">
            {/* Select Group */}
            <div className="flex flex-col lg:flex-row lg:items-center w-auto">
              <div className="lg:border-r lg:border-[#534439] lg:border-opacity-20 pr-5">
                <Select
                  options={["Round-trip", "One-way"]}
                  icon={<BiSolidPlaneAlt className="text-md" />}
                  value={trip}
                  setValue={setTrip}
                />
              </div>
              <div className="lg:border-r lg:border-[#534439] lg:border-opacity-20 pr-5 pl-5">
                <PersonSelect
                  icon={<BsFillPersonFill className="text-md" />}
                  value1={adult}
                  value2={child}
                  setValue1={setAdult}
                  setValue2={setChild}
                />
              </div>
              <div className="pl-5">
                <Select
                  options={["Economy", "Business", "First"]}
                  icon={<MdFlightClass className="text-md" />}
                  value={flightClass}
                  setValue={setFlightClass}
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#534439]">
                Looking for travel ideas?{" "}
                <a href="#" className="hover:underline text-[#005B48]">
                  Explore Map
                </a>
              </h3>
            </div>
          </div>
          <div className="bg-[#534439] bg-opacity-10 rounded-md w-full h-full lg:h-[70px] flex flex-col lg:flex-row lg:items-center justify-evenly gap-5 p-5 lg:px-2">
            <div className="flex flex-col lg:flex-row items-center justify-evenly gap-5 w-auto">
              <Autocomplete
                options={Countries.map((option) => option.label)}
                id="from-autocomplete"
                placeholder="Egypt"
                defaultValue="Egypt"
                setValue={setFrom}
              />
              <FaPlane className="text-[#005B48] hover:animate-spin" />
              <Autocomplete
                options={Countries.map((option) => option.label)}
                id="from-autocomplete"
                placeholder="Anywhere"
                setValue={setTo}
              />
            </div>
            <div className="border-t-2 lg:border-t-0 lg:border-l-2 w-auto border-[#534439] border-opacity-20 lg:pl-10 pt-5 lg:pt-0 flex items-center justify-center">
              <DatePicker
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
              />
            </div>
            <div>
              <button className="hidden bg-[#005B48] h-10 w-10 lg:flex items-center justify-center rounded-md">
                <FiSearch className="text-white text-xl transition ease-in-out delay-75 duration-150 hover:scale-125" />
              </button>
              <button className="lg:hidden bg-[#005B48] text-white h-10 px-10 w-full flex items-center justify-center rounded-md gap-3">
                Browse Flights <FiSearch className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
