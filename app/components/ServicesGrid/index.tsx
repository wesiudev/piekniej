import { SquareOfBalls } from "../accents/SquareOfBalls";
import { GridElement } from "./GridElement";
export interface IGridElement {
  serviceName: string;
  serviceDesc: string;
  serviceImage: string;
}

export const ServicesGrid = ({ services }: { services: IGridElement[] }) => {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center pt-24 bg-rose-300 relative">
      <span className="font-pars text-5xl text-white pb-6 text-center">
        Oferowane usługi manicure
      </span>
      <div className="relative w-[90vw] lg:w-3/4 py-12">
        {/* accent */}
        <SquareOfBalls />
        {/* actual grid */}
        <div className="gap-3 columns-1 sm:columns-2 lg:columns-3">
          {services.map((item: IGridElement, i: number) => (
            <GridElement
              key={i}
              serviceImage={item.serviceImage}
              serviceDesc={item.serviceDesc}
              serviceName={item.serviceName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
