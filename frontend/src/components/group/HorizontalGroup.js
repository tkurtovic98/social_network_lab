export const HorizontalGroup = ({ elements }) => {
  return (
    <div className="container">
      <div className="row">
        {elements.map((element, index) => {
          return (
            <div className="col-sm" key={index}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
