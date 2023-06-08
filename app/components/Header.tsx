"use client";
import Link from "next/link";
import { FaArrowLeft, FaBlog, FaClock, FaHome, FaPhone } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { Contact } from "./contact";
export const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(true);
  const [isContactOpen, setContactOpen] = useState<boolean>(false);
  return (
    <div className="w-full bg-rose-300 flex justify-center flex-row  pb-3">
      <div className="relative flex flex-col lg:flex-row w-[90vw] justify-between mx-auto pt-12 sm:py-6">
        <div className="w-full">
          <Link
            href="/"
            className="w-max lg:w-max flex flex-col mx-auto lg:mx-0 h-max"
          >
            <span className="text-[6.5rem] lg:text-[9rem] font-pars text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-gray-500 to-red-400 overflow-visible w-max pb-3 sm:pb-6 pr-3">
              Piękniej
            </span>
            <span className="text-lg lg:text-2xl font-sans italic bg-clip-text bg-gradient-to-r from-red-600 via-gray-500 to-rose-500 text-transparent w-max -mt-11 sm:-mt-14 lg:-mt-16 lg:ml-0">
              Manicure by Anna Żebrowska
            </span>
          </Link>
        </div>
        <div className="z-[1000] sm:z-50 fixed sm:relative bottom-0 left-[50%] -translate-x-[50%] lg:left-0 lg:translate-x-0 w-screen sm:w-[90vw] sm:mt-12 lg:mt-0 mx-auto lg:w-max">
          <div className="bg-rose-500 lg:bg-transparent flex flex-row justify-between lg:w-max lg:justify-start lg:items-end lg:gap-x-3 items-center h-max lg:h-full lg:pt-6 font-sans text-white lg:flex-wrap mx-auto">
            <button
              onClick={() => setContactOpen(!isContactOpen)}
              className="hover:bg-rose-400 lg:rounded-md italic pt-3 pb-2 sm:py-3 px-3 lg:px-6 bg-rose-500 text-xl lg:text-lg w-full lg:w-max text-center flex flex-col sm:flex-row items-center justify-center lg:border-2 lg:border-transparent lg:hover:border-white"
            >
              {!isContactOpen ? (
                <FaPhone className="sm:mr-1" />
              ) : (
                <FaArrowLeft />
              )}
              <span>{!isContactOpen ? "Kontakt" : "Powrót"}</span>
            </button>
            <Link
              href="/"
              className="hover:bg-rose-400 lg:rounded-md italic pt-3 pb-2 sm:py-3 px-3 lg:px-6 bg-rose-500 text-xl lg:text-lg w-full lg:w-max text-center flex flex-col sm:flex-row items-center justify-center lg:border-2 lg:border-transparent lg:hover:border-white"
            >
              <FaHome className="sm:mr-1" />
              <span>Home</span>
            </Link>
            <Link
              href="/"
              className="hover:bg-rose-400 lg:rounded-md italic pt-3 pb-2 sm:py-3 px-3 lg:px-6 bg-rose-500 text-xl lg:text-lg w-full lg:w-max text-center flex flex-col sm:flex-row items-center justify-center lg:border-2 lg:border-transparent lg:hover:border-white"
            >
              <FaBlog className="sm:mr-1" /> <span>Blog</span>
            </Link>
          </div>
        </div>
      </div>
      {isPopupOpen && !isContactOpen && (
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

      <Contact setContactOpen={setContactOpen} isContactOpen={isContactOpen} />
    </div>
  );
};
