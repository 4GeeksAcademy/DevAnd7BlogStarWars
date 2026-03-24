import { useEffect, useState } from "react";

import Card from "../components/Card";

export const Home = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setPersonajes(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Personajes Star Wars</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {personajes.map((personaje) => (
          <Card
          key={personaje.uid}
          nombre={personaje.name} />
          ))}
      </div>

    </div>
  );
};