// import React from 'react'
import { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
const useFetch = (location,useCase) => {
  // console.log(location);
  const [data, setData] = useState(null);

  useEffect(() => {
    //fetch new data only when location and usecase (either for forcast or current weather fetches) change
    if (location) {
      fetch(
        `${WEATHER_API_URL}/${useCase}?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [location, useCase]);
  return data;
};


export default useFetch;
