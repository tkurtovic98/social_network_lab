const collectionName = "nft-collections";
const dao = require("../dao");

const createNft = async (nftDto) => {
  return dao.upsertOrFind(collectionName, nftDto);
};

const findOne = async (nftCollectionName) => {
  return dao.findOne(collectionName, nftCollectionName);
};

module.exports = { createNft, findOne };
