"use client";

import { NextPage } from "next";
import AutocompleteType from "@/app/types/AutocompleteType";
import { useState, useRef } from "react";

const Autocomplete: NextPage<AutocompleteType> = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputField = useRef<HTMLInputElement>(null);

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
      if (inputField.current) inputField.current.value = e.target.innerText;
    }
    setOpen(false);
  };

  return (
    <div
      className="h-16 text-[#085242]"
      style={{
        width: props.width,
      }}
    >
      <div className="flex flex-col absolute gap-1">
        <label htmlFor={props.id} className="text-xs font-bold text-[#085242] uppercase">{props.label}</label>
        <input
          type={"text"}
          id={props.id}
          placeholder={props.placeholder}
          onFocus={handleOpen}
          onBlur={handleClose}
          className="p-2 bg-transparent border border-[#085242] rounded-md text-black focus:ring-2 focus:ring-[#085242] focus:outline-none placeholder:text-[#98B0A8] placeholder:pl-2"
          defaultValue={props.defaultValue}
          onChange={handleChange}
          ref={inputField}
          disabled={props.disabled}
          style={{
            width: props.width,
          }}
        />
      </div>
      <menu
        className={`relative rounded-md p-5 bg-[#085242] shadow-sm shadow-[#BAA89B] top-16 ${
          !open && "hidden"
        } dropdown z-20 mb-10 h-28 overflow-y-scroll`}
        style={{
          width: props.width,
        }}
      >
        <ul className="flex flex-col gap-2 w-auto h-auto text-white">
          {props.options
            .filter((to_filter) =>
              to_filter.toLowerCase().includes(search.toString().toLowerCase())
            )
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
