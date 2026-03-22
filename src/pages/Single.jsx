import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {

  const { uidPeople } = useParams();
  const [people, setPeople] = useState(null);

  console.log(uidPeople);

  useEffect(() => {
    const fetchPeople = async () => fetch(`https://www.swapi.tech/api/people/${uidPeople}`);
    fetchPeople().then(resp => resp.json()).then(respJson => {
      setPeople(respJson);
    });
  },[])
    
    if (!people) {
      return <></>;
    }
    
    return (
      <section>
        <h1>Personajes</h1>
      </section>
    )
  }