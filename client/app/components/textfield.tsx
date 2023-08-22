import { NextPage } from "next";
import TextFieldType from "../types/TextFieldType";

const TextField: NextPage<TextFieldType> = (props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {props.label && (
        <label htmlFor={props.id} className="font-bold text-sm w-24">
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="w-full p-2 bg-transparent border border-[#534439] rounded-md text-black focus:ring-2 focus:ring-[#534439] focus:outline-none placeholder:text-black placeholder:pl-2"
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextField;
