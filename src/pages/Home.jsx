import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [peoples, setPeople] = useState([]);

	useEffect(() => {
		const fetchPeople = async () => {
			const res = await fetch("https://www.swapi.tech/api/people");
			const data = await res.json();

			const detailedPeople = await Promise.all(
				data.results.map(async (p) => {
					const res2 = await fetch(p.url);
					const data2 = await res2.json();

					return {
						...p,
						birth_year: data2.result.properties.birth_year
					};
				})
			);

			setPeople(detailedPeople);
		};

		fetchPeople();
	}, []);


	console.log(peoples);

	return (
		<section className="text-center">
			<div className="d-flex flex-row flex-wrap gap-2">
					{
						peoples.map((people) => (
							<div className="card-body border border-white p-2" style={{width:"220px"}}
							key={people.uid}>
								<h5 className="card-title">{people.name}</h5>
								<p className="card-text">Gender: {people.gender}</p>
								<p className="card-text">Age: {people.birth_year}</p>
								<a href="#" className="btn btn-light btn-outline border">More Details</a>
							</div>
						))
					}
			</div>

		
			<div>
				<p>Aqui va el Carrusell con las armas</p>
			</div>

			<div>
				<p>Aqui va el Carrusell con los planetas</p>
			</div>
		</section>
	);
}; 