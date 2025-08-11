import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cities() {
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [cities, setCities] = useState([]);

  function addCity() {
    if (country === "" || city === "" || temperature === "") {
      return;
    }

    const newCity = [
      {
        name: country,
        newCity: city,
        newTemp: temperature,
      },
    ];

    setCities((currentCities) => [...currentCities, ...newCity]);
  }

  return (
    <div className="container">
      <div className="container d-flex justify-content-center ms-auto">
        <button variant="primary" onClick={addCity}>
          Create new Country
        </button>
        <input
          onInput={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Add City"
        ></input>
        <input
          onInput={(e) => setCountry(e.currentTarget.value)}
          type="text"
          placeholder="Add Country"
        ></input>
        <input
          onInput={(e) => setTemperature(e.currentTarget.value)}
          type="number"
          placeholder="Add temperature"
        ></input>
      </div>

      <div className="d-flex flex-wrap">
        {cities.map((city, index) => (
          <div
            key={index}
            className="border p-3 m-2"
            style={{ minWidth: "200px" }}
          >
            <p className="h3">Country: {city.name}</p>
            <p className="h3">City: {city.newCity}</p>
            <p className="h3">Temperature: {city.newTemp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
