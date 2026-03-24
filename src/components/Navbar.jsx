import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar bg-dark bg-opacity-50">
      <div className="container-fluid">

        {/* LOGO + TITULO */}
        <a className="navbar-brand text-white" href="#">
          <div className="d-flex align-items-center gap-3">
            <img
              className="logotipo"
              src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png"
              alt="Logo de Star Wars"
            />
            <h1 className="h4 m-0">
              Blog de Star Wars
            </h1>
          </div>
        </a>

        {/* DROPDOWN FAVORITOS */}
        <div className="dropdown">

          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Favoritos ({store.favorites.length})
          </button>

          <ul className="dropdown-menu dropdown-menu-end">

            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">
                No hay favoritos
              </li>
            ) : (
              store.favorites.map(fav => (
                <li key={fav.uid} className="d-flex justify-content-between align-items-center px-3">

                  <span className="dropdown-item-text">
                    {fav.nombre}
                  </span>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FAVORITE",
                        payload: fav
                      })
                    }
                  >
                    X
                  </button>

                </li>
              ))
            )}

          </ul>

        </div>

      </div>
    </nav>
  );
};