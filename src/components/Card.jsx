import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const Card = ({ nombre, uid, birth, gender }) => {

  const { store, dispatch } = useGlobalReducer();

  const esFavorito = store.favorites.some(fav => fav.uid === uid);

  const toggleFavorito = () => {
    if (esFavorito) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: { uid, nombre }
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: { uid, nombre }
      });
    }
  };

  const navigate = useNavigate();

  const verMas = () => {
    navigate(`/single/${uid}`);
  };


  return (
    <div className="card m-2" style={{ width: "18rem" }}>

      <div className="card-body bg-dark text-white">

        <h5 className="card-title text-warning">{nombre}</h5>

        <p className="card-text">
          <strong>Birth Year:</strong> {birth} <br />
          <strong>Gender:</strong> {gender}
        </p>

        <div className="d-flex justify-content-between align-items-center">

          <button
            className="btn btn-outline-light"
            onClick={verMas}
          >
            Ver más
          </button>

          <button
            className="btn btn-warning"
            onClick={toggleFavorito}
          >
            {esFavorito ? "❤️" : "🤍"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default Card;