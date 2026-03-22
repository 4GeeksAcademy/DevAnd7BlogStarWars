import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchPeople = async () => fetch("https://www.swapi.tech/api/people");

		fetchPeople().then(response => response.json()).then(respjson => {
			const respPeople =respjson.results;
			setPeople(respPeople);
		});
	}, [])

console.log(people);

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