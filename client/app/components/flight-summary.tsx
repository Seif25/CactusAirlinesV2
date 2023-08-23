import { NextPage } from "next";
import Countries from "../static/countries";
import moment from "moment";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

interface Props {
  from: string;
  to: string;
  departureDate: Date | null;
  returnDate: Date | null;
  trip: string;
  adult: number;
  child: number;
  flightClass: string;
  setBrowse: any;
}

const FlightSummary: NextPage<Props> = (props) => {
  return (
    <div
      id="browse"
      className="bg-[#FFEACE] shadow-sm shadow-[#534439] w-full h-12 rounded-md p-5 flex items-center justify-evenly"
    >
      <h3>
        {Countries.filter((country) => country.label === props.from)[0].code}
      </h3>
      <FaPlane className="text-[#005B48]" />
      <h3>
        {Countries.filter((country) => country.label === props.to)[0].code}
      </h3>
      <h3>
        {moment(props.departureDate).format("ddd, DD MMM")} -{" "}
        {moment(props.returnDate).format("ddd, DD MMM")}
      </h3>
      <h3>{props.trip}</h3>
      <h3>
        {props.adult} Adult, {props.child} Child
      </h3>
      <h3>{props.flightClass}</h3>
      <button
        onClick={() => props.setBrowse(false)}
        className="hidden bg-[#005B48] h-10 lg:flex items-center justify-between p-3 rounded-md gap-3 text-white w-10"
      >
        <AiOutlineClose className="text-white transition ease-in-out delay-75 duration-150 hover:scale-125" />
      </button>
    </div>
  );
};

export default FlightSummary;
