import { useEffect, useState } from "react";

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

      {personajes.map((personaje, index) => (
        <div key={index}>
          <h3>{personaje.name}</h3>
        </div>
      ))}

    </div>
  );
};