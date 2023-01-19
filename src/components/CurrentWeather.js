import "../currentWeather.css";
const CurrentWeather = ({data}) => {

  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getUTCDate() 
  const now = `${day}-${month}-${year}`
  return (
    <div className="current-weather">
      <div className="weather-icon-wrapper">
        <img src="images/01d.svg" alt="weather-icon" />
      </div>
      <h1 className="current-temperature">{data.main.temp}°c</h1>
      <h3 className="current-weather-condition">{data.weather[0].description}</h3>
      <div className="date">
        <p>Today</p>
        <div className="circle-seperator"></div>
        <p>{now}</p>
      </div>

      <div className="location">
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
