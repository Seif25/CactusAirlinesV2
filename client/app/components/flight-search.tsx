"use client";

import { MdFlightClass } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaPlane, FaRegClock } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Select from "./select";
import { useState } from "react";
import DatePicker from "./date-picker";
import Countries from "../static/countries";
import Autocomplete from "./input/autocomplete";
import PersonSelect from "./input/person-select";
import moment from "moment";
import FlightSummary from "./flight-summary";

const FlightSearch = () => {
  const [trip, setTrip] = useState("Round-trip");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [flightClass, setFlightClass] = useState("Economy");

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [from, setFrom] = useState("Egypt");
  const [to, setTo] = useState("");

  const [browse, setBrowse] = useState(false);

  const onChange = (dates: (Date | null)[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleBrowse = () => {
    setBrowse(true);
  };

  return (
    <div className="p-5 lg:p-0 lg:pb-20">
      {!browse ? (
        <div
          id="book"
          className="bg-[#dde8e0] shadow-sm shadow-[#085242] w-full h-auto rounded-md"
        >
          <div className="flex items-center justify-between lg:gap-10 bg-[#98B0A8] bg-opacity-20 rounded-t-md">
            <div className="flex items-center justify-center p-5 bg-[#085242] text-white h-full w-[250px] rounded-tl-md">
              <button className="text-sm lg:text-lg">Book a Flight</button>
            </div>
            <div className="flex items-center justify-center p-5 h-full w-[250px]">
              <button className="text-sm lg:text-lg">Manage / Check-in</button>
            </div>
            <div className="flex items-center justify-center p-5 h-full w-[250px] rounded-tr-md">
              <button className="text-sm lg:text-lg">Track Flight</button>
            </div>
          </div>
          <div className="p-3">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-5">
              {/* Select Group */}
              <div className="flex flex-col lg:flex-row lg:items-center w-auto p-2">
                <div className="lg:border-r lg:border-[#085242] lg:border-opacity-20 lg:pr-5">
                  <Select
                    options={["Round-trip", "One-way"]}
                    icon={<BiSolidPlaneAlt className="text-md" />}
                    value={trip}
                    setValue={setTrip}
                  />
                </div>
                <div className="lg:border-r lg:border-[#085242] lg:border-opacity-20 lg:pr-5 lg:pl-5">
                  <PersonSelect
                    icon={<BsFillPersonFill className="text-md" />}
                    value1={adult}
                    value2={child}
                    setValue1={setAdult}
                    setValue2={setChild}
                  />
                </div>
                <div className="lg:pl-5">
                  <Select
                    options={["Economy", "Business", "First"]}
                    icon={<MdFlightClass className="text-md" />}
                    value={flightClass}
                    setValue={setFlightClass}
                  />
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-end w-full">
                <button
                  className="hidden bg-[#005B48] h-10 lg:flex items-center justify-between p-3 rounded-md gap-3 text-white w-auto"
                  onClick={handleBrowse}
                >
                  {/* <h3 className="text-sm">Browse</h3> */}
                  <FiSearch className="text-[#98B0A8] text-xl transition ease-in-out delay-75 duration-150 hover:scale-125" />
                </button>
              </div>
            </div>
            <div className="rounded-md w-full h-full lg:h-auto flex flex-col lg:flex-row lg:items-center gap-5 lg:px-2">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-5 h-auto w-auto bg-[#085242] bg-opacity-10 p-2 rounded-md">
                <Autocomplete
                  options={Countries.map((option) => option.label)}
                  id="from-autocomplete"
                  placeholder="Egypt"
                  defaultValue="Egypt"
                  setValue={setFrom}
                  width={"250px"}
                  label="from"
                />
                <FaPlane className="text-[#005B48] hover:animate-spin" />
                <Autocomplete
                  options={Countries.map((option) => option.label)}
                  id="from-autocomplete"
                  placeholder="Anywhere"
                  setValue={setTo}
                  width={"250px"}
                  label="to"
                />
              </div>
              <div className="border-t-2 lg:border-t-0 lg:border-l-2 w-auto border-[#085242] border-opacity-20 lg:pl-5 pt-5 lg:pt-0 flex items-center">
                <div className="bg-[#085242] bg-opacity-10 p-2 rounded-md w-full flex flex-col lg:flex-row items-center">
                  <DatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="lg:hidden flex items-center justify-end w-full mt-5">
              <button
                className="lg:hidden bg-[#005B48] text-[#98B0A8] h-10 px-10 w-full flex items-center justify-center rounded-md gap-3"
                onClick={handleBrowse}
              >
                Browse Flights <FiSearch className="text-[#98B0A8] text-xl" />
              </button>
            </div>
            <div className="flex items-center justify-end mt-5 p-5 border-t border-[#085242] border-opacity-20">
              <h3 className="font-bold text-sm text-[#98B0A8]">
                Looking for travel ideas?{" "}
                <a href="#" className="hover:underline text-[#005B48]">
                  Explore Map
                </a>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <FlightSummary
            from={from}
            to={to}
            departureDate={startDate}
            returnDate={endDate}
            trip={trip}
            adult={adult}
            child={child}
            flightClass={flightClass}
            setBrowse={setBrowse}
          />
          {/* Flights */}
          <div className="bg-[#dde8e0] shadow-sm shadow-[#085242] w-full h-auto rounded-md p-5 flex flex-col gap-2 px-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-evenly gap-5">
                <h3>
                  {
                    Countries.filter((country) => country.label === from)[0]
                      .label
                  }
                </h3>
                <FaPlane className="text-[#005B48]" />
                <h3>
                  {Countries.filter((country) => country.label === to)[0].label}
                </h3>
              </div>
              <div className="flex items-center justify-evenly gap-5">
                <h3>11:30 AM</h3>
                <FaRegClock className="text-[#005B48]" />
                <h3>02:48 PM</h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <h3 className="font-light text-xs">Flight</h3>
                <h3 className="font-bold text-sm">CA192</h3>
              </div>
              <div>
                <h3 className="font-light text-xs">Terminal</h3>
                <h3 className="font-bold text-sm">2</h3>
              </div>
              <div>
                <h3 className="font-light text-xs">Gate</h3>
                <h3 className="font-bold text-sm">14H</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
