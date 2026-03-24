import { useState } from "react";

const Card = ({ nombre }) => {

  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(prev => !prev);
  };


  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      {/*<img src="..." className="card-img-top" alt="Personaje ${nombre}">*/}

      <div className="card-body bg-dark text-white">
        <h5 className="card-title text-warning">{nombre}</h5>

        <p className="card-text">
          Personaje de Star Wars
        </p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-dark border-light ">
            Ver más
          </button>

          <button
            className="btn btn-warning"
            onClick={toggleFavorito}>
            {favorito ? "❤️" : "🤍"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;