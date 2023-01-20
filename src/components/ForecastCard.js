const ForecastCard = ({ time, temperature, feelsLike, icon }) => {
  return (
    <div className="forecast-card">
      <h3>{time}</h3>
      <img src={`images/${icon}.svg`} alt="weather icon" />
      <div className="temp">
        <p className="real-temp">{temperature}</p>
        <p className="feels-like">{feelsLike}</p>
      </div>
    </div>
  );
};

export default ForecastCard;
