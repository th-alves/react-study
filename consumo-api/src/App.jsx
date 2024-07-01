import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect((value) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${value}`)
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <input type="number" name="" id="" />
      <input type="submit" value="Enviar" />
    </div>
  );
}

export default App;
