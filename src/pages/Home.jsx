import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export const Home = () => {

  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    if (store.peoples.length === 0) {
      fetch("https://www.swapi.tech/api/people")
        .then(res => {
          if (!res.ok) throw new Error("Error API");
          return res.json();
        })
        .then(data => {
          dispatch({
            type: "set_peoples",
            payload: { peoples: data.results }
          });
        })
        .catch(error => console.log(error));
    }
  }, []);

  return (
    <div>
      <h1>Personajes Star Wars</h1>

      <div className="d-flex justify-content-center flex-wrap gap-2">
        {store.peoples.map((personaje) => (
          <Card
            key={personaje.uid}
            nombre={personaje.name}
            uid={personaje.uid}
          />
        ))}
      </div>
    </div>
  );
};