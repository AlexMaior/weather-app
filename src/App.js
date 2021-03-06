import React, { useEffect, useState, useRef } from "react";
import Input from "./components/Input";

function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("London");
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=7f081dfa72e4bdbf2710be42a5a231c3`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    };
    getWeather();
  }, [query]);

  const updateSearch = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    const enteredFood = inputRef.current.value;
    if (enteredFood.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <Input
          ref={inputRef}
          onChange={updateSearch}
          className={` ${"search-bar"} ${!isValid && "invalid"}`}
          type="text"
          placeholder="Enter a City"
          value={search}
        ></Input>
        <button type="submit">Submit</button>
      </form>
      <div>{weather.name}</div>
      <div>
        {weather.weather.map((wea) => (
          <div>{wea.description}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
