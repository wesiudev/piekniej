import Link from "next/link";
import { FaCheckSquare } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full bg-rose-300 flex justify-center flex-row">
      <div className="relative flex flex-col lg:flex-row w-[90vw] lg:w-[90vw] justify-between mx-auto pt-12 sm:py-12">
        <div className="w-max flex flex-col mx-auto h-max lg:pr-4">
          <span className="text-8xl lg:text-9xl font-pars text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-gray-500 to-red-400 overflow-visible w-max pb-5 pr-3">
            Piękniej
          </span>
          <span className="text-md lg:text-xl font-sans italic bg-clip-text bg-gradient-to-r from-red-600 via-gray-500 to-rose-400 text-transparent w-max -mt-8">
            Manicure by Anna Żebrowska
          </span>
        </div>
        <div className="fixed lg:relative bottom-0 left-0 lg:flex lg:flex-row lg:justify-start lg:items-end  gap-x-3 items-center w-full h-max lg:h-full pt-6 lg:pt-0 font-sans text-white flex-wrap">
          <Link href="/" className="py-2 px-3 bg-rose-400 text-2xl lg:text-lg">
            Home
          </Link>
          <Link href="/" className="py-2 px-3 bg-rose-400 text-2xl lg:text-lg">
            Kontakt
          </Link>
          <Link href="/" className="py-2 px-3 bg-rose-400 text-2xl lg:text-lg">
            Blog
          </Link>
        </div>
        <div className="hidden pt-6 lg:pt-0 sm:flex sm:justify-end sm:items-end h-full flex-col text-white w-max font-sans text-xl">
          <span className="py-2">Wolne terminy - </span>
          <button className="flex flex-row items-center w-max bg-rose-400 p-3 border-2 border-transparent hover:border-white">
            <FaCheckSquare className="mr-1" /> Zarezerwuj online
          </button>
        </div>
      </div>
    </div>
  );
};
