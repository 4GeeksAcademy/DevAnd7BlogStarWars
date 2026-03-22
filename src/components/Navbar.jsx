import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>

				<div className="ml-auto d-flex align-items-center">
					<Link to="/demo">
						<button className="btn btn-primary">Favoritos</button>
					</Link>

					<div className="p-1 text-white">
						{store.people?.length || 0}
					</div>
				</div>
			</div>
		</nav>
	);
};