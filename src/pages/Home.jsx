import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BotonFav } from "../components/BotonFav";

export const Home = () => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () =>
      fetch("https://www.swapi.tech/api/people");

    fetchPeople()
      .then(response => response.json())
      .then(resJson => {
        const respPeople = resJson.results;

        setPeople(respPeople);
      })
      }, [])


    return (
      <section className="text-center">
        <div className="d-flex flex-row flex-wrap gap-2">
          {people.map((p) => (
            <div
              className="card-body border border-white p-2"
              style={{ width: "220px" }}
              key={p.uid}
            >
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">Gender: {p.gender}</p>
              <p className="card-text">Age: {p.birth_year}</p>

              <Link
                to={`/single/${p.uid}`}
                className="btn btn-light btn-outline border"
              >
                More Details
              </Link>

              <BotonFav profileId={p.uid} />

            </div>
          ))}
        </div>
      </section>
    );
  };