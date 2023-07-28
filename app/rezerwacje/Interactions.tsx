"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { IService } from "../components/ServicesGrid";
import { useIsVisible } from "react-is-visible";
import MonthView from "./MonthView";
import DriveToClient from "./DriveToClient";
import Image from "next/image";

export default function Interactions({ services }: { services: IService[] }) {
  const initialState = {
    name: "",
    time: { month: "", day: "", hour: "" },
    drive: "",
  };

  const [chosenService, setChosenService] = useState(initialState);

  // isVisible
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);

  function setDate(day: any, month: any) {
    setChosenService({
      ...chosenService,
      time: {
        month: month,
        day: day,
        hour: "",
      },
      drive: "",
    });
  }
  function setDriveToClient(arg: string) {
    setChosenService({
      ...chosenService,
      drive: arg,
    });
  }
  function setHour(arg: string) {
    setChosenService({
      ...chosenService,
      time: {
        month: chosenService.time.month,
        day: chosenService.time.day,
        hour: arg,
      },
    });
  }

  //finalize order

  const router = useRouter();

  function finalizeOrder() {
    router.push(
      `/rezerwacje/finalizacja?drive=${chosenService.drive}&name=${
        chosenService.name
      }&date=${
        chosenService.time.month +
        " " +
        chosenService.time.day +
        " " +
        chosenService.time.hour
      }`
    );
  }
  const [isLoading, setLoading] = useState(false);

  function setTimeToRead(time: number) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  }
  return (
    <div className="text-white">
      <h1 className="text-white py-3 text-4xl mt-6 rounded-lg">
        Wybierz usługę
      </h1>
      <div className="w-1 h-1" ref={nodeRef}></div>
      {isLoading && (
        <h1
          className={`bg-rose-500 p-3 text-white font-bold rounded-xl text-3xl mb-6`}
        >
          <div>
            Wybrana usługa:{" "}
            <span className="text-green-400">{chosenService.name}</span>
          </div>
        </h1>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 w-full lg:w-max gap-3 lg:gap-6">
        {services.map((service: any, idx: number) => (
          <button
            onClick={() => {
              setTimeToRead(1800);
              if (!isLoading)
                setChosenService({
                  ...chosenService,
                  name: service.serviceName,
                });
            }}
            key={idx}
            className={`rounded-xl relative lg:w-[250px] bg-rose-500 border-4  hover:border-white ${
              chosenService.name === service.serviceName
                ? "border-white scale-125 duration-500 z-[1000]"
                : "border-rose-300"
            }`}
          >
            <Image
              width={412}
              height={412}
              src={service.serviceImage}
              alt={
                idx % 2 > 0
                  ? "Uslugi Paznokcie Grudziądz Rezerwacja Zdjęcie"
                  : "Usługi Mancicure Grudziądz Rezerwacja Zdjęcie"
              }
              className="rounded-t-md w-full"
            />
            <div className="flex justify-between flex-col">
              <div className="font-sans pb-3 pt-5 mx-auto w-max text-sm sm:text-xl text-white ">
                <span>{service.serviceName}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div
        className={`bg-black bg-opacity-75 fixed w-screen h-screen left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex duration-1000 justify-center ${
          chosenService.name && !isLoading
            ? "z-[1500] opacity-100"
            : "z-[-100] opacity-0"
        }`}
      >
        <div
          className={`bg-rose-500 w-[90%] max-h-[80vh] scrollbar p-3 pt-6 lg:p-6 rounded-xl mt-6 overflow-y-scroll relative `}
        >
          <div className="bg-rose-400 p-3 rounded-lg">
            <h1 className="text-2xl lg:text-4xl font-bold text-center sm:text-left text-white">
              Wybierz termin
            </h1>
            <h2 className="bg-rose-500 lg:bg-rose-400 text-xl sm:text-2xl  text-center lg:text-left border-l-2 border-r-2 lg:border-r-0 lg:border-l-0 border-white py-6 mb-6 sm:mb-0 sm:py-3 mt-6 sm:mt-0">
              Przed wybraniem terminu upewnij się, że masz wtedy chwilę dla
              siebie, aby uniknąć nieporozumień.
            </h2>
          </div>
          <div className="bg-rose-500 text-white flex flex-col flex-wrap relative">
            <MonthView
              setChosenService={setDate}
              chosenService={chosenService}
              setHour={setHour}
              hour={chosenService.time.hour}
              setTimeToRead={setTimeToRead}
              isLoading={isLoading}
            />
            <DriveToClient
              setDriveToClient={setDriveToClient}
              driveToTheClient={chosenService.drive}
              chosenHour={chosenService.time.hour}
            />
            <button
              onClick={() => setChosenService(initialState)}
              className=" bg-gray-500 hover:bg-gray-400 text-white rounded-md p-3 mt-12"
            >
              Wyjście
            </button>
            {chosenService.name && chosenService.time.month !== "" && (
              <button
                onClick={finalizeOrder}
                className={`bg-green-600  hover:bg-green-500 duration-300 p-3 px-6 text-3xl md:text-5xl mt-3 rounded-xl w-max mx-auto font-bold ${
                  chosenService.name &&
                  chosenService.time.day !== "" &&
                  chosenService.drive !== ""
                    ? "fixed bottom-36 md:bottom-20 left-[50%] -translate-x-[50%] shadow-lg shadow-black z-[1205] block"
                    : " hidden"
                }`}
              >
                Rezerwuj online
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
