"use client";

import { addClientRequest } from "@/firebase";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
export default function FinalForm() {
  const searchParams = useSearchParams();
  const drive = searchParams.get("drive");
  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const [isOk, setOk] = useState(false);
  //form handling
  const [focus, setFocus] = useState("");
  const [data, setData] = useState({
    email: "",
    fName: "",
    sName: "",
    street: "",
    city: "",
    pNumber: "",
  });
  const [isError, setError] = useState({
    email: false,
    fName: false,
    sName: false,
    street: false,
    city: false,
  });

  function sendEmail() {
    const isEmailValid = data.email.includes("@") && data.email.includes(".");
    const isFNameValid = !!data.fName.trim();
    const isSNameValid = !!data.sName.trim();
    const isStreetValid = !!data.street.trim();
    const isCityValid = !!data.city.trim();

    setError({
      email: !isEmailValid,
      fName: !isFNameValid,
      sName: !isSNameValid,
      street: !isStreetValid,
      city: !isCityValid,
    });

    if (
      isEmailValid &&
      isFNameValid &&
      isSNameValid &&
      isStreetValid &&
      isCityValid
    ) {
      // All fields are valid, proceed with sending the email or any other necessary action.
      // You can perform the desired action here.
      // For example, you might want to send the data to a server or show a success message.

      // After successful action, you may want to reset the form by clearing the data.
      setData({
        email: "",
        fName: "",
        sName: "",
        street: "",
        city: "",
        pNumber: "",
      });
    } else {
      // Some fields are invalid, display an error message or take appropriate action.
    }
  }
  return (
    <div className="w-[90vw] mx-auto pb-12 pt-12 lg:pt-0 relative">
      {isOk && (
        <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-max h-max p-6 bg-black z-[1500] flex flex-col rounded-md">
          <div className=" text-white">
            Dziękuję za rezerwacje. Odezwę się do ciebie w przeciągu 24 godzin!
          </div>
          <Link className="bg-red-500 p-3 rounded-lg mx-auto" href="/">
            Zakończ
          </Link>
        </div>
      )}
      <h1 className="bg-rose-500 text-3xl md:text-5xl p-3 rounded-lg text-center font-bold hidden lg:block">
        Podsumowanie
      </h1>
      <div className="grid grid-cols-1 lg:flex flex-row  bg-rose-400 p-6 rounded-lg lg:mt-6">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl rounded-lg mb-6 md:mb-12 mt:12 md:mt-0 leading-relaxed text-white">
            Szczegóły
          </h2>

          <div className="text-2xl w-full text-white">
            <span className="font-bold text-3xl "> Typ usługi:</span> <br />
            <span className="underline underline-offset-2">{name}</span>
          </div>
          <div className="text-2xl w-full mt-3 text-white">
            <span className="font-bold text-3xl "> Data: </span>
            <br />
            <span className="underline underline-offset-2">{date}</span>
          </div>

          <div className="text-2xl mb-6 w-full mt-3 text-white">
            <span className="font-bold text-3xl "> Dojazd: </span>
            <br />
            <span className="underline underline-offset-2">
              {drive === "tak" ? "Tak" : "Nie"}
            </span>
          </div>
        </div>

        {/* form */}
        {/* first row */}
        <div className="flex flex-col w-full h-max lg:ml-48">
          <h2 className="text-5xl sm:text-6xl text-center md:text-left rounded-lg mb-6 md:mb-12 mt:12 md:mt-0 leading-relaxed text-white">
            Informacje
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-3 w-full mt-6 md:mt-0">
            <div className="relative h-max w-full">
              <input
                className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
                type="email"
                onFocusCapture={() => setFocus("email")}
                onBlur={() => setFocus("")}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
              />
              <div
                onClick={() => setFocus("email")}
                className={`absolute top-[50%] flex flex-row items-center cursor-pointer ${
                  focus === "email" || data.email !== ""
                    ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
                    : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
                }
          `}
              >
                <FaEnvelope
                  className={`mr-1 ${
                    focus === "email" || data.email !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                />
                Email
              </div>
            </div>

            {/* Second row */}

            {/* Input for "Imię" */}
            <div className="relative h-max w-full mt-10 sm:mt-0">
              <input
                className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
                type="text"
                onFocusCapture={() => setFocus("fName")}
                onBlur={() => setFocus("")}
                onChange={(e) => setData({ ...data, fName: e.target.value })}
                value={data.fName}
              />
              <div
                onClick={() => setFocus("fName")}
                className={`absolute top-[50%] flex flex-row items-center cursor-pointer ${
                  focus === "fName" || data.fName !== ""
                    ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
                    : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
                }`}
              >
                <FaUser
                  className={`mr-1 ${
                    focus === "fName" || data.fName !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                />
                <span
                  className={`mr-1 ${
                    focus === "fName" || data.fName !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                >
                  Imię
                </span>
              </div>
            </div>

            {/* Third row (similarly implement other inputs) */}

            {/* Input for "Nazwisko" */}
            <div className="relative h-max w-full mt-10">
              <input
                className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
                type="text"
                onFocusCapture={() => setFocus("sName")}
                onBlur={() => setFocus("")}
                onChange={(e) => setData({ ...data, sName: e.target.value })}
                value={data.sName}
              />
              <div
                onClick={() => setFocus("sName")}
                className={`absolute top-[50%] flex flex-row items-center cursor-pointer ${
                  focus === "sName" || data.sName !== ""
                    ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
                    : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
                }`}
              >
                <FaUser
                  className={`mr-1 ${
                    focus === "sName" || data.sName !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                />
                <span
                  className={`mr-1 ${
                    focus === "sName" || data.sName !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                >
                  Nazwisko
                </span>
              </div>
            </div>
            {/* Fourth row */}

            {/* Input for "Ulica" */}
            <div className="relative h-max w-full mt-10">
              <input
                className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
                type="text"
                onFocusCapture={() => setFocus("street")}
                onBlur={() => setFocus("")}
                onChange={(e) => setData({ ...data, street: e.target.value })}
                value={data.street}
              />
              <div
                onClick={() => setFocus("street")}
                className={`absolute top-[50%] flex flex-row items-center cursor-pointer ${
                  focus === "street" || data.street !== ""
                    ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
                    : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
                }`}
              >
                <HiLocationMarker
                  className={`mr-1 ${
                    focus === "street" || data.street !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                />
                <span
                  className={`mr-1 ${
                    focus === "street" || data.street !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                >
                  Ulica
                </span>
              </div>
            </div>

            {/* Fifth row */}

            {/* Input for "Miasto" */}
            <div className="relative h-max w-full mt-10">
              <input
                className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
                type="text"
                onFocusCapture={() => setFocus("city")}
                onBlur={() => setFocus("")}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                value={data.city}
              />
              <div
                onClick={() => setFocus("city")}
                className={`absolute top-[50%] flex flex-row items-center cursor-pointer ${
                  focus === "city" || data.city !== ""
                    ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
                    : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
                }`}
              >
                <HiLocationMarker
                  className={`mr-1 ${
                    focus === "city" || data.city !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                />
                <span
                  className={`mr-1 ${
                    focus === "city" || data.city !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                >
                  Miasto
                </span>
              </div>
            </div>

            {/* Sixth row */}

            {/* Input for "Numer telefonu" */}
            <div className="relative h-max w-full mt-10">
              <input
                className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
                type="text"
                onFocusCapture={() => setFocus("pNumber")}
                onBlur={() => setFocus("")}
                onChange={(e) => setData({ ...data, pNumber: e.target.value })}
                value={data.pNumber}
              />
              <div
                onClick={() => setFocus("pNumber")}
                className={`absolute top-[50%] flex flex-row items-center cursor-pointer select-none ${
                  focus === "pNumber" || data.pNumber !== ""
                    ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
                    : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
                }`}
              >
                <FaPhone
                  className={`mr-1 ${
                    focus === "pNumber" || data.pNumber !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                />
                <span
                  className={`mr-1 ${
                    focus === "pNumber" || data.pNumber !== ""
                      ? "text-white"
                      : "text-rose-500"
                  }`}
                >
                  Numer telefonu
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setOk(true);
              addClientRequest({
                data: { data, dojazd: drive, dzien: date, usluga: name },
              });
            }}
            className="bg-green-500 rounded-lg p-3 w-full md:w-2/3 lg:w-1/3  mt-12 text-xl text-white mx-auto"
          >
            Rezerwuję!
          </button>
        </div>
      </div>
    </div>
  );
}
