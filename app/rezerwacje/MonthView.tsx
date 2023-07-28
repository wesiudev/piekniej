import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pl"; // Import the Polish locale data

const MonthView = ({
  setChosenService,
  chosenService,
  setHour,
  hour,
  setTimeToRead,
  isLoading,
}: {
  setChosenService: Function;
  chosenService: any;
  setHour: Function;
  hour: string;
  setTimeToRead: Function;
  isLoading: boolean;
}) => {
  moment.locale("pl");
  // Get the start date (today + 2 days)
  const startDate = moment().add(2, "days");

  // Create an array of weeks and days to display
  const weeks = [];
  let currentDate = startDate.clone();

  while (weeks.length < 4) {
    const days = [];
    const monthName = currentDate.format("MMMM");
    const currentMonth = currentDate.month();
    const daysInMonth = currentDate.daysInMonth();

    for (let day = 0; day < 7; day++) {
      if (currentDate.month() === currentMonth) {
        days.push(currentDate.format("DD dddd"));
      } else {
        break; // Stop adding days to the current month and move to the next month
      }

      currentDate.add(1, "day");

      if (currentDate.date() > daysInMonth) {
        break;
      }
    }

    weeks.push({ monthName, days });
  }

  const [hoveredMonth, setHoveredMonth] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTimeChosen, setTimeChosen] = useState(false);
  const handleMouseEnter = (month: any) => {
    setHoveredMonth(month);
  };

  const handleMouseLeave = () => {
    setHoveredMonth(null);
  };

  const handleMouseMove = (e: any) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const capitalizeFirstLetter = (inputString: string) => {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {weeks.map((weekData, weekIndex) => (
        <div key={weekIndex}>
          <p
            className={`my-4 text-3xl font-bold ${weekIndex === 0 && "mt-12"}`}
          >
            {capitalizeFirstLetter(weekData.monthName)}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {weekData.days.map((day, dayIndex) => (
              <div key={dayIndex} className="flex flex-col relative">
                <button
                  onClick={() => {
                    setChosenService(day, weekData.monthName);
                    setTimeChosen(false);
                  }}
                  className={`${
                    (
                      chosenService.time.month + chosenService.time.day
                    ).toString() === (weekData.monthName + day).toString()
                      ? "border-white"
                      : "border-rose-400"
                  } bg-rose-400 p-3 rounded-md border-2  hover:border-white`}
                  onMouseEnter={() => handleMouseEnter(weekData.monthName)}
                  onMouseLeave={handleMouseLeave}
                >
                  {day}
                </button>

                <div
                  className={`${
                    (
                      chosenService.time.month + chosenService.time.day
                    ).toString() === (weekData.monthName + day).toString() &&
                    !isTimeChosen &&
                    !isLoading
                      ? "scale-100 translate-y-[-36px] z-[1690]"
                      : "scale-0 translate-y-48"
                  } bg-rose-500 duration-1000 shadow-md shadow-black rounded-lg p-6 fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex flex-col w-4/5 lg:w-max`}
                >
                  <h1 className="text-2xl">
                    {capitalizeFirstLetter(chosenService.time.month)} {day}
                  </h1>
                  <h1 className="text-2xl mt-3">Dostępne godziny:</h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-3 mt-3 mb-1">
                    <button
                      onClick={() => {
                        setHour("16:00");
                        setTimeChosen(true);
                      }}
                      className={`bg-rose-400 p-3 rounded-md border-2 hover:border-white ${
                        hour === "16:00" ? "border-white" : "border-transparent"
                      }`}
                    >
                      16:00
                    </button>
                    <button
                      onClick={() => {
                        setHour("17:00");
                        setTimeChosen(true);
                      }}
                      className={`bg-rose-400 p-3 rounded-md border-2 hover:border-white ${
                        hour === "17:00" ? "border-white" : "border-transparent"
                      }`}
                    >
                      17:00
                    </button>
                    <button
                      onClick={() => {
                        setHour("18:00");
                        setTimeChosen(true);
                      }}
                      className={`bg-rose-400 p-3 rounded-md border-2 hover:border-white ${
                        hour === "18:00" ? "border-white" : "border-transparent"
                      }`}
                    >
                      18:00
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonthView;
