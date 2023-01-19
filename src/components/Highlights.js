import HighlightCard from "./HighlightCard"
const Highlights = ({data}) => {
    return (
        <div className="highlights">
            <h2>Highlights of the day</h2>
            <div className="highlights-wrapper">
            <HighlightCard label='Wind' value={`${data.wind.speed} mph`}/>
            <HighlightCard label='Humidity' value={`${data.main.humidity}%`}/>
            <HighlightCard label='Pressure' value={`${data.main.pressure} mb`}/>
            <HighlightCard label='Visibility' value={`${(data.visibility / 1000)} miles`}/>
            </div>
        </div>
    )
}

export default Highlights