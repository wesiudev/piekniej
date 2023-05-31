import Image, { ImageProps } from "next/image";

type ServiceImage = {
  src: string;
};

export interface IGridElement {
  serviceName: string;
  serviceDesc: string;
  serviceImages: ServiceImage[];
}

export const GridElement = ({
  serviceName,
  serviceDesc,
  serviceImages,
}: IGridElement) => {
  return (
    <div className="bg-white aspect-square rounded-lg flex flex-col justify-center items-center w-full">
      <div className="w-[90%] h-[90%]  bg-red-500 rounded-md mt-3"></div>
      <span className="w-[90%] font-sans py-3">{serviceName}</span>
    </div>
  );
};
