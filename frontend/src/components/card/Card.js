export const Card = ({ elements }) => {
  return (
    <div
      className="card"
      style={{ width: "64rem", margin: "auto", borderRadius: "16px" }}
    >
      <img
        className="card-img-top align-self-center"
        style={{ maxWidth: "16rem" }}
        src="/Doodles-logo-1.jpg"
      />
      <div className="card-body">
        <h5 className="card-title" style={{ marginBottom: "32px" }}>
          Nft City
        </h5>
        <p className="card-text">
          {elements.map((element, index) => {
            return <div key={index}>{element}</div>;
          })}
        </p>
      </div>
    </div>
  );
};
