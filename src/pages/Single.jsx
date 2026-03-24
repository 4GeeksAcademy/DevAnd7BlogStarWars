import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {

  const { uid } = useParams();
  const [people, setPeople] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
      const data = await resp.json();
      setPeople(data.result.properties);
    };

    fetchPeople();
  }, [uid]);

  useEffect(() => {
    if (!people) return;

    // Homeworld
    fetch(people.homeworld)
      .then(res => res.json())
      .then(data => setPlanet(data.result.properties.name));

    // Films
    Promise.all(
      people.films.map(url =>
        fetch(url).then(res => res.json())
      )
    ).then(filmsData => {
      setFilms(filmsData.map(f => f.result.properties.title));
    });

  }, [people]);

  if (!people) return <p>Cargando...</p>;

  return (
    <section>
      <div className="card bg-dark text-white mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} 
              alt={people.name} 
              className="img-fluid"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{people.name}</h2>

              <p><strong>Birth Year:</strong> {people.birth_year}</p>
              <p><strong>Gender:</strong> {people.gender}</p>
              <p><strong>Eye Color:</strong> {people.eye_color}</p>
              <p><strong>Hair Color:</strong> {people.hair_color}</p>
              <p><strong>Skin Color:</strong> {people.skin_color}</p>
              <p><strong>Height:</strong> {people.height} cm</p>
              <p><strong>Mass:</strong> {people.mass} kg</p>

              <p><strong>Homeworld:</strong> {planet || "Cargando..."}</p>

              <p><strong>Films:</strong></p>
              <ul>
                {films.length === 0 
                  ? <li>Cargando...</li>
                  : films.map((film, i) => <li key={i}>{film}</li>)
                }
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};