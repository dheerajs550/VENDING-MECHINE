import React from "react";
// import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const DateRangePicker = () => {
  return (
    <>
    <div className=" w-150 flex justify-between items-center p-4 rounded-lg">
    <h1 className="text-teal-700 text-2xl ">Select Date</h1>
    <p className="text-teal-700 text-1xl">Fore</p>
    <div className="flex items-center border border-teal-600 rounded-full bg-white px-3 py-2" >
    <input className="outline-none focus:outline-none focus:ring-0" type="date" id="birthday" name="birthday"></input>
    </div>
    <p className="text-teal-700 text-1xl">Fore</p>
    <div className="flex items-center border border-teal-600 rounded-full bg-white px-3 py-2" >
    <input className="outline-none focus:outline-none focus:ring-0" type="date" id="birthday" name="birthday"></input>
    </div>
    </div>


    </>
  );
};

export default DateRangePicker;
