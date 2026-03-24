const Card = ({ nombre, uid }) => {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <h4>{nombre}</h4>
      <p>ID: {uid}</p>

      <button>Ver más</button>
    </div>
  );
};

export default Card;