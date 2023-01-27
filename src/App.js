import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import PlaceHolder from './components/PlaceHolder'
import Forecast from "./components/Forecast";
import useFetch from "./hooks/useFetch";

function App() {
  const [location, setLocation] = useState(null);
  const [isData, setIsData] = useState(false)
  let data = useFetch(location, "weather");
  let weatherForecast = useFetch(location, "forecast");



  useEffect(() => {
    //on first load, get current position of client
    navigator.geolocation.getCurrentPosition(showPosition);
  }, []);

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //set location to client position
    setLocation({
      lat,
      lon,
    });
  };

  const handleOnSearchChange = (searchData) => {
    //get lat and lon from return value from search input
    const [lat, lon] = searchData.value;
    //set location to new searched citys position
    setLocation({
      lat,
      lon,
    });
  };

  
  useEffect(() => {
    setTimeout(() => {
      if(!data) {
        setIsData(true)
      }
      else{
        setIsData(false)
      }
    }, 3000);
    
  }, [data])

  return (
    <div className="container">
      {data && (
        <CurrentWeather data={data} handleSearch={handleOnSearchChange} />
      )}
      {weatherForecast && <Forecast data={weatherForecast} />}
      {isData && <PlaceHolder />}
    </div>
    
  );
}

export default App;
