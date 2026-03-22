import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Single = () => {

  const { uidPeople } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const resp = await fetch(`https://www.swapi.tech/api/people/${uidPeople}`);
      const respJson = await resp.json();
      setPeople(respJson.result.properties);
    };

    fetchPeople();
  }, []);

  if (!people) {
    return <></>;
  }

  return (
    <section>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${uidPeople}.jpg`} alt={people.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{people.name}</h5>
              <p>Age: {people.birth_year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};