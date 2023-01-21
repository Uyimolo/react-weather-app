import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

import ForecastCard from "./ForecastCard";
import "../forecast.css";
import { daysArray } from "../arrays&objects/timeArray";

const Forecast = ({ data }) => {
  // get dynamic array of names of days 
  const forecastedWeek = [
    ...daysArray.slice(new Date().getDay() + 1, daysArray.length),
    ...daysArray.slice(0, new Date().getDay() + 1),
  ];

  const dataList = data.list.slice(0, 7);
  
  return (
    <div className="forecast">
      <h2>Weekly forcast for {data.city.name}, {data.city.country}</h2>
      <div className="forecast-cards">
        {dataList.map((item, index) => {
          return (
            <ForecastCard
              key={index}
              time={forecastedWeek[index]}
              icon={item.weather[0].icon}
              temperature={item.main.temp}
              feelsLike={item.main.feels_like}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
