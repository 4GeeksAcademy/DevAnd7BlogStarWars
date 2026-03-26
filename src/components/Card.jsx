import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const Card = ({
  nombre,
  uid,
  tipo,
  birth,
  gender,
  model,
  vehicle_class,
  manufacturer,
  cost_in_credits,
  length,
  crew,
  passengers,
  climate,
  terrain,
  population,
  gravity,
  diameter
}) => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const esFavorito = store.favorites.some(
    fav => fav.uid === uid && fav.tipo === tipo
  );

  const toggleFavorito = () => {
    if (esFavorito) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: { uid, tipo }
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: { uid, nombre, tipo }
      });
    }
  };

  const tipoMap = {
    people: "characters",
    vehicle: "vehicles",
    planet: "planets"
  };

  const verMas = () => {
    navigate(`/single/${tipoMap[tipo]}/${uid}`);
  };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body bg-dark text-white">
        <img className="card-img-top" src={`https://raw.githubusercontent.com/dsmora/star-wars-guide/refs/heads/master/build/assets/img/${tipo}/${uid}.jpg`} alt={nombre} />
        <h5 className="card-title text-warning">{nombre}</h5>

        {/* PEOPLE */}
        {tipo === "characters" && (
          <p className="card-text">
            <strong>Birth Year:</strong> {birth} <br />
            <strong>Gender:</strong> {gender}
          </p>
        )}

        {/* VEHICLES */}
        {tipo === "vehicle" && (
          <p className="card-text">
            <strong>Model:</strong> {model} <br />
            <strong>Manufacturer:</strong> {manufacturer} <br />
          </p>
        )}

        {/* PLANETS */}
        {tipo === "planet" && (
          <p className="card-text">
            <strong>Climate:</strong> {climate} <br />
            <strong>Population:</strong> {population} <br />
          </p>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-outline-light" onClick={verMas}>
            Ver más
          </button>

          <button className="btn btn-warning" onClick={toggleFavorito}>
            {esFavorito ? "❤️" : "🤍"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;