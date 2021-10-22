import React, { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");

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

  return (
    <div className="App">
      <div className="recipes">{weather.dt}</div>
    </div>
  );
}

export default App;
