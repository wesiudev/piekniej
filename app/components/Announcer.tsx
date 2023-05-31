import { FaInfoCircle } from "react-icons/fa";

export const Announcer = () => {
  return (
    <div className="bg-gradient-to-b bg-rose-300 w-full h-max flex justify-center pt-20 pb-12 z-[999]">
      <div className="w-full h-max">
        <div className="flex flex-col bg-yellow-900 py-12 h-max text-white shadow-md shadow-gray-700">
          <div className="relative text-3xl sm:text-4xl font-sans w-3/4 mx-auto flex flex-row">
            <FaInfoCircle className="-left-11 top-[2px] hidden lg:absolute" />
            Dlatego warto zarezerwować czas dla siebie
          </div>
          <div className="text-xl sm:text-2xl font-sans italic h-full items-center flex mt-6 w-[90vw] sm:w-3/4 justify-center sm:justify-start mx-auto">
            <span className="font-light w-4/5 sm:w-3/4">
              Poświęcenie czasu na wykonanie manicure daje szansę na relaks,
              odprężenie i skupienie się na sobie, tworząc uspokajające i
              odmładzające doświadczenie oraz wprowadza powiew świeżości do
              Twojego życia.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
