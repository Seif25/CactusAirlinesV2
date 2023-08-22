"use client";

import { NextPage } from "next";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react";

interface Props {
  setValue1: any;
  setValue2: any;
  icon: any;
  value1: number;
  value2: number;
}

const PersonSelect: NextPage<Props> = (props) => {
  const { setValue1, setValue2, value1, value2, icon } = props;

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("")

  const handleOpen = () => {
    setOpen((oldValue) => !oldValue);
  };

  const handleClose = (e: any) => {
    setOpen(false);
  };

  const handleAddValue1 = () => {
    setValue1((oldValue: number) => oldValue + 1);
  };

  const handleSubValue1 = () => {
    if (value1 > 0) setValue1((oldValue: number) => oldValue - 1);
  };

  const handleAddValue2 = () => {
    setValue2((oldValue: number) => oldValue + 1);
  };

  const handleSubValue2 = () => {
    if (value2 > 0) setValue2((oldValue: number) => oldValue - 1);
  };

  const handleConfirm = () => {
    setSelection(`${value1} Adult, ${value2} Child`);
    setOpen(false);
  }
  return (
    <div className="h-10 w-[200px] text-[#534439]">
      <button
        onClick={handleOpen}
        tabIndex={0}
        className="dropdown-btn absolute flex items-center justify-between gap-2 rounded-md p-2 font-light hover:bg-[#005B48] hover:bg-opacity-10 h-10 w-[200px]"
      >
        {icon} {selection ? 
            <h3 className="font-light text-sm">{selection}</h3>
        :"Passengers"}
        {!open ? (
          <BiSolidDownArrow className="text-xs" />
        ) : (
          <BiSolidUpArrow className="text-xs" />
        )}
      </button>
      <menu
        className={`relative rounded-md p-5 bg-[#534439] shadow-sm shadow-[#BAA89B] w-60 top-12 ${
          !open && "hidden"
        } dropdown z-20 mb-10`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-white">Adult</h3>
            <div className="flex items-center justify-evenly gap-5">
              <button
                className={`flex items-center justify-center rounded-md bg-[#BAA89B] bg-opacity-75 text-[#534439] text-lg h-10 p-2 hover:bg-opacity-100 disabled:bg-opacity-75 w-10`}
                onClick={handleSubValue1}
                disabled={value1 === 0}
              >
                -
              </button>
              <h3 className="text-white text-sm font-bold">{value1}</h3>
              <button
                className="flex items-center justify-center rounded-md bg-[#BAA89B] bg-opacity-75 text-[#534439] text-lg h-10 p-2 hover:bg-opacity-100 w-10"
                onClick={handleAddValue1}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-white">Child</h3>
            <div className="flex items-center justify-evenly gap-5">
              <button
                className={`flex items-center justify-center rounded-md bg-[#BAA89B] bg-opacity-75 text-[#534439] text-lg h-10 p-2 hover:bg-opacity-100 disabled:bg-opacity-75 w-10`}
                onClick={handleSubValue2}
                disabled={value2 === 0}
              >
                -
              </button>
              <h3 className="text-white text-sm font-bold">{value2}</h3>
              <button
                className="flex items-center justify-center rounded-md bg-[#BAA89B] bg-opacity-75 text-[#534439] text-lg h-10 p-2 hover:bg-opacity-100 w-10"
                onClick={handleAddValue2}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="rounded-md bg-[#BAA89B] bg-opacity-75 text-[#534439] p-2 hover:bg-opacity-100 font-bold" onClick={handleConfirm}>
              Confirm Choices
            </button>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default PersonSelect;
