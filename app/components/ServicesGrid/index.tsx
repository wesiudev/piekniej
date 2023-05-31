import Image from "next/image";
import { SquareOfBalls } from "../accents/SquareOfBalls";
import services from "./services.json";
import { GridElement, IGridElement } from "./GridElement";
export const ServicesGrid = () => {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center pt-24 bg-rose-300 relative">
      <span className="font-pars text-5xl text-white pb-6 text-center">
        Oferowane usługi manicure
      </span>
      <div className="relative w-[90vw] lg:w-3/4 py-12">
        {/* accent */}
        <SquareOfBalls />
        {/* actual grid */}
        <div className="gap-y-3 sm:gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.services.map((item: IGridElement, i: number) => (
            <GridElement
              key={i}
              serviceImages={item.serviceImages}
              serviceDesc={item.serviceDesc}
              serviceName={item.serviceName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
