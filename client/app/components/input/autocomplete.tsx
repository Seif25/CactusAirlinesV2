"use client";

import { NextPage } from "next";
import AutocompleteType from "@/app/types/AutocompleteType";
import { useState, useRef } from "react";

const Autocomplete: NextPage<AutocompleteType> = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputField = useRef<HTMLInputElement>(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e: any) => {
    setOpen(false);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleMouseDown = (e: any) => {
    if (props.setValue) {
      props.setValue(e.target.innerText);
      if(inputField.current) inputField.current.value = e.target.innerText;
    }
    setOpen(false);
  };

  return (
    <div className="h-10 w-[250px] text-[#534439]">
      <input
        type={"text"}
        id={props.id}
        placeholder={props.placeholder}
        onFocus={handleOpen}
        onBlur={handleClose}
        className="w-[250px] p-2 bg-transparent border border-[#534439] rounded-md text-black focus:ring-2 focus:ring-[#534439] focus:outline-none placeholder:text-[#BAA89B] placeholder:pl-2 absolute"
        defaultValue={props.defaultValue}
        onChange={handleChange}
        ref={inputField}
        disabled={props.disabled}
      />
      <menu
        className={`relative rounded-md p-5 bg-[#534439] shadow-sm shadow-[#BAA89B] w-[250px] top-12 ${
          !open && "hidden"
        } dropdown z-20 mb-10 h-28 overflow-y-scroll`}
      >
        <ul className="flex flex-col gap-2 w-auto h-auto text-white">
          {props.options
            .filter((to_filter) => to_filter.toLowerCase().includes(search.toString().toLowerCase()))
            .map((option, index) => (
              <li
                className="hover:bg-[#BAA89B] hover:bg-opacity-10 rounded-md p-2 cursor-pointer"
                key={`o-${index}`}
                onMouseDown={handleMouseDown}
              >
                {option}
              </li>
            ))}
        </ul>
      </menu>
    </div>
  );
};

export default Autocomplete;
