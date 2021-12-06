import React from "react";

const NftView = (model) => {
  return (
    <div>
      <h2>Floor: {model.model.floor}</h2>
      <h2>Market Cap: {model.model.mc}</h2>
      <h2>Owners: {model.model.owners}</h2>
      <h2>Name: {model.model.name}</h2>
    </div>
  );
};

export default NftView;
