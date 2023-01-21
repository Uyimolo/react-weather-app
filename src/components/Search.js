// import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { OPTIONS, GEO_API_URL } from "../api";
const Search = ({ handleSearch }) => {
  //   const [searchValue, setSearchValue] = useState(null);
//i'm using reacts AsyncPaginate search component to search for cities using the GeoDb API and getting the position (latitude and longitude) which ill send to useFetch custom hook to get new city data
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=500000&namePrefix=${inputValue}`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: [city.latitude, city.longitude],
              label: `${city.city}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    // setSearchValue(searchData);
    console.log(searchData);
    handleSearch(searchData);
  };

  return (
    <AsyncPaginate
      className="search"
      placeholder="Search for city"
      debounceTimeout={600}
      //   value={searchValue}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
