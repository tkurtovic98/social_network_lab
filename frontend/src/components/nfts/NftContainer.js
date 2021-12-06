import React, { useState } from "react";
import NftView from "./NftView";
import { makeNft } from "../../models/nft/NftDataModel";
import { fetchNftData } from "../../api/service/NftService";

export const NftContainer = () => {
  const [nftData, setNftData] = useState(null);

  const handleNftClick = async () => {
    if (!nftData) {
      let result = await fetchNftData();
      setNftData(makeNft(result));
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={async () => {
          handleNftClick();
        }}
      >
        Nfts
      </button>
      {nftData && <NftView model={nftData} />}
    </div>
  );
};
