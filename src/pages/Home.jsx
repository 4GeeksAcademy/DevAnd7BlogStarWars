import { useEffect, useRef } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    // ================= PEOPLE =================
    const fetchPeople = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/people");
        if (!res.ok) throw new Error("Error API people");
        const data = await res.json();

        const detalles = await Promise.all(
          data.results.map(personaje =>
            fetch(personaje.url)
              .then(res => res.json())
              .then(data => ({
                uid: personaje.uid,
                name: personaje.name,
                ...data.result.properties
              }))
          )
        );

        dispatch({
          type: "set_peoples",
          payload: { peoples: detalles }
        });

      } catch (error) {
        console.log(error);
      }
    };

    // ================= VEHICLES =================
    const fetchVehicles = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        if (!res.ok) throw new Error("Error API vehicles");
        const data = await res.json();

        const detalles = await Promise.all(
          data.results.map(item =>
            fetch(item.url)
              .then(res => res.json())
              .then(data => ({
                uid: item.uid,
                name: item.name,
                ...data.result.properties
              }))
          )
        );

        dispatch({
          type: "set_vehicles",
          payload: { vehicles: detalles }
        });

      } catch (error) {
        console.log(error);
      }
    };

    // ================= PLANETS =================
    const fetchPlanets = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/planets");
        if (!res.ok) throw new Error("Error API planets");
        const data = await res.json();

        const detalles = await Promise.all(
          data.results.map(item =>
            fetch(item.url)
              .then(res => res.json())
              .then(data => ({
                uid: item.uid,
                name: item.name,
                ...data.result.properties
              }))
          )
        );

        dispatch({
          type: "set_planets",
          payload: { planets: detalles }
        });

      } catch (error) {
        console.log(error);
      }
    };

    // Ejecutar todo
    fetchPeople();
    fetchVehicles();
    fetchPlanets();

  }, [dispatch]);

  return (
    <div>
      <h1>Personajes Star Wars</h1>

      {/* PEOPLE */}
      <h2>People</h2>
      <div className="d-flex flex-wrap gap-2">
        {store.peoples.map((personaje) => (
          <Card
            key={personaje.uid}
            nombre={personaje.name}
            uid={personaje.uid}
            tipo="people"
            birth={personaje.birth_year}
            gender={personaje.gender}
          />
        ))}
      </div>

      {/* VEHICLES */}
      <h2>Vehicles</h2>
      <div className="d-flex flex-wrap gap-2">
        {store.vehicles.map((vehiculo) => (
          <Card
            key={vehiculo.uid}
            nombre={vehiculo.name}
            uid={vehiculo.uid}
            tipo="vehicle"
          />
        ))}
      </div>

      {/* PLANETS */}
      <h2>Planets</h2>
      <div className="d-flex flex-wrap gap-2">
        {store.planets.map((planeta) => (
          <Card
            key={planeta.uid}
            nombre={planeta.name}
            uid={planeta.uid}
            tipo="planet"
          />
        ))}
      </div>

    </div>
  );
};