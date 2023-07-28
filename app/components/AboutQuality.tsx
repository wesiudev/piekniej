"use client";

import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "react-is-visible";

interface ICarousel {
  title: string;
  content: string;
}

export default function AboutQuality({ carousel }: { carousel: ICarousel[] }) {
  const [currentScroll, setCurrentScroll] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const [wasEndVisible, setWasEndVisible] = useState(false);

  const endOfCarousel = useRef<any>();
  const fixedTriggerer = useRef<any>();
  const fixedStopper = useRef<any>();

  const isEndVisible = useIsVisible(endOfCarousel);
  const shouldBeFixed = useIsVisible(fixedTriggerer);
  const isScrollingTop = useIsVisible(fixedStopper);
  const handleScroll = (event: any) => {
    const scrollAmount = event.deltaY;

    if (!isEndVisible && scrollAmount === 100) {
      setCurrentScroll(currentScroll - scrollAmount * 2);
    }
    if (isEndVisible) {
      setWasEndVisible(true);
    }
    if (!isEndVisible) {
      setWasEndVisible(false);
    }
    if (scrollAmount === -100) {
      setCurrentScroll(currentScroll - scrollAmount * 2);
    }
  };
  useEffect(() => {
    // Add or remove a class to the body element to disable scrolling
    if (shouldBeFixed && !wasEndVisible && !isScrollingTop) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up: Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [shouldBeFixed, wasEndVisible, isHovered, isScrollingTop]);
  console.log(carousel);
  return (
    <div className="relative">
      <div
        className="hidden lg:block absolute bottom-12 left-[50%] -translate-x-[50%] w-12 h-12 bg-red-500"
        ref={fixedTriggerer}
      ></div>
      <div
        onWheelCapture={handleScroll}
        onWheel={handleScroll}
        className={`hidden lg:block fixed left-0 top-0 w-screen h-screen   ${
          shouldBeFixed && !wasEndVisible && !isScrollingTop
            ? "bg-black z-[1000] bg-opacity-50"
            : " z-[-1000] bg-opacity-0"
        }`}
      ></div>
      <div className="z-[1001] font-sans bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 w-full h-max flex flex-col items-center justify-end py-12 ">
        <div className="w-[95vw] lg:w-3/4">
          <h1 className="text-white font-light sm:text-2xl lg:text-4xl p-3 rounded-md bg-rose-400 shadow-lg shadow-rose-700 text-center text-xl z-[1700]">
            Parę słów o paznokciach - manicure, który oferuję.
          </h1>
        </div>
      </div>
      <div
        onWheelCapture={handleScroll}
        onWheel={handleScroll}
        onMouseOverCapture={() => setIsHovered(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="z-[1001] h-max max-w-screen bg-gradient-to-b from-rose-300 via-rose-100 to-rose-300 relative pb-12 "
      >
        <div
          onWheelCapture={handleScroll}
          onWheel={handleScroll}
          className="w-[95vw] lg:w-3/4 mx-auto lg:overflow-hidden "
        >
          <div
            style={{
              transform: `translateX(${currentScroll}px)`,
              transitionDuration: "0.2s",
            }}
            className="flex flex-col lg:flex-row lg:space-x-12 items-center w-full relative"
          >
            <div
              ref={fixedStopper}
              className="hidden lg:block absolute w-12 h-full lg:-left-[10vw]"
            ></div>
            {carousel?.map((item, idx) => (
              <div key={idx} className="relative">
                <div
                  key={idx}
                  className="h-max min-w-[70vw] lg:bg-rose-300 bg-rose-400 relative text-white font-sans p-6 rounded-lg my-12 shadow-xl shadow-rose-700"
                >
                  <h1 className="text-xl sm:text-3xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <p className="w-full mt-6">{item.content}</p>
                </div>

                <div
                  ref={endOfCarousel}
                  className="hidden lg:block absolute w-12 h-full lg:-right-32"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
