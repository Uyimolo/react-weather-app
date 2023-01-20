// import React from 'react'
import { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
const useFetch = (location,useCase) => {
  // console.log(location);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (location) {
      fetch(
        `${WEATHER_API_URL}/${useCase}?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [location, useCase]);

  console.log(data);
  return data;
};


export default useFetch;
