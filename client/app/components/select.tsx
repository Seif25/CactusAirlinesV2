"use client";

import { NextPage } from "next";
import { MdFlightClass } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import {
  BiSolidDownArrow,
  BiSolidPlaneAlt,
  BiSolidUpArrow,
} from "react-icons/bi";
import { useState } from "react";

interface Props {
  options: string[] | number[];
  value: string | number;
  setValue: any;
  icon: any;
}

const Select: NextPage<Props> = (props) => {
  const { options, value, setValue, icon } = props;
  const [open, setOpen] = useState(false);

  const handleChange = (e: any) => {
    setValue(e.target.innerText);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen((oldValue) => !oldValue);
  };

  const handleClose = (e: any) => {
     setOpen(false);
  };

  return (
    <div className="h-10 w-[150px] text-[#534439]">
      <button
        onClick={handleOpen}
        // onBlur={handleClose}
        tabIndex={0}
        className="dropdown-btn absolute flex items-center justify-center gap-2 rounded-md p-2 font-light hover:bg-[#005B48] hover:bg-opacity-10 h-10 w-[150px]"
      >
        {icon} {value}{" "}
        {!open ? (
          <BiSolidDownArrow className="text-xs" />
        ) : (
          <BiSolidUpArrow className="text-xs" />
        )}
      </button>
      <menu
        className={`relative rounded-md p-5 bg-white w-60 top-12 ${
          !open && "hidden"
        } dropdown`}
      >
        <ul className="flex flex-col gap-2 w-auto">
          {options.map((option, index) => (
            <li
              className="hover:bg-[#005B48] hover:bg-opacity-10 rounded-md p-2 cursor-pointer"
              key={`o-${index}`}
              onClick={handleChange}
            >
              {option}
            </li>
          ))}
        </ul>
      </menu>
    </div>
  );
};

export default Select;
