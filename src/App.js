import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import useFetch from "./hooks/useFetch";

function App() {
  const [location, setLocation] = useState(null);

  let data = useFetch(location, "weather");
  let Weatherforecast = useFetch(location, "forecast");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition);
  }, []);

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    setLocation({
      lat,
      lon,
    });
  };

  return (
    <div className="container">
      {data && <CurrentWeather data={data} />}
      {Weatherforecast && <Forecast data={Weatherforecast} />}
    </div>
  );
}

export default App;
