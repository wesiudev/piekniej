import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pl"; // Import the Polish locale data

const MonthView = ({
  setChosenService,
  chosenService,
  setHour,
  hour,
}: {
  setChosenService: Function;
  chosenService: any;
  setHour: Function;
  hour: string;
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
          <p className="my-2 text-3xl font-bold">
            {capitalizeFirstLetter(weekData.monthName)}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {weekData.days.map((day, dayIndex) => (
              <div key={dayIndex} className="flex flex-col">
                <button
                  onClick={() => setChosenService(day, weekData.monthName)}
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
                {(
                  chosenService.time.month + chosenService.time.day
                ).toString() === (weekData.monthName + day).toString() && (
                  <div className="flex flex-col">
                    <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-3 mt-3 mb-1">
                      <button
                        onClick={() => setHour("16:00")}
                        className={`bg-rose-400 p-3 rounded-md border-2 hover:border-white ${
                          hour === "16:00"
                            ? "border-white"
                            : "border-transparent"
                        }`}
                      >
                        16:00
                      </button>
                      <button
                        onClick={() => setHour("17:00")}
                        className={`bg-rose-400 p-3 rounded-md border-2 hover:border-white ${
                          hour === "17:00"
                            ? "border-white"
                            : "border-transparent"
                        }`}
                      >
                        17:00
                      </button>
                      <button
                        onClick={() => setHour("18:00")}
                        className={`bg-rose-400 p-3 rounded-md border-2 hover:border-white ${
                          hour === "18:00"
                            ? "border-white"
                            : "border-transparent"
                        }`}
                      >
                        18:00
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {hoveredMonth && (
        <div
          className="text-black hidden sm:block"
          style={{
            position: "fixed",
            left: tooltipPosition.x - 50,
            top: tooltipPosition.y - 50,
            background: "#fff",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 9999,
          }}
        >
          <p className="px-2 italic">{capitalizeFirstLetter(hoveredMonth)}</p>
        </div>
      )}
    </div>
  );
};

export default MonthView;
