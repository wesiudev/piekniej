"use client";
import Link from "next/link";
import { FaBlog, FaClock, FaHome, FaPhone } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
export const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  setTimeout(() => {
    setPopupOpen(true);
  }, 5000);
  return (
    <div className="w-full bg-rose-300 flex justify-center flex-row z-50 overflow-hidden pb-3">
      <div className="relative flex flex-col lg:flex-row lg:w-[90vw] justify-between mx-auto pt-12 sm:py-12">
        <div className="w-max flex flex-col mx-auto h-max ">
          <span className="text-[7rem] lg:text-[9rem] font-pars text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-gray-500 to-red-400 overflow-visible w-max pb-3 sm:pb-6 pr-3">
            Piękniej
          </span>
          <span className="text-lg lg:text-2xl font-sans italic bg-clip-text bg-gradient-to-r from-red-600 via-gray-500 to-rose-500 text-transparent w-max -mt-12 ml-3 lg:ml-0">
            Manicure by Anna Żebrowska
          </span>
        </div>
        <div className="z-50 fixed lg:relative bottom-0 left-[50%] -translate-x-[50%] lg:left-0 lg:translate-x-0 flex flex-row justify-between w-screen lg:w-max lg:justify-start lg:items-end lg:gap-x-3 items-center h-max lg:h-full pt-6 lg:pt-0 font-sans text-white lg:flex-wrap mx-auto">
          <Link
            href="/"
            className="italic py-2 sm:py-3 px-3 bg-rose-500 text-2xl lg:text-lg w-full lg:w-max text-center flex flex-col sm:flex-row items-center justify-center lg:border-2 lg:border-transparent lg:hover:border-white"
          >
            <FaPhone className="mr-1" /> <span>Kontakt</span>
          </Link>
          <Link
            href="/"
            className="italic py-2 sm:py-3 px-3 bg-rose-500 text-2xl lg:text-lg w-full lg:w-max text-center flex flex-col sm:flex-row items-center justify-center lg:border-2 lg:border-transparent lg:hover:border-white"
          >
            <FaHome className="mr-1" />
            <span>Home</span>
          </Link>
          <Link
            href="/"
            className="italic py-2 sm:py-3 px-3 bg-rose-500 text-2xl lg:text-lg w-full lg:w-max text-center flex flex-col sm:flex-row items-center justify-center lg:border-2 lg:border-transparent lg:hover:border-white"
          >
            <FaBlog className="mr-1" /> <span>Blog</span>
          </Link>
        </div>
      </div>
      {isPopupOpen && (
        <div className="hidden pt-6 lg:pt-0 lg:flex sm:justify-end sm:items-end h-full flex-col text-white w-max font-sans text-xl z-10 fixed right-12 bottom-8">
          <div className="bg-rose-400 px-6 py-4 rounded-lg shadow-sm shadow-black relative">
            <button onClick={() => setPopupOpen(false)}>
              <AiFillCloseCircle className="absolute right-[20px] top-[19px] w-6 h-6 cursor-pointer" />
            </button>
            <span className="">Wolne terminy - </span>
            <button className="mt-3 flex flex-row items-center w-max bg-rose-600 p-3 border-2 border-transparent sm:hover:border-white">
              <FaClock className="mr-1" /> Zarezerwuj online
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
