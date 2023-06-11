import Image from "next/image";
import img from "@/public/1.jpg";
import img2 from "@/public/2.jpg";
import img3 from "@/public/3.jpg";
import img4 from "@/public/4.jpg";
import img5 from "@/public/5.jpg";
import { FaArrowCircleRight, FaArrowRight, FaImages } from "react-icons/fa";
import Link from "next/link";

export const GalleryGrid = () => {
  return (
    <div className="bg-gradient-to-b from-rose-300 via-rose-200 to-rose-300 w-full">
      <div className="w-full h-max flex justify-center py-12 ">
        <div className="h-max w-[90vw] flex flex-col justify-center">
          <span className="flex flex-row items-center text-3xl font-sans text-gray-50 sm:py-3 drop-shadow-lg shadow-black py-3">
            <FaImages className="mr-2" />
            Galeria Manicure
          </span>
          <div className="w-full flex flex-col lg:flex-row gap-3 pt-6 ">
            <div className="min-w-[50%]">
              <Image
                priority
                src={img}
                alt=""
                height={1024}
                width={1024}
                className="rounded-lg h-full"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-none gap-3 w-full">
              <Image
                priority
                src={img2}
                alt=""
                height={1024}
                width={1024}
                className="w-full h-full rounded-lg "
              />

              <Image
                priority
                src={img3}
                alt=""
                height={1024}
                width={1024}
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-none gap-3 w-full">
              <Image
                priority
                src={img4}
                alt=""
                height={1024}
                width={1024}
                className="w-full h-full rounded-lg"
              />

              <Image
                priority
                src={img5}
                alt=""
                height={1024}
                width={1024}
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pt-12 sm:pt-6">
        <Link
          href="/"
          className="w-max p-3 bg-rose-500 font-sans text-xl text-white flex flex-row items-center group border-2 border-transparent hover:border-white rounded-lg"
        >
          Zobacz więcej
          <FaArrowRight className="ml-2 group-hover:translate-x-[2px] group-hover:scale-110 duration-150" />
        </Link>
      </div>
    </div>
  );
};
