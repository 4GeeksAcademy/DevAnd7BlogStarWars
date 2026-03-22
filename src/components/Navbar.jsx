import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ItemFavorite } from "./ItemFavorite.jsx";

export const Navbar = () => {

  const { store } = useGlobalReducer();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>

        <div className="ml-auto d-flex align-items-center">

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="badge text-bg-secondary"> {store.people?.length || 0}</span>
              </button>
              <ul className="dropdown-menu">
                <ItemFavorite name="Luke Skywalker" uid="1"/>
              </ul>
            </div>

        </div>
      </div>
    </nav>
  );
};