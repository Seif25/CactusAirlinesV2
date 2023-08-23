"use client";

import { CalendarContainer } from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { NextPage } from "next";
import { getDate, getMonth, getYear } from "date-fns";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: (Date | null)[]) => void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePicker: NextPage<Props> = (props) => {
  const MyContainer = ({
    className,
    children,
  }: {
    className: any;
    children: any;
  }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const renderDayContents = (day: any, date: any) => {
    return (
      <span className="rounded-full bg-[#C28B5E] p-2 bg-opacity-10 checked:bg-red-600">
        {getDate(date)}
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="data-picker" className="text-xs font-bold text-[#085242] uppercase">departure - return</label>
      <ReactDatePicker
        id="date-picker"
        selected={props.startDate}
        startDate={props.startDate}
        endDate={props.endDate}
        onChange={props.onChange}
        minDate={new Date()}
        dateFormat={"E, d MMM"}
        selectsRange={true}
        className="p-2 bg-transparent flex items-center justify-center w-[250px] lg:w-[400px] rounded-md border border-[#534439] text-black focus:ring-2 focus:ring-[#534439] focus:outline-none"
        closeOnScroll={true}
        renderDayContents={renderDayContents}
        popperPlacement="top-end"
        weekDayClassName={() => "bg-[#BAA89B] font-bold"}
        monthClassName={() => "bg-[#BAA89B]"}
        calendarClassName="calendar"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [5, 10],
            },
          },
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "viewport",
              tether: false,
              altAxis: true,
            },
          },
        ]}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between w-full p-2 px-5 bg-[#BAA89B] font-bold rounded-md">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <BiSolidLeftArrow />
            </button>
            <h3 className="font-bold">
              {months[getMonth(date)]} {getYear(date)}
            </h3>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <BiSolidRightArrow />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default DatePicker;
