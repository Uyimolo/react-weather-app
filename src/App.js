import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import useFetch from "./hooks/useFetch";

function App() {
  const [location, setLocation] = useState(null);

  let data = useFetch(location);

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

  return <div className="container">{data && <CurrentWeather data={data} />}</div>;
}

export default App;
