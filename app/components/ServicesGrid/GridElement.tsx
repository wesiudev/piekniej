import Image from "next/image";
import { IService } from "./";

export default function GridElement({
  serviceName,
  serviceDesc,
  serviceImage,
}: IService) {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-center items-center w-full pb-3 mb-3">
      <div className="font-sans pb-3 pt-5 mx-auto w-max text-2xl">
        <span>{serviceName}</span>
        <div className="h-1 w-12 bg-rose-300 mx-auto mt-3 rounded-lg"></div>
      </div>
      <div className="w-[90%] h-max rounded-md mt-3 relative">
        <Image
          priority
          src={serviceImage}
          alt=""
          width={512}
          height={512}
          className="rounded-md"
        />
        <div className="bg-rose-400 rounded-md p-3 bg-opacity-80 text-white font-sans italic mt-3">
          {serviceDesc}
        </div>
      </div>
    </div>
  );
}
