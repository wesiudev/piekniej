"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import { FaCalendarCheck } from "react-icons/fa";

export const Reserve = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="font-sans bg-gradient-to-b bg-rose-300 w-full h-max flex justify-center pt-12 pb-24 ">
      <div className="w-3/4 text-white ">
        <div className="flex flex-row items-center text-4xl italic mt-12">
          <FaCalendarCheck className="mr-1 mb-1" />
          Rezerwacje online
        </div>
        <div className="italic font-light text-xl lg:w-2/3 pt-6 flex flex-col sm:flex-row items-center">
          <span className="pr-6 lg:text-3xl not-italic">
            Na stronie istnieje możliwość zarezerwowania spotkania poprzez
            wybranie dogodnego terminu oraz skontaktowaniem się w celu ustalenia
            dokładnej lokalizacji. {"(Możliwy dojazd do klietnów)"}
          </span>
        </div>
      </div>
    </div>
  );
};
