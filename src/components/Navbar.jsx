export const Navbar = () => {
  return (
    <nav className="navbar bg-dark bg-opacity-50">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <div className="d-flex">
            <img className="logotipo"
              src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png"
              alt="Logo de Star Wars"
            />
            <h1>
              Blog de Star Wars
            </h1>
          </div>
        </a>
      </div>
    </nav >
  );
};