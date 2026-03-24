export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <div className="d-flex">
            <img
              src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png"
              alt="Star Wars"
              style={{
                height: "40px",
                width: "100px",
                objectFit: "cover"
              }}
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