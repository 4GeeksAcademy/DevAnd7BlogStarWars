import { func } from "prop-types";

export const BotonFav = ({profileId}) => {
function addFavorite() {
    console.log("Agregado a favoritos: " + profileId);
    }

  return (
    <button className="btn btn-light btn-outline border ms-2 " onClick={addFavorite}>
      <i className="fa-regular fa-heart"></i>
    </button>
  );
};