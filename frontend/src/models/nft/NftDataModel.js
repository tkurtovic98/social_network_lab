const nftDataModel = (floor, mc, owners, name) => {
  return {
    floor: floor,
    mc: mc,
    owners: owners,
    name: name,
  };
};

export const makeNft = (apiModel) => {
  return nftDataModel(
    apiModel.floor,
    apiModel.mc,
    apiModel.owners,
    apiModel.name
  );
};
