import React from "react";
import { faModule } from "../../module/FaModule";

const NftView = (model) => {
  return (
    <div className="container-fluid" style={{ paddingTop: "32px" }}>
      <h3 title="Collection name" style={{ marginBottom: "32px" }}>
        {faModule.faIcons.nftName}
        {model.model.name}
        {faModule.faIcons.nftName}
      </h3>
      <div className="row">
        <h3 className="col" title="Minimum price">
          {faModule.faIcons.floorPrice}
          {model.model.floor} {faModule.faIcons.eth}
        </h3>
        <h3 className="col" title="Market Capitalization">
          {faModule.faIcons.maketCap} {parseInt(model.model.mc)}{" "}
          {faModule.faIcons.eth}
        </h3>
        <h3 className="col" title="Number of owners">
          {faModule.faIcons.people}
          {model.model.owners}
        </h3>
      </div>
    </div>
  );
};

export default NftView;
