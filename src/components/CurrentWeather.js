import { daysArray } from "../arrays&objects/timeArray";
import { monthArray } from "../arrays&objects/timeArray";
import "../currentWeather.css";
import Highlights from "./Highlights";
import Search from "./Search";

const CurrentWeather = ({ data, handleSearch }) => {
  //my feeble attempt at formatting date
  const year = new Date().getFullYear();
  const month =monthArray[new Date().getMonth()] ;
  const day = new Date().getDate();
  const now = `${day}-${month}-${year}`;
//get present day 
  const today = daysArray[new Date().getDay()];
  console.log(data);
  return (
    <div className="current-weather">
      <Search handleSearch={handleSearch}/>
      <div className="weather-icon-wrapper">
        <img src={`images/${data.weather[0].icon}.svg`} alt="weather-icon" />
      </div>
      <h1 className="current-temperature">{data.main.temp}°c</h1>
      {/* <p>but it feels like {data.main.feels_like}°c</p> */}
      <h3 className="current-weather-condition">
        {data.weather[0].description}
      </h3>
      <div className="date">
        <p>Today</p>
        <div className="circle-seperator"></div>
        <p>{`${today}, ${now}`}</p>
      </div>
      <div className="location">
        <p>{data.name}, {data.sys.country}</p>
      </div>

      <Highlights data={data} />
    </div>
  );
};

export default CurrentWeather;
