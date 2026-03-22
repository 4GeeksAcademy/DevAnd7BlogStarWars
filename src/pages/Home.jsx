import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    // Si ya tenemos datos en el store, NO hacemos fetch
    if (store.people.length > 0) return;

    const fetchPeople = async () => {
      const res = await fetch("https://www.swapi.tech/api/people");
      const data = await res.json();

      const detailedPeople = await Promise.all(
        data.results.map(async (p) => {
          const res2 = await fetch(p.url);
          const data2 = await res2.json();

          return {
            ...p,
            birth_year: data2.result.properties.birth_year,
            gender: data2.result.properties.gender
          };
        })
      );

      dispatch({
        type: "set_people",
        payload: { people: detailedPeople }
      });
    };

    fetchPeople();
  }, [store.people]);

  return (
    <section className="text-center">
      <div className="d-flex flex-row flex-wrap gap-2">
        {store.people.map((people) => (
          <div
            className="card-body border border-white p-2"
            style={{ width: "220px" }}
            key={people.uid}
          >
            <h5 className="card-title">{people.name}</h5>
            <p className="card-text">Gender: {people.gender}</p>
            <p className="card-text">Age: {people.birth_year}</p>

            <Link
              to={`/single/${people.uid}`}
              className="btn btn-light btn-outline border"
            >
              More Details
            </Link>
          </div>
        ))}
      </div>

      <div>
        <p>Aqui va el Carrusell con las armas</p>
      </div>

      <div>
        <p>Aqui va el Carrusell con los planetas</p>
      </div>
    </section>
  );
};