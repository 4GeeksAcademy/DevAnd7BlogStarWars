import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="d-flex flex-column align-items-center">
			<div>
			<p>Aqui va el Carrusell con los personajes</p>
			</div>
			
			<div>
			<p>Aqui va el Carrusell con las armas</p>
			</div>

			<div>
			<p>Aqui va el Carrusell con los planetas</p>
			</div>
		</div>
	);
}; 