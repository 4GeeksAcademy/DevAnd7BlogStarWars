import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Single = () => {
  const { tipo, uid } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  // endpointMap corregido: todos en plural
  const endpointMap = {
    people: "people",
    vehicles: "vehicles",
    planets: "planets"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = endpointMap[tipo];

        if (!endpoint) {
          setError("Tipo no válido");
          return;
        }

        const resp = await fetch(`https://www.swapi.tech/api/${endpoint}/${uid}`);

        if (!resp.ok) {
          setError(`Error al obtener ${tipo}: ${resp.status} ${resp.statusText}`);
          return;
        }

        const json = await resp.json();

        if (!json.result || !json.result.properties) {
          setError("Datos no encontrados");
          return;
        }

        setData(json.result.properties);
      } catch (err) {
        console.error(err);
        setError("Error al obtener datos de la API");
      }
    };

    fetchData();
  }, [tipo, uid]);

  // Solo para people: homeworld y films
  useEffect(() => {
    if (!data || tipo !== "people") return;

    if (data.homeworld) {
      fetch(data.homeworld)
        .then(res => res.json())
        .then(res => setPlanet(res.result.properties.name))
        .catch(() => setPlanet("Desconocido"));
    }

    if (data.films && data.films.length > 0) {
      Promise.all(data.films.map(url => fetch(url).then(res => res.json())))
        .then(filmsData => setFilms(filmsData.map(f => f.result.properties.title)))
        .catch(() => setFilms([]));
    }
  }, [data, tipo]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!data) return <p>Cargando...</p>;

  return (
    <section>
      <div className="card bg-dark text-white mb-3">
        <div className="row g-0">

          {/* IMAGEN */}
          <div className="col-md-4">
            <img
            
              className="img-fluid"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>

              {/* ================= PEOPLE ================= */}
              {tipo === "people" && (
                <>
                  <p><strong>Birth Year:</strong> {data.birth_year}</p>
                  <p><strong>Gender:</strong> {data.gender}</p>
                  <p><strong>Eye Color:</strong> {data.eye_color}</p>
                  <p><strong>Hair Color:</strong> {data.hair_color}</p>
                  <p><strong>Skin Color:</strong> {data.skin_color}</p>
                  <p><strong>Height:</strong> {data.height} cm</p>
                  <p><strong>Mass:</strong> {data.mass} kg</p>

                  <p><strong>Homeworld:</strong> {planet || "Cargando..."}</p>

                  <p><strong>Films:</strong></p>
                  <ul>
                    {films.length === 0 ? <li>Cargando...</li> : films.map((film, i) => <li key={i}>{film}</li>)}
                  </ul>
                </>
              )}

              {/* ================= VEHICLES ================= */}
              {tipo === "vehicles" && (
                <>
                  <p><strong>Model:</strong> {data.model}</p>
                  <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
                  <p><strong>Cost:</strong> {data.cost_in_credits}</p>
                  <p><strong>Length:</strong> {data.length}</p>
                  <p><strong>Crew:</strong> {data.crew}</p>
                  <p><strong>Passengers:</strong> {data.passengers}</p>
                </>
              )}

              {/* ================= PLANETS ================= */}
              {tipo === "planets" && (
                <>
                  <p><strong>Climate:</strong> {data.climate}</p>
                  <p><strong>Population:</strong> {data.population}</p>
                  <p><strong>Terrain:</strong> {data.terrain}</p>
                  <p><strong>Gravity:</strong> {data.gravity}</p>
                  <p><strong>Diameter:</strong> {data.diameter}</p>
                </>
              )}

            </div>
          </div>

        </div>

        <button className="btn btn-outline-light m-3" onClick={() => navigate(-1)}>
          Volver
        </button>

      </div>
    </section>
  );
};