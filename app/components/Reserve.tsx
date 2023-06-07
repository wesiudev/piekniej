"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import { FaCalendarCheck, FaCheckSquare } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

export const Reserve = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="font-sans bg-gradient-to-b bg-rose-300 w-full h-max flex items-center py-24">
      <div className="w-full lg:w-[80vw] text-white  bg-yellow-900 py-12 lg:rounded-r-full">
        <div className="mx-auto pl-10 sm:pl-[12vw] pr-12">
          <div className="flex flex-row items-center text-3xl italic w-max">
            <FaCalendarCheck className="mr-1 mb-1" />
            Rezerwacje online
          </div>
          <div className="italic font-light text-2xl w-full lg:w-4/5 pt-6 flex flex-col sm:flex-row items-center relative">
            <span className="lg:pr-6 text-xl lg:text-3xl not-italic relative">
              Na stronie istnieje możliwość zarezerwowania spotkania poprzez
              wybranie dogodnego terminu oraz skontaktowanie się w celu
              ustalenia dokładnej lokalizacji. Możliwy jest również dojazd do
              klientów.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
