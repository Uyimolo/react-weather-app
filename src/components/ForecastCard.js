const ForecastCard = ({ time, temperature, feelsLike, icon, desc }) => {
  return (
    <div className="forecast-card">
      <h3>{time}</h3>
      <img src={`images/${icon}.svg`} alt="weather icon" />
      <p className="desc">{desc}</p>
      <div className="temp">
        <p className="real-temp">{temperature}°c</p>
        <p className="feels-like">{feelsLike}°c</p>
      </div>
    </div>
  );
};

export default ForecastCard;
